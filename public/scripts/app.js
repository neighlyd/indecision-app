'use strict';

console.log('App.js is running!');

var app = {
    title: 'Random',
    subTitle: 'Subtitle Goes Here',
    options: ['One', 'Two']

    // JSX == Javascript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subTitle && React.createElement(
        'p',
        null,
        app.subTitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    )
);

var user = {
    name: 'Dustin Neighly',
    age: 36,
    loc: 'Seattle'
};

var getLocation = function getLocation(loc) {
    if (loc) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            loc
        );
    }
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.loc)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
