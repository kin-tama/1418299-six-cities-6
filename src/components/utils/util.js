
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

export const adaptOffer = (offerFromServer) => {
  const adaptedOffer = offerFromServer;
  adaptedOffer.previewImage = adaptedOffer.preview_image;
  adaptedOffer.host.avatarUrl = adaptedOffer.host.avatar_url;
  adaptedOffer.host.isPro = adaptedOffer.host.is_pro;
  adaptedOffer.isFavorite = adaptedOffer.is_favorite;
  adaptedOffer.isPremium = adaptedOffer.is_premium;
  adaptedOffer.maxAdults = adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;
  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;

  return adaptedOffer;
};

export const adaptOffers = (offersFromServer) => {
  const offers = [...offersFromServer];
  offers.forEach((offer) => {
    adaptOffer(offer);
  });

  return offers;
};


export const adaptComment = (comment) => {
  const adaptedComment = {...comment};
  adaptedComment.user.avatarUrl = adaptedComment.user.avatar_url;
  adaptedComment.user.isPro = adaptedComment.user.is_pro;

  delete adaptedComment.user.is_pro;
  delete adaptedComment.user.avatar_url;
  return adaptedComment;
};
