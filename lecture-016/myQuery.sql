/* Steps:
1- Create db 'test'
2- Create a table 'items' with the following columns:
    a. title
    b. category
    c. stock
    d. id
3- Insert 3 records
    a. Nuddles - Food - 100
    b. Phone - Technology - 30
    c. Shoes - Clothing - 10
4- List table
5- Delete item 'id = 1'
6. Update stock from item 'id = 2' to '45'
7. List table
 */

CREATE DATABASE test;

CREATE TABLE items(
    title VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    stock INTEGER NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id)
);

INSERT INTO items (title, category, stock) VALUES ('Nuddles', 'Food', 100);
INSERT INTO items (title, category, stock) VALUES ('Phone', 'Technology', 30);
INSERT INTO items (title, category, stock) VALUES ('Shoes', 'Clothing', 10);

SELECT * FROM items;

DELETE FROM items WHERE id = 1;

UPDATE items SET stock = 45 WHERE id = 2;

SELECT * FROM items;
