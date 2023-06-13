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
    let row = document.querySelector('.ynab-grid-body-row.is-checked');
    if (row === false) {
      return;
    }
    row.click();
    const inflows = $('.is-editing .ynab-grid-cell-inflow .ember-text-field').toArray();
    const outflows = $('.is-editing .ynab-grid-cell-outflow .ember-text-field').toArray();
    if (outflows.length !== inflows.length) {
      console.log('ARRAY LENGTHS ARE NOT THE SAME');
      return;
    }
    for (let i = 0; i < inflows.length; i++) {
      let currIn = inflows[i];
      let currOut = outflows[i];
      if (ynab.unformat(currIn.value) !== 0) {
        convert(currIn, rate);
      } else if (ynab.unformat(currOut.value !== 0)) {
        convert(currOut, rate);
      } else {
        console.out('No value here');
      }
    }
  };
}

export function convert(htmlElement, rate) {
  let currValue = ynab.unformat(htmlElement.value);
  htmlElement.value = ynab.formatCurrency(currValue * rate * 1000);
  htmlElement.dispactEvent(new Event('change'));
  htmlElement.dispatchEvent(new Event('blur'));
}
