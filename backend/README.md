# Reactjs Code Challenge - Backend

This is backend api to the code challenge.

## Stack

- Nodejs
- Express
- Apollo Server
- GraphQL

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
APP_PORT=4000
```

### Start the server:

- use `dev` for development mode
- use `prod` for production mode

```
yarn run dev or prod
```

## GraphQL

Api endpoints: [http://localhost:4000/graphql](http://localhost:4000/graphql)

**Data**

The database is a static json file.

## Structure

```
Root
├── README.md
├── .gitignore
├── package.json
├── index.js
├── .env.example
└── src
  ├── index.js
  ├── graphql
  │   ├── resolvers
  │   └── typeDefs
  ├── functions
  │   └── products.js
  └── database
      └── data.json
```

- `index.js` -- server of this project
- `data.json` -- test database
- `graphql` -- contains the `queryType` and `resolvers`
- `functions` -- controllers for the resolvers
- `graphql/resolvers` -- all the resolvers to resolve the Type data
