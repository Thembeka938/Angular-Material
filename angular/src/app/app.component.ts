import { Component } from '@angular/core';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  constructor(private matDialog:MatDialog){}
  openDialog(){
    this.matDialog.open(DialogBodyComponent)
      width:'350px';
    
    }
  }

