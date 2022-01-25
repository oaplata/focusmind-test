import { Link } from 'react-router-dom'
import { Container, HomeContainer } from "../ui-components/container"
import LogoFocus from '../resources/logo.png'
import LogoFacebook from '../resources/facebook.png'
import LogoGoogle from '../resources/GOOGLE.png'
import LogoApple from '../resources/Apple.png'
import { H1, H3 } from "../ui-components/titles"
import { Input, InputContainer } from "../ui-components/inputs"
import { Button } from "../ui-components/buttons"
import { Span } from "../ui-components/span"
import { Row } from "../ui-components/row"
import { Logo } from "../ui-components/logo"
import { P } from "../ui-components/p"
import { useState } from "react"
const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handlerChangeInput = (e, setter) => {
    setter(e.target.value)
  }



  return (<Container>
    <HomeContainer>
      <Logo src={LogoFocus} alt="" width="3.0625rem"mb="2.5rem"/>
      <H1>Hello again!</H1>
      <H3 mb="4.625rem">Enter your personal information</H3>
      <InputContainer className={email && 'active'}>
        <Input placeholder="E-mail" type="text" mb="2.5rem" onChange={(e) => handlerChangeInput(e, setEmail)}/>
        <span>E-mail</span>
      </InputContainer>
      <InputContainer className={password && 'active'}>
        <Input placeholder="Password (6+ characters)" type="text" mb="0.875rem" onChange={(e) => handlerChangeInput(e, setPassword)} />
        <span>Password (6+ characters)</span>
      </InputContainer>
      <Button link={true} mb="3.9375rem" >
        <Link to="/preferences">
          I forgot my password
        </Link>
      </Button>
      <Button block={true} mb="2.4375rem" >Login whit E-mail</Button>
      <Span>or</Span>
      <Row>
        <Button background="#4267B2">
          <Logo src={LogoFacebook} alt="" width="1.4375rem"/>
        </Button>
        <Button background="#E3E3E3">
          <Logo src={LogoGoogle} alt="" width="3.1875rem"/>
        </Button>
        <Button background="#202020">
          <Logo src={LogoApple} alt="" width="2.625rem"/>
        </Button>
      </Row>
      <P>Don’t have an account? <span>Sign up</span></P>
    </HomeContainer>
  </Container>)
}

export default Home
