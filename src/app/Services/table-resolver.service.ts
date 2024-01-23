import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { StudentService } from './student.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableResolverService implements Resolve<any>{

  constructor(private _stddetails: StudentService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
    alert("resolver is called!")
    return this._stddetails.getStudent();
  }
}
