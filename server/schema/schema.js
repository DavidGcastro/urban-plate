const graphql = require('graphql');
//Schema describes data. How we can interact with our data.

//2 object types books and authors, relationships and how to query.

const { GraphQLObjectType, GraphQLString } = graphql;

//now we can define types!

const BookType = new GraphQLObjectType({
  //what this book type is all about
  name: 'Book',
  //in function to avoid reference errors.
  fields: () => ({
    //needs this type.
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});
