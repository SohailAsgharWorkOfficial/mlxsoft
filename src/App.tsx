import Layout from "./components/layout/layout"
import LetsTalk from "./components/LetsTalk"
import Brands from './components/Brands'
import LatestNewsSection from "./components/latestnews"

function App() {
  return (
    <Layout>
      <LatestNewsSection />
            <Brands />

      <LetsTalk />
    </Layout>
  )
}

export default App
