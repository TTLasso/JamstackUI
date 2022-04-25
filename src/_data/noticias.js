const axios = require("axios");
require('dotenv').config();

module.exports = async function () {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2022-03-25&sortBy=publishedAt&apiKey=${process.env.API_KEY}&pageSize=6`);
        return response.data;
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};