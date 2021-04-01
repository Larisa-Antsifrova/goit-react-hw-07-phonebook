import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateFilter } from '../../redux/phonebook-actions';

import styles from './Filter.module.css';

const Filter = ({ filterValue, filterUpdate }) => {
  return (
    <div className={styles.filter}>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={filterUpdate}
          autoComplete="off"
          required
        />
      </label>
    </div>
  );
};

Filter.defaultProps = {
  filterValue: '',
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  filterUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filterValue: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  filterUpdate: event => dispatch(updateFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
