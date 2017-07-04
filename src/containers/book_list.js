import React, { Component } from 'react';
import { connect } from 'react-redux'; //the glue between react and redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; //connects actions and reducers


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }


  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //Whatever is returned from here will be props
  //inside of BookList. This is VERY IMPORTANT FUNCTION.
  return {
    books: state.books
  };
}

// anything returned from this function will end up as props
// on the BookList container

function mapDispatchToProps (dispatch) {
  //whenever selectBook is called, the result should be passed
  //to all of our reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect (mapStateToProps, mapDispatchToProps)(BookList); //glued together
