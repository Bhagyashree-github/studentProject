import { Component,OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-studendata',
  templateUrl: './studendata.component.html',
  styleUrls: ['./studendata.component.css'],
})

export class StudendataComponent implements OnInit {

  [x: string]: any;
  alldata: any;
  profilepic: any;
  newalldata: any;
  fileUrl: any;
  bytechars: any;
  selectedFileBLOB: any;
  names: any;
  config: any;
  searchText = '';
  totalitems: number = 0;
  entries: number = 5;
  order: boolean = true;

  constructor( private _stddetails: StudentService, private sanitizer: DomSanitizer,private router:Router) {     }

  ngOnInit(): void { 
    this.showStudentDetails();
    // this.alldata=this['route'].snapshot.data['datas'];

    this.config = {
      id: 'basicPaginate',
      itemsPerPage: this.entries,
      currentPage: 1,
      totalItems: this.totalitems,
    };

  }


  showProfile(profile: any) {
    this.profilepic = profile;
  }

  showStudentDetails() {
    this._stddetails.getStudent().subscribe({
      next: (res) => {
        this.alldata = res;
        this.totalitems = this.alldata.length;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  showAllppl(data: any) {
    this.newalldata = data;
  }

  pageChanged(event: any) {
    console.log(event)
    this.config.currentPage = event;
  
  }

  deleteData(id: number) {
    this._stddetails.deleteStudent(id).subscribe({
      next: () => {
        this.showStudentDetails();
      },
    });
  }

  updateData(id: number, data: any) {
    //set data to input fields and then again add the values then click save and update the value
    // console.log("update")
    this.router.navigate(['home/'+id])
    // this._stddetails.updateStudent(id, data).subscribe({
    //   next: () => {
    //     // alert("updated successfully")
    //   },
    // });
  }

  openpdf(fileInput: any) {
    let filetoshow = fileInput.newalldata.pdfdoc;
    var iframe = "<iframe width='100%' height='100%' src='" + filetoshow + "'></iframe>";
    let x = window.open();
    x?.document.open();
    x?.document.write(iframe);
    x?.document.close();
  }

  searchName(e: any) { 
    this.searchText = e.target.value;  
  }

  selectEntries(e: any) {
    // this.entries = e.target.value;
      this.config.itemsPerPage = e.target.value;
  }

  sortDescending(val:any){
    // console.log(typeof(this.alldata[0].mobile))
    if (this.order) {
      let newarr = this.alldata.sort((a:any, b:any) => {
        // console.log(a.mobile)
        console.log('----------------------------------------------------------------')
        console.log( b.mobile - a.mobile)
        switch(val){
          case 'name':
            if(a.name < b.name)
              return 1;
            if(a.name > b.name)
              return -1;
            return 0;
          case 'email':
              if(a.email < b.email)
              return 1;
            if(a.email > b.email)
              return -1;
            return 0;
          case 'mobile':
            return  b.mobile - a.mobile
          case 'package':
            return b.package - a.package
          default:
            return 0;
    }
      } 
      );
      this.alldata = newarr
      }
  }

  sortAscending(val:any) {
    if (this.order) {
      let newarr = this.alldata.sort((a:any, b:any) => {
        switch(val){
          case 'name':
            if(a.name < b.name)
              return -1;
            if(a.name > b.name)
              return 1;
            return 0;
          case 'email':
              if(a.email < b.email)
              return -1;
            if(a.email > b.email)
              return 1;
            return 0;
          case 'mobile':
            return a.mobile - b.mobile;
          case 'package':
            return a.package - b.package
          default:
            return 0;
    }
      } 
      );
      this.alldata = newarr
      }
    }


}
