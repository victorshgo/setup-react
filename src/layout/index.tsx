import React from 'react';

/* Styles */
import { Container } from './styles';

/* Types */
import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
