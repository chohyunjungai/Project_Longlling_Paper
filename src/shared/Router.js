import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import Home from '../pages/Home'
import AddPaper from '../pages/AddPaper'
import Mypage from '../pages/Mypage'
import Paper from '../pages/Paper'

const Router = () => {

    const [id, setId] = useState()

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="home" element={<Home />}/>
            <Route path="addpaper" element={<AddPaper />}/>
            <Route path="mypage" element={<Mypage />}/>
            <Route path="paper" element={<Paper />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router