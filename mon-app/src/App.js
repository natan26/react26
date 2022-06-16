import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Counter extends Component{
  constructor() {
    super();
    this.state = {
      count : 0,
      loading : false,
    };

   


  }
   
  addOne =()=>{
    this.setState({loading:true})
    setTimeout(() => {
      this.setState({
        count:this.state.count +1,
        loading: false})
    }, 3000);
  }

  subOne =()=>{
    this.setState({loading:true})
    setTimeout(() => {
      this.setState({
        count:this.state.count -1,
        loading: false})
    }, 3000);
  }
  render() {
    return(
      <div>
        <div>
        <div className='alert alert-dark' role='alert'>{this.state.count}</div>
        <button onClick={this.addOne}>{this.state.loading?(<i className='spinner-border'/>):<span>appui pour ajouter</span>}</button>
        <button onClick={this.subOne}>{this.state.loading?(<i className='spinner-border'/>):<span>appui pour soustraire</span>}</button>
        </div>
      </div>
    )
  }
}
export default Counter;
