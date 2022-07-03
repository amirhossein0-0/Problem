import React, { Component } from 'react'
import axios from 'axios';
import styles from "./Weather.module.css";
import Ui from './Ui';

class Wheather extends Component {

    constructor () {
        super();
        this.state = {
            text: "" ,
            // data: [] ,
        }
    }

    getApi = (event) => {
        event.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.text}&appid=852eb8f44a5d2a2bfe7973728218d3f8&units=metric`)
          .then(
              (response) => {
                  <Ui key={response.data.id} city={response.data.name} country={response.data.sys.country} icon={response.data.weather[0].icon} des={response.data.weather[0].description} temp={response.data.main.temp}/>
              }
          )
    }

    

    changeInput = (event) => {
        this.setState({
            text: event.target.value ,
        })
    }

  render() {
    //   const {data} = this.state ;
    return (
        <>
      <form className={styles.banner}>
              <h1>Wheather App</h1>
              <input type="text" placeholder='City Name' value={this.state.text} onChange={this.changeInput}/>
              <button type='submit' onClick={this.getApi}>Submit</button>
              <span></span>
      </form>
      <Ui />
      {/* {data.map((item) => <Ui key={item.id} city={item.name} country={item.sys.country} icon={item.weather[0].icon} des={item.weather[0].description} temp={item.main.temp}/>)} */}
        </>
    )
  }
}


export default Wheather ;