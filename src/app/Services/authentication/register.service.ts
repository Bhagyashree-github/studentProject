import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  constructor(private http : HttpClient) { }

 addRegistration ( data: any): Observable <any> {
    return this.http.post('http://localhost:9095/users',data);
 }

 getRegistration(): Observable<any> {
  return this.http.get('http://localhost:9095/users')
 }

 updateRegistration(data:any,id:any): Observable <any>{
  return this.http.patch(`http://localhost:9095/users/${id}`,{
    "passw":data,
    "cpassw":data
  })
 }

}
