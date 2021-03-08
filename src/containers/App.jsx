import React from 'react'
import '../assets/Styles/App.scss'
// import About from '../components/About'
// import Header from '../components/Header'
import Products from '../components/Products'
import Hero from '../components/Hero'
// import $ from 'jquery';
// import Popper from 'popper.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {

 return  <div className="App">
        {/* <Header/> */}
        <Hero/>

        <main>
            {/* <About/> */}
            <Products />
        </main>
    </div>
}

export default App