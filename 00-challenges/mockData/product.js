import faker from 'faker'
faker.locale = 'en'

export const getProdRandom = id => ({
    id,
    title: faker.commerce.product(),
    price: faker.commerce.price(),
    thumbnail: `${faker.image.imageUrl()}/${id}` 
})

