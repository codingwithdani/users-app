import { Route, Switch } from 'wouter'
import { CreateUser } from './pages/CreateUser'
import { Detail } from './pages/Detail'
import { UserCards } from './pages/UserCards'
import { SideBar } from './components/SideBar'
import { Layout } from './styles-utils'

function App () {
  return (
    <Layout className='App'>
      <SideBar />
      <Switch>
        <Route path='/createUser'>
          <CreateUser />
        </Route>
        <Route path='/users'>
          <UserCards />
        </Route>
        <Route path='/detail/:detailId'>
          {(params) => <Detail detailId={params.detailId} />}
        </Route>
        <Route>
          <img src='https://media.giphy.com/media/jkZtSdwKOx05BOlapR/giphy.gif.com/gifs/jkZtSdwKOx05BOlapR/html5' />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
