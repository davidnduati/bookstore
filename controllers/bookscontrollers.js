const config = require('../config')
require('dotenv').config()
const mssql = require('mssql')




 async function  allbooks(req, res) {
        const sql = await mssql.connect(config)
        if (sql.connected) {
            const books = sql.query('SELECT * FROM Books')
            const data = (await books).recordset
            res.json({
                results: data
            })

        } else {
            (req, res) => {
                res.send('failed to connect to database')
            }
        }
    }
    async function get1book(req, res){
        const sql = await mssql.connect(config)
        if (sql.connected) {
            const bookid = req.params.id;
            try {
                const result = sql.query('SELECT * FROM BOOKS WHERE BookID = ' + bookid)
                const book = (await result).recordset
                res.status(200).json({
                    success: true,
                    message: 'got the book successfully',
                    results: book
                })
            } catch (error) {
                res.send(error)
                console.log(error)
            }
        } else {
            (req, res) => {
                res.send('failed to connect to database')
            }
        }

    }
    async function createbook (req, res) {
        const sql = await mssql.connect(config)
        if (sql.connected) {
            const { BookID, Title, Author, PublicationYear, Status } = req.body
            try {
                let result = await sql.request()
                    .input("BookID", BookID)
                    .input("Title", Title)
                    .input("Author", Author)
                    .input("PublicationYear", PublicationYear)
                    .input("Status", Status)
                    .execute("createnewbook")

                res.status(200).json({
                    success: true,
                    message: 'created new book successfully',
                    results: result
                })



            } catch (error) {
                res.send(error)

            }
        }else {
            (req, res) => {
                res.send('failed to connect to database')
            }
        }
    }

module.exports={get1book,createbook,allbooks}