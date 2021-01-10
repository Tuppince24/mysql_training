var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Honeey bader3475",
    database: "emplyoee_db"
});
  
connection.connect(function(err) {
    if (err) throw err;
    runSearch();
});

function landing(){
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "what would you like to do",
            choices: [
                {
                    name:"Add department",
                    value: "add_department"
                },
                {
                    name:"Add employee role",
                    value: "add_employee_role"
                },
                {
                    name:"Add employee",
                    value: "add_employee"
                },
                {
                  
                    name: "Update your employee",
                    value: "update_employee"
                    
                },
                {
                  
                    name: "Update your department",
                    value: "update_department"
                    
                },
                {
                  
                    name: "Update your employee role",
                    value: "update_employee_role"
                    
                },
                {
                    name: "View all departments",
                    value: "update_department"
                },
                {
                    name: "View all emplyoee roles",
                    value: "update_employee_role"
                },
                {
                    name: "View all employee",
                    value: "view_employee"
                },
                {
                    name: "Delete employee role",
                    value: "delete_employee_role"
                     
                },
                {
                    name: "Delete employee",
                    value: "delete_employee"
                     
                },
                {
                    name: "Delete department",
                    value: "delete_department"
                     
                }
            ]
    })
    switch(choice){
        case "add_department":
            return addDepartment();
        case "add_employee_role":
            return addEmployeeRole();
        case "add_employee":
            return addEmployee();
    }


        
}

function addDepartment(){

};
function addEmployee(){

};
function addEmployeeRole(){

};
function updateDepartment(){

};
function updateEmployee(){

};
function updateEmployeeRole(){

};
function viewDepartment(){

};
function viewEmployee(){

};
function viewEmployeeRole(){

}

console.log(landing());




