// import React, { useState } from "react";

// export default function RatingAndReviews() {
//   const [rating, setRating] = useState(0);
//
//   const [reviews, setReviews] = useState([]);
//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//   };

//

//   return (
//     <div className="">
//       <p>Rate: {rating}</p>
//       <div className="flex justify-center items-center gap-2">
//         {/* <button className="bg-blue-500" onClick={() => setRating(rating + 1)}>
//           Increase Rating
//         </button>
//         <button className="bg-blue-500" onClick={() => setRating(rating - 1)}>
//           Decrease Rating
//         </button> */}

//         {[1,2,3,4,5].map((value) => {
//           return (
//             <div className="shadow shadow-gray-400 p-[1em]">
//               <button
//                 key={value}
//                 onClick={() => {
//                   handleRatingChange(value);
//                 }}
//                 style={{
//                   backgroundColor: rating >= value ? "blue" : "gray",
//                   padding: "1em",
//                   color: "white",
//                 }}
//               >
//                 {value}
//               </button>
//               <p>Selected Rating: {rating}</p>

//               <div>
//                 <h3>Reviews:</h3>
//                 <ul>
//                   {reviews.map((rev, index) => (
//                     <li key={index}>
//                       <p>Rating: {rev.rating}</p>
//                       <p>{rev.text}</p>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
// import { Container, Radio, Rating } from "../../Ratingstyles";
export default function RatingAndReviews() {
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmitReview = () => {
    if (review.trim() !== "") {
      const newReview = {
        rate,
        text: review,
      };
      setReviews([...reviews, newReview]);
      setRating(0);
      setReview("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh]">
      <div className="flex">
        {[...Array(5)].map((item, index) => {
          const givenRating = index + 1;
          return (
            <div className="cursor-pointer m-[1em]">
              <label>
                <input
                  className=""
                  type="radio"
                  value={givenRating}
                  onClick={() => {
                    setRate(givenRating);
                    // alert(
                    //   `Are you sure you want to give
                    // 	${givenRating} stars ?`
                    // );
                  }}
                />
                <FaStar
                  color={
                    givenRating < rate || givenRating === rate
                      ? "#318bd4"
                      : "rgb(192,192,192)"
                  }
                  size={50}
                />
              </label>
            </div>
          );
        })}
      </div>

      {/* <div> */}
      <div className="flex flex-col my-[1em] shadow shadow-gray-500 p-5 mx-5 w-[30vw] min-h-[35vh]">
        <h3 className="font-medium text-[1.5rem] ">Write a Review:</h3>
        <textarea
          value={review}
          onChange={handleReviewChange}
          className="border-2 border-black p-5 outline-none"
          placeholder="Write your review here..."
        />
        <button
          onClick={handleSubmitReview}
          className="my-[1.5em] p-3 bg-[#318bd4] text-white rounded-full"
        >
          Submit Review
        </button>
        <div>
          <ul>
            {reviews.map((rev, index) => (
              <li key={index}>
                <div className="flex gap-5">
                  <p className="font-medium text-[1.5rem]">Rating: </p>
                  <p className="font-normal text-[1.5rem] text-[#318bd4]">{rev.rate}</p>
                </div>
                <div className="flex gap-5">
                  <p className="font-medium text-[1.5rem]">Review: </p>
                  <p className="font-normal text-[1.5rem] text-[#318bd4]">{rev.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}
