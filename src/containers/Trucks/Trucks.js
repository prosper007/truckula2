import React, { Component } from 'react';
import styles from './Trucks.module.css';
import Truck from './Truck/Truck';
import availableTrucks from './seedTrucks';

class Trucks extends Component {
  state = {
    availableTrucks: []
  }

  componentDidMount() {
    this.setState({ availableTrucks });
  }

  getAvailableTrucks = () => {
    return this.state.availableTrucks.map((truck) => {
      return (
        <Truck
          key={truck.letter}
          truckName={truck.name}
          truckLetter={truck.letter}
          truckDimensions={truck.dimensions}
          truckLocation={truck.location}
          truckDescription={truck.description}
          truckHasLiftGate={truck.hasLiftGate}
        />
      );
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2 className={styles.PageHeader}>Available Trucks</h2>
        <div className={styles.TrucksContainer}>
          {this.getAvailableTrucks()}
        </div>
      </React.Fragment>
    )
  }
}

export default Trucks;