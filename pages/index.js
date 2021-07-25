import Layout from '../components/layout.js'
import client from '../components/ApolloClient'
// import Product from './Product'
import gpl from 'graphql-tag'

const PRODUCTS_QUERY = gpl`
    query {
      products {
        edges {
          node {
            id
            link
            name
            image {
              link
            }
          }
        }
      }
    }`
const Index = (props) => {
  console.warn(props)
  return (
    <div>
       <Layout>
         Hello World!
       </Layout>
    </div>
	)
}

Index.getInitialProps = async () => {
  const result = await client.query({query: PRODUCTS_QUERY})
    
    return {
      products: result.data.products
    }
}
export default Index
