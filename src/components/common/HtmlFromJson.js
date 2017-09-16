import React from 'react';
import PropTypes from 'prop-types';
// import FuelSavingsResults from './FuelSavingsResults';

class FuelSavingsForm extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.save = this.save.bind(this);
    this.fuelSavingsKeypress = this.fuelSavingsKeypress.bind(this);
  }

  componentDidMount (){
    console.log('============', this.props)

    this.props.getJson();
  }

  fuelSavingsKeypress (name, value) {
    this.props.calculateFuelSavings(this.props.fuelSavings, name, value);
  }

  save () {
    this.props.saveFuelSavings(this.props.fuelSavings);
  }

  render () {
    // const {fuelSavings} = this.props;

    return (
      <div>
        <h2>Fuel Savings Analysis</h2>
      </div>
    );
  }
}

const {func, shape, number, bool, string} = PropTypes;

FuelSavingsForm.propTypes = {
  getJson: func.isRequired
  // saveFuelSavings: func.isRequired,
  // calculateFuelSavings: func.isRequired,
  // fuelSavings: shape({
  //   newMpg: number,
  //   tradeMpg: number,
  //   newPpg: number,
  //   tradePpg: number,
  //   milesDriven: number,
  //   milesDrivenTimeframe: string,
  //   displayResult: bool,
  //   dateModified: string,
  //   necessaryDataIsProvidedToCalculateSavings: bool,
  //   savings: shape({
  //     monthly: number,
  //     annual: number,
  //     threeYear: number,
  //   }),
  // }).isRequired
};

export default FuelSavingsForm;
