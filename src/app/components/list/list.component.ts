import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../employees';
import { error } from 'selenium-webdriver';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private employees:Employee[];
  constructor(private _employeeService:EmployeeService,private router:Router)
  {
 }

    
  ngOnInit() {
    this.readEmployees();

  } 
  
  readEmployees()
  {
    this._employeeService.readEmployees().subscribe(
      data=>{
        console.log(data);
        this.employees = data['msg'];
      },
      error=>{
        console.log(error);
      }
    )
  } 
  doUpdate(employees)
  {
    this._employeeService.setter(employees);
this.router.navigate(['/createUpdate']);
  }
doDelete(employees)
{
  this._employeeService.deleteEmployee(employees._id).subscribe(
   data=>
   {
this.employees.slice(this.employees.indexOf(employees),1);
   },
   error=>{
console.log(error);

   } 
  )
}
}
