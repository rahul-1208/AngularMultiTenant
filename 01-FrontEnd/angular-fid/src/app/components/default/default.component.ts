import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})

export class DefaultComponent implements OnInit {
 
  defaultFormGroup !: FormGroup  ;
  store !: string ;
  errMsg = ' ' ;
//   public product = {fiid:'' ,
// userName:'',
// userId : ''};

  user = new User();

  constructor(private formBuilder : FormBuilder,
              private router : Router,
              private activatedRoute : ActivatedRoute,
              private service : LoginserviceService) { }

  ngOnInit(): void {
    this.defaultFormGroup = this.formBuilder.group({
      userDetails:this.formBuilder.group({
        userName:new FormControl(' ' , [Validators.required]),
        password:new FormControl(' '),
        userId : new FormControl(' ')
      }),
      FIDetails:this.formBuilder.group({
        FIID : new FormControl(' ', [Validators.required])
      })
    }      
    )
  }

  get userName(){return this.defaultFormGroup.get('userDetails.userName'); }
  get password(){return this.defaultFormGroup.get('userDetails.password'); }
  get userId(){return this.defaultFormGroup.get('userDetails.userId'); }
  get FIID(){return this.defaultFormGroup.get('FIDetails.FIID'); }

  getValue(value : string){
      console.log(value);
      this.store = value ; 
      this.user.fiid=value;
      // console.log(this.defaultFormGroup.get('userDetails')!.value.userName);
  }

  submit(){
    console.log("handling submit");
    this.user.userName= this.defaultFormGroup.get('userDetails')!.value.userName ;
    this.user.userId = this.defaultFormGroup.get('userDetails')!.value.userId ;
    this.user.password=this.defaultFormGroup.get('userDetails')!.value.password ;
    console.log(this.defaultFormGroup);
    this.service.loginFromUser(this.user).subscribe(
      res=>{
        console.log("res received - "+ res.fiid),
        this.user.fiid=res.fiid,
        this.router.navigateByUrl('/'+this.user.fiid,{state:this.user})
      },
      err=>{console.log("exception received "+ err),
            this.errMsg="Bad Credentials"}
      )
      // this.activatedRoute.queryParams.subscribe((params:Params)=>{

      // }) 
  }

  // this.user.userName= this.defaultFormGroup.get('userDetails')!.value.userName ;
  // this.user.userId = this.defaultFormGroup.get('userDetails')!.value.userId ;
  // this.user.password=this.defaultFormGroup.get('userDetails')!.value.password ;
  // console.log(this.defaultFormGroup);
  // this.service.loginFromUser(this.user).subscribe(
  //   res=>console.log("res received "+ res.fiid),
  //   err=>console.log("exception received "+ err),
  //   console.log(this.product);
  // this.router.navigateByUrl('/dynamic',{state:this.product})

}
