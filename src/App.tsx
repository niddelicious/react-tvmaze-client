import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import ShowDetails from './components/ShowDetails';

const App: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <Router>
      <Layout>
        <SearchBar onQueryChange={setQuery} />
        <Routes>
          <Route path="/" element={<SearchResults query={query} />} />
          <Route path="/show/:showId" element={<ShowDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
