import React from 'react';
import Header from './header';
import Contact from './widget/contact';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Header bg="light" />
      {children}
      <Contact />
      <Footer />
    </>
  );
}
