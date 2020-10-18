module.exports={
    getInventory(req, res) {
        let db = req.app.get('db')
        db.get_inventory().then(response => {
            res.status(200).send(response)
        })
    },
    addProduct(req, res) {
        let db = req.app.get('db')
        let {name, imgurl, price} = req.body
        db.create_product([name, imgurl, price]).then( dbRes => {
            res.status(200).send(dbRes)
            console.log('all good')
        })
    },
    deleteProduct(req,res) {
        let db = req.app.get('db')
        console.log(req.params)
        let {id} = req.params
        console.log(id)
        db.delete_product({id}).then(dbRes => {
            res.status(200).send(dbRes)
            console.log('deleted that junk',id)
        })
    }
}