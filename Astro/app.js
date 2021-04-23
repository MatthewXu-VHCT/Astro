//npm packages installed
const dotenv = require('dotenv').config();
const express = require('express');
const MongoClient = require('mongodb').MongoClient
const fetch = require('node-fetch');

const fs = require('fs');
const app = express();
const port = 7000;


//activate an express app and enable parsing of JSON data
app.use(express.json());

//define and attach the url to the folder
app.use('/AstroAPI', express.static('public'));

//listen to HTTP get requests
 const client = new MongoClient(
      //connect mongoDB library to the html
      //process the link from ".env" (a hidden file)
      process.env.DB, {
          //  used to setup Mongo Clients
          useUnifiedTopology: true,
          useNewUrlParser: true
      }
    // let query = encodeURIComponent( req.params.query);
  );

client.connect(err => {
    if (err) {
      console.log(err);
    }

})

//search titles
//search end point
app.get('/AstroAPI/search/:query', (req, res) => {
      //applied a filter here
      let query = {
        title: {
          //pattern,options
          $regex: new RegExp(req.params.query ,"i")
        }
      };
      let projection = {
      }

      //        search in mongoDb for all dragons
      client.db("ProjectIV").collection("Space")
          .find(query)
          .project(projection)
          //transfer the data into an array
          .toArray((err, item) => {
              if (err) {
                  res.send({
                      'error': 'An error has occured'
                  });
              } else {
                  res.send(item);
              }
          });
  })
// })


//classify media_type
// app.get('/AstroAPI/token/:answer', (req, res) => {
//   let answer {
//     media_type: { $eq: 'video'}
//   }
//   // let answer = encodeURIComponent(req.params.answer);
//
//   client.db("ProjectIV").collection("Space")
//       .find(answer)
//       .project(projection)
//       //transfer the data into an array
//       .toArray((err, item) => {
//           if (err) {
//               res.send({
//                   'error': 'An error has occured'
//               });
//           } else {
//               res.send(item);
//           }
//       });
// })

// })

app.listen(port, () => {
  console.log("We are okay: port:" + port);
})
