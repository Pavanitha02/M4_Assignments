Q1. Role of Frontend (FE)

Frontend is the part of a web application that users directly see and interact with. It focuses on making the website look good and work smoothly for users.

1. User Interface

Frontend is responsible for designing the layout of the website such as buttons, forms, images, colors, and fonts. It makes sure the application looks attractive and easy to use.

2. User Interaction

Frontend handles how users interact with the application. For example:

Clicking buttons

Filling forms

Navigating between pages

Showing error or success messages

It ensures the user gets a smooth and friendly experience.

3. Communication with Backend

Frontend sends requests to the backend to get or store data.
For example, when a user logs in, the frontend sends the username and password to the backend and shows the result based on the response.

/////////////////

Q2. Role of Backend (BE)

Backend is the part of a web application that works behind the scenes. It manages data, logic, and security.

1. Server-side Processing

Backend processes user requests. When a user submits a form, the backend checks the data, applies rules, and sends back the correct response.

2. Database Handling

Backend stores, updates, deletes, and retrieves data from the database.
Examples:

Saving user details

Fetching product lists

Updating order status

3. Security and Authentication

Backend protects user data and ensures only authorized users can access certain features.
It handles:

Login authentication

Password encryption

Role-based access (admin, user, etc.)

Q3. Business Logic

Business Logic means the set of rules that decide how an application works according to business needs. It controls what should happen in different situations.

Business logic is usually written in the backend but sometimes also exists in the frontend.

Real-world Examples

Online Shopping App

If cart value > ₹1000, apply 10% discount

If product is out of stock, disable the “Buy” button

Banking Application

User can withdraw money only if balance is sufficient

Daily withdrawal limit is ₹20,000

College Management System

Students can register only if attendance is above 75%

Results are shown only after the admin publishes them

These rules are not design-related, they are logic-related, so they come under business logic.

Q4. Client–Server Model

The Client–Server Model is a system where two computers work together to provide services.

Who is the Client

The client is the user’s device such as:

Web browser

Mobile app
It sends requests to the server.

Who is the Server

The server is a powerful computer that stores data and runs backend code. It responds to client requests.

How Communication Happens

Client sends a request (for example: login request)

Server processes the request

Server sends a response back

Client shows the result to the user

This communication usually happens using HTTP/HTTPS.

Q5. Three-Tier Architecture

Three-Tier Architecture divides a web application into three layers to make it more organized and scalable.

1. Presentation Layer

This is the Frontend layer.
It includes:

HTML, CSS, JavaScript

User interface

User interaction

2. Application (Business) Layer

This is the Backend logic layer.
It includes:

Business rules

Data processing

Validation

3. Data Layer

This is the Database layer.
It stores:

User information

Product data

Orders, payments, etc.

Why this Architecture is Used

Easy to maintain

Better security

Each layer can be changed without affecting others

Makes the application scalable and professional

Q6. JavaScript as a Backend Language

JavaScript is not only used in the frontend but also widely used in the backend.

1. Performance

With Node.js, JavaScript runs very fast and handles many users at the same time using non-blocking operations.

2. Ecosystem

JavaScript has a huge ecosystem with thousands of libraries in npm.
This makes development faster and easier.

3. Popular Backend Frameworks

Some famous JavaScript backend frameworks are:

Node.js – runtime for backend

Express.js – lightweight framework

NestJS – structured backend framework

Fastify – high performance framework

Because of these advantages, many companies use JavaScript for both frontend and backend, making development more efficient.
