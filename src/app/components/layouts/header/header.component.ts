import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableDataService } from 'src/app/services/table-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private matchRequest:TableDataService, private router:Router) { }

  ngOnInit(): void {
  }

  generateRandomMatch() {
    // save current route 
    const currentPage = this.router.url;
    this.matchRequest.requestRandomMatch().subscribe();

    // checks if the current route is "/" and then navigate to that or else navigate to matchTable route
    if (currentPage=="/") {
      this.router.navigateByUrl('/matchTable', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentPage]); // navigate to same route which is "/"
      }); 
    } else {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentPage]); // navigate to same route which is "/matchTable"
      }); 
    }




  }

}
