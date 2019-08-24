import React from 'react';
import Layout from '../components/MyLayout';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';






export default class Branches extends React.Component{
  constructor() {
    super();

    this.state = {
      lat: 37.7510,
    lng: -97.8220,
    params:  {v: '3.exp', key: 'AIzaSyBfXS4mwUGZZouqUByIskwrA9eFrHKNM4M'}

    };

   // this.onMapCreated = this.onMapCreated.bind(this);
  }

 
 

  
    onMapCreated = (map) => {
      map.setOptions({
        disableDefaultUI: true
      });
    }
  
   onDragEnd = (e) => {
      console.log('onDragEnd', e);
    }
  
  onCloseClick = () => {
      console.log('onCloseClick');
    }
  
  onClick = (e) => {
      console.log('onClick', e);
    }
  


render(){
  const {lat, lng, params}= this.state;
  return (
    
    <div>
      <Layout >
      <br/>
 <br/>
 <br/>
 <br/>
<div className="container row">

  
{/** first Address*/}
      <div className="container col-sm-6">
<div className="container column ">
<div >
<address>
  <strong>Teglo Pharmacy Giwa</strong><br/>
  1234 Example Street<br/>
  Antartica, Example 0987<br/>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>

<address>
  <strong>Full Name</strong><br/>
  <a href="mailto:#">exam.ple@example.com</a>
</address>
</div>

<br/>
<br/>
<Gmaps

        width={'500px'}
        height={'300px'}
      lat={lat}
        lng={lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={lat}
          lng={lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={lat}
          lng={lng}
          content={'Locate :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={lat}
          lng={lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
</div>


</div>



{/** Second Address*/}
<div >
<div className="container col-sm-6">
<div className="column">
<div >
<address>
  <strong>Teglo Pharmacy Balogun</strong><br/>
  1234 Example Street<br/>
  Antartica, Example 0987<br/>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>

<address>
  <strong>Full Name</strong><br/>
  <a href="mailto:#">exam.ple@example.com</a>
</address>
</div>

<br/>
<br/>
<Gmaps
        width={'500px'}
        height={'300px'}
        lat={lat}
        lng={lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={lat}
          lng={lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={lat}
          lng={lng}
          content={'Locate :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={lat}
          lng={lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
</div>
</div>
</div>


</div>
<br/>
 <br/>
 <br/>
 <br/>
      </Layout>
    </div>
  )
}
}