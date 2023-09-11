DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id char(128) PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id char(128) PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id char(128)
);

CREATE TABLE employee (
    id char(128) PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id char(128),
    manager_id char(128)
);