import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
  color: #28454F;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 20px;
  &.active {
    color: #28454F;
  }
  &:hover {
    color: #17252A;
  }
`;

export const NavBanner = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: #28454F;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 20px;
  &.active {
    color: #28454F;
  }
  &:hover {
    color: #17252A;
  }
`;
