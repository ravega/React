import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import {Link} from 'react-router-dom';

const List = ({items, remove}) => (
  items.map( (item) => (
  <tr key={item.name.toString()}>
    <td>{item.name}</td>
    <td>{item.price}</td>
    <td className="action">
        <MaterialIcon icon="delete" color='#000000' onClick={() => remove(item.name)}/>
    </td>
    <td className="action">
        <Link to={`/info/${item.name}`}><MaterialIcon icon="edit" color='#000000'/></Link>
    </td>
  </tr>
  ))
);

class BookList extends Component {

  deleteBookHandler = (name) => {
    console.log('Deleting Book:', name);
    this.props.remove(name);
  }

  render() {
    return (
    <div>
     <table className="storeTable">
	    <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th></th>
          <th></th>
        </tr>
	      <List items={this.props.books} remove={this.deleteBookHandler.bind(this)} />
	    </tbody>
     </table> 
    </div>
    );
  }
}

export default BookList;