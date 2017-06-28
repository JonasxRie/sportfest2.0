import { Klasse } from '../interfaces';
import { SportfestService } from './../sportfest.service';
import { Component, OnInit } from '@angular/core';
import { RequestOptions, Http } from '@angular/http';
import {MdSnackBar} from '@angular/material';
import { BASEPATH } from '../app.module';

@Component({
  selector: 'app-klassen-import',
  templateUrl: './klassen-import.component.html',
  styleUrls: ['./klassen-import.component.css']
})
export class KlassenImportComponent implements OnInit {
  returnStatus: number;
  anmeldebogenFile: File;
  teilnehmerFile: File;
  klassen: Array<Klasse> = [];
  selectedDownloadableClass: number;
  downloadPath:string;
  showDownloadButton: boolean = false;
  
  importPath = BASEPATH + '/klasse/anmeldung';
  uploadPath = BASEPATH + '/schueler/upload';
  
  constructor(private http: Http,
              private sfService: SportfestService,
              public snackBar: MdSnackBar) { }

  ngOnInit() {
     this.sfService.klassen().subscribe((data: Klasse[]) => {
        this.klassen = data;
      },
      (err) => {
        console.error('GET-Service "klassen()" not reachable.');
      })
  }
  
  // Button Download wurde geklickt
  public download() {
    console.log(this.selectedDownloadableClass);
    this.sfService.schuelerAnmeldebogen(this.selectedDownloadableClass).subscribe();    
   }
  
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
  
  public changeDownloadPath(){
    this.downloadPath = BASEPATH+ "/klasse/" + this.selectedDownloadableClass + "/anmeldung";
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
