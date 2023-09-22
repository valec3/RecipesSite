import './App.scss'
import { Header,RecipesList,Tabs } from './components'

function App() {

  return (
    <>
      <div className='main'>
        <Header />
        <Tabs />
        <RecipesList />
      </div>
    </>
  )
}

export default App
