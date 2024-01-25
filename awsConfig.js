const AWS = require("aws-sdk");

const dynamoose = require("dynamoose");
const dotenv = require("dotenv");
dotenv.config();

AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION,
    maxRetries: 2,
    httpOptions: {
        timeout: 60000,
        connectTimeout: 60000
    }
});

const ddb = new dynamoose.aws.ddb.DynamoDB({
    "credentials": {
        "accessKeyId": process.env.ACCESS_KEY_ID,
        "secretAccessKey": process.env.SECRET_ACCESS_KEY
    },
    "region": process.env.REGION
});

dynamoose.aws.ddb.set(ddb);