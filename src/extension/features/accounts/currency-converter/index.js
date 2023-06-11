import * as React from 'react';
import { componentAfter } from 'toolkit/extension/utils/react';
import { Feature } from 'toolkit/extension/features/feature';
import { isCurrentRouteAccountsPage } from 'toolkit/extension/utils/ynab';
import { CurrencyConverterButton } from './components/currency-converter-button';

export class CurrencyConverter extends Feature {
  ShouldInvoke() {
    return isCurrentRouteAccountsPage();
  }

  invoke() {
    console.log('CurrencyConverter is working');
    if (document.querySelector('.tk-currency-converter')) {
      return;
    }
    componentAfter(<CurrencyConverterButton />, document.querySelector('')); // '.accounts-toolbar-edit-transaction??????'//
  }

  destroy() {
    $('.tk-currency-converter').remove();
    $('accounts-toolbar-left').removeClass('tk-accounts-toolbar-left');
  }

  onRouteChanged() {
    if (this.shouldInvoke()) {
      this.invoke();
    }
  }
}
