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
                    name:"would you like to add department",
                    value: "add_department"
                },
                {
                    name:"would you like to add employee role",
                    value: "add_employee_role"
                },
                {
                    name:"would you like to add employee",
                    value: "add_employee"
                },
                {
                  
                    name: "would you like to update you employee",
                    value: "update_employee"
                    
                },
                {
                    name: "would you like to view departments",
                    value: "update_department"
                },
                {
                    name: "would you like to view emplyoee roles",
                    value: "update_employee_role"
                },
                {
                    name: "would you like to view departments, roles, employees",
                    value: "update_department"
                },
                {
                    name: "would you like to view roles",
                    value: "view_role"
                },
                {
                    name: "would you like to view departments",
                    value: "view_department"
                },
                {
                    name: "would you like to view employee",
                    value: "view_employee"
                },
                {
                    name: "would you like to delete department",
                    value: "delete_department"
                     
                },
                {
                    name: "would you like to delete role",
                    value: "delete_employee_role"
                     
                },
                {
                    name: "would you like to delete employee",
                    value: "delete_employee"
                     
                }
            ]
        })
        .then(function(answer){
            switch(answer.action.value){
                case "would you like to add department":
                    add();
                    break;
                case "would you like to add employee role":
                    update();
                    break;
                case "would you like to view departments, roles, employees":
                    view();
                    break;
                case "would you like to delete department, role, and employee":
                    deleteDER();
                    break;
            }
        });
}
console.log(landing());




