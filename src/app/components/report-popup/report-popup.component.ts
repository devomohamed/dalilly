import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import {Subscription} from 'rxjs';
import {DialogBelonging} from '@costlydeveloper/ngx-awesome-popup';
import { ProductsService } from '../../service/products.service';
import { ActivatedRoute } from '@angular/router';
// Import service from the library
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-report-popup',
  templateUrl: './report-popup.component.html',
  styleUrls: ['./report-popup.component.scss']
})
export class ReportPopupComponent implements OnInit {

  comment:string = ``
  id:any

  private subscriptions: Subscription = new Subscription();

  // Dependency Injection of the dialogBelonging in constructor is crucial.
  constructor(@Inject('dialogBelonging') public dialogBelonging: DialogBelonging,
  private productService:ProductsService,
    private activateRoute:ActivatedRoute,
    private toastEvokeService: ToastEvokeService) {
      this.id = this.activateRoute.snapshot.paramMap.get('id')
    }

  ngOnInit(): void {
    // Check received data and other available features.
    console.log(this.dialogBelonging);

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
            if(this.comment != ''){
              this.productService.reportProduct({
                product_id:this.dialogBelonging.customData.id,
                desc:this.comment
              }).subscribe((res:any)=>{
                console.log(res);
                // Type SUCCESS
                this.toastEvokeService.success('Report', 'Report Done!').subscribe();
                this.dialogBelonging.eventsController.close();
              },(error:any)=>{console.log(error);
              })
            }
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
