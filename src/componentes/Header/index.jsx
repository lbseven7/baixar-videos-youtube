import React from 'react';

function Header(props) { 
  const handleSubmit = (event) => {
    event.preventDefault();
    const { searchInput } = event.target.elements;
    props.handleSearch(searchInput.value);
  }

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input type="submit" placeholder='Buscar vídeos' name='searchInput' />
        <button onClick={handleSubmit}>Buscar</button>
      </form>
    </header>
  )
}

export default Header;