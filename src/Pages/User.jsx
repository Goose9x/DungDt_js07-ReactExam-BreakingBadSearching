import React, { Component } from "react";

class User extends Component {
  state = {
    user: {},
  };
  componentDidMount = (e) => {
    let href = window.location.href.split("/");
    let id = href[href.length - 1];
    console.log(id);
    fetch(`https://breakingbadapi.com/api/characters/${id}`)
      .then((res) => res.json())
      .then((data) => {
        data = data[0];
        let newUser = {
          image: data.img,
          status: data.status,
          realName: data.portrayed,
          name: data.name,
          nickName: data.nickname,
          birthday: data.birthday,
          occupation: data.occupation,
        };
        this.setState({ user: newUser });
      });
  };
  render() {
    let { user } = this.state;
    return (
      <>
        <div className='user-image'>
          <h1>WANTED</h1>
          <h4>------Dead or Alive------</h4>
          <img src={user.image} alt='' />
          <h4>{user.realName}</h4>
          <h1 className='status'>Status: {user.status}</h1>
          <h4>Name: {user.name} </h4>
          <h4>Nick Name: {user.nickName}</h4>
          <h4>Birthday: {user.birthday}</h4>
          <h4>Occupation: {user.occupation}</h4>
        </div>
      </>
    );
  }
}

export default User;
