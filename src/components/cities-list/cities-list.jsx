// import React, {memo} from "react";
// import SingleCity from "./single-city";
// import PropTypes from "prop-types";

// const сitiesList = (props) => {
//   const {cities} = props;

//   console.log("render: <CitiesList> ")

//   return (
//     <ul className="locations__list tabs__list">
//       {cities.map((city) => <SingleCity city={city} key={city}></SingleCity>)}
//     </ul>
//   );
// };

// сitiesList.propTypes = {
//   cities: PropTypes.array.isRequired,
// };


// export default memo(сitiesList, (prevProps, nextProps) => {
//   return prevProps.cities === nextProps.cities;
// });

