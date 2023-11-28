import { Navigate, Route, Routes } from 'react-router-dom';

import {AuthProvider} from './hoc/AuthProvider.tsx'

import Layout from "./components/Layout/Layout.tsx";

import Post from './components/Posts/Post/Post.tsx';
import Posts from './components/Posts/Posts.tsx';
import About from './components/About/About.tsx';
import Home from './components/Home/Home.tsx';
import Auth from './components/Auth/Auth.tsx';                         

import RequiredAuth from './hoc/RequiredAuth.tsx';

function App() {
return (
<div className="App">
  <AuthProvider>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/auth' element={<Auth/>}/>

        <Route path='*' element={<Home/>}/>

        <Route path='/about' element={<About/>}/>
        <Route path='/about-us' element={<Navigate to='/about' replace/>}/>
        
        <Route path='/posts' element={<RequiredAuth><Posts/></RequiredAuth>}/>
        <Route path='/post/:id' element={<RequiredAuth><Post/></RequiredAuth>}/>

        
      </Route>
    </Routes>
  </AuthProvider>
</div>
);
}

export default App;