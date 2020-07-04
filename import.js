const { SiteClient } = require("datocms-client")
const client = new SiteClient("3c4e1ffaa67df9b4cff55d78cd9f58")
const config = require("./gatsby-config")

config.siteMetadata.products.reduce(
  (chain, product) =>
    chain.then(image =>
      client.items.create({
        name: product.name,
        image: product.image,
        price: product.price,
        itemType: "256135",
      })
    ),
  Promise.resolve()
)
