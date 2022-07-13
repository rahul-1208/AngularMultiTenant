import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-hdfc',
  templateUrl: './hdfc.component.html',
  styleUrls: ['./hdfc.component.css']
})
export class HDFCComponent implements OnInit {

  @Input() Name!:string;
  @Input() Id !: string ;
  prodObject : any ;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.prodObject=history.state;
    this.Name=this.prodObject.userName;
    this.Id=this.prodObject.userId;
  }

  dashboard(){
    this.router.navigate(['dashboard'], {relativeTo:this.route});
  }

}
