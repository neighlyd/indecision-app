const appRoot = document.getElementById('app');

const app = {
    visible: false
}

const toggleVisible = () => {
    app.visible = !app.visible;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Toggle Visiblity</h1>
            <button onClick={toggleVisible}>
                {app.visible ? 'Hide Details' : 'Show Details'}
            </button>
            {app.visible && (
                <div>
                    <p>Hey, these are details you can see</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot)
}

render();