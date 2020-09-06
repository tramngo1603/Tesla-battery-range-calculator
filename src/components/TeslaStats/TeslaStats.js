import React from 'react';
import PropTypes from 'react';
import './TeslaStats.css';

const TeslaStats = (props) => {
  const listItems = props.carstats.map((stat) => (
    // <div>
    <li key={stat.model}>
    <label>{stat.model}</label>
      <div className={'tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}'}></div>
      <p>{stat.miles}</p>
    </li>
    // </div>
  ));

  return (
    <div className="tesla-stats">
    <ul>
      {listItems}
    </ul>
  </div>
  )

}

TeslaStats.propTypes = {
  carstats: PropTypes.array
}

export default TeslaStats;
