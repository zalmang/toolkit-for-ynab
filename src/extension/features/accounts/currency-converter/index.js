import { Feature } from 'toolkit.extension/features/feature';

export class CurrencyConverter extends Feature {
  ShouldInvoke() {
    return true;
  }

  invoke() {
    console.log('CurrencyConverter is working');
  }
}
