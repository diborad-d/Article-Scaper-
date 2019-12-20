//article.js
module.exports = function(sequelize, DataTypes) {
    var Article = sequelize.define("Example", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return Article;
  };
  const request = require('request');
  const cheerio = require('cheerio');
  const fs = require('fs');
  const writeStream = fs.createWriteStream('post.csv');
  
  // Write Headers
  writeStream.write(`Title,Link,Date \n`);
  
  request('https://news.yahoo.com/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
    
      $('span.StretchedBox').each((i, el) => {
        const title = $(el)
          .find('.post-title')
          .text()
          .replace(/\s\s+/g, '');
       
        writeStream.write(`${title} \n`);
  
      console.log(title);
      });
  
      // console.log(link);
      // console.log(date);
    }
  });

  //css
  .list-group-item {
    line-height: 2.5;
  }
  a:link {
    text-decoration: none;
  }
  
  
  
  
  