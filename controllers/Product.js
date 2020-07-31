const { Admin, Product} = require("../models")
const cekStatusHp = require('../helpers/cekStatusHp')
// const { Sequelize } = require("sequelize/types")
// const Op = Sequelize.Op;

class Products
{
    static validate(category, name, stock, price, AdminId) 
    {
        let result = []
        if (!category) 
        {
            let message = "category is required"
            result.push(message)
        }
        if (!name) 
        {
            let message = "name is required"
            result.push(message)
        }
        if (!stock) 
        {
            let message = "stock year is required"
            result.push(message)
        }
        if (!price) 
        {
            let message = "price genre is required"
            result.push(message)
        }
        if (!AdminId) 
        {
            let message = "Admin Id genre is required"
            result.push(message)
        }
        return result
    }

    static validateEdit(category, name, stock, price, AdminId) 
    {
        let result = []
        if (!category) 
        {
            let message = "category is required"
            result.push(message)
        }
        if (!name) 
        {
            let message = "name is required"
            result.push(message)
        }
        if (!stock) 
        {
            let message = "stock year is required"
            result.push(message)
        }
        if (!price) 
        {
            let message = "price genre is required"
            result.push(message)
        }
        if (!AdminId === 'null') 
        {
            let message = "Admin Id genre is required"
            result.push(message)
        }
        return result
    }

    static showProduct(req, res) 
    {
        Product.findAll({ order: ['id'], include: [{ model: Admin }] })
            .then((products) => 
            {
                for(let i = 0; i <products.length; i++)
                {
                    console.log(`${products[i].name} adalah`)
                }
                res.render("products", { products })
            })
            .catch(err => res.send(err))
    }

    static showDetailProduct(req, res) 
    {
        let products = null
        Product.findAll({ order: [['id', 'ASC']], include: [{ model: Admin }] })
            .then((data) => 
            {
                products = data
                return Product.getTotalLaba()
            }).then(total => {
                res.render("detailProducts", { products, total })
                // res.send(total)
            })
            .catch(err => res.send(err))
    }

    static addGet(req, res) 
    {
        if (req.query.error) 
        {
            res.render("addProducts", { err: req.query.error })
        }
        else 
        {
            res.render("addProducts", { err: null })
            // res.send(err)
        }
    }

    static addPost(req, res) 
    {
        const { category, name, stock, price, AdminId } = req.body
        const productObj = { category, name, stock, price, AdminId }
        // console.log(req.body)
       
        Product.create(productObj)
            .then(data => 
                {
                    res.redirect("/products")
                })
            .catch(err => 
                {
                    console.log(err)
                    let arr = []
                    err.errors.forEach(item => arr.push(item.message))
                    // res.send(arr)
                    res.redirect(`/products/add?error=${arr.join(", ")}`)
                })
    }

    static editGet(req, res) 
    {
        let id = +req.params.id
        let product
        Product.findByPk(id)
            .then((data) => 
            {
                product = data
                return Admin.findAll()
            })
            .then(admin => 
            {
                res.render("editProducts", { product, admin, err: null })
            })
            .catch(err => res.send(err))
    }

    static editPost(req, res) 
    {
        const { category, name, stock, price, AdminId  } = req.body
        const productObj = { category, name, stock, price, AdminId  }
        let id = +req.params.id

            Product.update(productObj, { where: { id } })
                .then(data => 
                    {
                        res.redirect("/products")
                    })
                .catch(err => 
                    {
                        console.log(err)
                        let arr = []
                        err.errors.forEach(item => arr.push(item.message))
                        // res.send(arr)
                        res.redirect(`/products/${id}/edit?error=${errMsg.join(", ")}`)
                   })
    }

    static delete(req, res) 
    {
        let id = +req.params.id
        Product.destroy({ where: { id } })
            .then(() => res.redirect("/products"))
            .catch(err => res.send(err))
    }
}

module.exports = Products