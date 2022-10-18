import React, { useState, useEffect } from 'react'
import './App.css';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';

function App() {

  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    setSearchField(searchString);
  }

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  })

  return (
    <>
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          className='monsters-search-box'
          onChangeHandler={onSearchChange}
          placeholder='Search Monsters'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    </>
  )
}
export default App;
