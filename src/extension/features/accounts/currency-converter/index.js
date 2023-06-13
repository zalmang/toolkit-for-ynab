import * as React from 'react';
import { componentAfter } from 'toolkit/extension/utils/react';
import { Feature } from 'toolkit/extension/features/feature';
import { isCurrentRouteAccountsPage } from 'toolkit/extension/utils/ynab';
import { CurrencyConverterButton } from './components/currency-converter-button';

export class CurrencyConverter extends Feature {
  shouldInvoke() {
    console.log('Checking whether to invoke!');
    return isCurrentRouteAccountsPage();
  }

  invoke() {
    console.log('CurrencyConverter is working');
    if (document.querySelector('.tk-currency-converter')) {
      return;
    }
    console.log('Generateing the button...');
    componentAfter(
      <CurrencyConverterButton />,
      document.querySelector('.accounts-toolbar-edit-transaction')
    );
  }

  destroy() {
    $('.tk-currency-converter').remove();
    // why do i have to do 'accounts-toolbar-left'?
    $('accounts-toolbar-left').removeClass('tk-accounts-toolbar-left');
  }

  onRouteChanged() {
    if (this.shouldInvoke()) {
      this.invoke();
    }
  }
}
