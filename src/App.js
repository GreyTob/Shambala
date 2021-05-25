import './App.module.scss'
import Layout from './hoc/layout/Layout'
import Header from './components/Header/Header'
import { Route, Switch, Redirect } from 'react-router-dom'

import Main from './pages/Main/Main'
import About from './pages/About/About'
import Teachers from './pages/Teachers/Teachers'
import Contacts from './pages/Contacts/Contacts'
import TimeTable from './pages/TimeTable/TimeTable'
import Blog from './pages/Blog/Blog'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <Layout>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={About} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/teachers.:name" component={Teachers} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/time-table" component={TimeTable} />
        <Route path="/blog" component={Blog} />
        {/* <Route render={NotFound} /> */}
        <Redirect to="/" />
      </Switch>
    </Layout>
  )
}

export default App
