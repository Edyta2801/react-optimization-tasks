import React, { Component } from "react";

import UsersList from "./UsersList";

class UsersContainer extends Component {
  state = { users: [] };


fetchData=()=>{
    fetch("https://randomuser.me/api/?results=10")
    .then(response=>response.json())
    .then(data=>this.setState({users:data.results}))
    .catch(error=>console.error(error))
}

componentDidMount(){
    this.fetchData();
}
 handleRefresh=()=>{
     this.fetchData();
 }
render(){
    const{users}=this.state;
    return<UsersList users={users} onRefresh={this.handleRefresh}/>
}

}

export default UsersContainer;
