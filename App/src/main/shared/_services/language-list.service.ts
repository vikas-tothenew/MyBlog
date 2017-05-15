import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class LanguageListService {
        
    private isoLangsDetails:Object;
    private errorMessage: string = "";
    private loadedLangDetails:boolean = false;

    constructor(private http: Http) {
      
    }

    /**
    * Returns an Observable for the HTTP GET request for the JSON resource.
    * @return {string[]} The Observable for the HTTP request.
    */
    get(): Observable<Object> {
        return this.http.get('isoLangs.json')
                    .map((res: Response) => res.json());
    }

   
    loadLanguageDetails():void{
        this.get()
        .subscribe(
            detail => this.isoLangsDetails = detail,
            error => this.errorMessage = <any>error,
            () => this.loadedLangDetails = true
        );
    }
  
    languageDetailsStatus():string{
        if(this.errorMessage != ""){
            return this.errorMessage;    
        }
        if(this.loadedLangDetails){
            return "loaded";
        }else{
            return "loading";    
        }
    }
  
    getLanguageDetailsByCode(code:string):any{
        let status = this.languageDetailsStatus();
        if(status!="loaded"){
            return status;    
        }
        return this.isoLangsDetails[code];
    }
}

