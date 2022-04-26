
-- Creating a table
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    age INTEGER UNSIGNED,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

-- Delete a table
DROP TABLE users;

-- Creating users
INSERT INTO users (first_name, last_name, age, email) VALUES ('Federico', 'Infantino', '29', 'infantino.fede@gmail.com');
INSERT INTO users (first_name, last_name, age, email) VALUES ('Test', 'Ing', '24', 'test@gmail.com');
INSERT INTO users (first_name, last_name, age, email) VALUES ('Tester', 'num2', '32', 'tester@gmail.com');

-- Read a table, all columns
SELECT * FROM users;

-- Read a table, selected columns
SELECT first_name, last_name FROM users;

-- Read an specific user
SELECT * FROM users WHERE first_name = 'Federico';
SELECT * FROM users WHERE first_name = 'Federico' OR first_name = 'test';

-- Delete
DELETE FROM users WHERE id = 2;

-- Select distinct
SELECT DISTINCT * FROM users;

-- COUNT group by
SELECT *, COUNT(first_name) as total FROM users GROUP BY first_name;

-- First 3 results
SELECT * FROM users LIMIT 3;

-- All users with email null
SELECT * FROM users WHERE email IS NULL;

-- All gmails mails
SELECT * FROM users WHERE email LIKE '%@gmail.com';

-- IN
SELECT * FROM users WHERE id IN (1,2,4);

-- UPDATE
UPDATE users SET age = '40' WHERE id = 3;



