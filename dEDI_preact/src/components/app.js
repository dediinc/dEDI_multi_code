import { Router } from 'preact-router'

import Login from '../routes/login/index'
import CreateOrg from '../routes/create_org/index'
import CreateUser from '../routes/create_user/index'
import Forms from '../routes/forms/index'
import Dashboard from '../routes/dashboard/index'
import Messages from '../routes/messages/index'
import '../routes/style.css'

const App = () => {
  return (
    <Router>
      <Login path="/" />
      <CreateOrg path="/create_org" />
      <CreateUser path="/create_user" />
      <Forms path="/forms" />
      <Dashboard path="/dashboard" />
      <Messages path="/messages" />
    </Router>
  )
}

export default App
