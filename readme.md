# Ethereum Docs Website

## Installation

- Clone the repository
- Run meteor: `meteor`

## Deployment

- Install Meteor Up globally: `npm install -g mup`
- Create a `mup.json` file
- Run `mup setup`
- Run `mup deploy`

Example of the `mup.json` file:

```
{
  "servers": [
    {
      "host": "10.20.30.40",
      "username": "ubuntu",
      "pem": "~/.ssh/ethereum.pem",
      "env": {}
    }
  ],
  "setupMongo": false,
  "appName": "ethereum-docs",
  "app": "~/Projects/Ethereum/ethereum-docs",
  "env": {
    "PORT": 80,
    "ROOT_URL": "http://10.20.30.40",
    "MONGO_URL": "mongodb://mongouser:mongopass@10.20.30.40:27017/ethereum-docs"
  },
  "deployCheckWaitTime": 15,
  "enableUploadProgressBar": true
}
```
