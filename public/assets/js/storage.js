process.env.AWS_ACCESS_KEY_ID = process.env.AKIAVZH4SBSY23XWL7XU
process.env.AWS_SECRET_ACCESS_KEY = process.env.Taxf
process.env.AWS_REGION = 'us-east-1'

const AWS = require('aws-sdk')
const s3 = new AWS.S3()

var params = {
  Key: 'hello',
  Bucket: process.env.bucketeer,
  Body: new Buffer('Hello, node.js')
}

s3.putObject(params, function put (err, data) {
  if (err) {
    console.log(err, err.stack)
    return
  } else {
    console.log(data)
  }

  delete params.Body
  s3.getObject(params, function put (err, data) {
    if (err) console.log(err, err.stack)
    else console.log(data)

    console.log(data.Body.toString())
  })
})
