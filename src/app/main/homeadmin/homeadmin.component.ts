import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.scss']
})
export class HomeAdminComponent implements OnInit {

  public user:string;
  public role:string;
  public maxDate: string;
  public maxDateTIMESTAMP: number;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.user = localStorage.getItem('USER');
    this.role = localStorage.getItem('ROLE');
  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }
}
