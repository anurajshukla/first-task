// We fetch JSON data using fetch api
fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
.then(response => response.json()) 
// used promises
.then(data => {
    // extract products object from the JSON
    const products = data.products || {};

    // convert object to array and sort by descending popularity
    const dataArray = Object.keys(products).map(key => ({
        id: key,
        ...products[key]
    }));
    dataArray.sort((a, b) => b.popularity - a.popularity);

    // Display products by mapping using foreeach function
    const productContainer = document.getElementById('productContainer');
    dataArray.forEach(product => {
        // Created a div for displaying the data
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <p>Popularity: ${product.popularity}</p>
        `;
        productContainer.appendChild(card);
    });
})
.catch(error => console.error('Error fetching JSON:', error));