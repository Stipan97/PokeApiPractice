import React, { useState } from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Search: FC = () => {
  const [search, setSearch] = useState('');

  const onChangeUpdateSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = event.currentTarget.value;
    const searchLowercase = searchInput.toLowerCase();
    if (searchInput) {
      setSearch(searchLowercase);
    }
  };

  return (
    <div>
      <input onChange={onChangeUpdateSearch} type="text" />
      <Link to={`/pokemon/${search}`}>Search</Link>
    </div>
  );
};
