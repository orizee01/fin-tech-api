const express = require('express');
const dotenv = require('dotenv');
//   const finTech = require('./src/finTech.json');
// const bodyParser = require("body-parser");
const fs = require('fs')
const router = require('./src/routes/fintechroutes')
dotenv.config();
const app = express();

const port = process.env.PORT;
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(router)

 // app.use(bodyParser.json());

 //  app.get("/finTech",(req, res) => {

 //   res.send(finTech)
 
 // });


 // form
// app.get('/', (req, res) => {
//     const Path = __dirname + "/methods-public/index.html"
//     res.sendFile(Path)
// })

// get all companies
// app.get('/finTech', (req, res) => {
//     fs.readFile('./src/finTech.json', (err, data) => {
//         if (err) {
//             console.log(err)
//         }
//         res.send(JSON.parse(data))
//         res.end()
//     })
// });


// app.post('/', (req, res) => {
//     const id = Date.now();
//     const company = { ...req.body, id: id }
//     fs.readFile('./src/finTech.json', function (err, data) {
//         const newData = JSON.parse(data)
//         console.log(newData)
//         newData.push(company)
//         fs.writeFile('./src/finTech.json', JSON.stringify(newData), function (err, result) {
//             if (err) console.log('error', err);
//         });
//     });
//     res.send("Company Added")
//     res.end();
// });


// //get company by id
// app.get('/:id', (req, res) => {
//     const { id } = req.params;
//     fs.readFile('./src/finTech.json', (err, data) => {
//         const companies = JSON.parse(data)
//         const company = companies.find((company) => id == company.id)
//         if (company) {
//             res.send(company)
//         } else {
//             res.send(`Company with id: ${id} not found`)
//         }
//     })
// });

// //delete company by id
// app.delete('/:id', (req, res) => {
//     const { id } = req.params;
//     fs.readFile('./src/finTech.json', (err, data) => {
//         const companies = JSON.parse(data)
//         const company = companies.filter((company) => id != company.id)
//         fs.writeFile('./src/finTech.json', JSON.stringify(company), function (err, result) {
//             if (err) console.log('error', err);
//         });
//         if (company) {
//             res.send("Company removed")
//         } else {
//             res.send(`Company with id: ${id} not found`)
//         }
//     })
// })
// //update company by id
// app.patch('/:id', (req, res) => {
//     const { id } = req.params;
//     // console.log(id)
//     const { name, location } = req.body;
//     fs.readFile('./src/finTech.json', (err, data) => {
//         const companies = JSON.parse(data)
//         const selectedComp = companies.find((company) => id == company.id)
//         console.log(selectedComp)
//         if (!selectedComp) {
//             res.send(`Company with id ${id} not found`)
//         }
//         if (name) selectedComp.name = name;
//         if (location) selectedComp.location = location

//         fs.writeFile('./src/finTech.json', JSON.stringify(companies), function (err, result) {
//             if (err) console.log('error', err);
//         });
//         res.send(`Company with ${id} has been updated successfully`)
//     })
// })



 app.listen(port, () =>{
 console.log(`Application running on port:http://localhost:${port}`);
 });


