"use strict"

exports.handler = (event, context, callback) => {
   console.log("value1 = " + event.key1);
   console.log("value2 = " + event.key2);
   console.log("env.USER = " + process.env.USER);
   callback(null, "success!");
};

