console.log('App.js is running!');

const app = {
    title: 'Random',
    subTitle: 'Subtitle Goes Here',
    options: ['One', 'Two']
}

// JSX == Javascript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    </div>
);

const user = {
    name: 'Dustin Neighly',
    age: 36,
    loc: 'Seattle'
}

const getLocation = (loc) => {
    if (loc) {
        return <p>Location: {loc}</p>
    } 
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.loc)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);