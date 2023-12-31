import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}
const TREE_DATA: FoodNode[] = [
  {
    name: 'Wheels',
    children: [{name: 'ASUNTO'}, {name: 'ESTATUS'}, {name: 'MUNICIPIO'}, {name: 'NIVELES'}, {name: 'ROLES'}],
  }
];
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-navbar-a',
  templateUrl: './navbar-a.component.html',
  styleUrls: ['./navbar-a.component.scss']
})
export class NavbarAComponent {
  constructor(private router: Router){}
  @ViewChild('sidenav') sidenav!: MatSidenav;
  reason = '';
  observer: any;
  ngAfterViewInit() {
    this.observer?.observe(['(max-width: 900px)']).subscribe((res: { matches: any; }) => {
    });
  }
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  closeSideNav(){
    this.sidenav.close();
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/authentication'])
    this.sidenav.close();
  }
}
