import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
   handleError(error) {
       console.log("logging from custom error handler ",error);
       // send the error to the server
   }
}