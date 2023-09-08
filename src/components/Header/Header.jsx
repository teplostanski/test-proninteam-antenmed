import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import logo from '@/assets/logo.svg'

const Header = () => {
  return (
    <header className='mt-5'>
      <Row>
        <Col>
          <ul className='d-flex header-list list header__desc'>
            <li className='header-list__item item mx-auto d-lg-none'>
              <Image priority src={logo} alt='logo' className='logo'></Image>
            </li>
            <li className='d-none d-sm-block header-list__item item'>
              <a className='link text-white' href='tel:88002007597'>
                8 800 200 75 97
              </a>
            </li>
            <li className='mx-auto d-none d-sm-block  header-list__item item text-white'>
              <p>
                Компания&nbsp;полного <br />
                цикла
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    </header>
  )
}

export default Header
