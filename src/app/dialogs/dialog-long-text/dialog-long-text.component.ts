import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-dialog-long-text',
  templateUrl: './dialog-long-text.component.html',
  styleUrls: ['./dialog-long-text.component.scss']
})
export class DialogLongTextComponent implements OnInit {

  constructor(
    public ds: DialogService
  ) { }

  ngOnInit(): void {
  }

  confirm() {
    this.ds.close(this.ds.data);
  }

}
