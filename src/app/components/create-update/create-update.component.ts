import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../employees';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
private employee:Employee;
  constructor(private employeeService:EmployeeService,private router:Router)
   { }

  ngOnInit() {

    this.employee=this.employeeService.getter();
  }
createOrUpdate()
{
  if(this.employee._id== undefined)
  {
  this.employeeService.createEmployee(this.employee).subscribe(
    data=>
    {
    console.log(data);
    this.router.navigate(['/']);
  },
  error=>
  {
    console.log(error);
}
)
}
else{
  this.employeeService.updateEmployee(this.employee).subscribe(
    data=>
    {
    console.log(data);
    this.router.navigate(['/']);
  },
  error=>
  {
    console.log(error);
}

)
}
}
}
