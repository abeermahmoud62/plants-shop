import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Search = () => {
  return (
    <Container>
      <Form>
        <SearchIcon style={{ backgroundColor: '#fff' }} />
        <Input type="text" placeholder="Search..." />
      </Form>
      <RightSide>
        <Login>
          <AccountCircleIcon style={{ backgroundColor: '#fff' }} />
          <Link
            to="/login"
            style={{ textDecoration: 'none', backgroundColor: '#fff' }}
          >
            <LoginLink>Log in</LoginLink>
          </Link>
        </Login>
        <ShoppingBagIcon style={{ backgroundColor: '#fff' }} />
      </RightSide>
    </Container>
  )
}

export default Search

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 15px;
  max-width: 100%;
  margin: 0 0 0 0;
  color: #a05841;
  /* font-family: 'Lora', serif; */
`
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: inherit;
  background: inherit;
`
const Input = styled.input`
  background: #fff;
  margin-left: 5px;
  border: none;
  padding: 8px;
  &:focus {
    outline: none;
    border: 1px solid #a05841;
  }
  &:active {
    border: 1px solid #a05841;
  }
  ::placeholder {
    color: #a05841;
    font-size: 1.1rem;
    font-weight: 400;
  }
`
const RightSide = styled.div`
  display: flex;
  align-items: center;
  margin: inherit;
  background: inherit;
`
const Login = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  background: inherit;
`
const LoginLink = styled.a`
  font-family: 'lora', serif;
  background: #fff;
  color: #a05841;
  margin-left: 10px;
`
