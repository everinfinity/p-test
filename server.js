// const express = require("express");
// const request = require("postman-request");
// const cors = require("cors");
// const axios = require("axios");

// const ProxyURL = "https://api.eventmeet.xyz";

// const app = express();

// app.use(cors({
//   origin: ["http://localhost:3000"],
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
// }))

// app.get("/test", (req, res) => {
//   res.send("test proxy")
// })

// // app.use(async (req, res) => {

// //   try {
// //     const resp = await axios({
// //       url: `${ProxyURL}${req.url}`,
// //       method: req.method,
// //       data: req.body,
// //       header: req.header
// //     });
// //     res.send(resp)
    
// //   } catch (error) {
// //     console.log(error)
// //     res.status(403).send(error)
// //   }
// // })

// // app.get("*", (req, res) => {
// //   res.send("test")
// // })

// app.use((req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "*");
//     request({
//       url: `${ProxyURL}${req.url}`
//     }).on("error", function(e) {
//       res.end("Error occurred while creating server")
//     }).pipe(res);
// });

// app.listen(80)




const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({ 
    target: 'https://upwork.com',
    changeOrigin: true, 
    ssl: {
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
} }));
app.listen(3000);