import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('form',{static:true}) form:OFormComponent;

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.form.queryData({USER_:this.auth.getSessionInfo().user});
  }
}
