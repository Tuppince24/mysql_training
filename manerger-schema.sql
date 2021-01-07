DROP DATABASE IF EXISTS emplyoee_db;
CREATE database emplyoee_db;

USE emplyoee_db;

CREATE TABLE department (
    id INT NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee_role (
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL( 10, 2 ) NOT NULL,
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manerger_id INT NOT NULL,
    PRIMARY KEY (id)
)