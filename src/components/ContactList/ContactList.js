import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts-operations';

import styles from './ContactList.module.css';
// class  extends Component {
//   state = {  }
//   render() {
//     return (  );
//   }
// }

// export default ;

class ContactList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { filtered, onDeleteContact, isLoading } = this.props;

    return (
      <>
        {isLoading && <p>Loading...</p>}
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
  const filtered = state.contacts.items.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(state.contacts.filter.toLocaleLowerCase()) ||
      number.includes(state.contacts.filter),
  );
  return {
    filtered,
    isLoading: state.contacts.loading,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId => dispatch(deleteContact(contactId)),
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
