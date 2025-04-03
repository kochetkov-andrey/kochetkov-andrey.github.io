new Vue({
  el: '#all-apples',
  data: {
    products: [
      {
        id: 1,
        title: 'Apple Golden Delicious',
        short_text: 'Sweet, crisp and aromatic',
        image: 'images/apple1.jpg',
        desc: 'Golden Delicious is a sweet, crisp and aromatic apple variety with yellow-green skin. Perfect for fresh eating and salads.'
      },
      {
        id: 2,
        title: 'Apple Granny Smith',
        short_text: 'Tart flavor and bright green skin',
        image: 'images/apple2.jpg',
        desc: 'Granny Smith apples are known for their tart flavor and bright green skin. Excellent for baking and cooking.'
      },
      {
        id: 3,
        title: 'Apple Red Delicious',
        short_text: 'Classic red, mildly sweet',
        image: 'images/apple3.jpg',
        desc: 'Red Delicious features deep red color and mildly sweet flavor. Great for snacks and lunch boxes.'
      },
      {
        id: 4,
        title: 'Apple Fuji',
        short_text: 'Super sweet and crisp',
        image: 'images/apple4.jpg',
        desc: 'Fuji apples are exceptionally sweet with crisp texture. Ideal for fresh eating and juicing.'
      },
      {
        id: 5,
        title: 'Apple Honeycrisp',
        short_text: 'Explosively crisp and juicy',
        image: 'images/apple5.jpg',
        desc: 'Honeycrisp offers explosive crispness and perfect balance of sweetness and acidity. Premium eating apple.'
      }
    ],
    product: [],
    btnVisible: 0
  },
  methods: {
    getProduct() {
      const id = window.location.hash.substring(1);
      if (id) {
        this.product = this.products.find(item => item.id == id) || [];
      }
    },
    addToCart(id) {
      let cart = JSON.parse(localStorage.getItem('cart')) || {};
      if (!cart[id]) {
        cart[id] = 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        this.btnVisible = 1;
      }
    },
    checkInCart() {
      const id = window.location.hash.substring(1);
      if (id) {
        let cart = JSON.parse(localStorage.getItem('cart')) || {};
        this.btnVisible = cart[id] ? 1 : 0;
      }
    }
  },
  mounted() {
	localStorage.setItem('products', JSON.stringify(this.products));
    this.getProduct();
    this.checkInCart();
  }
});
