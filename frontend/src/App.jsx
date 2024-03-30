import './index.css'
import './App.css';
import Home from './components/Home/Home';
import { Route,Routes} from 'react-router-dom';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Admission from './components/Admission/Admission';
import Facility from './components/Facility/Facility';
import Achivement from './components/Achivement/Achivement';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Application from './components/application/Application';


function App() {
  return (
    <>
    <div>
      <Navbar />
      <Routes>
        <Route path='/school/' element={<Home />}  />
        <Route path='/achivement' element={<Achivement />} />
        <Route path='/facility' element={<Facility />} />
        <Route path='/register' element={<Admission />} />
        <Route path='/about' element={<About />}  />
        <Route path='/contact' element={<Contact />} />
        <Route path='/application' element={<Registration/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/applications' element={<Application/>} />
      </Routes>
    <Footer />
     </div>
    </>
  )
}

export default App



{/* <Navbar /><br /> 
     <Hero />
    <Facility />
    <Achivement/>
    <Poster images={craousel}/>
    <Footer />

    <Routes>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/admission' Component={Admission} />
    </Routes> */}

//     <!doctype html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <link rel="icon" type="image/svg+xml" href="/school/" />
//   {% comment %} <link rel="stylesheet" crossorigin href="/school/assets/index-iFdOE_d2.css"> {% endcomment %}
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>School Management</title>
// </head>
// <body>
//   <div id="root"></div>
// </body>
// </html>
