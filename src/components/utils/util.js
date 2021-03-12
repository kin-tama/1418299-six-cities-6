
export const rating = (comment) => `${Math.round(comment.rating / 5 * 100)}%`;

export const sortAllOffers = (unsortedOffers, offers, sortType) => {
  switch (sortType) {
    case `priceHighToLow`:
      return unsortedOffers.sort((offerA, offerB) => offerB.price - offerA.price);

    case `priceLowToHigh`:
      return unsortedOffers.sort((offerA, offerB) => offerA.price - offerB.price);

    case `ratingHighToLow`:
      return unsortedOffers.sort((offerA, offerB) => offerB.rating - offerA.rating);

    case `popular`:
      return offers;

    default:
      return unsortedOffers;
  }
};
