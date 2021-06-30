export default {
    addToCart(context, payload) {
        context.commit('addProductToCart', payload);
    },
    removeFromCart(context, payload) {
        context.commit('removeProductFromCart', payload);
    }
};
