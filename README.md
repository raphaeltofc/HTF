# HTF Project with Cypress

This README outlines the necessary steps to install Cypress along with its dependencies, and how to execute tests for the project. It also includes a dedicated section for logging bugs found during the testing process.

## Prerequisites

Ensure you have the following installed on your machine before proceeding:
- Node.js (version 12 or higher)
- npm (usually comes with Node.js)

## Installing Cypress and Dependencies

To set up your environment for running Cypress tests, follow these steps:

### 1. Clone the Project Repository

Clone the project to your local machine:

```bash
git clone <repository-url>
```

### 2. Navigate to the Project Directory
Change your current directory to the project's directory:
```bash
cd <project-directory-name>
```

### 3. Install Dependencies
```bash
npm install
```

### Running the Tests
With Cypress and all dependencies installed, you are now ready to run the tests.

#### Open Cypress Test Runner
For a GUI-based test execution, open the Cypress Test Runner with:

```bash
npx cypress open
```
This opens the Cypress GUI, from where you can select and run your test files.

#### Run Tests Headlessly
To execute your tests headlessly (useful for CI/CD environments):
```bash
npx cypress run
```
This command runs all test files without opening the GUI.

#### Bugs Found
| Bug ID | Bug Title                                                              | Priority |
|--------|------------------------------------------------------------------------|----------|
| HTF-BUG001 | An exception is generated when entering an unexpected date format during registration | Low      |
| HTF-BUG002 | Despite the success message, it was not possible to delete a computer | High     |
| HTF-BUG003 | The number of computers does not change, despite creating one or more new ones | Medium   |
| HTF-BUG004 | The search filter does not work correctly for newly added computers    | High     |



