import { Component, AfterViewInit } from '@angular/core';
import { Dropdown } from 'bootstrap';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const dropDownElementList = 
        [].slice.call(document.querySelector('.dropdown-toggle'));
      const dropdownList = 
        dropDownElementList.map(function(dropdownToggleEl) {
          return new Dropdown(dropdownToggleEl)
        });
  }
}
