import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { RefugeService } from '../refuge.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userEmail: string | null = null;
  refugeName: string | null = null;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private refugeService: RefugeService,
  ) {}

  ngOnInit(): void {
    this.userEmail = this.authService.getAuthenticatedUser();
    //this.refugeName = this.refugeService.getRefugeNameByEmail(this.userEmail));
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
