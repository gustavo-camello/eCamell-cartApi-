import { graphQLSchemaExtension } from "@keystone-next/keystone/schema";
// import checkout from "./checkout"

export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: `
    type mutation {
      checkout(token: String!): Order
    }
  `,
  resolvers: {
    Mutation: {
      // checkout
    }
  }
})
