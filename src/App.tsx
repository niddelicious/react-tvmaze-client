import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import ShowDetails from './components/ShowDetails';
import { Typography } from '@material-tailwind/react';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Typography variant="h1" color="blue" className="text-center mt-6 mb-4">TV Maze Search App</Typography>
        <SearchBar />
        <Routes>
          <Route path="/" element={<SearchResults />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/show/:showId" element={<ShowDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
