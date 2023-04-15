import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const AdditionalTitle = styled.p`
	font-size: 16px;
`;

export const AdditionalList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const AdditionInfo = styled.li``;

export const StyledLink = styled(Link)`
	color: #000;
	&:hover {
		text-decoration: underline;
	}
`;
