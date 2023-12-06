# SharedTrip-React-Project

Shared Trip is a ride-sharing app that allows travelers organize their trip easily, quickly and safely. You can search for your desired destination and if you are satisfied with the trip, rate the driver and give a positive or negative comment.

**https://shared-trip.netlify.app**

## Test user

To explore the app's features without registering, you can use the following test user credentials:

- **Username:** test123@abv.bg
- **Password:** 12345

 # Technologies Used
 - ReactJS
 - JavaScript
 - HTML/CSS
 - Node.js
 - Express.js
 - MongoDB with Mongoose

  # Installation

  1. Clone the repository: https://github.com/MADNMD/SharedTrip-React-Project

  ### Setting Up the Cloud Database

   2. Use MongoDB Atlas, a cloud-based database service, to store and manage data. Follow these steps to set up your cloud database:

   - Sign up for an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a new cluster and configure your database settings
   - Obtain your MongoDB connection string

   ### Deploying the Server

  3. Deploy server using [render.com](https://render.com), a platform for hosting applications. To deploy the server:

   - Sign up for an account on [render.com](https://render.com)
   - Configure your server settings and deploy your REST API

   ### Deploying the React App

  4. We use [Netlify](https://www.netlify.com) to host the client-side of our app. To deploy the React app:

   - Sign up for an account on [Netlify](https://www.netlify.com)
   - Configure your app settings and deploy your React app

   # Usage
   Once you've created your cluster, set up the server, and deployed the Angular app, you can access and interact with the app using the provided URLs.

   # API Endpoints:
     
   - `POST /users/login`: Logged user
   - `POST /users/register`: Register user
   - `GET /users/logout`: Logout user
   - `GET /users/user`: The currently logged user
   - `PUT /users/edit/:userId`: Update an existing user by ID
   - `DELETE /users/delete/:userId`: Delete a user by ID
   - `GET /trips/allTrip`: Get a list of all trips
   - `POST /trips/createTrip`: Create a new trip
   - `GET /trips/details/:tripId`: Details a trip by ID
   - `PUT /trips/edit/:tripId`: Update an existing trip by ID
   - `DELETE /trips/delete/:tripId`: Delete a trip by ID
   - `GET /trips/myTrips/:userId`: Get all trips created by a specific user
   - `GET /comments/get-comments/:tripId`: Get all comments by a specific trip
   - `POST /comments/add-comment`: Create a new comment
   - `PUT /comments/edit-comment/:commentId`: Update an existing comment by ID
   - `DELETE /comments/delete-comment/:commentId`: Delete a comment by ID
   - `POST /likes/like/:userId`: Like a user by ID
   - `POST /likes/unlike/:userId`: Unlike a user by ID

   # License
   - MIT License

   # Screenshots

   ### Home page
