# ChatBot
# [Node Required](https://www.nodejs.org)
Run in Terminal
* npx create-react-app chatbot
* cd chatbot
* npm add react-chatbot-kit
* npm start
# Error Handling
* After all the above steps if there is any error 
* then goto your node_modules/react-scripts/scripts/start.js file
* remove the ! sign in the SKIP_PREFLIGHT_CHECK 
* It Should Work Fine
# Making Your Own Changes
* To Generate more Widget items add them in [AdmissionInfo.js](https://www.github.com/shreyasY2k/chatBot/tree/master/src/components/AdmissionInfo/AdmissionInfo.js)
* Define Your Widgets in [config.js](https://www.github.com/shreyasY2k/chatBot/tree/master/src/config.js)
* Add Function Definition to handle widgets in [ActionProvider.js](https://www.github.com/shreyasY2k/chatBot/tree/master/src/ActionProvider.js)
* Add Cases to handle input text in [MessageParser.js](https://www.github.com/shreyasY2k/chatBot/tree/master/src/MessageParser.js) and give call to the functions defined in
ActionProvider.js
# Deployment
* Create an account for Deployment Severs like [vercel](https://www.vercel.com) or [heroku](https://www.heroku.com) and deploy
* run command vercel --public to upload from your terminal
