# Automated Static Chat Bot Built using React chat-bot-kit package
## As the Project is completely built on **react**, **nodejs** is mandatory to run the project.
## You can see how to install node here [Node Required](https://www.nodejs.org)
### Install NPM also if not installed while installing node
# Running and Testing Locally
* Clone my repository or Download the zip File
* In your Terminal run the following commands
* npm install
* npm start to start your server
> hello
# Error Handling
* After all the above steps if there is any error 
* then goto your node_modules/react-scripts/scripts/start.js file
* remove the ! sign in the SKIP_PREFLIGHT_CHECK 
* It Should Work Fine
# Making Your Own Changes
* To Generate more Widget items add them in [AdmissionInfo.js](src/components/AdmissionInfo/AdmissionInfo.js)
* Define Your Widgets in [config.js](src/config.js)
* Add Function Definition to handle widgets in [ActionProvider.js](src/ActionProvider.js)
* Add Cases to handle input text in [MessageParser.js](src/MessageParser.js) and give call to the functions defined in
ActionProvider.js
# Deployment
* Create an account for Deployment Severs like [vercel](https://www.vercel.com) or [heroku](https://www.heroku.com) and deploy
* I Recommend Vercel
* run command vercel --public to upload from your terminal
