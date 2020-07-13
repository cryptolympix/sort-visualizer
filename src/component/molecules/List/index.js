import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { MdExpandMore } from 'react-icons/md';
import './style.css';
import Backdrop from '../../atoms/Backdrop';

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

  close = () => {
    this.setState({ open: false, selected: null });
  };

  render() {
    const { selected, open } = this.state;
    const { items, placeholder, defaultItem } = this.props;

    let iconClasses = 'List__Icon';
    if (open) iconClasses += ' List__Icon_up';

    return (
      <Fragment>
        <Backdrop show={this.state.open} onClick={this.close} />
        <div className="List">
          <div className="List__Button" onClick={this.toggleVisible}>
            <span className="List__Value">{selected || defaultItem || placeholder}</span>
            <IconContext.Provider value={{ className: iconClasses }}>
              <MdExpandMore />
            </IconContext.Provider>
          </div>
          <ListItems items={items} onSelect={this.handleSelect} open={open} />
        </div>
      </Fragment>
    );
  }
}

List.propTypes = {
  placeholder: PropTypes.string,
  defaultItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
};

export default List;
