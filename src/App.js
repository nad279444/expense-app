import React from 'react'
import AddExpenses from "./AddExpenses"
import AddData from "./AddData"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"


class App extends React.Component{
  state = {
    users:[
      {Amount:"40",Description:"A black Shoe",id:1},
      {Amount:"150",Description:"A Laptop",id:2},
      {Amount:"40",Description:"A Red Dress",id:3}
    
    ]
  }
  addNewUser = (user)=>{
    user.id = Math.random();
    let users = [...this.state.users,user]
    this.setState({
      users:users

    })

  }
  deleteUser = (id) =>{
    let users = this.state.users.filter(user=>{
      return user.id !== id
    })
    this.setState({
      users:users
    })

  }
  render(){
    return(
      <div className="container">
        <div className="row"></div>
        <div className="col-md-6">
          <h3>FORM</h3>
        <AddData addNewUser={this.addNewUser}/>
        </div>
        <div className="col-md-6">
          <h3>EXPENDITURE</h3>
        <AddExpenses deleteUser={this.deleteUser}users={this.state.users}/>
        </div>
      
      </div >
    )
  }
}
  


export default App;
