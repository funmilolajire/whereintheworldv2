import { useState, useEffect } from 'react';
import './App.components.scss';
import { Search } from '../Search/Search.components';
import { Countries } from '../Countries/Countries.components';

export const App = () => {

  return (
    <div className="min-h-screen App">
      <Search />
      <Countries />
    </div>
  )
}
