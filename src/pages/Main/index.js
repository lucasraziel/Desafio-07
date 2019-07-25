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
import api from '../../services/api';

export default class Main extends Component {
  state = {
    shopList: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ shopList: data });
  }

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
              <Price>{item.priceFormatted}</Price>
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
