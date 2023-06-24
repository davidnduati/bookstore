require('express')
const config = {
   


  user: "sa",
  password: "Dee2222",
  database:"bookapis",
  server:  "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, 
    trustServerCertificate: true 
  }
}
module.exports = config;


