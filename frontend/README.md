# Reactjs Code Challenge - Frontend

This is frontend to the code challenge.

## Stack

- React 17
- React Router
- Redux Toolkit
- Apollo Client
- Graphql
- Styled Components

## Requirements

`nodejs` must be installed.

## Get Started

### Installing of dependencies:

```
yarn
```

### Set up the environment:

Clone the `.env.example`, rename to `.env` and update the file.

```
API_URL=http://localhost:4000
```

### Start application:

```
yarn start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Structure

```
Root
├───Assets
│   └───Icons
├───Components
│   ├───Base
│   │   ├───Button
│   │   ├───Image
│   │   ├───Input
│   │   ├───Link
│   │   ├───Modal
│   │   └───Section
│   ├───Layout
│   │   ├───Card
│   │   ├───CardDetail
│   │   ├───FloatSidebar
│   │   ├───Footer
│   │   ├───Header
│   │   ├───ImageGrid
│   │   ├───SearchBar
│   │   ├───SliderImages
│   │   └───ViewStyle
│   └───Module
│       ├───ProductInfoFloat
│       ├───ProductsList
│       ├───ProductsRow
│       ├───ProductView
│       └───SearchProducts
├───Hooks
├───Pages
│   ├───Home
│   ├───ProductDetail
│   └───Products
├───Requests
├───Router
├───Services
├───Store
│   └───Reducers
├───Styled
└───Utils
```
