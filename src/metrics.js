const AWS = require("aws-sdk")

let cw = new AWS.CloudWatch({apiVersion: "2010-08-01"})

function myMetrics(metricName, name, value) {
  //here cw is a mockConstructor
  cw.putMetricData(params={}, function(err, data) {
    if (err) {
      console.log("Error")
    } else {
      console.log("Success")
    }
  })
}

module.exports.myMetrics = myMetrics
