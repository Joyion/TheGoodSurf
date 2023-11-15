import express from "express";
export const productRouter = express.Router();



productRouter.get(("/"), (req,res) => {
    res.render("product/index")
})

productRouter.get(("/:category"), (req,res) => {
    res.render("product/category")
})

productRouter.get(("/:category/:id"), (req,res) => {
    res.render("product/category/show")
})

productRouter.get(("/"), (req,res) => {
    res.render("product/index")
})


