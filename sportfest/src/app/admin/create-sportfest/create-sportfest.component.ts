import { AreYouSureComponent } from '../../main/are-you-sure/are-you-sure.component';
import { MdDialog } from '@angular/material';
import { SportfestService } from '../../sportfest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-sportfest',
  templateUrl: './create-sportfest.component.html',
  styleUrls: ['./create-sportfest.component.css']
})
export class CreateSportfestComponent implements OnInit {

  selectedOption: any;

  constructor(public dialog: MdDialog,
              private sfService: SportfestService) { }

  ngOnInit() {
  }
  
  public new() {
    let dialogRef = this.dialog.open(AreYouSureComponent);
    dialogRef.componentInstance.closed.subscribe(data => {
      this.selectedOption = data;
      dialogRef.close();
    });
  }

}
