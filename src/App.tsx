import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Search from 'pages/Search';
import 'styles/index.css';

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/search" element={<Search />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
