const appRoot = document.getElementById('app');

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisible = this.handleToggleVisible.bind(this);
        this.state = {
            visible: false
        };
    }
    
    handleToggleVisible() {
        this.setState((prevState) => {
            return {visible: !prevState.visible}
        })
    }

    
    render(){
        return(
            <div>
                <h1>Toggle Visiblity</h1>
                <button onClick={this.handleToggleVisible}>
                    {this.state.visible ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visible && (
                    <div>
                        <p>Hey, these are details you can see.</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, appRoot);

// const app = {
//     visible: false
// }

// const toggleVisible = () => {
//     app.visible = !app.visible;
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Toggle Visiblity</h1>
//             <button onClick={toggleVisible}>
//                 {app.visible ? 'Hide Details' : 'Show Details'}
//             </button>
//             {app.visible && (
//                 <div>
//                     <p>Hey, these are details you can see</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot)
// }

// render();