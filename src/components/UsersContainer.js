import React, { Component } from "react";

import UsersList from "./UsersList";
import users from '../data/users';
import user from '../data/user';

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

 insertNewUser=()=>{
     const newUsers=this.state.users;
     newUsers.unshift(user)
     this.setState({users:newUsers});
 }
render(){
    const{users}=this.state;
    return<UsersList users={users} onRefresh={this.handleRefresh}
        onInsert={this.insertNewUser}
    />
}

}

export default UsersContainer;
