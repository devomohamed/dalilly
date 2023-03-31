import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogBelonging } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-aboutus-popup',
  templateUrl: './aboutus-popup.component.html',
  styleUrls: ['./aboutus-popup.component.scss']
})
export class AboutusPopupComponent implements OnInit {

  center:google.maps.LatLngLiteral = {
    lat: 24,
        lng: 12
  }
  zoom = 15;
  url:any
  move(event:any){
    this.center.lat=33.51380732952212
    this.center.lng = 36.276527903974056

  }
  moveMap(event:any){
    this.center.lat=33.51380732952212
    this.center.lng = 36.276527903974056
  }

  private subscriptions: Subscription = new Subscription();

  // Dependency Injection of the dialogBelonging in constructor is crucial.
  constructor(@Inject('dialogBelonging') public dialogBelonging: DialogBelonging) {}

  ngOnInit(): void {
    this.url = window.location.href
    // Check received data and other available features.
    console.log(this.dialogBelonging.customData.store);
    this.center= {
      lat: this.dialogBelonging.customData.store.latitude,
          lng: this.dialogBelonging.customData.store.longitude
    }

    // Timeout emulates asyinc data.
    setTimeout(() => {
      // Close the loader after some data is ready.
      // IDialogEventsController
      this.dialogBelonging.eventsController.closeLoader();
    }, 1500);

    // Subscribe to button listeners.
    this.subscriptions.add(
      // IDialogEventsController
      this.dialogBelonging.eventsController.onButtonClick$.subscribe(
        _Button => {
          if (_Button.ID === 'edit') {
            // Do some logic for example edit user.
          } else if (_Button.ID === 'submit') {
            // Do some logic and close popup.
            this.dialogBelonging.eventsController.close();
          } else if (_Button.ID === 'cancel') {
            // Do some logic and close popup.
            this.dialogBelonging.eventsController.close();
          }
        }
      )
    );

    // Timeout emulates async data.
    setTimeout(() => {
      // Close the loader after some data is ready.
      // IDialogEventsController
      this.dialogBelonging.eventsController.closeLoader();
    }, 1000);
  }

  ngOnDestroy(): void {
    // Care about memory and close all subscriptions.
    this.subscriptions.unsubscribe();
  }

}
