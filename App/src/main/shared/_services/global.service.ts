import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class GlobalService {
        
    private errorMessage: string = "";

    constructor(private http: Http) {
      
    }

    /**
    * Returns an Observable for the HTTP GET request for the JSON resource.
    * @return {string[]} The Observable for the HTTP request.
    */
    getJson(url:string): Observable<Object> {
        return this.http.get(url)
                    .map((res: Response) => res.json());
    }

}