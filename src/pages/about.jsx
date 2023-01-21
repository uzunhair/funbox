import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// styles
const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

const Layout = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(337deg, rgb(101, 78, 163), rgb(218, 152, 180));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const Card = styled.div`
  width: 450px;
  height: 320px;
  max-width: 100%;
  border-radius: 10px;
  background-color: rgb(34, 39, 46);
  color: #ffffff;
  box-shadow: rgb(38 57 77) 0 20px 30px -10px;
`;

const CardBody = styled.div`
  padding: 10px 20px;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 18px;
`;

const Panel = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, 0.06);
`;

const SystemButtons = styled.div`
  display: flex;
  margin-right: 20px;
  padding-top: 4px;
`;

const SystemButton = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;

  &:first-child {
    background-color: #ff5f57;
  }

  &:nth-child(2) {
    background-color: #febc2e;
    margin: 0 8px;
  }

  &:last-child {
    background-color: #28c840;
  }
`;

const TabItem = styled.div`
  color: #cbd5e0;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: rgb(34, 39, 46);
  margin-top: 8px;
  display: flex;
  align-items: center;
  height: 42px;
  padding: 4px 17px 6px 17px;
  position: relative;

  &:after,
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    display: block;
    height: 12px;
    width: 12px;
    left: -12px;
    background-color: rgb(34, 39, 46);
  }

  &:after {
    border-bottom-right-radius: 6px;
    background-color: rgba(255, 255, 255, 0.06);
  }
`;

const TabItemCategory = styled.div`
  color: #edc624;
  margin-right: 6px;

  &:after,
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    display: block;
    height: 12px;
    width: 12px;
    right: -12px;
    background-color: rgb(34, 39, 46);
  }

  &:after {
    border-bottom-left-radius: 6px;
    background-color: rgba(255, 255, 255, 0.06);
  }
`;

function AboutPage() {
  return (
    <Layout>
      <GlobalStyle />
      <Card>
        <Panel>
          <SystemButtons>
            <SystemButton />
            <SystemButton />
            <SystemButton />
          </SystemButtons>
          <TabItem>
            <TabItemCategory>cv</TabItemCategory>
            about.js
          </TabItem>
        </Panel>
        <CardBody>
          <pre>
            <code>
              {/* eslint-disable */}
              <div className="line">
                <span style={{ color: '#768390' }}>&#47;&#47; some information about me</span>
              </div>
              <div className="line">
                <span style={{ color: '#F47067' }}>const</span>
                <span style={{ color: '#ADBAC7' }}> </span>
                <span style={{ color: '#DCBDFB' }}>aboutMe</span>
                <span style={{ color: '#ADBAC7' }}> </span>
                <span style={{ color: '#F47067' }}>=</span>
                <span style={{ color: '#ADBAC7' }}> </span>
                <span style={{ color: '#F47067' }}>function</span>
                <span style={{ color: '#ADBAC7' }}>() &#123;</span>
              </div>
              <br />
              <div className="line">
                <span style={{ color: '#ADBAC7' }}>  </span>
                <span style={{ color: '#F47067' }}>return</span>
                <span style={{ color: '#ADBAC7' }}> &#123;</span>
              </div>
              <div className="line">
                <span style={{ color: '#ADBAC7' }}>   name: </span>
                <span style={{ color: '#96D0FF' }}>'Zainulabidov Uzunhair'</span>
                <span style={{ color: '#ADBAC7' }}>,</span>
              </div>
              <div className="line">
                <span style={{ color: '#ADBAC7' }}>   position: </span>
                <span style={{ color: '#96D0FF' }}>'fullstack-developer'</span>
                <span style={{ color: '#ADBAC7' }}>,</span>
              </div>
              <div className="line">
                <span style={{ color: '#ADBAC7' }}>   website: </span>
                <span style={{ color: '#96D0FF' }}>'https://uzun.hair'</span>
                <span style={{ color: '#ADBAC7' }}>,</span>
              </div>
              <div className="line">
                <span style={{ color: '#ADBAC7' }}>   telegram: </span>
                <span style={{ color: '#96D0FF' }}>'https://t.me/uzunhair'</span>
                <span style={{ color: '#ADBAC7' }}>,</span>
              </div>
              <div className="line">
                <span style={{ color: '#ADBAC7' }}>  &#125;</span>
              </div>
              <div className="line">
                <span style={{ color: '#ADBAC7' }}>&#125;</span>
              </div>
              {/* eslint-enable */}
            </code>
          </pre>
        </CardBody>
      </Card>
    </Layout>
  );
}

export default AboutPage;
