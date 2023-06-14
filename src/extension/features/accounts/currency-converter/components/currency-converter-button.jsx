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
    let rate = this.getRate();
    let rows = $('.ynab-grid-body-row.is-checked').toArray();
    if (rows.length === false) {
      return;
    }
    for (let j = 0; j < rows.length; j++) {
      let row = rows[j];
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
      const $saveButton = $('.ynab-grid-actions-buttons .button.button-primary');
      $saveButton.trigger('click');
    }
  };

  getRate() {
    return prompt('Enter current conversion rate');
  }
}

export function convert(htmlElement, rate) {
  let currValue = ynab.unformat(htmlElement.value);
  htmlElement.value = ynab.formatCurrency(currValue * rate * 1000);
  // $(this).trigger(jQuery.Event('blur'));
  htmlElement.dispatchEvent(new Event('change'));
  htmlElement.dispatchEvent(new Event('blur'));
}
