import React from 'react';
import person from '../../../public/person.jpg';
import search from '../../../public/search.png';
import styles from './CSSAsignment.less';

const CSSAsignment = () => (
  <div className={styles.block}>
    <div>
      <img className="block__img" src={person} alt="Person" />
      <span className="block__span">Invest in the success of our customers</span>
      <img className="block__img block__img--search" src={search} alt="Search" />
    </div>
    <div className="block__sub">
      <span className="block__subarrow" />
      <img className="block__img" src={person} alt="Person" />
      <span className="block__span">Nimble Releases</span>
    </div>
  </div>
);

export default CSSAsignment;
