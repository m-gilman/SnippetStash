/*

DROP DATABASE IF EXISTS snippetStash;
CREATE DATABASE snippetStash;
*/

USE snippetStash;
<<<<<<< HEAD

INSERT INTO users (id, email, password, createdAt, updatedAt) VALUES
(default, 'admin@admin.com', '12345', NOW(), NOW());

=======
INSERT INTO users(username, password, createdAt, updatedAt) VALUES(
'Admin','ABC123!',  NOW(),  NOW());
>>>>>>> mark
SELECT * FROM users;

INSERT INTO categories (catName, createdAt, updatedAt) VALUES
('Ajax', NOW(), NOW()),
('CSS', NOW(), NOW()),
('Express', NOW(), NOW()), 
('FireBase',NOW(),NOW()),
('Handelebars', NOW(), NOW()),
('HTML',NOW(),NOW()),
('JavaScript', NOW(), NOW()),
('JQuery', NOW(), NOW()),
('JS Constructors', NOW(), NOW()),
('MySql',NOW(),NOW()),
('Node.js',NOW(),NOW()),
('Sequelize', NOW(), NOW()),
('Testing', NOW(), NOW()),
('Timers',NOW(),NOW());

<<<<<<< HEAD
SELECT * FROM categories;
=======
SELECT *
<<<<<<< HEAD
FROM categories;
=======
FROM categories;
>>>>>>> 2abd27398e9a1a9c86c113e9c7129c8e0c555861
>>>>>>> mark
