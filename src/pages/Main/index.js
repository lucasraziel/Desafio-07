import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

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
    dispatch: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ shopList: data });
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
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
              <Price>{item.priceFormatted}</Price>
              <ButtonAdd onPress={() => this.handleAddProduct(item)}>
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

export default connect()(Main);
