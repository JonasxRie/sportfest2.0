import { SportfestService } from './../sportfest.service';
import { Component, OnInit } from '@angular/core';
import { RequestOptions, Http } from '@angular/http';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-klassen-import',
  templateUrl: './klassen-import.component.html',
  styleUrls: ['./klassen-import.component.css']
})
export class KlassenImportComponent implements OnInit {
  returnStatus: number;
  anmeldebogenFile: File;
  teilnehmerFile: File;
  klassen = [
    {value: 1, viewValue: "FS151"},
    {value: 2, viewValue: "FS152"},
    {value: 3, viewValue: "FI151"},
    {value: 4, viewValue: "FI152"},
    {value: 5, viewValue: "FV151"}
  ];
  selectedClass: number;
  showDownloadButton: boolean = false;

  constructor(private http: Http,
              private sfService: SportfestService,
              public snackBar: MdSnackBar) { }

  ngOnInit() {
  }
  
  // Button Download wurde geklickt
  public download() { }
  
  // Dateiauswahl für Anmeldebogen geändert
  public anmeldebogenChange(event: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        this.anmeldebogenFile = fileList[0];
        console.log(this.anmeldebogenFile);
        // const formData: FormData = new FormData();
        // formData.append('uploadFile', this.file, this.file.name);
    }
  }
  
  // Ausgewählten Anmeldebogen abschicken
  public sendAnmeldebogen() {
    if (this.anmeldebogenFile) {
      this.sfService.klasseSchreiben(this.anmeldebogenFile).subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  
  // Gibt zurück, ob der "Anmeldebogen abschicken"-Button geklickt werden kann (sonst disabled)
  public isAnmeldebogenSelected() {
    if (this.anmeldebogenFile) {
      return true;
    }else {
      return false;
    }
  }
  
  // Dateiauswahl für Teilnehmerliste geändert
  public teilnehmerChange(event: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        this.teilnehmerFile = fileList[0];
        console.log(this.teilnehmerFile);
        // const formData: FormData = new FormData();
        // formData.append('uploadFile', this.file, this.file.name);
    }
  }

  // Ausgewählte Teilnehmerliste abschicken
  public sendTeilnehmer() {
    if (this.teilnehmerFile) {
      this.sfService.klasseSchreiben(this.teilnehmerFile).subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  // Gibt zurück, ob der "Teilnehmerliste abschicken"-Button geklickt werden kann (sonst disabled)
  public isTeilnehmerSelected() {
    if (this.teilnehmerFile) {
      return true;
    }else {
      return false;
    }
  }
  
  public openSchuelerHochgeladenSnackbar(){
    this.snackBar.open("Schülerliste wurde hochgeladen", "OK",{
      duration: 2000,
    });
  }

  public openAnmeldungHochgeladenSnackbar(){
    this.snackBar.open("Anmeldebogen wurde hochgeladen", "OK",{
      duration: 2000,
    });
  }
}
