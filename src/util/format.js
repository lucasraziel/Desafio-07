import numeral from 'numeral';
import 'numeral/locales/pt-br';

export const formatPrice = value => {
  numeral.locale('pt-br');
  const moneyNumeral = numeral(value);
  return moneyNumeral.format('$0,0.00');
};
