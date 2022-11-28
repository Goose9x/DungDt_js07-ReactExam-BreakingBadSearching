import React, { Component } from "react";
import { Link } from "react-router-dom";
class Result extends Component {
  state = {};
  render() {
    let { castProfile, id, handleClick } = this.props;
    return (
      <>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <img src={castProfile.image} alt={castProfile.name} />
            </div>
            <div className='flip-card-back'>
              <h4>{castProfile.name}</h4>
              <hr />
              <p>Name: {castProfile.name}</p>
              <p>Nickname: {castProfile.nickname}</p>
              <p>Birthday: {castProfile.birthday}</p>
              <p>Status: {castProfile.status}</p>
              <Link to={`/character/${castProfile.id}`}>
                <button id={castProfile.id} onClick={handleClick}>
                  More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Result;
