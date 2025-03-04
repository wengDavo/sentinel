# Sentinel

Sentinel is a scheduling assistant designed to help timetable officers prevent conflicts when setting up class schedules. It does not generate timetables but ensures that no conflicting schedules occur.

## Features

- **Venue-Time Conflict Detection**: Ensures no two classes are scheduled in the same venue at the same time.
- **Lecturer-Time Conflict Detection**: Prevents lecturers from being assigned to multiple classes simultaneously.
- **Group-Time Conflict Detection**: Ensures that no two subgroups of the same course are scheduled for a class at the same time.

## Installation

### Prerequisites

- **Node.js** (v18+ recommended)
- **PostgreSQL**

### Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/sentinel.git
   cd sentinel
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up the environment variables:
   - Create a folder `env/` at the project root.
   - Inside `env/`, create environment files for different environments:
     - `.env.development`
     - `.env.production`
     - `.env.test`
   - Add the necessary configurations (example for development):
     ```ini
     NODE_ENV=development
     DATABASE_URL=postgresql://[db_user]:[db_password]@127.0.0.1:5432/[db_name]
     PORT=8080
     CORS_ORIGIN=
     TOKEN_SECRET=
     ```
4. Run database migrations:
   ```sh
   npm run migrate
   ```
5. Seed the database (only in development mode):
   ```sh
   NODE_ENV=development npm run seed
   ```

## Running the Project

### Development
```sh
npm run dev
```

### Production
```sh
NODE_ENV=production npm start
```

## API Endpoints

| Method | Endpoint     | Description              |
|--------|-------------|--------------------------|
| GET    | `/`         | Health check             |
|        | `api/v1/auth`| Auth routes       |

## Contribution

Feel free to submit issues or contribute to the project via pull requests.

## License

This project is licensed under the MIT License.

