# Car Catalog
Coding exercise - Complete version by Jeff

To run the app:
```
npm install
npm start
```

To run tests:
```
npm test
```

Browse at [http://localhost:3000](http://localhost:3000)

## Basic Folder Structures:
    .
    ├── client                   # Client React/Redux app
    ├── server                   # Server Express.js app
    ├── data                     # db files with car related data
    ├── tests                    # Graphql tests
    ├── public                   # Compiled js/css files
    ├── log                      # Server rotate logs
    └── README.md
    
## Main features:
* Using GraphQL as data query/fetch framework.
* Using simple MongoDB-like database instead of plain json files
* Added unit tests for graphQL objects and query
* Properly seperated code into nice structure and easy to extend.
* Using React + Redux on the frontend.
* Using Bootstrap v4 for responsive layout
* Using Styled-components to create reusable components
* Using ES6+ features.
* Using Webpack to do automatic build.
* Using ESLint and fixed all styling issues.
* Added server-side logging, writing records to files under folder /log and rotate daily.

## Further improvements can be done:
* Advanced Webpack configuration to reduce js/css file size, seperate dev/prod environment
* Add React-loadable to split js bundles files
* Add error handling for failed api request / network issues
* Add loading animations during data fetching
* Different port for client and server, add dev server / hot reload for client app
* More tests coverage, eg action/reducers; Automation tests for car search page
