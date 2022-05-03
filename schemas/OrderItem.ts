import { list } from "@keystone-next/keystone/schema";
import {text, relationship, select, integer} from "@keystone-next/fields";

export const OrderItem = list({
  fields: {
    quantity: integer({
      defaultValue: 1,
      isRequired: true
    }),
    productId: text({isRequired: true}),
    price: integer(),
    order: relationship({ref: 'Order.items'})
  },
})
