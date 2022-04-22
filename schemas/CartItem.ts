import { list } from "@keystone-next/keystone/schema";
import {text, relationship, select, integer} from "@keystone-next/fields";

export const CartItem = list({
  // TODO: custom label
  fields: {
    quantity: integer({
      defaultValue: 1,
      isRequired: true
    }),
    productId: text({isRequired: true}),
    // TODO: check this relationship
    cart: relationship({ref: 'Cart.cartItems'}),
    cartId: text({isRequired: true})
  },
})
