import express from 'express';

const app = express()
const port = process.env.PORT || 3000

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'ultima nova pro',
            price: 3000
        },
        {
            id: 2,
            name: 'Ultima Beatz 355',
            price: 943
        },
        {
            id: 3,
            name: 'ultima circle',
            price: 678
        },
        {
            id: 4,
            name: 'Ultima Boom 141 ANC',
            price: 564
        },
        {
            id: 5,
            name: 'Ultima Limited Edition Box',
            price: 2099
        }
    ]

    if (req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts)
        return;
    }

    setTimeout(() => {
        res.send(products)
    }, 3000)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});