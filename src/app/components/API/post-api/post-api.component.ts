import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

  depList: any[] = [];
  depObj : any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }
  http = inject(HttpClient)

  getAllDeps(){
    this.http.get("https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment").subscribe((res:any)=>{
      this.depList = res.data;
    })
  }

  onSaveDep(){
    this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/AddNewDepartment",this.depObj).subscribe((res:any)=>{
      if(res.result){
        alert("Department Created Successfully")
        this.getAllDeps();
      }else{
        alert(res.message)
      }
    })
  }

  onEdit(data : any){
    this.depObj = data;
  }

  updateDep(){
    //this.http.put()
  }

  onDelete(id : number){
    const isDeleted = confirm("Are you sure you want to delete ?");
    if(isDeleted == true){
      this.http.delete("https://projectapi.gerasim.in/api/EmployeeManagement/DeletedepartmentBydepartmentId?departmentId="+id).subscribe((res : any)=>{
        if(res.result){
          alert("Department deleted successfully");
          this.getAllDeps();
        } else {
          alert(res.message)
        }
      })
    }
  }



}
