import React, { useState } from 'react';
import Layout from './Layout';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import ShowDetails from './components/ShowDetails';

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [showId, setShowId] = useState<number | null>(null);

  return (
    <Layout>
      <SearchBar onQueryChange={setQuery} />
      <ShowDetails showId={showId} />
      <SearchResults query={query} onShowClick={setShowId} />
    </Layout>
  );
};

export default App;
