function filterProductsByCategory(products) {
    // Return a function that filters products by category
    return function(category) {
        return products.filter(product => product.category === category);
    };
}

// Example usage:

// Array of products
const products = [
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'T-shirt', category: 'Apparel' },
    { id: 3, name: 'Smartphone', category: 'Electronics' },
    { id: 4, name: 'Shoes', category: 'Apparel' },
    { id: 5, name: 'Headphones', category: 'Electronics' }
];

// Create a function to filter products by category
const filterByCategory = filterProductsByCategory(products);

// Example: Filter products by 'Electronics' category
const electronicsProducts = filterByCategory('Electronics');
console.log('Electronics Products:', electronicsProducts);

// Example: Filter products by 'Apparel' category
const apparelProducts = filterByCategory('Apparel');
console.log('Apparel Products:', apparelProducts);
