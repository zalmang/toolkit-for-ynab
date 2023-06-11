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
    let subElements;
    let bdiElement;
    let bdiText;
    let currencyChar;
    let oldAmountStr;
    let newValue;
    let newAmountStr;
    console.log('Beginning conversion');
    const elements = $('.is-checked');
    elements.each(function () {
      subElements = $(this).find('.positive.currency');
      subElements.each(function () {
        bdiElement = $(this).find('bdi');
        bdiText = bdiElement.text();
        currencyChar = bdiText[0];
        oldAmountStr = '';
        for (let i = 1; i < bdiText.length; i++) {
          oldAmountStr += bdiText.charAt(i);
        }
        newValue = parseFloat(oldAmountStr) * rate;
        newAmountStr = currencyChar + newValue.toFixed(2);
        convertCurrency(bdiElement, newAmountStr);
      });
    });
  };

  convertCurrency(bdiElement, newAmountStr) {
    bdiElement.text(newAmountStr);
    // I'm assuming this is incorrect. Hope to IYH do it correctly/
  }
}

export function convertCurrency(bdiElement, newAmountStr) {
  bdiElement.text(newAmountStr);
  // I'm assuming this is incorrect. Hope to IYH do it correctly/
}
