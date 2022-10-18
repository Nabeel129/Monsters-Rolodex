import React, { Component } from 'react'
import './App.css';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => { return { monsters: users } }))
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField: searchString }
    })
  }
  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    })
    return (
      <>
        <div className='App'>
          <h1 className='app-title'>Monsters Rolodex</h1>
          <SearchBox
            className='monsters-search-box'
            onChangeHandler={this.onSearchChange}
            placeholder='Search Monsters'
          />
          <CardList monsters={filteredMonsters} />
        </div>
      </>
    )
  }
}
export default App;
