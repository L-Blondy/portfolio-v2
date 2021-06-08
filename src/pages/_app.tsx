import 'styles/index.css'
import Scrollbars from 'react-custom-scrollbars-2'

function MyApp({ Component, pageProps }: any) {
  return (
    <Scrollbars universal>
      <Component {...pageProps} />
    </Scrollbars>
  )
}

export default MyApp
