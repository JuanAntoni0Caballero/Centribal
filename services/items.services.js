const axios = require('axios')

class ItemsServices {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:3000'
        })
    }


    getAllItems() {
        return this.api.get('/items')

    }

    getOneItem(itemId) {
        return this.api.get(`/items/${itemId}`)
    }

    saveItem(itemData) {
        return this.api.post(`/items`, itemData)
    }

    editItem(itemId, itemData) {
        return this.api.put(`/items/${itemId}`, itemData)
    }

    deleteItem(itemId) {
    }
}

module.exports = ItemsServices