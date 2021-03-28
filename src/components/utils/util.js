
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
  const adaptedOffer = {
    "bedrooms": offerFromServer.bedrooms,
    "city": {
      "location": {
        "latitude": offerFromServer.city.location.latitude,
        "longitude": offerFromServer.city.location.longitude,
        "zoom": offerFromServer.city.location.zoom
      },
      "name": offerFromServer.city.name
    },
    "description": offerFromServer.description,
    "goods": offerFromServer.goods,
    "host": {
      "avatarUrl": offerFromServer.host.avatar_url,
      "id": offerFromServer.host.id,
      "isPro": offerFromServer.host.is_pro,
      "name": offerFromServer.host.name
    },
    "id": offerFromServer.id,
    "images": offerFromServer.images,
    "isFavorite": offerFromServer.is_favorite,
    "isPremium": offerFromServer.is_premium,
    "location": {
      "latitude": offerFromServer.location.latitude,
      "longitude": offerFromServer.location.longitude,
      "zoom": offerFromServer.location.zoom
    },
    "maxAdults": offerFromServer.max_adults,
    "previewImage": offerFromServer.preview_image,
    "price": offerFromServer.price,
    "rating": offerFromServer.rating,
    "title": offerFromServer.title,
    "type": offerFromServer.type
  };

  return adaptedOffer;
};

export const adaptOffers = (offersFromServer) => {
  const offers = [];
  offersFromServer.forEach((offer) => {
    offers.push(adaptOffer(offer));
  });
  return offers;
};


export const adaptComment = (comment) => {
  const adaptedComment = {...comment};
  adaptedComment.user.avatarUrl = adaptedComment.user.avatar_url;
  adaptedComment.user.isPro = adaptedComment.user.is_pro;

  return adaptedComment;
};
