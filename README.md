Welcome to my version of the challenge.

I provided a home page with only the essential to display the product list and navigate from any product to the product details page. 

The product details page fulfills all requirements.

## Running the app
### Server

Go to the `/server` folder and run 

`npm i` and then `npm start`

The app will run at http://localhost:8080. Leave running to use with the FE app.

### Client

Go to the `client` folder and run

`npm i` and then `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Testing the 5 second refresh

After selecting a product size (sku) in the application, go to the `server` folder and find the `/mocks/stock-price.js` file. 
Change the stock price that matches the one currently selected in the frontend *and restart the server*. The selected sku in the UI should be refreshed automatically within the next five seconds. 
