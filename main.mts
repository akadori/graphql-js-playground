import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'a',
    fields: {
      hello: {
        type: GraphQLString,
        resolve(hoge, args, context, info) {
          console.log(hoge);
          console.log(args);
          console.log(context);
          console.log(info);
          return 'world';
        },
      },
    },
  }),
});

// console.log(JSON.stringify(schema,null,2));
// schema.getDirectives().forEach(directive => {
//   console.log(directive.name);
//   console.log(directive.args);
//   console.log(directive.description);
//   console.log(directive.locations);
// });


const source = '{ hello }';

graphql({schema, source, rootValue: "te"}).then(result => {
  console.log(result);
});
