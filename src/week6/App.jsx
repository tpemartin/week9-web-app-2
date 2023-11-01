import { useState } from 'react'
import './App.css'
import OfficeInformation from './components/OfficeInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <OfficeInformation
      imgLink="https://econ.ntpu.edu.tw/storage/images/ZlP7DHjLRh8IeahmFoT1EMxkmCgaxYtguN76FqiW.jpg"
      name = "郭文宗"
      title = "教授"
      officeHour="Thu. 12:00 - 14:00"
      email="guowc@gm.ntpu.edu.tw"
      phone="886-2-86741111 ext. 67156"
      office="社3F16"          
                />
    </>
  )
}

export default App
