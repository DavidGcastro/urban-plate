const graphql = require('graphql');
//Schema describes data. How we can interact with our data.

//2 object types books and authors, relationships and how to query.

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

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

//ROOT QUERIES - how do we get into the graph to get data? Where we can "jump in".
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    //name matters, it is how we look for data in the front end.
    //ex: book{
    //    author
    //      name
    //   }
    //query is called book.
    book: {
      //type of data is book type above.
      type: BookType,
      //Whenever someone makes this query for books, i expect them to pass some args, it's because we are not sure
      //what book they want. Could it be id 1? id 2?
      //this specificies further queries, and its expected.
      //on Front end:
      //book(id:'3'){
      // name
      // genre
      // },
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //the function where we write code to get data from db/other source.
        //will fire when we query.
        //parent = we will use when we look at relationships in data.
        //args = args passed above.
        // we can use args.id;
      }
    }
  }
});

//lets export this so we can use it inside our graphql middleware
module.exports = new GraphQLSchema({
  //pass in query
  query: RootQuery
});
