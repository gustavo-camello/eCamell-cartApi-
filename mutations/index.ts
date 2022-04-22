import { graphQLSchemaExtension } from "@keystone-next/keystone/schema";
// import addToCart from "./addToCart"

export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: `
    type mutation {
      addToCart(productID: ID) : CartItem
    }
  `,
  resolvers: {
    // Mutation: {
    //   addToCart
    // }
  }
})
