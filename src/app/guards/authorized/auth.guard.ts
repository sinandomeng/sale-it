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
    let authDto = localStorage.getItem('authDto')
    let currentTime = Date.now() / 1000

    if (!!authDto) {
      let userToken = JWTDecoder(JSON.parse(authDto).token)

      if (userToken['exp'] > currentTime) {
        return true
      }

      this.router.navigate(['/login'])
      return false
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }

}
