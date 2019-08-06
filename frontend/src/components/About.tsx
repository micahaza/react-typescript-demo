import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>About</h1>
          <div>
            <p>1. Code a small node.js app with the frontend framework of your choice, it should load a list of 10k contacts “name, phone number, email” from a json file into a html dropdown component asynchronously</p>
            <p>2. Unit test with a test framework of your choice</p>
            <p>3. Describe some performance enhancement alternatives if you had more time to complete the task</p>
          </div>
      </div>
    );
  }
}