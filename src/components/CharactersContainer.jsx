import React, { Component } from "react";
import Result from "./Result";
import SearchBox from "./SearchBox";
class CharactersContainer extends Component {
  state = {};
  render() {
    let {
      profile,
      profileAfterSearch,
      handleClick,
      status,
      handleChange,
      search,
    } = this.props;
    return (
      <>
        <div className='container-wrapper'>
          <SearchBox handleChange={handleChange} search={search} />

          <div className='result'>
            {status === 1
              ? profile.map((e, i) => (
                  <Result key={i} castProfile={e} handleClick={handleClick} />
                ))
              : profileAfterSearch.map((e, i) => (
                  <Result key={i} castProfile={e} handleClick={handleClick} />
                ))}
          </div>
        </div>
      </>
    );
  }
}

export default CharactersContainer;
