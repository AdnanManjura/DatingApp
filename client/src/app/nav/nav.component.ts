import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService ) { } //vracanje na HomePage nakon LogOut

  ngOnInit(): void {
  }

  login()
  {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members'); //vracanje na HomePage nakon LogOut
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');  //vracanje na HomePage nakon LogOut
 }
}
