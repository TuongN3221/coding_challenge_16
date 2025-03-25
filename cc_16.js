// Task 1
const productList = document.getElementById('productList')// Gets HTML element for product list
function fetchProductsThen() {
// Fetches data from supplier's product API
    fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new error('Network Response Was Not OK.')
        }
        return response.json();// Parses response as JSON
    })// Checks if the network response is optimal
    .then(products => {
        products.forEach(product =>{
            const listItem = document.createElement('li')
            listItem.textContent = `${product.title} = $${product.price}`
            productList.appendChild(listItem)
        })
    })
    // Catches any errors that might occur in request
    .catch(error => {
        console.error('There was a problem in the fetch operation:', error)
    })
}