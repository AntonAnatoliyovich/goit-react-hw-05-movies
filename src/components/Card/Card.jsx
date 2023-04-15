import { AdditionalInformation } from "components/AdditionalInformation/AdditionalInformation"
import { MovieCard, CardTitle, OverviewDescription, GenresList, Genre } from "./Card.styled"
import { Outlet } from "react-router-dom"

export const Card = ({ popularMovie: { poster_path, title, overview, genres }, movieId }) => {

	return (
		<>
			<MovieCard>
				<div>
					<img width={100} height={100} src={`movies/${movieId}${poster_path}`} alt="" />
				</div>
				<CardTitle>{title}</CardTitle>
				<div>
					<CardTitle>Overview</CardTitle>
					<OverviewDescription>{overview}</OverviewDescription>
				</div>
				<div>
					<CardTitle>Genres</CardTitle>
					<GenresList>
					{
						genres.map(genre => <Genre key={genre.name}>{genre.name}</Genre>)
					}
				</GenresList>
				</div>
			</MovieCard>
			<hr/>
			<AdditionalInformation />
			<hr/>
			<Outlet />
		</>
	)
}
