import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ListItems = ({ items, onSelect, open }) => {
  let classNames =
    'List__Content' + (open ? ' List__Content_visible' : ' List__Content_hidden');

  return (
    <ul className={classNames}>
      {items.map((item, i) => (
        <li key={i} className="List__Item" onClick={(e) => onSelect(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

class List extends Component {
  state = {
    selected: null,
    open: false,
  };

  toggleVisible = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  handleSelect = (item) => {
    this.setState({ selected: item, open: false });
    this.props.onSelect(item);
  };

  render() {
    const { selected, open } = this.state;
    const { items, placeholder, defaultItem } = this.props;

    let labelStyle =
      defaultItem || selected
        ? { fontSize: '1em', color: 'white' }
        : { fontSize: '0.8em', fontStyle: 'italic', color: 'green' };

    return (
      <div className="List">
        <div className="List__Button" onClick={this.toggleVisible}>
          <span style={labelStyle} className="List__Label">
            {selected ? selected : placeholder || defaultItem}
          </span>
        </div>
        <ListItems items={items} onSelect={this.handleSelect} open={open} />
      </div>
    );
  }
}

List.propTypes = {
  placeholder: PropTypes.string,
  defaultItem: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func,
};

export default List;
