import { Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/logo.svg'

const Sidebar = () => {
  return (
    <Col className='d-none d-lg-block' md='3'>
      <aside className='d-flex flex-column justify-content-between vh-100 align-items-start ms-5'>
        <Row>
          <Image unoptimized src={logo} alt='logo' className='logo sidebar__logo'></Image>
        </Row>
        <Row>
          <ul className='m-3'>
            <li className='sidebar__link_item item'>
              <Link className='text-white link sidebar__link' href='#'>
                Компания
              </Link>
            </li>
            <li className='sidebar__link_item item'>
              <Link className='text-white link sidebar__link' href='#'>
                Решения
              </Link>
            </li>
            <li className='sidebar__link_item item'>
              <Link className='text-white link sidebar__link' href='#'>
                Услуги
              </Link>
            </li>
            <li className='sidebar__link_item item'>
              <Link className='text-white link sidebar__link' href='#'>
                Проекты
              </Link>
            </li>
            <li className='sidebar__link_item item'>
              <Link className='text-white link sidebar__link' href='#'>
                Социальные проекты
              </Link>
            </li>
            <li className='sidebar__link_item item'>
              <Link className='text-white link sidebar__link' href='#'>
                Пресс-центр
              </Link>
            </li>
            <li className='sidebar__link_item item'>
              <Link className='text-white link sidebar__link' href='#'>
                Форма связи
              </Link>
            </li>
          </ul>
        </Row>
        <Row className='d-flex sidebar__lang_wrap'>
          <Col>
            <Link className='text-white link sidebar__lang active' href='#'>
              Ru
            </Link>
          </Col>

          <Col>
            <Link className='text-white link sidebar__lang' href='#'>
              Eng
            </Link>
          </Col>
        </Row>
      </aside>
    </Col>
  )
}

export default Sidebar
