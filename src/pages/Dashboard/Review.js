import React from "react";

const Review = () => {
  return (
    <div class="rating rating-lg rating-half">
      <input type="radio" name="rating-4" class="rating-hidden" />

      <input
        type="radio"
        name="rating-4"
        class="mask mask-star-2 bg-green-500"
      />
      <input
        type="radio"
        name="rating-4"
        class="mask mask-star-2 bg-green-500"
        checked
      />
      <input
        type="radio"
        name="rating-4"
        class="mask mask-star-2 bg-green-500"
      />
      <input
        type="radio"
        name="rating-4"
        class="mask mask-star-2 bg-green-500"
      />
      <input
        type="radio"
        name="rating-4"
        class="mask mask-star-2 bg-green-500"
      />
    </div>
  );
};

export default Review;
