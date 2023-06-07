import React, { useState } from 'react';
import Layout from './Layout';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

const App: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <Layout>
      <SearchBar onQueryChange={setQuery} />
      <SearchResults query={query} />
    </Layout>
  );
};

export default App;