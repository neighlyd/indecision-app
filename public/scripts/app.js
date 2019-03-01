'use strict';

console.log('App.js is running!');

var app = {
    title: 'Random',
    subTitle: 'Subtitle Goes Here'

    // JSX == Javascript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subTitle
    )
);

var user = {
    name: 'Dustin Neighly',
    age: 36,
    loc: 'Seattle'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.loc
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
