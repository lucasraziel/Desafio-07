import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity } from 'react-native';
import {
  Container,
  CartContainer,
  CartList,
  ItemCart,
  ItemDetail,
  ImageProduct,
  Description,
  ProductDescription,
  Price,
  PriceAndQuantity,
  Quantity,
  InputTextQuantity,
  Subtotal,
  TotalText,
  TotalPrice,
  ButtonFinish,
  ButtonFinishText,
  TotalContainer,
} from './styles';

import { formatPrice } from '../../util/format';

export default class Cart extends Component {
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
        <CartContainer>
          <CartList
            data={shopList}
            keyExtractor={(item, index) => `list - item - ${index}`}
            renderItem={({ item }) => (
              <ItemCart>
                <ItemDetail>
                  <ImageProduct source={{ uri: item.image }} />
                  <Description>
                    <ProductDescription>{item.title}</ProductDescription>
                    <Price>{formatPrice(item.price)}</Price>
                  </Description>
                  <TouchableOpacity>
                    <Icon
                      name="remove-shopping-cart"
                      size={24}
                      color="#7159c1"
                    />
                  </TouchableOpacity>
                </ItemDetail>
                <PriceAndQuantity>
                  <Quantity>
                    <TouchableOpacity>
                      <Icon name="add-circle" size={18} color="#7159c1" />
                    </TouchableOpacity>
                    <InputTextQuantity value="3" />
                    <TouchableOpacity>
                      <Icon name="remove-circle" size={18} color="#7159c1" />
                    </TouchableOpacity>
                  </Quantity>
                  <Subtotal>{formatPrice(543)}</Subtotal>
                </PriceAndQuantity>
              </ItemCart>
            )}
          />
          <TotalContainer>
            <TotalText>Total</TotalText>
            <TotalPrice>{formatPrice(2500)}</TotalPrice>
            <ButtonFinish>
              <ButtonFinishText>FINALIZAR PEDIDO</ButtonFinishText>
            </ButtonFinish>
          </TotalContainer>
        </CartContainer>
      </Container>
    );
  }
}
