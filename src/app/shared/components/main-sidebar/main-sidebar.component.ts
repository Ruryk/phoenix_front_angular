import { Component } from '@angular/core';
import { CBottomSidebarNav, CMainSidebarNav, ISidebarNav } from './sidebar-utils/sidebar.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent {

  public sidebarNav: ISidebarNav[] = CMainSidebarNav;
  public sidebarBottomNav: ISidebarNav[] = CBottomSidebarNav;

  constructor(private router: Router) {}

  goToPage(path: string | null): void {
    this.router.navigate([path]);
  }

  logout(): void {

  }
}
