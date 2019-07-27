import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity } from 'react-native';
import * as CartActions from '../../store/modules/cart/actions';
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

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }
  return (
    <Container>
      <CartContainer>
        <CartList
          data={cart}
          keyExtractor={(item, index) => `list - item - ${index}`}
          renderItem={({ item }) => (
            <ItemCart>
              <ItemDetail>
                <ImageProduct source={{ uri: item.image }} />
                <Description>
                  <ProductDescription>{item.title}</ProductDescription>
                  <Price>{formatPrice(item.price)}</Price>
                </Description>
                <TouchableOpacity
                  onPress={() => dispatch(CartActions.removeFromCart(item.id))}
                >
                  <Icon name="remove-shopping-cart" size={24} color="#7159c1" />
                </TouchableOpacity>
              </ItemDetail>
              <PriceAndQuantity>
                <Quantity>
                  <TouchableOpacity onPress={() => decrement(item)}>
                    <Icon name="remove-circle" size={18} color="#7159c1" />
                  </TouchableOpacity>
                  <InputTextQuantity value={`${item.amount}`} />
                  <TouchableOpacity onPress={() => increment(item)}>
                    <Icon name="add-circle" size={18} color="#7159c1" />
                  </TouchableOpacity>
                </Quantity>
                <Subtotal>{item.subtotal}</Subtotal>
              </PriceAndQuantity>
            </ItemCart>
          )}
        />
        <TotalContainer>
          <TotalText>Total</TotalText>
          <TotalPrice>{total}</TotalPrice>
          <ButtonFinish>
            <ButtonFinishText>FINALIZAR PEDIDO</ButtonFinishText>
          </ButtonFinish>
        </TotalContainer>
      </CartContainer>
    </Container>
  );
}
