import React, { useState } from 'react';

const SearchBar = props => {
  const [value, setValue] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    props.submit(value);
  };
  return (
    <div className='search-bar ui segment'>
      <form
        className='ui form'
        onSubmit={handleSubmit}
        onChange={event=>setValue(event.target.value)}
        value={value}>
        <div className='field'>
          <label className='label'>Video Search</label>
          <input type='text' autoFocus />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
