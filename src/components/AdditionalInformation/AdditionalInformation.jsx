import { AdditionalTitle, AdditionalList, AdditionInfo, StyledLink } from "./AdditionalInformation.styled";

export const AdditionalInformation = () => {
	return (
		<>
			<AdditionalTitle>Additional information</AdditionalTitle>
			<AdditionalList>
				<AdditionInfo>
					<StyledLink to="cast">Cast</StyledLink>
				</AdditionInfo>
				<AdditionInfo>
					<StyledLink to="reviews">Reviews</StyledLink>
				</AdditionInfo>
			</AdditionalList>
		</>
	)
}
