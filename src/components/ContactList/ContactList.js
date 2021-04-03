import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts-operations';
import {
  getFilterValue,
  getItemsValue,
  getLoading,
} from '../../redux/contacts-selectors';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import styles from './ContactList.module.css';

class ContactList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { filtered, onDeleteContact, isLoading } = this.props;

    return (
      <>
        {isLoading && (
          <Loader
            type="TailSpin"
            color="#80cbc4"
            height={50}
            width={50}
            className={styles.loader}
          />
        )}
        <ul className={styles.contacts}>
          {filtered.length ? (
            filtered.map(contact => (
              <li key={contact.id} className={styles.item}>
                <div>
                  <p>{contact.name}:</p>
                  <p>{contact.number}</p>
                </div>

                <button
                  className={styles.btn}
                  onClick={() => {
                    onDeleteContact(contact.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li className={styles.notification}>No contact found.</li>
          )}
        </ul>
      </>
    );
  }
}

// ContactList.propTypes = {
//   filtered: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired,
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

const mapStateToProps = state => {
  const filter = getFilterValue(state);
  const items = getItemsValue(state);
  const isLoading = getLoading(state);

  const filtered = items.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
      number.includes(filter),
  );
  return {
    filtered,
    isLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId => dispatch(deleteContact(contactId)),
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
