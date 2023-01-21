import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

import bg from '../images/bg.png';

// styles
const GlobalStyle = createGlobalStyle`
  body {
    --card-color: #1698D9;
    --card-hover-color: #2EA8E6;
    --card-selected-color: #d91667;
    --card-selected-hover-color: #e52e7a;
    --card-disabled-color: #e52e7a;
    
    font-family: 'Trebuchet MS';
  }
`;

const Layout = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px 0;
  background: url(${bg}) repeat center;
  color: #ffffff;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 5e-5) 49.88%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
`;

const Container = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Row = styled.div`
  --bs-gutter-x: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  justify-content: center;

  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;

const Col = styled.div`
  flex: 0 0 auto;
  flex-shrink: 0;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-bottom: 2.5rem;

  @media (min-width: 992px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 1200px) {
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
  }
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 1.22;
  text-align: center;
  color: #ffffff;
  text-shadow: 0 1px 1px #000000;
  font-family: 'Exo2.0';
  margin-bottom: 24px;
`;

const CardWt = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 80px;
  height: 80px;
  background: var(--card-color);
  border-radius: 50%;
  font-size: 42px;
  line-height: 0.52;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  transition: background 0.3s ease-out;

  .card-wt-type {
    font-size: 21px;
    line-height: 1;
    margin-bottom: -12px;
    margin-top: 6px;
  }
`;

const CardText = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #666666;
  margin-bottom: 4px;
`;

const CardTitle = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
`;

const CardHeader = styled.div`
  padding: 17px 48px 0 48px;
  height: 208px;
`;

const CardSubTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 15px;
`;

const CardDesc = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #666666;
`;

const Photo = styled.div`
  position: relative;
  height: 264px;
  z-index: -1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  transform: translate3d(-4px, 4px, 0);
`;

const Helper = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  margin-top: 14px;
  color: #ffffff;
  .btn-helper {
    border-bottom: 1px dashed rgba(22, 152, 217, 1);
    color: rgba(22, 152, 217, 1);
    cursor: pointer;
    transition: color ease 0.2s;

    &:hover {
      color: #22a7e9;
    }
  }
`;

const Card = styled.div`
  clip-path: polygon(42px 0, 100% 0, 100% 100%, 0 100%, 0 42px);
  background-color: #f2f2f2;
  border: 4px solid var(--card-color);
  border-radius: 12px;
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #000000;
  position: relative;
  transition: all 0.3s ease-out;
  width: 320px;
  max-width: 100%;
  cursor: pointer;

  &:hover {
    border-color: var(--card-hover-color);
    &:after {
      border-color: var(--card-hover-color);
    }

    ${CardWt} {
      background-color: var(--card-hover-color);
    }
  }

  &.selected {
    border-color: var(--card-selected-color);
    &:after {
      border-color: var(--card-selected-color);
    }
    ${CardWt} {
      background-color: var(--card-selected-color);
    }

    &:hover {
      border-color: var(--card-selected-hover-color);
      &:after {
        border-color: var(--card-selected-hover-color);
      }

      ${CardWt} {
        background-color: var(--card-selected-hover-color);
      }
    }
  }

  &[data-disabled='true'] {
    cursor: default;
    border-color: #b3b3b3;
    &:after {
      border-color: #b3b3b3;
    }

    ${CardWt} {
      background-color: #b3b3b3;
    }

    ${CardText}, ${CardTitle}, ${CardSubTitle}, ${CardDesc} {
      color: #b3b3b3;
    }

    ${Photo} {
      opacity: 0.5;
    }

    + ${Helper} {
      color: #ffff66;
    }
  }

  .card-text_alert {
    display: none;
  }
  &[data-alert='true'] {
    &:hover {
      .card-text_alert {
        display: block;
      }

      .card-text_default {
        display: none;
      }
    }
  }

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 70px;
    transform-origin: right;
    top: -6px;
    border-bottom: 4px solid var(--card-color);
    transform: rotate(-45deg);
    left: -30px;
    transition: all 0.3s ease-out;
  }
`;

const data = [
  {
    id: 1,
    selected: false,
    alert: false,
    disabled: false,
    cardText: 'Сказочное заморское яство',
    cardTitle: 'Нямушка',
    cardSubTitle: 'с фуа-гра',
    cardDesc: (
      <>
        <div>
          <strong>10</strong> порций
        </div>
        <div>мышь в подарок</div>
      </>
    ),
    helpSelected: 'Печень утки разварная с артишоками.',
    cardWt: '0,5',
  },
  {
    id: 2,
    selected: true,
    alert: false,
    disabled: false,
    cardText: 'Сказочное заморское яство',
    cardTitle: 'Нямушка',
    cardSubTitle: 'с рыбой',
    cardDesc: (
      <>
        <div>
          <strong>40</strong> порций
        </div>
        <div>
          <strong>2</strong> мыши в подарок
        </div>
      </>
    ),
    helpSelected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    cardWt: '2',
  },
  {
    id: 3,
    selected: false,
    alert: false,
    disabled: true,
    cardText: 'Сказочное заморское яство',
    cardTitle: 'Нямушка',
    cardSubTitle: 'с курой',
    cardDesc: (
      <>
        <div>
          <strong>100</strong> порций
        </div>
        <div>
          <strong>5</strong> мышей в подарок
        </div>
        <div>заказчик доволен</div>
      </>
    ),
    helpSelected: 'Филе из цыплят с трюфелями в бульоне.',
    cardWt: '5',
  },
];

function Index() {
  const [array, setValue] = useState(data);

  function toggleSelected(arr, id) {
    return arr.map(item => (item.id === id ? { ...item, selected: !item.selected } : item));
  }

  const onToggleSelected = (arr, id) => {
    setValue(() => {
      return toggleSelected(arr, id);
    });
  };

  function toggleAlert(arr, id, selected) {
    return arr.map(item => (item.id === id ? { ...item, alert: !!selected } : item));
  }

  const onToggleAlert = (arr, id, selected) => {
    setValue(() => {
      return toggleAlert(arr, id, selected);
    });
  };

  return (
    <Layout>
      <GlobalStyle />
      <Container>
        <Title>Ты сегодня покормил кота?</Title>
        <Row>
          {array.map(
            ({ id, alert, selected, cardText, cardTitle, cardSubTitle, cardDesc, cardWt, disabled, helpSelected }) => (
              <Col key={id}>
                <Card
                  tabIndex={-1}
                  className={selected ? 'selected' : '' && alert}
                  data-disabled={disabled}
                  data-alert={alert && selected}
                  onMouseEnter={e => {
                    onToggleAlert(array, id, selected);
                  }}
                  onClick={() => !disabled && onToggleSelected(array, id)}>
                  <CardHeader>
                    <CardText className="card-text_alert">Котэ не одобряет?</CardText>
                    <CardText className="card-text_default">{cardText}</CardText>
                    <CardTitle>{cardTitle}</CardTitle>
                    <CardSubTitle>{cardSubTitle}</CardSubTitle>
                    <CardDesc>{cardDesc}</CardDesc>
                    <CardWt>
                      {cardWt}
                      <span className="card-wt-type"> кг</span>
                    </CardWt>
                  </CardHeader>
                  <Photo>
                    <StaticImage
                      src="../images/cat.png"
                      placeholder="tracedSVG"
                      quality={90}
                      alt="Нямушка"
                      tracedSVGOptions={{ color: '#1698d9' }}
                    />
                  </Photo>
                </Card>
                <Helper>
                  {!selected && !disabled && (
                    <>
                      {'Чего сидишь? Порадуй котэ, '}
                      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                      <span className="btn-helper" onClick={() => !disabled && onToggleSelected(array, id)}>
                        купи.
                      </span>
                    </>
                  )}
                  {selected && !disabled && <span>{helpSelected}</span>}
                  {disabled && 'Печалька, с курой закончился.'}
                </Helper>
              </Col>
            ),
          )}
        </Row>
      </Container>
    </Layout>
  );
}

export default Index;

export function Head({ location }) {
  return <Seo title="Funbox" pathname={location.pathname} />;
}
