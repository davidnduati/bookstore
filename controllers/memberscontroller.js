require('dotenv').config()
const mssql = require('mssql');
const config = require('../config')

async function getAllMembers (req, res){
        const sql = await mssql.connect(config);
        if (sql.connected) {
            const members = sql.query('SELECT * FROM dbo.Members')
            const data = (await members).recordset
            res.json({
                results: data
            })

        } else {
            res.send('failed to connect to database')
        }
    }
    async function get1member (req, res)  {
        try {
            const membernum = req.params.id;

            const sql = await mssql.connect(config);
            if (sql.connected) {
                const member = sql.request()
                    .input("memberid", membernum)
                    .execute("dbo.get1member")
                const member1 = (await member).recordset
                res.status(200).json({
                    success: true,
                    results: member1
                })

            }
        } catch (error) {
            res.status(403).json(
                {
                    success: false,
                    message: 'Login again'
                }
            )
        }
    }
    async function createnewmember (req, res)  {

        try {
            const { MemberID, Name, Address, contactNumber } = req.body;


            const sql = await mssql.connect(config)

            if (sql.connected) {
                let results = await sql.request()
                    .input("MemberID", MemberID)
                    .input("Name", Name)
                    .input("Address", Address)
                    .input("contactNumber", contactNumber)
                    .execute('dbo.createnewmember')

                res.status(200).json({
                    success: true,
                    message: "created a new member successfully added member credentials are below",
                    results: results

                })

            }

        } catch (error) {

            res.send("couldnt create the account")
            console.log(error)

        }

    }

module.exports={createnewmember,get1member,getAllMembers}