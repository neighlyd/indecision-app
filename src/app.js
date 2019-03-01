console.log('App.js is running!');

let app = {
    title: 'Random',
    subTitle: 'Subtitle Goes Here'
}

// JSX == Javascript XML
let template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subTitle}</p>
    </div>
);

let user = {
    name: 'Dustin Neighly',
    age: 36,
    loc: 'Seattle'
}

let templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.loc}</p>
    </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);