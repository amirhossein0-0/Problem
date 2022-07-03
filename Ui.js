import React, { Component } from 'react'
import styles from "./Ui.module.css";
// import cloud from "./images/cloud.svg"

class Ui extends Component {
    render() {
const {city, country, icon, des, temp} = this.props ;
    return (
      <div className={styles.container}>
       <div>
          <h3>{city}</h3>
          <span>{country}</span>
       </div>
          <h1>{temp}</h1>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="cloud"/>
          <p>{des}</p>
      </div>
    )
  }
}


export default Ui ;