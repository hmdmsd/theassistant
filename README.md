# Angular Single Page Application - Technical Test

This repository contains code for a single-page web application developed using Angular.
The application is created as part of a technical test to reproduce a design provided in Figma using data stored in a JSON format.

## Instructions

To run this application locally, follow these steps:

1. Clone this repository to your local machine using Git: `git clone https://github.com/hmdmsd/theassistant.git`
2. Navigate to the project directory: `cd theassistant`
3. Install the necessary dependencies: `npm install`
4. Start the development server: `ng serve`
5. Open your web browser and navigate to `http://localhost:4200` to view the application.

## Design Reproduction

The application reproduces the design provided in Figma. It utilizes Angular components to organize and display data fetched from a JSON file. The layout includes sections for teachers and students, with sorting and styling based on specified criteria.

## Code Structure

- `src/app/user-list`: Contains the Angular component responsible for displaying the list of users.
- `src/app/users.ts`: Defines the TypeScript interfaces and data for users, including teachers and students.

## Additional Information

- **Date:** The current date is set to November 12, 1991, for demonstration purposes.
- **Teacher Order:** Teachers are displayed in order of seniority within the school.
- **Student Order:** Students are displayed first by house and then alphabetically within each house.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
