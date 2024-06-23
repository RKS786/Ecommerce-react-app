# Ecommerce React App

An ecommerce application built with React, Redux, and JSON Server. This application allows users to view products, add them to a cart, and sort products by price. Administrators can add, update, and delete products.

## Features

- View a list of products
- Sort products by price
- Add products to a cart
- Administrators can add, update, and delete products

## Technologies Used

- React
- Redux
- JSON Server
- Axios
- React Toastify
- CSS (for styling)

## Setup and Installation

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone [https://github.com/RKS786/Ecommerce-react-app.git]
    ```

2. Navigate to the project directory:

    ```bash
    cd ecommerce-react-app
    ```

3. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4. Start JSON Server:

    ```bash
    npx json-server --watch db.json --port 5000
    ```

    This will start JSON Server and watch the `db.json` file for changes.

5. Start the React application:

    ```bash
    npm start
    # or
    yarn start
    ```

    The application should now be running on `http://localhost:3000`.

## Project Structure

- `src/`: Contains all the source code for the React application
  - `components/`: Contains reusable React components
    - `ProductItem/`: Component for displaying individual product items
    - `ProductList/`: Component for displaying a list of products
  - `pages/`: Contains page components
    - `HomePage.js`: The home page of the application
    - `AddProductPage.js`: The page for adding new products
    - `CartPage.js`: The page for viewing the cart
  - `redux/`: Contains Redux-related files
    - `actionCreators.js`: Redux action creators
    - `actionTypes.js`: Redux action types
    - `reducers.js`: Redux reducers
  - `UI/`: Contains UI components like loaders
  - `App.js`: Main application component
  - `index.js`: Entry point for the React application

## Usage

### Viewing Products

- Navigate to the home page to view a list of products.
- Use the sort button to sort products by price.
- Click the "Add to Cart" button to add a product to the cart.

### Adding Products

- Navigate to the "Add Product" page.
- Fill in the product details and click the "Add Product" button to add the product.

### Viewing the Cart

- Navigate to the "Cart" page to view products added to the cart.

### Managing Products

- As an administrator, you can add, update, or delete products.
- Click the "Edit" button to edit a product's details.
- Click the "Delete" button to remove a product.

### Sorting Products

- Click the sort button to sort products by price in ascending order.
- Click the cancel button next to the sort button to remove sorting.


## Contact

If you have any questions or feedback, please contact us at [er.rahul0314@gmail.com].
