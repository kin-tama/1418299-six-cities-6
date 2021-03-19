
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

export const adaptOffers = (offersFromServer) => {
  const offers = [...offersFromServer];
  offers.forEach((offer) => {
    offer.previewImage = offer.preview_image;
    offer.host.avatarUrl = offer.host.avatar_url;
    offer.host.isPro = offer.host.is_pro;
    offer.isFavorite = offer.is_favorite;
    offer.isPremium = offer.is_premium;
    offer.maxAdults = offer.max_adults;
    delete offer.preview_image;
    delete offer.host.avatar_url;
    delete offer.host.is_pro;
    delete offer.is_favorite;
    delete offer.is_premium;
    delete offer.max_adults;
  });

  return offers;
};
