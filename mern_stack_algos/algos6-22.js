const object1 = {
    closedCreditMemos: [],
    closedDeliveryOrders: [],
    closedPickupOrders: [
        { id: 112, type: "pickup" },
        { id: 117, type: "pickup" },
    ],
    openCreditMemos: [],
    openDeliveryOrders: [
        {
            id: 123,
            type: "delivery",
            gateCode: "#2552",
        },
        {
            id: 153,
            type: "delivery",
            instructions: "Place in secure delivery box.",
        },
    ],
    openPickupOrders: [
        {
            id: 123,
            type: "pickup",
        },
    ],
    returnPickupOrders: [],
};

const expected1 = [
    { id: 112, type: "pickup" },
    { id: 117, type: "pickup" },
    { id: 123, type: "delivery" },
    { id: 153, type: "delivery" },
    { id: 123, type: "pickup" },
];

/**
 * Takes an object containing arrays of objects and places all the nested
 * objects into a new one-dim array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} o Containing arrays of objects.
 * @returns {Object[]} An array of objects.
 */
function flattenObjectOfArrays(obj) {
    const filtered = Object.entries(obj).filter(x => x[1].length > 0)
    const res = filtered.reduce((res, [, orders]) => res.concat(orders.map(order => ({ id: order.id, type: order.type }))), [])
//                             callback |                        
    return res
}


function flattenObjectOfArrays(orderObj) {
    const result = []
    for (const order in orderObj) {
        const element = orderObj[order];
        for (const items of element) {
            result.push({ id: items.id, type: items.type })
        }
    }
    return result.sort((a, b) => a.id - b.id)
}



console.log(flattenObjectOfArrays(object1), 'expected => ', expected1)

/*****************************************************************************/