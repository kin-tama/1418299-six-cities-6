import React from "react";
import SortListItem from "./sort-list-item";
import PropTypes from "prop-types";

const SortListOpened = (props) => {
  const {sortTypes} = props;
  const sortTypesKeys = Object.keys(sortTypes);
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {sortTypesKeys.map((typeKey) => <SortListItem typeKey={typeKey} key={typeKey} sortTypes={sortTypes}></SortListItem>)}
    </ul>
  );
};

SortListOpened.propTypes = {
  sortTypes: PropTypes.objectOf(PropTypes.string).isRequired
};

export default SortListOpened;
