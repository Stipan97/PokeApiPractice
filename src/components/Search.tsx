import React, { useState } from 'react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UNSET_ERROR_DETAILS } from '../models/types';

export const Search: FC = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const onChangeUpdateSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = event.currentTarget.value;
    const searchLowercase = searchInput.toLowerCase();
    if (searchInput) {
      setSearch(searchLowercase);
    }
  };

  const onClickChangeErrorOnDetails = () => {
    dispatch({ type: UNSET_ERROR_DETAILS });
  };

  return (
    <div>
      <input onChange={onChangeUpdateSearch} type="text" />
      <Link onClick={onClickChangeErrorOnDetails} to={`/pokemon/${search}`}>
        Search
      </Link>
    </div>
  );
};
