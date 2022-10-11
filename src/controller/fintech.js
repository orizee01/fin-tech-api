const db = require('../config/config')
const query = require('../queries/fintech.js')

const fetchFintechs =  async(req, res) => {
 try{
  const fintech = await db.any(query.getAllCompanies)
  return res.status(200).json({
   status:'success',
   message: 'companies fetched successfully',
   data: fintech
  })
 } catch (error) {
  console.log(error)
  return error
 }
}

module.exports = fetchFintechs