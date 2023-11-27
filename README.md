# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `About the app`

So the app is about listing posts from across the world where you can anonymously add comments,also you can view individual posts and other anonymous comments

### `Directory structure of the app`

Entrypoint of the app is index.js
Followed by App/index.js, here all the prime level configurations are assembled.

"views" are the house to the components which are directly hosted over routes.
"containers" are the house of the common components which inherits other child level components, having the power to access api.
"components "are tthe house of granular level generic components which can be imported anywhere to serve the purpose they were built for

"assets" contains all the static asset like background image of the app
"api" contains all the api consumed by the components
"utils" contains files which has generic functions or constants used accross the system
