import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import * as JWTDecoder from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate() {
    const self = this
    const authDto = localStorage.getItem('authDto')
    const currentTime = Date.now() / 1000

    if (!!authDto) {
      const userToken = JWTDecoder(JSON.parse(authDto).token)

      if (userToken['exp'] > currentTime) {
        return true
      }

      self.router.navigate(['/login'])
      return false
    } else {
      self.router.navigate(['/login'])
      return false
    }
  }

}
