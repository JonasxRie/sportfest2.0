import { SportfestService } from './../sportfest.service';
import { Component, OnInit } from '@angular/core';
import { RequestOptions, Http } from '@angular/http';

@Component({
  selector: 'app-klassen-import',
  templateUrl: './klassen-import.component.html',
  styleUrls: ['./klassen-import.component.css']
})
export class KlassenImportComponent implements OnInit {

  file: File;

  constructor(private http: Http,
              private sfService: SportfestService) { }

  ngOnInit() {
  }

  public fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        this.file = fileList[0];
        console.log(this.file);
        // const formData: FormData = new FormData();
        // formData.append('uploadFile', this.file, this.file.name);
    }
  }

  public sendFile() {
    if (this.file) {
      this.sfService.klasseSchreiben(this.file).subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  public isFileSelected() {
    if (this.file) {
      return true;
    }else {
      return false;
    }
  }

}
