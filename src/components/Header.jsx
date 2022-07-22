import Search from './Search'
import styled from 'styled-components'
const Header = () => {
  return (
    <Container>
      <Search />
      <Wrapper>
        <LeftWrap>
          <Title>Prickles &#38; Co.</Title>
          <List>
            <ListItem>
              <DropdownWrapper>
                <DropdownBTN>Shop</DropdownBTN>
                <DropdownList>
                  <DropdownItem>Cacti</DropdownItem>
                  <DropdownItem>Plants</DropdownItem>
                  <DropdownItem>Succulents</DropdownItem>
                </DropdownList>
              </DropdownWrapper>
            </ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </LeftWrap>
        <RightText>We deliver to your doorstep</RightText>
      </Wrapper>
    </Container>
  )
}
export default Header

const Container = styled.header`
  margin-top: 2em;
  position: fixed;
  top: 0;
  width: 90%;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #a05841;
  margin-top: 0.5em;
`
const LeftWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`
const Title = styled.h3`
  color: #a05841;
  text-transform: upperCase;
  font-weight: 600;
  font-size: 1.1rem;
`

const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 1.2em;
  margin-left: 0.5em;
`

const DropdownList = styled.ul`
  display: none;
  position: absolute;
  min-width: 70px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`
const DropdownBTN = styled.button`
  background-color: transparent;
  color: #a05841;
  font-size: 16px;
  border: none;
  cursor: pointer;
`
const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    ${DropdownList} {
      display: block;
      padding: 0.4em 0.9em;
    }
    ${DropdownBTN} {
      color: #000;
    }
  }
`

const DropdownItem = styled.a`
  color: black;
  text-decoration: none;
  display: block;
  margin: 0;
  padding-bottom: 0.8em;
  font-size: 0.9rem;
  color: #a05841;
  &:last-child {
    padding-bottom: 0.3em;
  }
  &:hover {
    color: #000;
  }
`
const ListItem = styled.li`
  margin: 0 1em;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`
const RightText = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: capitalize;
  letter-spacing: 2px;
`
