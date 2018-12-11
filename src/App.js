import React, { Component } from 'react';
import Navigation from './Navigation';
import './bookstore.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [{name: "Java 8", price: 35}, {name: "Linux", price: 30}]
    };
  }
  // Guarda estos valores en el state como una nueva lista y a ver si se actualiza la tabla.
	// Mira las lisrtas como mergear un valor nuevo o como crear una lista nueva
  saveBook(name, price) {
    console.log('Book saved:', name);
    console.log('Book saved costs:', price);
    console.log('Books:', this.state.books);
    let bookList = this.state.books;
    bookList.push({'name': name, 'price': price});
    this.setState({books: bookList});
  }

  render() {
    return (
      <div>
      <Navigation/>
      <div className="container">
	<h1>Book store</h1>
	<br></br>
	<Menu save={this.saveBook.bind(this)}/>
	<br></br>
	<hr></hr>
	<BookList books={this.state.books}/>
      </div>
      </div>
    );
  }
}

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookName: '',
      bookPrice: 0
    };
  }

  updateInputName(evt) {
    this.setState({
      bookName: evt.target.value
    });
  }

  updateInputPrice(evt) {
    this.setState({
      bookPrice: evt.target.value
    });
  }

  saveBookHandler = () => {
    this.props.save(this.state.bookName, this.state.bookPrice);
  }

  render() {
    return (
    <div>     
      <input value={this.state.bookName} onChange={evt => this.updateInputName(evt)}></input>
      <input value={this.state.bookPrice} onChange={evt => this.updateInputPrice(evt)}></input>
      <button onClick={this.saveBookHandler.bind(this)}>Save book</button>
    </div>
    );
  }
}

const List = ({items}) => (
  items.map( (item) => (
  <tr key={item.name.toString()}>
    <td>{item.name}</td>
    <td>{item.price}</td>
  </tr>
  ))
);

class BookList extends Component {

  render() {
    return (
    <div>
     <table className="storeTable">
	<tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
	  <List items={this.props.books} />
	</tbody>
     </table> 
    </div>
    );
  }
}

export default App;
