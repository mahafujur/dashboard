### Project Structure
 Pages
--- - 

    - Login
        - loginPage
    - dashboard
        - dashboardPage
    - orders
        - ordersPage
    -home
        - home page
    - no route found
        - no route handler page

## Important Notes
   -  Developed the project using Reactjs,Javascript,Tailwindcss
   -  Access Tokens is fetched everytime whenever I got 401, handled this using middleware and updated the access token using refresh token
   -  Used Owned template for login,routing and layout system

## Run Procedure

  ``` step-1: yarn isntall  ```

  ``` step-2: yarn start  ```

### Objective

Your assignment is to implement an analytics dashboard using TypeScript and React.

### Brief

Freddy loves Halloween. He loves it so much that he decided to open his own online artisanal Halloween candy shop last year. The shop was a huge success, thanks to the unique and exclusive candy stock list. Now Freddy needs a simple web app to manage his candy orders. You’ve been hired to build the frontend of that app!

### Completed Tasks

-   Implement assignment using:
    -   Language: **Java Script**
    -   Framework: **React**
-   Implemented the following views
    -   **Login**: Login using the API at `https://freddy.codesubmit.io/login` with POST `{ username: 'freddy', password: 'ElmStreet2019' }`. The login endpoint will return a JWT `access_token` that is valid for 15 minutes and a `refresh_token` which is valid for 30 days. Make sure to also handle wrong credentials properly
    -   **Dashboard**: Retrieve the necessary data for the dashboard at `https://freddy.codesubmit.io/dashboard`. This endpoint requires a `Authorization: Bearer access_token` header. Use the access token that you retrieved from Login. Keep in mind that access tokens expire after 15 minutes. You may request a fresh access token by sending a POST request to `https://freddy.codesubmit.io/refresh` with the `Authorization: Bearer refresh_token` header. Implement the chart with a charting library of your choice and add a toggle that switches between a weekly and yearly view.
    -   **Orders**: Fetch the orders at `https://freddy.codesubmit.io/orders?page=1&q=search_term`. This endpoint requires a `Authorization: Bearer access_token` header. Make sure to implement search and pagination

