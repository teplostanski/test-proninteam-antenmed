import { Row } from 'react-bootstrap'
import arrowDown from '../../assets/arrowDown.svg'
import Image from 'next/image'

const ButtonDown = () => {
  return (
    <Row className='mx-auto'>
    <button className='d-sm-none hero-mobile__btn d-flex align-items-center'>
      <Image src={arrowDown} alt='down' />
    </button>
  </Row>
  )
}

export default ButtonDown