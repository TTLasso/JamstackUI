// const faunadb = require('faunadb');
// const axios = require("axios");
// const secret = process.env.FAUNADB_KEY;
// const q = faunadb.query;
// const client = new faunadb.Client({ secret });
// const fetch = require('node-fetch');

// //
// module.exports = async function getData () {
//     try {
//         const response = await client.query(
//             q.Map(
//                 q.Paginate(
//                     q.Match(
//                         q.Index('all_customers')
//                     )
//                 ),
//                 ref = q.Get(ref)
//             )
//         )
//         return response.data;
//         console.log(response.data);
//     } catch (error) {
//         // res.status(500).json({ error: error.message });
//     }
//     return getData();
// };
