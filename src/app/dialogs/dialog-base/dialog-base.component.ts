import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-dialog-base',
  templateUrl: './dialog-base.component.html',
  styleUrls: ['./dialog-base.component.scss']
})
export class DialogBaseComponent implements OnInit {

  constructor(
    private ds: DialogService
  ) { }

  ngOnInit(): void {
  }

  dismiss(evt: any) {
    if (!evt.target.classList.contains('card-wrap')) return;
    this.ds.dismiss();
  }

}
