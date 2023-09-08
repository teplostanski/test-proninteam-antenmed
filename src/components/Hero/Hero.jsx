import { Col } from 'react-bootstrap'

import HeroTitle from '../HeroTitle/HeroTitle'
import ButtonDown from '../ButtonDown/ButtonDown'
import NavItems from '../NavItems/NavItems'
import Header from '../Header/Header'

const Hero = () => {
  return (
    <Col md='12' lg='9' className='d-flex flex-column justify-content-between separator'>
      <Header />
      <HeroTitle />
      <ButtonDown />
      <NavItems />
    </Col>
  )
}

export default Hero
