import "./App.css";
import React, { Component } from "react";
import CharactersContainer from "./components/CharactersContainer";
import User from "./Pages/User";
import image from "./assets/logo.png";
import { Routes, Route, Link } from "react-router-dom";
class App extends Component {
  state = {
    profile: [],
    profileAfterSearch: [],
    status: 1,
    search: "",
  };
  handleClick = (e) => {
    console.log(e.target.id);
  };
  handleChange = (e) => {
    let profile = this.state.profile;
    let searchValue = e.target.value;
    this.setState({ search: searchValue });
    if (searchValue === "") {
      this.setState({ status: 1 });
    } else {
      let find = profile.filter(
        (e) =>
          e.name
            .toLowerCase()
            .split(" ")
            .join("")
            .search(searchValue.toLowerCase()) >= 0
      );
      this.setState({ profileAfterSearch: find, status: 0 });
    }
  };
  componentDidMount = () => {
    fetch("https://breakingbadapi.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        let profile = [];
        data.map((e) => {
          return profile.push({
            image: e.img,
            name: e.name,
            birthday: e.birthday,
            nickname: e.nickname,
            status: e.status,
            id: e.char_id,
          });
        });
        this.setState({ profile: profile });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <Link to={"/"}>
          <div className='logo'>
            <img src={image} alt='...' />
          </div>
        </Link>
        <Routes>
          <Route
            path='/'
            element={
              <CharactersContainer
                profile={this.state.profile}
                profileAfterSearch={this.state.profileAfterSearch}
                status={this.state.status}
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                search={this.state.search}
              />
            }
          ></Route>
          <Route path='/character/:id' element={<User />}></Route>
        </Routes>
      </>
    );
  }
}

export default App;
