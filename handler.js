'use strict';
var http = require('http');
var https = require('https');
var request = require('request');

module.exports.doGet = (event, context, callback) => {
  var url = "https://jsonplaceholder.typicode.com/posts/1";
  https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      body = JSON.parse(body);
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: body
        }),
      };
      callback(null, response);
    });
});
};

module.exports.doPost = (event, context, callback) => {

  var jsonObject = {
        title: 'foo',
        body: 'bar',
        userId: 1
      };
  request({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "POST",
      json: true,   // <--Very important!!!
      body: jsonObject
  }, function (error, response, body){
      console.log(response);
      const responseCallback = {
        statusCode: 200,
        body: JSON.stringify({
          message: body
        }),
      };

      callback(null, responseCallback);

  });





  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
