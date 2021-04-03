// Imports from React
import React, { Component } from 'react';
// Imports from Redux
import { connect } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts-operations';
import { getFilteredItems, getLoading } from '../../redux/contacts-selectors';
// Imports of helpers
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// Styles imports
import styles from './ContactList.module.css';

class ContactList extends Component {
  static propTypes = {
    filtered: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

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

const mapStateToProps = state => ({
  filtered: getFilteredItems(state),
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId => dispatch(deleteContact(contactId)),
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
