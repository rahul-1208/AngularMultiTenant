import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-icici',
  templateUrl: './icici.component.html',
  styleUrls: ['./icici.component.css']
})
export class ICICIComponent implements OnInit {

  @Input() userName!:string;
  @Input() userId !: string ;
  prodObject:any ;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.prodObject=history.state;
    this.userName=this.prodObject.userName;
    this.userId=this.prodObject.userId;
  }
  dashboard(){
    this.router.navigate(['dashboard'], {relativeTo:this.route});
  }
}
