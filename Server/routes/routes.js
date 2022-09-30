 const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const router = express.Router()

const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-Imagem-' + file.originalname)
    }
})

const fileUpload = multer({
    storage: diskstorage
}).single('image')


const db = require('../server.js')


router.get('/images/get', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.status(500).send('server error')
        conn.query("SELECT id,type,name,data FROM IMAGE", (err, rows) => {
            if(err) return res.status(500).send('server error')

            rows.map(img => {
                fs.writeFileSync(path.join(__dirname, '../dbimages/' + img.id + ".png"), img.data)                
            })

            const imagedir = fs.readdirSync(path.join(__dirname, '../dbimages'))

            res.send(imagedir)
            // for (let len = 0; len < rows.length ; len++){
            //      res.send(rows[len]["id"])
            // }
            
        })

    })
    
})


router.post('/images/post', fileUpload,(req, res) => {

    req.getConnection((err, conn) => {
        if(err) return res.status(500).send('server error')
        
        const nome_receita = req.body.Nome
        const modo_preparo = req.body.Preparo
        const ingredientes = req.body.Ingredientes
        const categoria = req.body.Categoria

        const type = req.file.mimetype
        const name = req.file.originalname
        const data = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename))

        conn.query('INSERT INTO image set ?', [{nome_receita,modo_preparo,ingredientes,categoria,type, name, data}], (err, rows) => {
            if(err) return res.status(500).send('server error')

            res.send("Imagem Salva")
        })

   
    })
    
})

router.get('/images/verReceitas/:id', (req, res) => {
    req.getConnection((err, conn) => {
        let index = req.params.id
        let query = `SELECT nome_receita,modo_preparo,ingredientes,categoria FROM IMAGE where id = ${index}`
        if(err) return res.status(500).send('server error')
        conn.query(query, (err, rows) => {
            if(err) return res.status(500).send('server error')
            res.json(rows)
        })

    })
    
})


module.exports = router