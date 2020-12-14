import { useState, useEffect } from 'react';
import './App.components.scss';
import { Search } from '../Search/Search.components';
import { Countries } from '../Countries/Countries.components';

export const App = props => {

  return (
    <div className="min-h-screen App">
      <Search getCountries={props.getCountries} search={props.search} region={props.region} />
      <Countries countries={props.countries} />
    </div>
  )
}
