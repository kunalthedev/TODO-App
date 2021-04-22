import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      newItem: "",
      list: []
    }
  };

  addItem(todoValue){
    if(todoValue!== ""){
      const newItem={
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list =[...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      })

    }

  }
  deleteItem(id){
    const list =[...this.state.list];
    const updatedlist =list.filter(item => item.id !==id);
    this.setState({list: updatedlist})
  }

  updateImput(input){
    this.setState({newItem: input});
  }

  render(){
    return(
      <div className="todo">
        <h1 className="appName">Todo List</h1>
        <div className="container">
          Add an item..
          <br />
          <input type="text" className="input-text" placeholder="Write a Todo" required value={this.state.newItem}
          onChange={e => this.updateImput(e.target.value)} />
          <button className="addBtn" onClick={()=> this.addItem(this.state.newItem)} disabled={!this.state.newItem.length}>
          Add TODO</button>
          <ul>
          {this.state.list.map((item)=>{
            return(
              <div className="todoDis">
              <li key={item.id}>
              
              {item.value}
              <button className="btn" onClick={()=>this.deleteItem(item.id)}>Delete</button>
            </li>
              </div>
             
            );
          })}
          {/* <div className="todoDis"><li>
              Record Vidos
              <button className="btn">Delete</button>
            </li></div> */}
            
          </ul>
        </div>


      </div>
    ); 
  };
}

export default App;
