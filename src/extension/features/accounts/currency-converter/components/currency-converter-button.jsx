import * as React from 'react';

const CURRENT_USD_TO_NIS_RATE = 3.75;

export class CurencyConverterButton extends React.Component {
  render() {
    return (
      <button className="button tk-currency-converter" onClick={this.openCurrencyConverter}>
        Currency Converter...
      </button>
    );
  }

  // openCurrencyConverter FOR NOW is only going to adjust one transaction
  openCurrencyConverter = () => {
    console.log('Beginning conversion');
  };
}
