console.log('App.js is running!');

var template = React.createElement("p", {
    id: "something"
  }, "This is JSX from app.js!");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);