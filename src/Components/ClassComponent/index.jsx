import React from 'react';

class ClassComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
            fav_color: 'Red',
        }
        this.changeColor.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        console.log("sdflsdkjf");
    }

    changeColor = () =>{
        this.setState({fav_color: 'Blue'})
    }

    render(){
        return (
            <>
                <h1>Counter</h1>
                <h2>Color : {this.state.fav_color}</h2>
                <button
                    type="button"
                    onClick={this.changeColor}
                >
                    Change Color
                </button>

                <Color color={this.state.fav_color} />
            </>
        )
    }
}

class Color extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
               <h1>{this.props.color}</h1>
            </>
        )
    }
}

export default ClassComponent;