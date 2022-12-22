import {Header} from './components/Header'
import {Bio} from './components/Bio'
import {Cards} from './components/Cards'
import './App.css'
import { Footer } from './components/Footer'


function App() {
 

  return (
    <div className="App">
    <Header content="Meu Belo Site"/>
    <Bio/>
    <Cards/>
    <Footer content="Feito por Mirella."/>
    </div>
  )
}

export default App
