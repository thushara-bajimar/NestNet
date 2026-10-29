# NestNet

NestNet is a lightweight vacation-rental listing app built with Express, EJS, and MongoDB. Browse stays, add a listing, view its details, edit it, or remove it.

## Features

- Browse all available listings
- Create, view, update, and delete listings
- Server-rendered pages using EJS and EJS-Mate layouts
- Responsive styling with Bootstrap and Font Awesome
- MongoDB persistence with Mongoose
- Optional sample listing data for local development

## Tech stack

- Node.js and Express 5
- MongoDB and Mongoose
- EJS and EJS-Mate
- Bootstrap 5.3.3, Font Awesome, and custom CSS

## Requirements

Install the following before running the app:

- Node.js with npm
- MongoDB Community Server running locally

The app connects to `mongodb://127.0.0.1:27017/NestNet` and listens on port `8080`.

## Getting started

1. Clone the repository and move into the project directory.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start MongoDB locally.
4. Start the web server:

   ```bash
   node app.js
   ```

5. Open [http://localhost:8080](http://localhost:8080).

The main listing pages are available at [http://localhost:8080/listings](http://localhost:8080/listings). The root page currently displays a simple placeholder message.

## Load sample listings (optional)

To populate the database with the sample records in `init/data.js`, run:

```bash
node init/index.js
```

**Warning:** The seed script deletes all existing listing records in the `NestNet` database before inserting the samples. Back up any data you want to keep before running it.

## Routes

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/` | Displays the root placeholder |
| `GET` | `/listings` | Lists all stays |
| `GET` | `/listings/new` | Displays the create-listing form |
| `POST` | `/listings` | Creates a listing |
| `GET` | `/listings/:id` | Displays one listing |
| `GET` | `/listings/:id/edit` | Displays the edit form |
| `PUT` | `/listings/:id` | Updates a listing |
| `DELETE` | `/listings/:id` | Deletes a listing |

HTML forms use `method-override` to submit the `PUT` and `DELETE` actions.

## Listing fields

A listing has these fields:

- `title` — required text
- `description` — optional text
- `image` — optional image URL; a default image is used when blank
- `price` — numeric price
- `location` — location name
- `country` — country name

## Project structure

```text
.
├── app.js                 # Express app, routes, and MongoDB connection
├── init/
│   ├── data.js             # Sample listing data
│   └── index.js            # Database seed script
├── models/
│   └── listing.js          # Mongoose listing model
├── public/
│   └── css/style.css       # Application styles
└── views/
    ├── includes/           # Shared navigation and footer
    ├── layouts/            # EJS page layout
    └── listings/           # Listing pages and forms
```

## Development notes

- The MongoDB URL and port are currently defined directly in `app.js` and `init/index.js`.
- The package does not currently define a start or test script. Run the server with `node app.js`; `npm test` is a placeholder that exits with an error.
- This project is a basic CRUD application and does not currently include user authentication or automated tests.
