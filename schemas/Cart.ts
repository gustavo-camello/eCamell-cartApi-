import { list } from "@keystone-next/keystone/schema";
import {text, relationship} from "@keystone-next/fields";

export const Cart = list({
  fields: {
    customerId: text({isRequired: true, isUnique: true}),
    cartItems: relationship({ref: 'CartItem.cart', many: true})
  },
})
