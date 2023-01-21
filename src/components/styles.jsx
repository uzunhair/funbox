import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;

  @media (min-width: 576px) {
    max-width: 540px;
  }
`;

export const Section = styled.section`
  padding: 30px 0;
  a {
    text-decoration: none;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
`;

export const HelpText = styled.div`
  color: var(--bs-gray-600);
  font-weight: 300;
  margin-top: 5px;
`;

export default Section;
