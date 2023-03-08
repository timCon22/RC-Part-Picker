"use strict"

const { response } = require("express")
const express = require("express")
const router = new express.Router()
const Product = require("../models/product")

router.get("/all", async function (req, res, next) {
    try {
        const result = await Product.getAllProducts()
        return res.send(result)
    } catch (e) {
        return next(e)
    }
})

router.get("/:handle", async function (req, res, next) {
    try {
        const result = await Product.getSearch(req.params.handle)
        return res.send(result)
    } catch (e) {
        return next(e)
    }
})

module.exports = router