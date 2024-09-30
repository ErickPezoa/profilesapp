const axios = require('axios');
const cheerio = require('cheerio');

exports.handler = async (event) => {
  try {
    const { data } = await axios.get('https://bible.usccb.org/daily-bible-reading');
    const $ = cheerio.load(data);

    // Scrape readings from the page
    const readings = $('.content-body').text(); // Adjust selector as needed

    return {
      statusCode: 200,
      body: JSON.stringify({ readings }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error fetching data' }),
    };
  }
};
