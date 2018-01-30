# ServerlessAPI
##Requirements:
- AWS Account
- Access Key & Access Secret for your AWS Account

Let's Go
##Install serverless on your machine
npm install -g serverless

##Initialize a new serverless project
serverless create -t aws-nodejs

##Add your aws credentials
serverless config credentials --provider aws --key KEY_HERE --secret SECRET_HERE

##Deploy your application
serverless Deploy

##Check logs
serverless logs -f NAME_OF_FUNCTION
