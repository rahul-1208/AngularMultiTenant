import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  name !: '';
  id !: '';
  prodObject !: any ;
  // message = this.product.userName ;
  
   constructor(private router:Router, private activatedRoute:ActivatedRoute) {
       console.log(this.router.getCurrentNavigation()!.extras.state);
  }

  ngOnInit() : void  {
       //console.log(history.state);
       this.prodObject=history.state;
       this.name = this.prodObject.userName ;
       this.id = this.prodObject.userId ;
  }
}
