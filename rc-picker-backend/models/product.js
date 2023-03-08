"use strict"

const getParts = require("../index")
const getProducts = require("../fullscraper")

class Product {

    // static async getAllParts(page_num){
    //     if (page_num === undefined){
    //         const result = await getParts(`https://traxxas.com/products/search?f[0]=field_categories%3A110095&items_per_page=100&page=1`)
    //         return result
    //     }
    //     const result = await getParts(`https://traxxas.com/products/search?f[0]=field_categories%3A110095&items_per_page=100&page=${page_num}`)
    //     return result
    // }

    static async getSearch(term, page){
        const result = await getParts(`https://traxxas.com/products/search?keyword=${term}&sort_by=search_api_relevance&sort_order=DESC&items_per_page=100`)
        return result
    }
    // ADD A NEW ROUTE FOR NEXT PAGE
    //https://traxxas.com/products/search?keyword=rustler&sort_by=search_api_relevance&sort_order=DESC&items_per_page=25&page=1

    static async getAllProducts(){
        const result = await getProducts('https://traxxas.com/products/showroom')
        return result
    }

}

module.exports = Product