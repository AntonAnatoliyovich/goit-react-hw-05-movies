import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "services/fetchReviews";


const Reviews = () => {

	const [reviews, setReviews] = useState([]);

	const { movieId } = useParams();

	useEffect(() => {
		const controller = new AbortController();
		
		fetchReviews(movieId, controller.signal)
			.then(({ data }) => {
				setReviews(data.results);
				console.log(data);
			}).catch(error => {
				console.log(error);
			})

		return () => {
			controller.abort();
		}
	}, [movieId]);

	return (
		<>
			{
				reviews.length === 0
					? <p>We don't have ane reviews for this movie</p>
					: (
						<ul>
							{
								reviews.map(review => <li key={review.id}>
									<h3>Author: {review.author}</h3>
									<p>{review.content}</p>
								</li>)
							}
						</ul>
					)
			}
		</>
	)
}

export default Reviews;
