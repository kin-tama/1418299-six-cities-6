import React from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import SortListOpened from "./sort-list-opened";

const SortOptions = (props) => {
  const {activeSortType, activeSortChoose, changeSortStatus, sortTypes} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={changeSortStatus} className="places__sorting-type" tabIndex="0">
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
  activeSortType: state.activeSortType,
  activeSortChoose: state.activeSortChoose
});

const mapDispatchToProps = (dispatch) => ({
  changeSortStatus() {
    dispatch(ActionCreator.changeSortStatus());
  },
});

SortOptions.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  activeSortChoose: PropTypes.bool.isRequired,
  sortTypes: PropTypes.object.isRequired,
  changeSortStatus: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SortOptions);
