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
    landing();
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
                     
                },
                {
                    name: "exit",
                    value: "exit"
                }
            ]
    }).then(function(results){
        console.log(results.action);
        switch(results.action){
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
    });

    
        
}

function addDepartment(){
    inquirer
     .prompt({
         name: "name",
         type:"input",
         message: "add a department"
     })
     .then(function(department){
        connection.query("INSERT INTO department (department_name) values(?)", department.name);
        console.log("added department " +department);
        landing();
     })
    
};
function addEmployee(){
    inquirer
    .prompt([{
        name:"first_name",
        type: "input",
        message: "what is your employee first name"
    },{
        name:"last_name",
        type: "input",
        message: "what is your employee last name"
    },{
        name:"role_id",
        type: "input",
        message: "what is your employee role id"
    },{
        name:"manerger_id",
        type: "input",
        message: "what is your employee manerger id"
    }
    ])

    .then(function(employee){
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manerger_id) values(?,?,?,?)", 
        [employee.first_name, employee.last_name, employee.role_id, employee.manerger_id],function(err, results){
            if (err){
                console.log(err);
            }

            console.log("added employee " + results);
            landing();
        });
        
    })
    
};
function addEmployeeRole(){
    inquirer
    .prompt([{
        name:"title",
        type: "input",
        message: "what is your employee tittle"
    },{
        name:"salary",
        type: "input",
        message: "what is your employee salary"
    },{
        name:"department_id",
        type: "input",
        message: "what is your employee department id"
    }
    ])

    .then(function(employee){
        connection.query("INSERT INTO employee_role (title, salary, department_id) values(?,?,?)", 
        [employee.title, employee.salary, employee.department_id],function(err, results){
            if (err){
                console.log(err);
            }

            console.log( " added employee role " +results);
            landing();
        });
        
    })
    
};
function updateDepartment(){
    inquirer
    .prompt([{
        name:"id",
        type: "input",
        message: "what the id of the department you want to update"
    },
    {
        name:"department_name",
        type: "input",
        message: "update department your department name"
    }
    ])
    .then(function(department){
        connection.query("UPDATE department SET department_name=?  WHERE id =?  ", 
        [department.department_name, department.id],function(err, results){
            if (err){
                console.log(err);
            }

            console.log("updated employee " + results);
            landing();
        });
        
    })
};
function updateEmployee(){
    inquirer
    .prompt([
        {
            name:"id",
            type: "input",
            message: "Update your employee their id"
        },{
        name:"first_name",
        type: "input",
        message: "Update your employee first name"
    },{
        name:"last_name",
        type: "input",
        message: "Update your employee last name"
    },{
        name:"role_id",
        type: "input",
        message: "Update your employee role id"
    },{
        name:"manerger_id",
        type: "input",
        message: "Update your employee manerger id"
    }
    ])

    .then(function(employee){
        connection.query("UPDATE employee SET first_name=?, last_name=?, role_id=?, manerger_id=? WHERE id =?  ", 
        [employee.first_name, employee.last_name, employee.role_id, employee.manerger_id, employee.id],function(err, results){
            if (err){
                console.log(err);
            }

            console.log("updated employee " + results);
            landing();
        });
        
    })
};
function updateEmployeeRole(){
    inquirer
    .prompt([
    {
        name:"id",
        type: "input",
        message: "Update your employee role by id"
    },{
        name:"title",
        type: "input",
        message: "what is your employee tittle"
    },{
        name:"salary",
        type: "input",
        message: "what is your employee salary"
    },{
        name:"department_id",
        type: "input",
        message: "what is your employee department id"
    }
    ])

    .then(function(employeeRole){
        connection.query("UPDATE employee_role SET title=?, salary=?, department_id=? WHERE id =?", 
        [employeeRole.title, employeeRole.salary, employeeRole.department_id, employeeRole.id],function(err, results){
            if (err){
                console.log(err);
            }

            console.log("updated employee " + results);
            landing();
        });
        
    })
};
function viewDepartment(){
    connection.query("SELECT * FROM department" 
    ,function(err, results){
        if (err){
            console.log(err);
        }

        console.table(results);
        landing();
    });
};
function viewEmployee(){
    
    connection.query("SELECT * FROM employee" 
    ,function(err, results){
        if (err){
            console.log(err);
        }

        console.table(results);
        landing();
    });
        
    
};
function viewEmployeeRole(){
    connection.query("SELECT * FROM employee_role" 
    ,function(err, results){
        if (err){
            console.log(err);
        }

        console.table(results);
        landing();
    });
};

function deleteDepartment(){
    inquirer
    .prompt({
        name:"id",
        type: "input",
        message: "delete your department by id"
    })
    .then(function(department){
        connection.query("DELETE FROM department WHERE id =? ", 
        [department.id],function(err, results){
            if (err){
                console.log(err);
            }

            console.log(" deleted department"  + results);
            landing();
        });
        
    })
};

function deleteEmployeeRole(){
    inquirer
    .prompt({
        name:"id",
        type: "input",
        message: "delete your employee role by id"
    })
    .then(function(employee){
        connection.query("DELETE FROM employee_role WHERE id =? ", 
        [employee.id],function(err, results){
            if (err){
                console.log(err);
            }

            console.log("deleted employee role " + results);
            landing();
        });
        
    })
};

function deleteEmployee(){
    inquirer
    .prompt({
        name:"id",
        type: "input",
        message: "delete your employee by id"
    })
    .then(function(employee){
        connection.query("DELETE FROM employee WHERE id =? ", 
        [employee.id],function(err, results){
            if (err){
                console.log(err);
            }

            console.log("deleted employee " + results);
            landing();
        });
        
    })
};

function exit(){
    console.log("see ya!");
    process.exit();
};







