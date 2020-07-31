const { User, Product} = require("../models")

class Users
{
    static showUser(req, res) 
    {
        User.findAll({ order: ['id'], include: [{ model: Product }] })
            .then((users) => 
            {
                res.render("users", { users })
            })
            .catch(err => 
                {
                    // console.log(err)
                    res.send(err)
                })
    }

    static delete(req, res) 
    {
        let id = +req.params.id
        User.destroy({ where: { id } })
            .then(() => res.redirect("/users"))
            .catch(err => res.send(err))
    }
}

module.exports = Users