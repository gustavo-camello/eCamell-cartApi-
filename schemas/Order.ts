import { list } from "@keystone-next/keystone/schema";
import {text, relationship, integer, virtual} from "@keystone-next/fields";

export const Order = list({
  fields: {
    // label: virtual({
    //   graphQLReturnType: 'String',
    //   resolver: function(item) {
    //     return "GUSTAVO"
    //   }
    // }),
    total: integer(),
    items: relationship({ref: 'OrderItem.order', many: true}),
    customerId: text({isRequired: true}),
    charge: text()
  },
})
