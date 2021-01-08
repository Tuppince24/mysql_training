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
                    value: "add_employee_department",
                    message:"would you like to add employee department"
                },
                {
                    value: "add_employee_role",
                    message:"would you like to add employee role"
                },
                {
                    value: "add_employee",
                    message:"would you like to add employee"
                },
                {
                    value: "update_employee",
                    message: "would you like to update you employee"
                },
                {
                    value: "update_employee_department",
                    message: "would you like to view departments, roles, employees"
                },
                {
                    value: "update_employee_department",
                    message: "would you like to view departments, roles, employees"
                },
                {
                    value: "update_employee_department",
                    message: "would you like to view departments, roles, employees"
                },
                {
                    value: "",
                    message: "would you like to delete department, role, and employee"
                }
            ]
        })
        .then(function(answer){
            switch(answer.action.value){
                case "would you like to add department, roles, employee":
                    add();
                    break;
                case "would you like to update employee role":
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
landing()



