import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import  corona from './images/covid.jpg'
class App extends React.Component {
  state = {
    data: {},
    country:'',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    // console.log(data)
  }
  handlecountryChange =async (country)=>{
   const fetchedData = await fetchData (country)
    //fetch data
    //set fata
  //  console.log('fd',fetchedData)
   // console.log(country)

   this.setState({data:fetchedData, country:country})
  }
  render() {
    const { data,country } = this.state;
    return (
      <div className={styles.container}>
        <img  className={styles.image} src={corona} alt='covid' />
        <Cards data={data} />
        <CountryPicker  handlecountryChange={this.handlecountryChange}/>
        <Chart  data={data} country={country}/>
      
      </div>
    );
  }
}

export default App;
