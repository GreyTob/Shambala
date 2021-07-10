import Layout from './hoc/layout/Layout'
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import TimeTable from './pages/TimeTable/TimeTable'
import Cost from './pages/Cost/Cost'
import Footer from './components/Footer/Footer'
import ScrollUp from './components/ScrollUp/ScrollUp'

function App() {
  return (
    <Layout>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/time-table" component={TimeTable} />
        <Route path="/cost" component={Cost} />
        <Redirect path="/" component={Main} />
      </Switch>
      <ScrollUp />
      <Footer />
    </Layout>
  )
}

export default App
