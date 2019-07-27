import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useDispatch, useSelector } from 'react-redux';

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

export default function Main() {
  const [shopList, setShopList] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setShopList(data);
    }
    loadProducts();
  }, [shopList]);

  const handleAddProduct = id => {
    dispatch(CartActions.addToCartRequest(id));
  };

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
            <ButtonAdd onPress={() => handleAddProduct(item.id)}>
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
