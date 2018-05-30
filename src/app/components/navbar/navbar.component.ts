import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../employees';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private employeeService:EmployeeService) { }

  ngOnInit() {
  }
newEmployee(event:any)
{
  event.preventDefault();
  this.employeeService.setter(new Employee());
  this.router.navigate(['/createUpdate']);
}
}
