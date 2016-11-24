import React, { Component, PropTypes } from 'react';

class SelectRowHeaderColumn extends Component {

  render() {
    return (
      <th style={ { textAlign: 'center' } } className={ this.props.className }>
        { this.props.children }
      </th>
    );
  }
}
SelectRowHeaderColumn.propTypes = {
  children: PropTypes.node
};
export default SelectRowHeaderColumn;
