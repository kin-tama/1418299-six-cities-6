import React from "react";
import PropTypes from "prop-types";
import {changeSortStatus} from "../../store/action";
import {connect} from "react-redux";
import SortListOpened from "./sort-list-opened";

import {getActiveSortType, getActiveSortChoose} from "../../store/data/selectors";

const SortOptions = (props) => {
  const {activeSortType, activeSortChoose, onChangeSortStatus, sortTypes} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span onClick={onChangeSortStatus} className="places__sorting-type" tabIndex="0">
        {sortTypes[activeSortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {activeSortChoose && <SortListOpened sortTypes={sortTypes}> </SortListOpened>}
    </form>
  );
};

const mapStateToProps = (state) => ({
  activeSortType: getActiveSortType(state),
  activeSortChoose: getActiveSortChoose(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSortStatus() {
    dispatch(changeSortStatus());
  },
});

SortOptions.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  activeSortChoose: PropTypes.bool.isRequired,
  sortTypes: PropTypes.objectOf(PropTypes.string).isRequired,
  onChangeSortStatus: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SortOptions);
