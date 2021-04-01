import React from 'react';
import PropTypes from 'prop-types';

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
