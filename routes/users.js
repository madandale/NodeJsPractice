var express = require('express');
const fs = require('fs')
path = require('path'),    
filePath = path.join(__dirname, 'Resources/test.txt');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let content
  try {
    content = fs.readFileSync(filePath, 'utf-8')
    
    console.log("file path ="+filePath+" path "+path);

    
  } catch (ex) {
    console.log(ex)
  }
  
  console.log(content)



  res.send('respond with a resource');
});

module.exports = router;
