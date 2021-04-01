import React, {memo} from "react";
import PropTypes from "prop-types";
import {rating} from "../utils/util";
import dayjs from "dayjs";


const Review = (props) => {
  const {comment} = props;
  const dateTime = dayjs(comment.date).format(`YYYY-mm-DD`);
  const dateShow = dayjs(comment.date).format(`MMMM YYYY`);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: rating(comment)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{dateShow}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  comment: PropTypes.object.isRequired
};

export default memo(Review, (prevProps, nextProps) => {
  return prevProps.comment.comment === nextProps.comment.comment;
});
