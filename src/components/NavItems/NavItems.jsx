import { useEffect, useState } from 'react'

import { Col, Row } from 'react-bootstrap'
import { setObjectValue, isEqualObjectValue } from '@/utils'
import cn from 'classnames'
import { useStore } from '@/store'

const NavItems = () => {
  //TODO Не забыть перенести все манипуляции со стейтом в стор
  const [onHover, setOnHover] = useState({ target: 'company' })

  const store = useStore((state) => state.setOnHover)

  const navLinkDefaultClasses = ['d-flex', 'justify-content-center', 'align-items-center', 'nav__link', 'item']
  const navLinkWithActiveClass = [...navLinkDefaultClasses, 'active']

  useEffect(() => {
    store(onHover)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onHover])

  /**
   * Присваевается функция toggleObjectValue
   * с замыканием на объекте стейта view.
   * Мутирует замыкаемый объект напрямую,
   * не возвращая новый объект
   */
  const setOnHoverValue = setObjectValue(onHover)

  /**
   * Присваевается функция isEqualObjectValue
   * с замыканием на объекте стейта onHover c ключом 'target'
   */
  const isEqual = isEqualObjectValue(onHover, 'target')

  /**
   * Функция присваивает новое значение объекту стейта
   * @param {string} value Строка с новым значением.
   * Допустимые значения 'live' | 'edit' | 'preview'
   */
  const handleOnHover = (value) => {
    setOnHoverValue('target', value)
    setOnHover({ ...onHover }) // Разворачивает объект для ре-рендера
    console.log(onHover)
  }

  return (
    <Row className='d-none d-sm-block'>
      <Col className='p-0'>
        <ul className='d-flex list'>
          <Col onMouseEnter={() => handleOnHover('company')} className={isEqual('company') ? cn(navLinkWithActiveClass) : cn(navLinkDefaultClasses)}>
            <li>
              <a className='link nav__link_item' href='#'>
                Компания
              </a>
            </li>
          </Col>
          <Col onMouseEnter={() => handleOnHover('solutions')} className={isEqual('solutions') ? cn(navLinkWithActiveClass) : cn(navLinkDefaultClasses)}>
            <li>
              <a className='link nav__link_item' href='#'>
                Решения
              </a>
            </li>
          </Col>
          <Col onMouseEnter={() => handleOnHover('services')} className={isEqual('services') ? cn(navLinkWithActiveClass) : cn(navLinkDefaultClasses)}>
            <li>
              <a className='link nav__link_item' href='#'>
                Услуги
              </a>
            </li>
          </Col>
          <Col onMouseEnter={() => handleOnHover('projects')} className={isEqual('projects') ? cn(navLinkWithActiveClass) : cn(navLinkDefaultClasses)}>
            <li>
              <a className='link nav__link_item' href='#'>
                Проекты
              </a>
            </li>
          </Col>
        </ul>
      </Col>
    </Row>
  )
}

export default NavItems
