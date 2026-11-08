/** @type {import('next').AppProps} */
import '../design-system/variables.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}