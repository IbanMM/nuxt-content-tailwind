const fs = require('fs')
const productsNumber = 200

for(let i = 0; i < productsNumber; i++) {

    let egg = ''

    if(i==66||i==77||i==55) {

        egg = "styx river"
    }

    const product = {
        
        "name": `Producto ${i} ${egg}`,
        "id": i,
        "searchmeta": `${i} producto ${egg}`,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse justo magna, fringilla nec nisi nec, suscipit aliquet lacus. Nulla nec nibh nec elit tincidunt facilisis sed non lorem. Nam ac leo sit amet velit fringilla sagittis. Nulla convallis elementum sem, eu bibendum eros tempus porttitor. Sed sem urna, sodales at enim vestibulum, tempus sollicitudin libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec rhoncus vitae nibh vitae mollis. Mauris eu tellus faucibus, consectetur felis nec, viverra magna. Duis sodales ex est, ut consectetur mauris fermentum a.",
        "excerpt": `Excerpt for product ${i}`,
        "image": "https://placeimg.com/900/900/tech/sepia",
        "imagexl": "https://placeimg.com/1800/1800/tech/sepia"

    }
    
    const productData = JSON.stringify(product)

    fs.writeFile(`../content/products/product${i}.json`, productData, 'utf8', (err) => {

        if (err) {
            throw err
        }

        console.log("JSON de producto ok")

    })

}
