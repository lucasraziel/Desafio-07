import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

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

function Cart({ cart, removeFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
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
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
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

Cart.propTypes = {
  cart: PropTypes.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
