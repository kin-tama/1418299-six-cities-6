import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {changeSortType, changeSortStatus} from "../../store/action";
import {getActiveSortType} from "../../store/data/selectors";

const SortListItem = (props) => {
  const {typeKey, activeSortType, sortTypes, onChangeSortType, onChangeSortStatus} = props;
  return (
    <>
      {typeKey === activeSortType && <li onClick={onChangeSortStatus} className="places__option places__option--active" id={typeKey} tabIndex="0">{ sortTypes[typeKey] }</li>}
      {typeKey !== activeSortType && <li onClick={(evt)=>{
        onChangeSortType(evt.target.id);
      }} className="places__option" tabIndex="0" id={typeKey}>{sortTypes[typeKey]}</li>}
    </>
  );
};

const mapStateToProps = (state) => ({
  activeSortType: getActiveSortType(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSortType(newSortType) {
    dispatch(changeSortType(newSortType));
    dispatch(changeSortStatus());
  },

  onChangeSortStatus() {
    dispatch(changeSortStatus());
  },
});

SortListItem.propTypes = {
  typeKey: PropTypes.string.isRequired,
  activeSortType: PropTypes.string.isRequired,
  sortTypes: PropTypes.object.isRequired,
  onChangeSortType: PropTypes.func.isRequired,
  onChangeSortStatus: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(SortListItem);
