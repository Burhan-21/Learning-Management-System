# Online Learning Management System (LMS) - Backend

## Overview
This project is an Online Learning Management System (LMS) built using Spring Boot for the backend and React.js for the frontend. The backend is designed to handle user management functionalities, including user registration, retrieval, updating, and deletion.

## Technologies Used
- **Java 17**: The programming language used for the backend.
- **Spring Boot**: Framework for building the backend RESTful API.
- **MySQL**: Database for storing user information.
- **Maven**: Build tool for managing project dependencies.

## Project Structure
```
online-learning-management-system
├── backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── lms
│   │   │   │           ├── controller
│   │   │   │           │   └── UserController.java
│   │   │   │           ├── model
│   │   │   │           │   └── User.java
│   │   │   │           ├── repository
│   │   │   │           │   └── UserRepository.java
│   │   │   │           ├── service
│   │   │   │           │   └── UserService.java
│   │   │   │           └── OnlineLearningManagementSystemApplication.java
│   │   │   ├── resources
│   │   │       ├── application.properties
│   │   │       └── data.sql
│   │   └── test
│   │       └── java
│   │           └── com
│   │               └── lms
│   │                   └── OnlineLearningManagementSystemApplicationTests.java
│   ├── pom.xml
│   └── README.md
```

## Setup Instructions

### Prerequisites
- Java 17
- Maven
- MySQL Database

### Configuration
1. Clone the repository:
   ```
   git clone <repository-url>
   cd online-learning-management-system/backend
   ```

2. Configure the MySQL database:
   - Create a new database for the LMS.
   - Update the `application.properties` file with your database connection details.

3. Initialize the database:
   - The `data.sql` file contains sample data that will be loaded into the database upon application startup.

### Running the Application
1. Navigate to the backend directory:
   ```
   cd online-learning-management-system/backend
   ```

2. Build the project using Maven:
   ```
   mvn clean install
   ```

3. Run the application:
   ```
   mvn spring-boot:run
   ```

### API Endpoints
- `POST /users`: Create a new user.
- `GET /users/{id}`: Retrieve user details by ID.
- `PUT /users/{id}`: Update user information.
- `DELETE /users/{id}`: Delete a user.

## Testing
Unit tests are included in the `src/test/java/com/lms` directory. You can run the tests using:
```
mvn test
```

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.