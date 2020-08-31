# React project template with Auth0 and Cypress
This is a [React](https://reactjs.org/) project template with [Auth0](https://auth0.com/) authentication and [Cypress](https://www.cypress.io/) e2e tests integrated in it.

## Getting Started
This project template requires Auth0 configuration as a prerequisite. Please follow the instruction below to get started.

#### Auth0 set-up
1. Please sign-up [Auth0](https://auth0.com/) first if you haven't already :)

2. Open Auth0 [Applications section](https://manage.auth0.com/#/applications) to create a new application
![image](https://user-images.githubusercontent.com/2220637/91725337-8c26b900-ebd9-11ea-956a-e5fa3f42fd1d.png)

3. Name it as you like, choose "Single Page Web Application" and press "CREATE".
![image](https://user-images.githubusercontent.com/2220637/91726404-22a7aa00-ebdb-11ea-8223-78e6d2c91441.png)

4. Open `Settings` tab and look for `Domain` and `ClientID`
![image](https://user-images.githubusercontent.com/2220637/91728877-b169f600-ebde-11ea-8f63-dd9d50edf51c.png)

5. Create `.env` file manually and put your `Domain` & `ClientID` as below

   **.env file** ***(YOU SHOULD NOT COMMIT THIS FILE)*** 
   ```
   REACT_APP_AUTH0_DOMAIN="Copy & paste your Domain here"
   REACT_APP_AUTH0_CLIENT_ID="Copy & paste your ClientID here"
   ```

6. Configure your `Callback URLs`, `Logout URLs`, `Allowed Web Origins` as `http://localhost:3000`
![image](https://user-images.githubusercontent.com/2220637/91729125-0c035200-ebdf-11ea-9acd-82ca1d8e875a.png)

7. Create a test user from Auth0 [Users](https://manage.auth0.com/#/users) section.
![image](https://user-images.githubusercontent.com/2220637/91730432-d65f6880-ebe0-11ea-82dc-5dc8267ea9db.png)

8. Make sure to use `Username-Password-Authentication` so that it can be used via cypress tests.
![image](https://user-images.githubusercontent.com/2220637/91730793-2ccca700-ebe1-11ea-9c16-791e3f0b56d3.png)

Take note of test email and password.

#### Set-up Cypress

1. Create a file `cypress.env.json` manually and put these credential information from Auth0.

   **cypress.env.json file** ***(YOU SHOULD NOT COMMIT THIS FILE)*** 
   ```
   {
     "auth_audience": "Copy & paste your Auth0 Domain here",
     "auth_url": "https://{$YOUR_DOMAIN}/oauth/token",
     "auth_client_id": "Copy & paste your Auth0 ClientID here",
     "auth_client_secret": "Copy & paste your Auth0 Client Secret here",
     "auth_username": "Your test user email",
     "auth_password": "Your test user password"
   }
   ```

That's it! Now you can start your development with the power of Cypress e2e tests :)

## Cypress spec examples

#### login_spec

![login_spec](https://user-images.githubusercontent.com/2220637/91733071-0f4d0c80-ebe4-11ea-929c-6c61b842f7f5.gif)

#### navigation_spec

![navigation_spec](https://user-images.githubusercontent.com/2220637/91733325-589d5c00-ebe4-11ea-843c-69057a1f18f4.gif)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run cy:run`

Run the Cypress test suite in headless mode.<br />
See the section about [cypress run](https://docs.cypress.io/guides/guides/command-line.html#cypress-run) for more information.

### `npm run cy:open`

Opens the Cypress Test Runner.<br />
See the section about [cypress open](https://docs.cypress.io/guides/guides/command-line.html#cypress-open) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
