import React from 'react';
import './TeslaBattery.css';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice'
import '../components/TeslaNotice/TeslaNotice.css';
import TeslaCar from '../components/TeslaCar/TeslaCar'
import '../components/TeslaCar/TeslaCar.css';
// var webpack = require("webpack");

class TeslaBattery extends React.Component {
  render() {
    return (
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <TeslaNotice />
        <TeslaCar />
      </form>
    )
  }
}
export default TeslaBattery;
