import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default class TestRating extends React.Component {
  render() {
    return <StarRatingComponent name="rate1" starCount={10} value={5} />;
  }
}
