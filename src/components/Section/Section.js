// Imports from React
import React from 'react';
// Imports of helpers
import PropTypes from 'prop-types';
// Styles imports
import styles from './Section.module.css';

const Section = ({ children }) => {
  return (
    <section>
      <div className={styles.container}>{children}</div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
