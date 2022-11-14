import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  data: any;

  private resolve: Function | undefined;
  private reject: Function | undefined;

  constructor(
    private router: Router
  ) { }

  open(dialogPath: string, data: any) {
    this.data = data;
    this.router.navigate(['', { outlets: { auxiliary: [ dialogPath ] } }]);
    return new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    })
  }

  close(data: any) {
    if (!this.resolve) return;
    this.router.navigate([{ outlets: { auxiliary: null } }]);
    this.resolve(data);
  }

  dismiss(error = 'Modal dismissed.') {
    if (!this.reject) return;
    this.router.navigate([{ outlets: { auxiliary: null } }]);
    this.reject(error);
  }
}
