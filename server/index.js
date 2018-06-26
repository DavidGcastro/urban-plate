const app = require('express')();
//Allows express to understand graphql and allows express server to have a simple way to use its api.
const graphqlHTTP = require('express-graphql');
//get schema
const schema = require('./schema/schema');

//use it as middleware! an enpoint to interact with our graphql data.
//pass schema, tells graphql about our data and how data will look. What data type, relationships, etc
//ultimate goal is to have request jump into any point in graphql map
app.use(
  '/graphql',
  graphqlHTTP({
    //schema we created in schema.js
    schema,
    //use the tool!
    graphiql: true
  })
);

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});
