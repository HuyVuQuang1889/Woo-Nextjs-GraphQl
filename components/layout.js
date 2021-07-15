import Head from 'next/head'
import Header from '../pages/Header.js'
import Footer from '../pages/Footer.js'

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Woocommerce Headless Project</title>
      </Head>
      <Header/>

      {props.children}
      <Footer/>
    </div>
	)
}

export default Layout
