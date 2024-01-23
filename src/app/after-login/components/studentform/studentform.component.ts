import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css'],
  // providers:[StudentService] we dont need it as we are using providen root
  
})

export class StudentformComponent implements OnInit {
  studentForm: FormGroup;
  alldata: any
  loading:boolean = false;
  errorMessage:any;
  ageofst:any =0;
  imgsrc:any;
  docpdf:any;
  newdata:any
  count:number =0;
  address:string[] =[];
  educationarray: string[] =[]
  updatingimg:any
  profilename:string=''
  docname:string=''
 

  constructor(
    public data: FormBuilder, 
    private _stddetails: StudentService , 
    private _Activatedroute: ActivatedRoute,
    private toastr: ToastrService
   ) {
    
    this.studentForm = this.data.group({
      id: [''],
      name: ['', [Validators.required ,Validators.pattern('^[A-Za-z]*( [A-Za-z]*)*$')]],
      //, Validators.maxLength(40) ,Validators.pattern('^[A-Za-z\s]+$')
      email: ['', [Validators.required, Validators.email]],
      mobile: ['',[Validators.required,Validators.pattern("^[6-9]\d{9}$"),Validators.maxLength(10)]],
      gender: ['',[Validators.required]],
      dob: ['',[Validators.required]],
      package: ['',[Validators.required]],
      position:['',[Validators.required]],
      profile: [''],
      pdfdoc: [''],
      education:new FormArray([]),
      address:['',[Validators.required]],
      checkval: ['',[Validators.required]]
    })
  }
  
get name() {
   return this.studentForm.get('name');
} 
get emailid() {
   return this.studentForm.get('email');
} 
  get mobilenumber() {
    return this.studentForm.get('mobile');
 } 
  get gender() {
    return this.studentForm.get('gender');
 } 
 get dateofbirth() {
  return this.studentForm.get('dob');
} 
get package() {
  return this.studentForm.get('package');
} 
get position() {
  return this.studentForm.get('position');
} 
get educationdetails() {
  return this.studentForm.get('education');
} 
get addressdetails() {
  return this.studentForm.get('address');
} 
// to create education formarray 
  get educationControl(){
    return <FormArray>this.studentForm.get('education');
  }

  education(): FormArray {
    return this.studentForm.get('education') as FormArray;
  }

  newEducation(): FormGroup {
    return this.data.group({
      education: ''  
    })
  }

  takeEducationval(){
    let addval = (<HTMLInputElement>document.getElementById("educationval")).value;
    this.educationarray.push(addval)   
  }

  addEducation() {  
    const control = new FormControl(null,Validators.required);
    let edc =  this.studentForm.get("education") as FormArray
    edc.push(control);
    let len = edc.length;
    for(let j=0;j<len;j++){
        if (edc.at(j)) {
            edc.at(j).patchValue([this.educationarray[j]]);
              let educationval = document.getElementById('educationval')
              if(educationval){
                (<HTMLInputElement>educationval).value = '';
              }
            }
    }  
  }

  removeEducationAt (idx:number){
    this.address.splice(idx,1);
    (<FormArray>this.studentForm.get('education')).removeAt(idx)
  }
  
  ngOnInit(): void {
    this.showStudentDetails();
     this._Activatedroute.paramMap.subscribe((params)=>{
      this.newdata = params.get('id') 
      if(this.newdata){
        this.updateData(this.newdata)
      }    
    })    
  }
 
  calculateAge(e:any){
   let birthday = Number(new Date(e.target.value))
    let val = Math.abs(Date.now() - birthday)
    let age = (val/(1000*60*60*24)/365)
    if(age<1){
      this.ageofst = Math.floor(age*10)/10;
    }
    else{
      this.ageofst = Math.floor(age);
    }
  }

  async uploadimage(event:any){
    const file = event.target.files[0];
    this.profilename = file.name;
     const base64img = await this.convertToBase64(file)
    this.imgsrc= base64img;
    this.updatingimg= base64img; 
  }

  convertToBase64(file:any){
    return new Promise((resolve,reject)=>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = ()=>{
        resolve(fileReader.result)
      };
      fileReader.onerror = (error)=>{
        reject(error)
      }
    })
  }

 async uploaddoc(event:any){
    const file = event.target.files[0];
    this.docpdf = await this.convertToBase64(file)
  }

  onSubmit(){
    this.loading= true;
    this.errorMessage='';
   this.studentForm.value.profile= this.imgsrc;
   this.studentForm.value.pdfdoc = this.docpdf;

    if(this.studentForm.value.id == ''){ 
    this._stddetails.addStudent(this.studentForm.value).subscribe({
      next:()=>{
        this.toastr.success( 'Employee Details added successfully !');
        this.loading= false; 
        this.showStudentDetails()
      },
      error: (err)=>{
        this.toastr.error("Employee Details Add error")
        this.errorMessage = err;
        this.loading= false;
      }
    })
    }
    else{
      this.studentForm.value.profile = this.updatingimg;
      this.studentForm.value.pdfdoc= this.docpdf;
      this._stddetails.updateStudent(this.studentForm.value.id , this.studentForm.value).subscribe({
        next:()=>{
          this.toastr.success( 'Employee Details updated successfully !');
          this.loading= false;
          this.showStudentDetails()
          this.newdata=''
        },
        error: (err)=>{
          this.toastr.error("Employee Details update error")
          this.errorMessage = err;
          this.loading= false;
        }
      })

    }
    const edcontrol = <FormArray>this.studentForm.controls['education'];
    while (edcontrol.length > 0) {
      edcontrol.removeAt(0)
    }

    (this.studentForm.get('education') as FormArray).clear();
    let agefield = document.getElementById('agefield')
    let filefield = document.getElementById('uploadimg')
    if(filefield){
      (<HTMLInputElement>filefield).value = '';
    }
    if(agefield){
      agefield.style.display = 'none'
    }
    this.studentForm.reset()
  }

  showStudentDetails() {
    this._stddetails.getStudent().subscribe({
      next: (res) => {
        this.alldata = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
 

  deleteData(id: number) {
    this._stddetails.deleteStudent(id).subscribe({
      next: () => {
        this.showStudentDetails()
      }
    });
  }

  updateData(id: any) {
    //calculate the age from dob and show it in the age field
    this.addEducation()
    if(this.newdata){
      this._stddetails.getOneStudent(id).subscribe({
        next:(res)=>{  
          //in db you can create 2 more fields which will contain name of updating image and docname and then
          //you can show it below the fields
          for(let i=0;i<res.education.length;i++){
            this.educationarray.push(res.education[i])
          }
          let birthday = Number(new Date(res.dob))
          let val = Math.abs(Date.now() - birthday)
          let age = (val/(1000*60*60*24)/365)
          if(age<1){
            this.ageofst = Math.floor(age*10)/10;
          }
          else{
            this.ageofst = Math.floor(age);
          }

          this.updatingimg = res.profile
          this.docpdf = res.pdfdoc  
          this.studentForm?.patchValue(res)
          this.loading= false; 
        }
     })
    } 
  }

}


