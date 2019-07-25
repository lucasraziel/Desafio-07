import styled from 'styled-components/native';

export const Container = styled.View``;
export const CartContainer = styled.View`
  background: #fff;
  margin: 20px 10px;
  padding: 15px;
  border-radius: 4px;
`;
export const CartList = styled.FlatList`
  height: 300px;
  margin-bottom: 30px;
`;
export const ItemCart = styled.View``;
export const ItemDetail = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
  justify-content: space-between;
  margin-right: 15px;
`;
export const ImageProduct = styled.Image`
  width: 80px;
  height: 80px;
  flex: 3;
`;
export const Description = styled.View`
  justify-content: center;
  margin: 0 5px;
  flex: 6;
`;
export const ProductDescription = styled.Text`
  font-family: "'Roboto',Arial, Helvetica, sans-serif";
  margin-right: 14px;
`;
export const Price = styled.Text`
  font-family: "'Roboto',Arial, Helvetica, sans-serif";
  font-weight: bold;
  margin-right: 16px;
`;
export const PriceAndQuantity = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #eee;
  align-items: center;
  border-radius: 4px;
`;
export const Quantity = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const InputTextQuantity = styled.TextInput`
  background: #fff;
  border-radius: 4px;
  margin: 4px;
  height: 26px;
  width: 51px;
  text-align: center;
  font-size: 14px;
  padding: 0;
`;
export const Subtotal = styled.Text`
  font-family: "'Roboto',Arial, Helvetica, sans-serif";
  font-weight: bold;
  margin-right: 16px;
`;
export const TotalText = styled.Text`
  font-family: "'Roboto',Arial, Helvetica, sans-serif";
  font-weight: bold;
  font-size: 16px;
  color: #999;
  text-align: center;
`;
export const TotalPrice = styled.Text`
  font-family: "'Roboto',Arial, Helvetica, sans-serif";
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;
export const ButtonFinish = styled.TouchableOpacity`
  background: #7159c1;
  margin-top: 30px;
  padding: 12px;
  border-radius: 4px;
`;
export const ButtonFinishText = styled.Text`
  font-family: "'Roboto',Arial, Helvetica, sans-serif";
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  text-align: center;
`;

export const TotalContainer = styled.View``;
