import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class UtilService {
    // moved out of data service    
    public handleError (error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    public genGUID(): string{
        let d = new Date().getTime();
        
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = (d + Math.random() * 16) % 16 | 0;
            return (c=='x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
}