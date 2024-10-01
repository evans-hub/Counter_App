import React, { useState, useEffect } from 'react';

const DebouncedSearch = ({ list }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredValues, setFilteredValues] = useState(list);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm) {
        setFilteredValues(list.filter(item => item.toString().includes(searchTerm)));
      } else {
        setFilteredValues(list);
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm, list]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search counter values"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredValues.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebouncedSearch;
