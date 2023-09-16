INSERT INTO department (id, dept_name)
VALUES ("2c004e4f-e74d-4811-913e-d73d509f25e5", "Sales"),
       ("72d9f16b-858b-484d-96f6-b8d3fff13447", "Service"),
       ("1e89b0ac-8ce7-4d64-a99e-e5c717ea1846", "Admin"),
       ("b1ec93b5-8369-4ce1-bb66-0c12c1b842f3", "Executive");

INSERT INTO role (id, title, salary, department_id)
VALUES ("81d87a79-dae4-4c65-8538-868978fd42b5", "Sales Manager", 90000, "2c004e4f-e74d-4811-913e-d73d509f25e5"),
       ("10d0cbad-8a56-4ee3-a78f-52cce5d6017d", "Salesperson", 65000, "2c004e4f-e74d-4811-913e-d73d509f25e5"),
       ("6f8e6199-e7f6-4b07-8327-e7fb531062e5", "CEO", 200000, "b1ec93b5-8369-4ce1-bb66-0c12c1b842f3");

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES ("394f0b57-9e49-4621-9987-6f39ac5ed160", "Jusztina", "Paca", "81d87a79-dae4-4c65-8538-868978fd42b5", NULL),
       ("c2827c1a-36a4-4c16-9473-09a2b14d9acf", "Lexi", "Hayat", "10d0cbad-8a56-4ee3-a78f-52cce5d6017d", "394f0b57-9e49-4621-9987-6f39ac5ed160"),
       ("4b285e74-0a95-4bce-a4c2-0960b0127094", "Stella", "Marsh", "10d0cbad-8a56-4ee3-a78f-52cce5d6017d", "394f0b57-9e49-4621-9987-6f39ac5ed160"),
       ("04d17ab0-e0cd-42f5-9b85-c550693ef2b9", "Victor", "Richards", "10d0cbad-8a56-4ee3-a78f-52cce5d6017d", "394f0b57-9e49-4621-9987-6f39ac5ed160");