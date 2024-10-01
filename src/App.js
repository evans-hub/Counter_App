import React, { useState, Suspense } from 'react';
import Counter from './Counter ';
import ThemeToggler from './ThemeToggler';

const DebouncedSearch = React.lazy(() => import('./DebouncedSearch'));

const App = () => {
  const [counterList, setCounterList] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const handleCounterUpdate = newCount => {
    setCounterList([...counterList, newCount]);
  };

  return (
    <div>
      <ThemeToggler />
      <Counter onCounterUpdate={handleCounterUpdate} />
      <button onClick={() => setShowSearch(!showSearch)}>
        {showSearch ? 'Hide' : 'Show'} Search
      </button>
      {showSearch && (
        <Suspense fallback={<div>Loading search...</div>}>
          <DebouncedSearch list={counterList} />
        </Suspense>
      )}
    </div>
  );
};

export default App;
