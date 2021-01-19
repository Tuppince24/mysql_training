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
                    value: "view_department"
                },
                {
                    name: "View all emplyoee roles",
                    value: "view_employee_role"
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
        case "update_employee":
            return updateEmployee();
        case "update_department":
            return updateDepartment();
        case "update_employee_role":
            return updateEmployeeRole();
        case "view_department":
            return viewDepartment();
        case "view_employee_role":
            return viewEmployeeRole();
        case "view_employee":
            return viewEmployee();
        case "delete_employee_role":
            return deleteEmployeeRole();
        case "delete_employee":
            return deleteEmployee();
        case "delete_department":
            return deleteDepartment();
        default:
            return exit();
        
    }


        
}

function addDepartment(){
    inquirer
     .prompt({
         name: "name",
         type:"input",
         message: "add a department"
     })
     .then(function(department){
        connection.query("INSERT INTO department SET ?", department);
     })
     landing();
};
function addEmployee(){
    inquirer
    .prompt({
        name:"employee_first_last_name",
        type: "input",
        message: "what is your employee full name"
    })
    .then(function(employee){
        connection.query("INSERT INTO employee SET ?", employee);
    })
    landing();
};
function addEmployeeRole(){
    inquirer
    .prompt({
        name: "add_employee_role",
        type: "input",
        message: "add your an employee role"
    })
    .then(function(role){
        connection.query("INSERT INTO employee_role SET ?", role);
    })
    landing();
};
function updateDepartment(){
    inquirer
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

};

function deleteDepartment(){

};

function deleteEmployeeRole(){

};

function deleteEmployee(){

};

function exit(){
    console.log("see ya!");
    process.exit();
};


console.log(landing());




