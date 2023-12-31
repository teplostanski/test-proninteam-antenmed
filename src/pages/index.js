import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'
import Hero from '@/components/Hero/Hero'
import Sidebar from '@/components/Sidebar/Sidebar'
import { useRef } from 'react'
import { useStore } from '@/store'
import { isEqualObjectValue } from '@/utils'

export default function Home() {
  const onHover = useStore((state) => state.onHover)

  /**
   * Присваевается функция isEqualObjectValue
   * с замыканием на объекте стейта onHover c ключом 'target'
   */
  const isEqual = isEqualObjectValue(onHover, 'target')

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container fluid>
        <Col className='hero-bg'>
          {isEqual('company') && <video autoPlay muted loop src={require('../assets/company.mp4')}></video>}
          {isEqual('solutions') && <video autoPlay muted loop src={require('../assets/solutions.mp4')}></video>}
          {isEqual('services') && <video autoPlay muted loop src={require('../assets/services.mp4')}></video>}
          {isEqual('projects') && <video autoPlay muted loop src={require('../assets/projects.mp4')}></video>}
        </Col>
        <Row className='main'>
          <Sidebar />
          <Hero />
        </Row>
      </Container>
    </>
  )
}
