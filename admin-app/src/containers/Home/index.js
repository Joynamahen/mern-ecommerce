import React from 'react'
import Layout from '../../components/Layout'
import Jumbotron from 'react-bootstrap/Jumbotron'


const Home = (props) => {
  return (
    <Layout>
        <Jumbotron style={{margin: '5rem', background:'#fff'}} className='text-center'>
            <h1>Welcome to Admin Dashboard</h1>
            <p></p>
        </Jumbotron>
    </Layout>
  )
}

export default Home;
