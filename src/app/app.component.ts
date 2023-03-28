import { Component } from '@angular/core';
import {PanelModule} from 'primeng/panel';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headeritems:MenuItem[]//=["hi","hello"]
  constructor(private route:Router){
    this.headeritems=[{label:'hi'},{label:'he'}]
  }
  ngOnInit() {
  }
  title = 'touristmanagementsystem';
}
