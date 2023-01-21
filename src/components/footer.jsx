import * as React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  border-top: 1px solid rgba(150, 144, 162, 0.06);
  padding: 15px 0;
  text-align: center;
`;

const Footer = () => {
  return <FooterContainer>© 2014—2022 Зайнулабидов Узунхайир</FooterContainer>;
};

export default Footer;
