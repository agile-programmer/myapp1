import React, { Component } from 'react';
import Car2 from './components/card2';
import Car1 from './components/cars1';

class App extends Component {
    state = { 
        num: 0,
        value:'',
    } 

    handleQosh = () => {
        this.setState({
            num: this.state.num +1
        })
    }
    handleQosh1 = () => {
        let raqam = Number(this.state.value)
        this.setState({
            num: this.state.num + raqam
        })
    }

    handleAyrish1 = () => {
        let raqam1 =Number(this.state.value)
        this.setState({
            num: this.state.num - raqam1
        })
    }
    handleAyrish = () => {
        this.setState({
            num: this.state.num - 1
        })
    }

    
    handleChang = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() { 
        return (
            <div>
                <Car1 num={this.state.num} handleChang={this.handleChang}/>
                <Car2 
                    handleQosh={this.handleQosh}
                    handleQosh1={this.handleQosh1}
                    handleAyrish1={this.handleAyrish1}
                    handleAyrish={this.handleAyrish}
                />
              
            </div>
        );
    }
}
 
export default App;