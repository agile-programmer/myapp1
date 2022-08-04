import React, { Component } from 'react';
import Index from './kerakli/index';
import Index1 from './kerakli/index1';
class App extends Component {
    state = { 
        num: 1,
        view: '',
     } 

     handleQosh = () => {
         this.setState({
         num: this.state.num + 1
         })
     }

     handleAyrish = () => {
         this.setState({
             num: this.state.num - 1
         })
     }

    handleChange = (e) => {
        this.setState({
           view: e.target.value 
        })
    }

    handleQosh1 = () => {
            let a = Number(this.state.view)
            this.setState({
            num: this.state.num + a
            })
    }

    render() { 
        return (
            <>
            <Index num={this.state.num} handleChange={this.handleChange}/>
            <Index1 
            handleQosh={this.handleQosh}
            handleAyrish={this.handleAyrish}
            handleQosh1={this.handleQosh1}
            />
            </>
        );
    }
}
 
export default App;