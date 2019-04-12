import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { StreamService } from 'src/app/services/streamService/stream.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  reactiveForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  });

  constructor(private router:Router , private stream:StreamService) {
    this.stream.getdata().subscribe();
  }
  
  onSubmit(){
       if(this.reactiveForm.valid){
           this.router.navigate(['/home']);
           this.stream.setdata(this.reactiveForm.value);
           localStorage.setItem("userinfo",JSON.stringify(this.reactiveForm.value));
       }
  }

  ngOnInit() {
  }

}

