/* eslint-disable no-multiple-empty-lines */
const offeringsURL = fetch('https://acme-users-api-rev.herokuapp.com/api/offerings')
const companiesURL = fetch('https://acme-users-api-rev.herokuapp.com/api/companies')
const productsURL = fetch('https://acme-users-api-rev.herokuapp.com/api/products')

const render = (data) => {
    const products = data[0]
    const offerings = data[1]
    const companies = data[2]
    products.map(product => {
        let obj = {}
        const id = product.id
        obj.product = product
        obj.offerings = offerings.filter(offering => offering.productId === id)
        obj.offerings.company = obj.offerings.forEach(offering => {
            const company = offering.find(company => company.id === offering.companyId)
        })
            
            



        console.log(obj)
        
    })
    //console.log(data)
}







    

Promise.all([productsURL, offeringsURL, companiesURL])
    .then( response => Promise.all(response.map(item => item.json())))
    .then( data => render(data))
        
        // console.log(products.length)
    





