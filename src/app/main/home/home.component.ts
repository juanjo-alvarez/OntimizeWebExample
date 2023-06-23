import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  protected userRoleService: OntimizeService;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    public injector: Injector
  ) {
    this.userRoleService = this.injector.get(OntimizeService);
  }

  ngOnInit() {
    const self = this;
    const conf = this.userRoleService.getDefaultServiceConfiguration('userrole');
    this.userRoleService.configureService(conf);
    this.userRoleService.query({}, ['ROLENAME'], 'myRole').subscribe(
          res => {
              if (res.data && res.data.length) {
                let rol = res.data[0].ROLENAME;
                localStorage.setItem('ROLE',rol);

                if(rol == 'admin'){
                  self.router.navigate(['/main/homeadmin'], { relativeTo: this.actRoute });
                }else{
                  self.router.navigate(['/main/homeuser'], { relativeTo: this.actRoute });
                }
              }else{
                self.router.navigate(['/main/homeuser'], { relativeTo: this.actRoute });
              }
            },
          err => console.log(err)
        );
  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

}
