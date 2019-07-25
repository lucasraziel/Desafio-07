import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ShoppingList,
  ItemShop,
  ProductImage,
  TextDescription,
  Price,
  ButtonAdd,
  BasketDetails,
  QuantityAdded,
  AddTextContainer,
  AddText,
} from './styles';

import { formatPrice } from '../../util/format';

export default class Main extends Component {
  state = {
    shopList: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
        id: 3,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 219.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
      {
        id: 5,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
        id: 6,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 219.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
      {
        id: 4,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
    ],
  };

  render() {
    const { shopList } = this.state;
    return (
      <Container>
        <ShoppingList
          data={shopList}
          horizontal
          keyExtractor={(item, index) => `list - item - ${index}`}
          renderItem={({ item }) => (
            <ItemShop>
              <ProductImage source={{ uri: item.image }} />
              <TextDescription>{item.title}</TextDescription>
              <Price>{formatPrice(item.price)}</Price>
              <ButtonAdd>
                <BasketDetails>
                  <Icon name="shopping-basket" color="#FFF" size={24} />
                  <QuantityAdded>0</QuantityAdded>
                </BasketDetails>
                <AddTextContainer>
                  <AddText>ADICIONAR</AddText>
                </AddTextContainer>
              </ButtonAdd>
            </ItemShop>
          )}
        />
      </Container>
    );
  }
}
