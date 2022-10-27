const app = Vue.createApp({
    data() {
        return {
            title: '🛒 Shop 🛒 ',
            product_image: './shoe-1.png',
            inventory: 100,
            details: ['50% foam', '30% leather', '20% synthetics'],
            variants: [
                { id: 2234, color: 'white', image: './shoe-1.png' },
                { id: 2235, color: 'black', image: './shoe-2.png' }
            ],
            cart: 0

        }
    },
    methods: {
        add_to_cart() {
            this.cart += 1
        }
    }
})