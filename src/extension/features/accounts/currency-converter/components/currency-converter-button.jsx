import * as React from 'react';

export class CurrencyConverterButton extends React.Component {
  render() {
    return (
      <button className="button tk-currency-converter" onClick={this.openCurrencyConverter}>
        Currency Converter...
      </button>
    );
  }

  // openCurrencyConverter FOR NOW is only going to adjust one transaction
  openCurrencyConverter = () => {
    // for future versions: create modal to enter a currency rate
    console.log('And so it begins...');
    let rate = 3.75;
    console.log('Beginning conversion');
    const inflows = $('.is-checked .ynab-grid-cell-outflow .ember-text-field').toArray();
    const outflows = $('.is-checked .ynab-grid-cell-inflow .ember-text-field').toArray();
    for (let i = 0; i < inflows.length; i++) {
      let currIn = inflows[i];
      let currOut = outflows[i];
      if (currIn.value !== false) {
        convert(currIn, rate);
      } else if (currOut.value !== false) {
        convert(currOut, rate);
      }
    }
  };
}

export function convert(htmlElement, rate) {
  let currValue = htmlElement.value;
  htmlElement.value = ynab.formatCurrency(currValue * rate * 1000);
  htmlElement.dispactEvent(new Event('change'));
  htmlElement.dispatchEvent(new Event('blur'));
}
