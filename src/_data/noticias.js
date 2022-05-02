const axios = require("axios");
require('dotenv').config();

module.exports = async function () {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}&pageSize=6&language=es`);
        return response.data;
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};