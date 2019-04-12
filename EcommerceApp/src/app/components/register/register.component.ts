import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StreamService } from 'src/app/services/streamService/stream.service';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  reactiveForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
    phoneNumber: new FormControl('',[Validators.required,Validators.minLength(11)]),
    Email: new FormControl('',[Validators.required, Validators.email]),
    Age: new FormControl('',Validators.required)
  },
  {
   
});
  
    constructor(private router:Router,private stream:StreamService) {
    this.stream.getdata().subscribe();
    
   }
  

   onSubmit() {
    if (this.reactiveForm.valid){
     this.router.navigate(['/home']);
     this.stream.setdata(this.reactiveForm.value);
     localStorage.setItem("userinfo",JSON.stringify(this.reactiveForm.value));
    }
  }
  ngOnInit() {
  }

}
