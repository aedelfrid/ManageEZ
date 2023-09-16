DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE `department` (
    id char(128) PRIMARY KEY NOT NULL,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE `role` (
    id char(128) PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id char(128),

    FOREIGN KEY (department_id)
    REFERENCES `department`(id)
    ON DELETE SET NULL
);

CREATE TABLE `employee` (
    id char(128) PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id char(128) NULL,
    manager_id char(128) NULL,

    FOREIGN KEY (role_id)
    REFERENCES `role`(id)
    ON DELETE SET NULL,

    FOREIGN KEY (manager_id)
    REFERENCES `employee`(id)
    ON DELETE SET NULL
);