Schema Design in Relational Databases
1. What is Schema Design? What does a Database Schema represent?
Schema design is the process of planning how data will be organized inside a database before actually creating tables and writing code.
A database schema is like a blueprint of the database.
represent .....
What tables will exist
What columns each table has
Data types of each column
Relationships between tables
Rules and constraints on the data
example:In a college system, the schema might define tables like Students, Courses, and Enrollments, along with how they are connected.

/////////////////
2. Why Schema Design is Required Before Writing Backend Code
Schema design must be done first because:
Backend code depends on how data is stored.
APIs, queries, and business logic all use the database structure.
Changing schema later is difficult and risky.

///////////////
3. Impact of Poor Schema Design
a) Data Consistency Problems
If schema rules are weak:
Duplicate data may appear.
Important values may be missing.
Wrong data can be inserted.
Example: If email is not marked UNIQUE, two users can register with the same email.
Maintenance Becomes Hard
Scalability Issues
/////////////

4. What are Validations in Schema Design?

Validations are rules enforced by the database to keep data correct and reliable.

Common Validations:
Validation->Meaning->Example

NOT NULL->Value cannot be empty->Student name must be provided
UNIQUE->No duplicate values->	Email must be unique
DEFAULT	->Automatic value if none given->created_at = current time
PRIMARY KEY->Uniquely identifies each row->Student ID

////////////
5. Difference Between Database Schema and Database Table
Database Schema:
Blueprint of the entire database
Contains multiple tables and relationships
Logical design.

Database Table:
Actual structure that stores data
Stores rows and columns
Physical storage unit.