import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  background: #191920;
`;

export const ShoppingList = styled.FlatList``;
export const ItemShop = styled.View`
  background: #fff;
  border-radius: 5px;
  width: 220px;
  margin-left: 15px;
  padding: 10px;
`;
export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;
export const TextDescription = styled.Text`
  color: #000;
  font-size: 16px;
  font-family: "'Roboto',Arial, Helvetica, sans-serif";
`;
export const Price = styled.Text`
  color: #000;
  font-size: 21px;
  font-weight: bold;
  font-family: "'Roboto',Arial, Helvetica, sans-serif";
`;
export const ButtonAdd = styled.TouchableOpacity`
  flex-direction: row;
  width: 200px;
  height: 42px;
  margin-top: auto;
`;
export const BasketDetails = styled.View`
  background: ${darken(0.03, '#7159c1')};
  flex-direction: row;
  flex: 1;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  align-items: center;
  justify-content: center;
`;
export const QuantityAdded = styled.Text`
  font-family: "'Roboto',Arial, Helvetica, sans-serif";
  font-size: 14px;
  color: #fff;
  margin-left: 3px;
`;
export const AddTextContainer = styled.View`
  background: #7159c1;
  flex: 3;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  align-items: center;
  justify-content: center;
`;
export const AddText = styled.Text`
  font-family: "'Roboto',Arial, Helvetica, sans-serif";
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
