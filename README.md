

# Student Management System

## Project Description
Student Management System is a backend project developed using Node.js, Express.js, and MongoDB.

This project is used to manage student details like name, roll number, email, course, and age.

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript

## Features
1. Add a new student
2. View all students
3. Search student by roll number
4. Update student details
5. Delete student details

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/students/add | Add student |
| GET | /api/students | View all students |
| GET | /api/students/search/:rollNumber | Search student |
| PUT | /api/students/update/:id | Update student |
| DELETE | /api/students/delete/:id | Delete student |

## How to Run the Project

1. Clone the repository.
2. Run `npm install`.
3. Create a `.env` file.
4. Add your MongoDB connection string in `.env`.
5. Run `node server.js`.

## Developed By
Student
