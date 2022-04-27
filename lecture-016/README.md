# SQL

- Create a CRUD
- Connect to DB
- Client <-> Server <-> DB
- Three layer: Client, Application & Data
- Clients: CLI, GUI, Web & Application

## SQL (Structured Query Language)

- SQL is a standard language for storing, manipulating and retrieving data in databases.
- It's a relational database
- Views are logical representations of data assembled from one or more database tables.
- Indexes are lookup tables that help speed up database lookup functions.
- Reports consist of data retrieved from one or more tables, usually a subset of that data that is selected based on search criteria.

Relational databases are relational because they are composed of tables that relate to each other. For example, a SQL database used for customer service can have one table for customer names and addresses and other tables that hold information about specific purchases, product codes and customer contacts. A table used to track customer contacts usually uses a unique customer identifier called a key or primary key to reference the customer's record in a separate table used to store customer data, such as name and contact information.


### RDBMS
RDBMS stands for Relational Database Management System.
RDBMS is the basis for SQL, and for all modern database systems such as MS SQL Server, IBM DB2, Oracle, MySQL, and Microsoft Access. The data in RDBMS is stored in database objects called tables. A table is a collection of related data entries and it consists of columns and rows. Every table is broken up into smaller entities called fields. The fields in the Customers table consist of CustomerID, CustomerName, ContactName, Address, City, PostalCode and Country. A field is a column in a table that is designed to maintain specific information about every record in the table.

A record, also called a row, is each individual entry that exists in a table. For example, there are 91 records in the above Customers table. A record is a horizontal entity in a table. A column is a vertical entity in a table that contains all information associated with a specific field in a table.

