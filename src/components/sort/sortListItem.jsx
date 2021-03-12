import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../source/action";

const SortListItem = (props) => {
  const {typeKey, activeSortType, sortTypes, changeSortType, changeSortStatus} = props;
  return (
    <>
      {typeKey === activeSortType && <li onClick={changeSortStatus} className="places__option places__option--active" id={typeKey} tabIndex="0">{ sortTypes[typeKey] }</li>}
      {typeKey !== activeSortType && <li onClick={(evt)=>{
        changeSortType(evt.target.id);
      }} className="places__option" tabIndex="0" id={typeKey}>{sortTypes[typeKey]}</li>}
    </>
  );
};

const mapStateToProps = (state) => ({
  activeSortType: state.activeSortType,
});

const mapDispatchToProps = (dispatch) => ({
  changeSortType(newSortType) {
    dispatch(ActionCreator.changeSortType(newSortType));
    dispatch(ActionCreator.changeSortStatus());
  },

  changeSortStatus() {
    dispatch(ActionCreator.changeSortStatus());
  },
});

SortListItem.propTypes = {
  typeKey: PropTypes.string.isRequired,
  activeSortType: PropTypes.string.isRequired,
  sortTypes: PropTypes.object.isRequired,
  changeSortType: PropTypes.func.isRequired,
  changeSortStatus: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(SortListItem);
