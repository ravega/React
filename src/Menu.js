import React, { Component } from 'react';

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

export default Menu;