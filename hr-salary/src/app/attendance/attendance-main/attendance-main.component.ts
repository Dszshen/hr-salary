import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-attendance-main',
  templateUrl: './attendance-main.component.pug',
  styleUrls: ['./attendance-main.component.scss']
})
export class AttendanceMainComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }

  workingShift(){
    this.router.navigate(['/attendance/workingShift']);
  }

}
