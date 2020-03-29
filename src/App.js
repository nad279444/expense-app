import React from 'react'
import { connect } from "react-redux"
import AddExpenses from "./AddExpenses"
import AddData from "./AddData"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import { addUser } from "./store/userAction.js"


class App extends React.Component{
  addNewUser = user=>{
    user.id = Math.random();
    this.props.addUser(user)

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
        <AddExpenses deleteUser={this.deleteUser}users={this.props.users}/>
        </div>
      
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = {
  addUser

}
  


export default connect(mapStateToProps,mapDispatchToProps)(App);
