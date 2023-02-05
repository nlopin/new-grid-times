import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import {QUERIES, WEIGHTS} from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Left>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </Left>
        <Center>
        <Logo />
        </Center>
        <Right>
          <Button>Subscribe</Button>
          <Link href="#">Already a subscriber?</Link>
        </Right>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: "left logo right";
  margin-top: 32px;
  margin-bottom: 48px;
  align-items: center;
  
  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }
  
  @media ${QUERIES.laptopAndUp} {
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

const Left = styled.div`
  grid-area: left;
  justify-self: start;
  align-self: center;
  display: none;
  
  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`
const Center = styled.div`
  grid-area: logo;
`
const Right = styled.div`
  display: none;
  grid-area: right;
  justify-self: end;
  position: relative;
  
  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`

const Link = styled.a`
  display: block;
  width: 100%;
  position: absolute;
  font-size: .875rem;
  font-style: italic;
  text-decoration: underline;
  text-align: center;
  font-weight: ${WEIGHTS.normal};
  margin-top: 8px;
  color: var(--color-gray-900);
`

export default Header;
