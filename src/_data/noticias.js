const axios = require("axios");
require('dotenv').config();

module.exports = async function () {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=mx&apiKey=ef7de1b0f997489195cd40fe164ce3f8&pageSize=6`);
        return response.data;
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};