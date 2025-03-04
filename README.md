# Test Pyramid Sample App

A simple Express.js application for running testing examples. Inspired by article, [The Practical Test Pyramid by Ham Vocke](https://martinfowler.com/articles/practical-test-pyramid.html)

## Setup

1. Install dependencies:
```
npm install
```

2. Start the server:
```
npm start
```

For development with auto-restart:
```
npm run dev
```

## Available Endpoints

- `GET /`: Home page
- `GET /api/test`: Test API endpoint

The server runs on port 3000 by default, but you can change it by setting the PORT environment variable.

## The testing stack I will be using:
This testing stack is based on the testing examples in the Sample application for the test pyramid article linked above.
- [ ]  **Jest** (JUnit equivalent) - our test runner
- [ ]  **Sinon.js** (Mockito equivalent) - for stubbing out external services
- [ ]  **Nock** (Wiremock equivalent) - for stubbing out external services. Selected over MSW which could have been my other option. Chosen for ease of setup for a small project.
- [ ]  **Pact.js** - for writing CDC tests
- [ ]  **Selenium** - for writing UI-driven end-to-end tests
- [ ]  **Supertest** (REST-assured equivalent) - for writing REST API-driven end-to-end tests

## Rest of tech stack:
- Javascript
- Express.js (for REST API)
- Sequelize (Database ORM)
- Axios 