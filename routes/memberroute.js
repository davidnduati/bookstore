const express = require('express')
const{getAllMembers,get1member,createnewmember}=require('../controllers/memberscontroller')

const memberroute = express.Router();

memberroute.get('/getAllMembers',getAllMembers)
memberroute.get('/get1member/:id',get1member)
memberroute.post('/createnewmember',createnewmember)


module.exports = memberroute