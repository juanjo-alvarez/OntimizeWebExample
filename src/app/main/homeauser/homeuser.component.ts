import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.scss']
})
export class HomeUserComponent implements OnInit {

  public user:string;
  public role:string;

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
