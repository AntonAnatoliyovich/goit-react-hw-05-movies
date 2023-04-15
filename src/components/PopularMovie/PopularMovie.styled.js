import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Movie = styled.li`
	flex-basis: 100%;
`;

export const StyledNavLink = styled(NavLink)`
	color: #000;
	&:hover {
		text-decoration: underline;
	}
`
