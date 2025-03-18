# Take-Home Exercise: Fullstack Development

## Objective

Build a simple application to demonstrate your proficiency with Ruby on Rails (API), React (UI), and system design. The goal is to showcase your skills in building a polished and functional CRUD application with basic authentication, documentation, and tests.

## Prompt

You are tasked with building a healthcare provider catalog application that allows users to manage a list of medical providers.

## Requirements

1. **Model Design:**
   - Design the data model for a Provider entity with relevant healthcare fields (e.g., name, specialty, NPI number, location, credentials)
   - Include your data model diagram or description as part of your submission

2. **API:**
   - Create a Rails API that implements CRUD operations for managing the Provider resource
   - Implement basic authentication (healthcare data requires secure access)
   - Write unit tests and document the API endpoints with healthcare-specific examples

3. **UI:**
   - Create a React frontend that allows users to:
     - Search and filter providers by specialty and location
     - View detailed provider profiles
     - Add and update provider information
     - Deactivate providers (soft delete)
   - Ensure the UI follows healthcare accessibility guidelines

4. **Documentation:**
   - Include a README for each application that explains:
     - Dependencies and installation steps (e.g., using Docker).
     - How to start the application.
     - How to run tests.
     - An overview of features.

## Bonus (Optional)

- Deploy the application to AWS or any cloud provider and share a live demo URL.
- Add advanced features (e.g., product search, pagination, or image uploads).
- Implement additional layers of testing (eg., end to end tests or security audits)

## Submission Guidelines

1. **Time Constraint:**
   - Spend no more than 4 hours on this exercise. If you need to cut corners, note those in your README under a "Known Trade-offs" section.

2. **Deadline:**
   - Submit your solution via a pull request to the original repository within 72 hours of receiving the prompt.

3. **Deliverables:**
   - A Pull Request containing the following:
     - Rails API and React UI code.
     - Unit tests for both backend and frontend.
     - API documentation.
     - Data model explanation or diagram.
     - README files for each application.
     - Changes to Dockerfiles and docker-compose.yml (if any).

## Follow-Up Interview

During the follow-up interview, you will discuss your solution with the team. Be prepared to answer questions about:

1. **Design Choices:**
   - Why did you structure your API, data model, and UI the way you did? What trade-offs did you consider?

2. **Optimizations:**
   - What improvements would you make if given more time?

3. **Scalability:**
   - How would you scale this application to handle thousands of users and requests?

4. **Collaboration:**
   - How would you onboard and support other engineers adding features to this application?