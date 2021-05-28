import Layout from './hoc/layout/Layout'
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import TimeTable from './pages/TimeTable/TimeTable'
import Cost from './pages/Blog/Blog'
import NotFound from './pages/NotFound/NotFound'
import ScrollUp from './components/ScrollUp/ScrollUp'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Layout>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={Main} />
        <Route path="/teachers" exact component={Main} />
        <Route path="/contacts" exact component={Main} />
        <Route path="/time-table" component={TimeTable} />
        <Route path="/cost" component={Cost} />
        {/* <Route render={NotFound} /> */}
        <Redirect to="/" />
      </Switch>
      <ScrollUp />
      <Footer />
    </Layout>
  )
}

export default App
