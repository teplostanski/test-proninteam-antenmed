import { Row } from 'react-bootstrap'

const HeroTitle = () => {
  return (
    <>
      <Row className='hero__title text-white'>
        <span>Медицинское</span> <span>учреждение</span> <span>от идеи до воплощения</span>
      </Row>
      <Row className='d-sm-none text-white mx-auto'>
        <p>Компания полного цикла</p>
      </Row>
    </>
  )
}

export default HeroTitle
