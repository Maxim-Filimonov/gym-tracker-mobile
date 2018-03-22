import React from 'react';
import GraphQLWrapper from './containers/GraphQLWrapper';
import LandingPage from './components/landing-page/LandingPage';

export default function App() {
  return (
    <GraphQLWrapper>
      <LandingPage />
    </GraphQLWrapper>
  );
}
