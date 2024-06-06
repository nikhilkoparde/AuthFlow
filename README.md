# Project Name: AUTHFLOW

## Description

A simple React application with user authentication (sign-up, login, logout) using Firebase Authentication. The app includes protected routes and user session management.

## Features

- User sign-up with email and password.
- User login.
- Password Reset
- Email verification
- Protected routes for authenticated users.
- User session management.
- Logout functionality.

## Installation

1. Clone the repository:

2. Install dependencies:

3. Configure Firebase:

- Create a Firebase project.
- Enable Email/Password authentication.
- Copy your Firebase configuration and replace the placeholder in `Services/firebase.js`.

4. Run the application:

## Usage

- Navigate to `/signup` to create a new account.
- Navigate to `/login` to log in.
- Access protected routes (e.g., `/dashboard`) after logging in.
- To Reset Password `/resetpassword`
- Log out using the logout button on the dashboard.
- Implemented password reset functionality.
- Added email verification during sign-up.
