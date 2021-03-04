import PropTypes from "prop-types";

export const offersPropTypes = {
  "bedrooms": PropTypes.number,
  "city": PropTypes.shape({
    "location": PropTypes.shape({
      "latitude": PropTypes.number.isRequired,
      "longitude": PropTypes.number.isRequired,
      "zoom": PropTypes.number.isRequired
    }),
    "name": PropTypes.string.isRequired
  }),
  "description": PropTypes.string.isRequired,
  "goods": PropTypes.array.isRequired,
  "host": PropTypes.shape({
    "avatarUrl": PropTypes.string.isRequired,
    "id": PropTypes.number.isRequired,
    "isPro": PropTypes.bool.isRequired,
    "name": PropTypes.string.isRequired
  }),
  "id": PropTypes.number.isRequired,
  "images": PropTypes.array.isRequired,
  "isFavorite": PropTypes.bool.isRequired,
  "isPremium": PropTypes.bool.isRequired,
  "location": PropTypes.shape({
    "latitude": PropTypes.number.isRequired,
    "longitude": PropTypes.number.isRequired,
    "zoom": PropTypes.number.isRequired
  }),
  "maxAdults": PropTypes.number.isRequired,
  "previewImage": PropTypes.string.isRequired,
  "price": PropTypes.number.isRequired,
  "rating": PropTypes.number.isRequired,
  "title": PropTypes.string.isRequired,
  "type": PropTypes.string.isRequired
};

export const commentsPropTypes = {
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  })
};
