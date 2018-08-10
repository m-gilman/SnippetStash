/*

DROP DATABASE IF EXISTS snippetStash;
CREATE DATABASE snippetStash;
*/

-- USE snippetStash;
-- INSERT INTO users(username, password, createdAt, updatedAt) VALUES(
-- 'Admin','ABC123!',  NOW(),  NOW());
-- SELECT * FROM users;


-- USE snippetStash;
-- INSERT INTO users (id, email, password, createdAt, updatedAt) VALUES
-- (default, 'admin@admin.com', '12345', NOW(), NOW());
-- SELECT * FROM users;


INSERT INTO Categories (catName, createdAt, updatedAt) VALUES
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

SELECT *
FROM Categories;
