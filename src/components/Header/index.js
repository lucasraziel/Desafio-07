import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity } from 'react-native';
import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Logo />
        </TouchableOpacity>
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  cartSize: PropTypes.number.isRequired,
};

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
