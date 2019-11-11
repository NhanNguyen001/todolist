import React from 'react';

import { HeaderContainer, OptionLink } from './header.styles';

function Header() {
  return (
    <HeaderContainer>
      <h1>TodoList</h1>
      <OptionLink to='/'>Home</OptionLink> |{' '}
      <OptionLink to='/about'>About</OptionLink>
    </HeaderContainer>
  );
}

export default Header;
