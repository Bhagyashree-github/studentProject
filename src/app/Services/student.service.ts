import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class StudentService{
    constructor(private servicedata : HttpClient){  }

    addStudent( data: any): Observable <any> {
        return this.servicedata.post('http://localhost:3000/students',data);
    }

    getStudent(): Observable <any> {
        return this.servicedata.get('http://localhost:3000/students');
    }

    getOneStudent(sid:number): Observable <any> {
        return this.servicedata.get(`http://localhost:3000/students/${sid}`);
    }

    deleteStudent(id:number): Observable <any> {
        return  this.servicedata.delete(`http://localhost:3000/students/${id}`);
    }
    updateStudent(id: number, data: any): Observable <any> {
        return this.servicedata.put(`http://localhost:3000/students/${id}`,data);
    }
}

