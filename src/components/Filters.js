import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {filters} from '../mocks/mock_data';

//TODO update styling here 
const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const FilterButton = styled.div`
  align-items: center;
  border: 1px solid white;
  background: #282c34;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  justify-content: center;
  text-transform: uppercase;

  &.active {
    background: white;
    color: #282c34;
  }
`;

const Filters = ({activeFilter, setFilter}) => {
  return (
    <FilterWrapper>
      <FilterButton
        className={activeFilter === filters.ALL ? 'active' : ''}
        onClick={() => setFilter(filters.ALL)}
      >
        {filters.ALL}
      </FilterButton>

      <FilterButton
        className={activeFilter === filters.INCOMPLETE ? 'active' : ''}
        onClick={() => setFilter(filters.INCOMPLETE)}
      >
        {filters.INCOMPLETE}
      </FilterButton>

      <FilterButton
        className={activeFilter === filters.COMPLETE ? 'active' : ''}
        onClick={() => setFilter(filters.COMPLETE)}
      >
        {filters.COMPLETE}
      </FilterButton>
    </FilterWrapper>
  )
}

Filters.propTypes = {
  activeFilter: PropTypes.string,
  setFilter: PropTypes.func,
}

export default Filters;
