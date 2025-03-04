# Test pyramid sample app
A sample app to implement different layers of testing as discussed in the article called: [The practical test pyramid by Ham Vocke](https://martinfowler.com/articles/practical-test-pyramid.html)

## The testing tools I will be using:
This testing stack is based on the testing examples in the Sample application for the test pyramid article linked above.
- [ ]  **Jest** (JUnit equivalent) - our test runner
- [ ]  **Sinon.js** (Mockito equivalent) - for stubbing out external services
- [ ]  **Nock** (Wiremock equivalent) - for stubbing out external services. Selected over MSW which could have been my other option. Chosen for ease of setup for a small project.
- [ ]  **Pact.js** - for writing CDC tests
- [ ]  **Selenium** - for writing UI-driven end-to-end tests
- [ ]  **Supertest** (REST-assured equivalent) - for writing REST API-driven end-to-end tests

