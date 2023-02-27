"use strict";
class Empdetails {
    constructor(id, name, designation, salary, pro) {
        this.emp_id = id;
        this.emp_name = name;
        this.emp_designation = designation;
        this.emp_salary = salary;
        this.emp_project = pro;
    }
    getEmpDetails() {
        console.log(`EmpId:${this.emp_id}`);
        console.log(`EmpName:${this.emp_name}`);
        console.log(`EmpDesignation:${this.emp_designation}`);
        console.log(`EmpSalary:${this.emp_salary}`);
        console.log(`EmpProject:${this.emp_project}`);
    }
}
//functions - getEmpDetails(),displayEmpDetails() -- used
let displayEmpDetails = new Empdetails(101, "Harshan", "Software", 20000, "FullStack Development");
displayEmpDetails.getEmpDetails();
