# Oldest People Records API

This is a full-stack application built with **Node.js**, **Express**, **MySQL**, and **React** that tracks and displays data about the oldest people in the world, both currently living and ever recorded. The API is designed to allow easy management and updating of the records through a local database, while the front-end is styled with **Tailwind CSS** for a modern look.

## Features

- **Separate Records for Oldest Living and Ever Lived**: The API provides two distinct endpoints to retrieve data for the oldest person currently alive and the oldest person ever recorded.
- **Customizable and Dynamic**: You can manage the data directly in your own MySQL database. This allows full control over updates and the ability to set constraints, such as defining who qualifies as the oldest person (e.g., country-specific filters or age limits).
- **Modern UI with React**: The front-end is built using React, with a clean and modern design implemented using Tailwind CSS.

## Endpoints

The application provides two main API endpoints to retrieve information about the oldest people:

- **GET /oldest-living-person**: Fetches the record for the current oldest person alive.
- **GET /oldest-person-ever**: Fetches the record for the oldest person ever recorded.

### Example Response

**GET /oldest-living-person**

```json
{
  "name": "Kane Tanaka",
  "age": 118,
  "country": "Japan"
}
```

**GET /oldest-person-ever**

```
{
  "name": "Jeanne Calment",
  "age": 122,
  "country": "France"
}
```

## Installation

### Backend Setup

- Clone this repository:

```
git clone https://github.com/sidragosam/oldest-people-records.git
```

- Navigate to the backend folder:

```
   cd backend
```

- Install dependencies:

```
   npm install
```

- Set up your MySQL database and create a `.env` file for the credentials:

```
   plaintext
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
```

- Create the required table:

```
   CREATE TABLE oldest_person (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       age INT NOT NULL,
       country VARCHAR(255),
       alive BOOLEAN DEFAULT 1,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );
```

- Run the backend server:

```
   node server.js
```

### Frontend Setup

- Navigate to the frontend folder:

```
   cd frontend
```

- Install frontend dependencies:

```
   npm install
```

- Start the React development server:

```
   npm start
```

The frontend will be available at `http://localhost:3000`, and the backend at `http://localhost:3001`.

## Usage

Once the server is running, you can visit the frontend in your browser. The application will display the following data:

- **Oldest Living Person**: Displays the name, age, and country of the current oldest living person.
- **Oldest Person Ever**: Displays the name, age, and country of the person who holds the record for the longest lifespan.

## Technologies Used

- **Backend**: Node.js, Express.js, MySQL
- **Frontend**: React, Axios
- **Styling**: Tailwind CSS
- **Environment Variables**: `dotenv` package for managing sensitive data

## API Design

This API is designed with flexibility in mind, allowing the user to easily update and manage the records of the oldest people in the database. You have complete control over the data, and you can set your own criteria for how people are included in the records (e.g., filtering by country or setting a minimum age).

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Contributions are always welcome!

## License

This project is open-source and available under the MIT License.

### Key Sections Explained:

1. **Features**: Describes the primary functionality of the API.
2. **Endpoints**: Outlines the two main API endpoints with example responses.
3. **Installation**: Step-by-step guide to setting up the backend and frontend locally.
4. **Usage**: Explains how the user can interact with the app.
5. **Technologies Used**: Lists the tech stack to give a quick overview.
6. **API Design**: Provides a brief explanation of why the API is useful and customizable.
7. **Contributing**: Encourages others to contribute to the project.
8. **License**: Mentions that the project is open-source.
