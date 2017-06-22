import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-are-you-sure',
  templateUrl: './are-you-sure.component.html',
  styleUrls: ['./are-you-sure.component.css']
})
export class AreYouSureComponent implements OnInit {
  @Output() closed: EventEmitter<any> = new EventEmitter<any>();  

  constructor(public dialogRef: MdDialogRef<AreYouSureComponent>) { }

  ngOnInit() {
  }
  
  accept() {
    // TODO
    console.log("REST aufrufen zum erstellen eines neuen Sportfests");
    this.closed.emit();
  }
  
  decline() {
    // TODO
    this.closed.emit()
  }

}
