# Software Engineering Take-Home Exercise

Welcome to the Carrum Health take-home exercise! This project includes a boilerplate Rails application, React application, and Docker Compose file that represents a basic scaffold for candidates to use when completing our take-home exercise for software engineers.

The next steps will get you started with setting up the repository, while the [EXERCISE.md](./EXERCISE.md) file contains detailed requirements and guidelines for the assignment. We aim to make this as easy as possible, but we welcome any feedback to help improve the process!

## Prerequisites

[Docker](https://www.docker.com/)

## Getting Started

1. Clone the repository:
   ```sh
   git clone git@github.com:carrumhealth/software-engineering-code-exercise.git
   cd software-engineering-code-exercise
   ```

2. Build and start the services:
   ```sh
   docker compose up --build
   ```

3. Access the applications:
   - Rails API: http://localhost:3000
   - React UI: http://localhost:8080

You can now start coding your submission for the take-home exercise.

**Note:** Please refer to the [EXERCISE.md](./EXERCISE.md) file for detailed requirements and guidelines for the assignment.

## Project Initialization (For Maintainers)

The `docker-compose.initialize.yml` file is used to create the base Rails and React applications. These steps have been performed and the resulting applications have been committed to the repository. If you need to re-initialize one of the applications (e.g., to use a new version of Rails or React), follow these steps:

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd software-engineering-code-exercise
   ```

2. Run the initialization compose file:
   ```sh
   docker compose -f docker-compose.initialize.yml up --build
   ```

3. Once the initialization is complete, the `ui` and `api` directories will be set up with boilerplate Rails and React applications. You can then commit these changes to the repository.

For normal usage, after the initial setup, you can simply pull the repository and run the default `docker-compose.yml` file as described in the Candidate Instructions section.

## Facilitator Instructions

To enable candidates to work on the exercise, follow these steps:

1. Download a zip file of the repository.
2. Email the zip file to the candidate.
3. After the candidate completes the exercise, they should email their solution back as a zip file.
