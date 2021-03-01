import { Route, Switch } from 'wouter'
import { SideBar } from './components/SideBar'
import { CreateUser } from './pages/CreateUser'
import { Detail } from './pages/Detail'
import { Error404 } from './pages/Error404'
import { UserCards } from './pages/UserCards'
import { Layout } from './styles-utils'

function App () {
  return (
    <Layout className='App'>
      <SideBar />
      <Switch>
        <Route path='/createUser'>
          <CreateUser />
        </Route>
        <Route path='/'>
          <UserCards />
        </Route>
        <Route path='/detail/:detailId'>
          {(params) => <Detail detailId={params.detailId} />}
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
