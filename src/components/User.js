import React from "react";

class User extends React.PureComponent {

// shouldComponentUpdate(nextProps, nextState){
// if(this.props.user.login.uuid===nextProps.user.login.uuid)
// return false;

// return false;
//   }


  render() {
    const { user } = this.props;

    return (
      <div className="users__user">
        <div className="users__user-name">{user.name.first}</div>
        <div className="users__user-surname">{user.name.last}</div>
      </div>
    );
  }
}

// function User({ user }) {
//   return (
//     <div className="users__user">
//       <div className="users__user-name">{user.name.first}</div>
//       <div className="users__user-surname">{user.name.last}</div>
//     </div>
//   );
// }

export default User;
