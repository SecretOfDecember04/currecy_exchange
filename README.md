# Currency Exchange Rate Viewer

This is a React application that displays real-time foreign exchange rates using the Fixer API. The project follows a Model-View-Controller (MVC) architecture and is designed to help users interact with multiple currencies, convert amounts, and search for specific exchange rates. This guide will help you set up and run the project locally.

## Table of Contents 

- Features
- Architecture Overview
- Prerequisites
- Installation
- Running the Application
- Project Strutcture
- Environment Variable
- How to Use the Application
- API Information
- Known Issues and Future Enhancements
- Credits
  

### Features


- Displays real-time exchange rates relative to a fixed base currency (EUR).
- Users can:
    - Input an amount in the base currency.
    - Search for specific currencies.
    - View the exchange rates for all available currencies.
- Implements a card-based UI design with modern styling.
- Shows a loading indicator while fetching data and an error message if the API request fails.

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.


### Architecture Overview

This project follows the Model-View-Controller (MVC) architecture:

- Model: Handles API calls and defines data structures.
- Controller: Manages state, business logic, and communication between the Model and the View.
- View: Renders the UI, handles user input, and presents data to the user.

### Prerequisites


Before you can set up and run the project, ensure you have the following installed:


- Node.js (version 14 or higher)
- Yarn (for managing packages)


To check if Node.js and Yarn are installed, run the following commands in your terminal:

      node -v
      yarn -v
      

### Installation

1. Clone the Repository:

   git clone https://github.com/your-username/currency-exchange-viewer.git

2. Navigate to the Project Directory:

   cd currency_exchange

3. Install Dependencies:

   yarn install
   

   This command will install all the packages listed in the package.json file.

## Running the Application

yarn start

## What Happens Next?

- Open your browser and go to: http://localhost:3000
- You should see the Currency Exchange Rate Viewer application running.
- If the server starts successfully, it will automatically open the app in your default browser.

## Environment Variables

The project uses the Fixer API to fetch exchange rates. You will need an API key to use it.

You can change the API key manually if is needed at model/CurrencyModel.tsx and replace the key or create a .env file from its root


## API Information

- The app uses the Fixer API for fetching real-time exchange rates.
- Default Base Currency: The base currency is fixed to EUR.
- Note: The free plan of Fixer only allows using EUR as the base currency. Upgrading to a paid plan enables other base currencies.


## credits

- Fixer API: For providing exchange rate data.
- React: For making this UI interactive and easy to build.
  
