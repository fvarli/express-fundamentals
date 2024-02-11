# Express Fundamentals
This repository, `express-fundamentals`, is a basic setup for a Node.js project using Express. It's designed as a starting point for learning and developing web applications with Express, a minimal and flexible Node.js web application framework. This setup includes a simple server configuration and the necessary package dependencies to get you started.

## Getting Started
To get started with this project, you'll need to have Node.js installed on your machine. If you haven't installed Node.js yet, you can download it from https://nodejs.org.

## Installation
To get this project up and running on your local machine, follow these steps:
#### 1. Clone the repository to your local machine:
```shell
git clone https://github.com/fvarli/express-fundamentals.git

cd express-fundamentals
```
#### 2. Install the required dependencies:
```shell
npm install
```
This command installs all the dependencies defined in the `package.json` file, including Express and Nodemon for development.

#### 3. Create a `.env` file:
Copy the `.env.example` file to a new file named `.env` and update the values to match your MongoDB URI, email server, and credentials.
```shell
cp .env.example .env
```
#### 4. Start the application:
```shell
npm run dev
```
This command starts the server with Nodemon, which will automatically restart the server whenever you make changes to the files. By default, the server runs on port 5000.

The application will be running on http://localhost:5000.

## Contributing
Contributions are welcome! If you have any improvements or suggestions, please feel free to fork the repo and submit a pull request.
