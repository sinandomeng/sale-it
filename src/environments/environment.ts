// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBqm7fLf7lYKkEBZ22dDV0SmYV1EzH632I',
    authDomain: 'sale-it-df27f.firebaseapp.com',
    databaseURL: 'https://sale-it-df27f.firebaseio.com',
    projectId: 'sale-it-df27f',
    storageBucket: 'sale-it-df27f.appspot.com',
    messagingSenderId: '281109424181'
  },
  API_URL: 'http://localhost:8080'
}

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error' // Included with Angular CLI.
