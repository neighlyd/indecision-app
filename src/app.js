console.log('App.js is running!');

const app = {
    title: 'Random',
    subTitle: 'Subtitle Goes Here',
    options: ['One', 'Two']
}

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderChangeApp();
    }
}

const removeAll = () => {
    app.options = [];
    renderChangeApp();
}

const appRoot = document.getElementById('app');

const renderChangeApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove Options</button>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
        );
        
    ReactDOM.render(template, appRoot)
};

renderChangeApp();

