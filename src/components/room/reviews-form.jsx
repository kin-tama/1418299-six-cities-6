import React from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";

const ReviewForm = (props) => {
  const {comments, addComment} = props;
  const newComment = {
    comment: ``,
    date: dayjs().toDate(),
    id: 55,
    rating: 0,
    user: {
      avatarUrl: `img/avatar-galina.jpg`,
      id: 4,
      isPro: false,
      name: `Myx`
    }
  };

  const submitHandle = (evt) => {
    evt.preventDefault();
    addComment(comments.push(newComment));
    document.querySelector(`.reviews__textarea`).value = ``;
    document.querySelectorAll(`.form__rating-input`).forEach((node) => {
      node.checked = false;
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={submitHandle}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input onChange={(evt) => {
          newComment.rating = evt.target.value;
        }} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={(evt) => {
          newComment.rating = evt.target.value;
        }} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={(evt) => {
          newComment.rating = evt.target.value;
        }} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={(evt) => {
          newComment.rating = evt.target.value;
        }} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={(evt) => {
          newComment.rating = evt.target.value;
        }} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea onChange={(evt) => {
        newComment.comment = evt.target.value;
      }} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  comments: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired
};

export default ReviewForm;
