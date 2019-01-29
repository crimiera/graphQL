var { graphql, buildSchema } = require('graphql');


var schema = buildSchema(`
  type Query {
    info: String!
    user:User!
    users: [User!]!
    userId(id: ID!): User
  }

  type Mutation {
      postUser(name: String!, email: String!, password:String! ): User!
      updateUser(name: String!,email: String!,password:String!): User
      deleteUser(id: ID!): User
  }

  type User {
    id: ID!
    name: String! 
    email: String!
    password:String! 
    Meetings:[Meeting!]
  }

  type Meeting {
    id: ID!
    title: String!
    description: String!
    duration:Int,
    suggested:[Date!]!
  }

  type Date{
      timestamp:Int!,
      date:String!
  }
`);

module.exports = schema;