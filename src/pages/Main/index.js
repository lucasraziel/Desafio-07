import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';

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

class Main extends Component {
  state = {
    shopList: [],
  };

  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.isRequired,
  };

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ shopList: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  render() {
    const { shopList } = this.state;
    const { amount } = this.props;
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
              <ButtonAdd onPress={() => this.handleAddProduct(item.id)}>
                <BasketDetails>
                  <Icon name="shopping-basket" color="#FFF" size={24} />
                  <QuantityAdded>{amount[item.id] || 0}</QuantityAdded>
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

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
