# Full Stack Python and React

This application contains a Flask api that the base route serves up the React application.
The Flask app contains API endpoints as well. The react application routes using HashRouter to get around errors due to reloading and the application breaking.

## How to get started
The React application is located inside of the [public](./public) folder.

The Flask api is located in the app.py and the [controllers](./controllers) folder.

First, you will need to install the dependencies required. Make sure you a virtual environment to install the Python dependencies contained in the [requirements](requirements.txt) file.

Next, `cd` into the react_app folder to get started editing the React portion of the application.

To build the `bundle.js` file, you will need to run the command: `npm run build` inside of the public folder.
