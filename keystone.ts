import { config, createSchema } from "@keystone-next/keystone/schema";
import 'dotenv/config';
import { extendGraphqlSchema } from "./mutations";

import { Cart } from "./schemas/Cart";
import { CartItem } from "./schemas/CartItem";
// import { extendGraphqlSchema } from "./mutations";

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/eCamellDB';

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true
    }
  },
  db: {
    adapter: "mongoose",
    url: databaseURL
  },
  lists: createSchema({
    Cart,
    CartItem
  }),
  extendGraphqlSchema: extendGraphqlSchema,
  ui: {
    // Show the UI to users that has access
    isAccessAllowed: ({ session }) => {
      return true
;    }
  },
  
})
