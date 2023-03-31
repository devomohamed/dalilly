import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import {Subscription} from 'rxjs';
import {DialogBelonging} from '@costlydeveloper/ngx-awesome-popup';
import { ActivatedRoute, Router } from '@angular/router';
// Import service from the library
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-go-to-login',
  templateUrl: './go-to-login.component.html',
  styleUrls: ['./go-to-login.component.scss']
})
export class GoToLoginComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();

  // Dependency Injection of the dialogBelonging in constructor is crucial.
  constructor(@Inject('dialogBelonging') public dialogBelonging: DialogBelonging,
    private toastEvokeService: ToastEvokeService,
    private router:Router) {
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
            this.router.navigate(['/login']);
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
