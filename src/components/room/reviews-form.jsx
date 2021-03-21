import React, {useState, useRef} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {postComment} from "../../store/api-action";


const ReviewForm = (props) => {
  const {onSubmit, offerId} = props;
  const [commentState, setComment] = useState(``);
  const [ratingState, setRating] = useState(0);

  const commentRef = useRef();
  const ratingOneRef = useRef();
  const ratingTwoRef = useRef();
  const ratingThreeRef = useRef();
  const ratingFourRef = useRef();
  const ratingFiveRef = useRef();

  const newComment = {
    rating: ratingState,
    comment: commentState
  };

  const disableSubmit = (ratingState < 1 || commentState.length < 50 || commentState.length > 300) ? true : false;

  const submitHandle = (evt) => {
    evt.preventDefault();

    onSubmit(
        offerId,
        newComment
    );

    commentRef.current.value = ``;
    ratingOneRef.current.checked = false;
    ratingTwoRef.current.checked = false;
    ratingThreeRef.current.checked = false;
    ratingFourRef.current.checked = false;
    ratingFiveRef.current.checked = false;
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={submitHandle}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input ref={ratingOneRef} onChange={(evt) => {
          newComment.rating = evt.target.value;
          setRating(evt.target.value);
        }} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input ref={ratingTwoRef} onChange={(evt) => {
          newComment.rating = evt.target.value;
          setRating(evt.target.value);
        }} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input ref={ratingThreeRef} onChange={(evt) => {
          newComment.rating = evt.target.value;
          setRating(evt.target.value);
        }} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input ref={ratingFourRef} onChange={(evt) => {
          newComment.rating = evt.target.value;
          setRating(evt.target.value);
        }} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input ref={ratingFiveRef} onChange={(evt) => {
          newComment.rating = evt.target.value;
          setRating(evt.target.value);
        }} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea ref={commentRef} onChange={(evt) => {
        newComment.comment = evt.target.value;
        setComment(evt.target.value);

      }} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disableSubmit}>Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  offerId: PropTypes.number.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, {rating, comment}) {
    dispatch(postComment(id, {rating, comment}));
  }
});

export default connect(null, mapDispatchToProps)(ReviewForm);
