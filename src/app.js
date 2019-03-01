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

const getLocation = (loc) => {
    if (loc) {
        return <p>Location: {loc}</p>
    } 
}

let templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.loc)}
    </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);