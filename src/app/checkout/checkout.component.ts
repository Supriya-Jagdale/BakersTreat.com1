import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  homeDelivery : boolean = false;
  pickUp : boolean = false;

  deliveryFun(){
    this.homeDelivery = true;
    this.pickUp = false;
  }
  pickupFun(){
    this.pickUp = true;
    this.homeDelivery = false;
  }

  ngOnInit() {
  }

}
