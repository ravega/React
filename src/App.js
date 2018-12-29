import React, { Component } from 'react';
import BookList from './BookList';
import Menu from './Menu';
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
    let bookList = this.state.books;
    bookList.push({'name': name, 'price': price});
    this.setState({books: bookList});
  }

  deleteBook(name) {
    this.setState(prevState => ({
        books: prevState.books.filter(el => el.name !== name )
    }));
  }

  render() {
    return (
      <div className="container">
	      <h1>Book store</h1>
	      <br></br>
	      <Menu save={this.saveBook.bind(this)}/>
	      <br></br>
	      <hr></hr>
	      <BookList books={this.state.books} remove={this.deleteBook.bind(this)}/>
      </div>
    );
  }
}

export default App;
