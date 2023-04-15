import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const HeaderElement = styled.header`
    min-width: 100vw;
    height: 70px;
    box-shadow: 0 0 15px #888888;
    margin-bottom: 20px;
`;

export const HeaderInner = styled.div`
    height: 100%;
`;

export const HeaderNavigation = styled.nav`
    height: 100%;
`;

export const HeaderLinksList = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 20px;
`;

export const HeaderLink = styled.li``;

export const StyledNavLink = styled(NavLink)`
    color: #000;
    font-weight: 600;
    &.active {
        color: tomato;
    }
`;