import 'styles/index.css'
import 'react-toastify/dist/ReactToastify.min.css';
import Scrollbars from 'react-custom-scrollbars-2'
import { ToastContainer } from 'react-toastify';


function MyApp({ Component, pageProps }: any) {
  return (
    <Scrollbars className='app-scrollbars' universal>

      <ToastContainer
        className='app_toast-container'
        toastClassName='app_toast'
        bodyClassName='app_toast-body'
        progressClassName='app_toast-progress'
        position='bottom-right'
        autoClose={8000}
        pauseOnFocusLoss
        limit={3}
        closeButton={false}
        draggable={false}
      />

      <Component {...pageProps} />
    </Scrollbars>
  )
}

export default MyApp
