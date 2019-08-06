# react-typescript-demo
This is a demo app proving how to load 10K contacts into a select box

# Node version

Node.js: Minimum 10.16.1 - For upgrade refer to https://nodejs.org/en/

# Task description
1. Code a small node.js app with the frontend framework of your choice, it should load a list of 10k contacts “name, phone number, email” from a json file into a html dropdown component asynchronously
2. Unit test with a test framework of your choice
3. Describe some performance enhancement alternatives if you had more time to complete the task

# How to run the app
1. Clone
2. cd contacts-generator && npm install && node index.js // generating contacts.json file
3. cd ../frontend && npm install && npm start
 
# Performance enhancenments
As the rendering depends on *react-virtualized-select* package capabilities there is not much to do with loading/rendering performance. Tested it on my computer and it is lightning fast.

# Demo
Demo can be viewed here: https://www.blockspire.com/bequant-coding-test/
