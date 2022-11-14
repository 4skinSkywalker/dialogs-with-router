import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-dialog-are-you-sure',
  templateUrl: './dialog-are-you-sure.component.html',
  styleUrls: ['./dialog-are-you-sure.component.scss']
})
export class DialogAreYouSureComponent {

  constructor(
    public ds: DialogService
  ) { }

  confirm() {
    this.ds.close(true);
  }

}
