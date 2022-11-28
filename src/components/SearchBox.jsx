import React, { Component } from "react";

class SearchBox extends Component {
  state = {};
  render() {
    let { handleChange, search } = this.props;
    return (
      <>
        <div className='input-wrapper'>
          <input
            type='text'
            placeholder='Search...'
            onChange={handleChange}
            value={search}
          />
        </div>
      </>
    );
  }
}

export default SearchBox;
