# Express.js Route Handler Error
This repository demonstrates a common error in Express.js route handlers: the lack of proper error handling. The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem
The original code fails to handle cases where the `userId` parameter is invalid (e.g., not a number, out of bounds). This can lead to unexpected application behavior or crashes.  Specifically, if `users[userId]` attempts to access an invalid index, an error is thrown.

## Solution
The solution adds comprehensive error handling to check if `userId` is valid and if the user exists before processing the request.  It returns appropriate HTTP status codes (400 for bad requests and 404 for not found) with informative messages.