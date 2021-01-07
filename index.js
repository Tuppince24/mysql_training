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
                "would you like to add department, roles, employee",
                "would you like to update employee role",
                "would you like to view departments, roles, employees",
                "would you like to delete department, role, and employee"
            ]
        })
}

function add(){

}

function update(){

}

function view(){

}