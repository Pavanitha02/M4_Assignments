Database Relationship

A database relationship refers to the logical connection between tables in a relational database.
It shows how data in one table is linked to data in another table using keys (usually Primary Key and Foreign Key).

Relationships help to:

Avoid data duplication

Maintain data consistency

Organize information efficiently

Support complex queries

In real-world applications like e-commerce websites, relationships are essential to connect customers, products, orders, and payments.
Types of Database Relationships

There are three main types of relationships:

One-to-One (1:1)

One-to-Many (1:N)

Many-to-Many (M:N)
One-to-One Relationship (1:1)
 Definition

In a One-to-One relationship, one record in Table A is related to only one record in Table B, and vice versa.

 E-commerce Example

Customer<-> Customer Profile

One customer has only one profile

One profile belongs to only one customer
One-to-Many Relationship (1:N)
 Definition

In a One-to-Many relationship, one record in Table A can be related to many records in Table B, but each record in Table B is related to only one record in Table A.

 E-commerce Example

Customer -> Orders

One customer can place many orders

Each order belongs to only one customer
Many-to-Many Relationship (M:N)
 Definition

In a Many-to-Many relationship, many records in Table A can relate to many records in Table B.

This is implemented using a junction table (also called bridge table).

E-commerce Example

Orders <-> Products

One order can have many products

One product can appear in many orders

So we use a junction table called Order_Items.