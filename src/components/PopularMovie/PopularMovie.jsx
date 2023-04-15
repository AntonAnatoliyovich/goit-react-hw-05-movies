import { Movie, StyledNavLink } from "./PopularMovie.styled";

const PopularMovie = ({ movie }) => {
	return (
		<Movie>
			<StyledNavLink to={`movies/${movie.id}`}>
				{movie.title}
			</StyledNavLink>
		</Movie>
		
	)
}

export default PopularMovie;
