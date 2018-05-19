USE snippetStash;
INSERT INTO users(username, password, createdAt, updatedAt) VALUES(
'Admin','ABC123!',  NOW(),  NOW());

INSERT INTO categories (catName, createdAt, updatedAt) VALUES
('Sequelize', NOW(), NOW()),
('Handelebars', NOW(), NOW()),
('Testing', NOW(), NOW()),
('Express', NOW(), NOW()), 
('HTML',NOW(),NOW());