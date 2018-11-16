import React, { Component } from 'react';
import './bookstore.css';

class App extends Component {
  render() {
    return (
      <div>
	<h1>Book store</h1>
	<br></br>
	<Menu />
	<br></br>
	<hr></hr>
	<BookList />
      </div>
    );
  }
}

class Menu extends Component {
  render() {
    return (
    <div>     
      <input></input>
      <input></input>
      <button>Save book</button>
    </div>
    );
  }
}

const List = ({items}) => (
  items.map( (item) => (
  <tr>
    <td>{item}</td>
    <td>{item}</td>
  </tr>
  ))
);

class BookList extends Component {

  constructor(props) {
    super(props);
    //this.state = {books: [{name: "Java 8", price: 35}, {name: "Linux", price: 30}]};
    //const books = [{name: "Java 8", price: 35}, {name: "Linux", price: 30}];
    this.state = {
	    aValue: 'TestMe',
	    numbers: ['1', '2', '3', '4', '5']
    };
  }

  render() {
    const {numbers, aValue} = this.state;

    return (
    <div>
     <table className="storeTable">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
	  <List items={numbers} />
     </table> 
    </div>
    );
  }
}

export default App;
