/*

DROP DATABASE IF EXISTS snippetStash;
CREATE DATABASE snippetStash;
*/

USE snippetStash;

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
('JSConstructors', NOW(), NOW()),
('MySql',NOW(),NOW()),
('Node.js',NOW(),NOW()),
('Sequelize', NOW(), NOW()),
('Testing', NOW(), NOW()),
('Timers',NOW(),NOW());

SELECT * FROM categories;

SELECT *
FROM categories;

