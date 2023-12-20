import { Navigate, Route, Routes } from "react-router-dom"
import {Home} from '../src/components/Home'
import {Nosotros} from '../src/components/Nosotros'
import {Productos} from '../src/components/Productos'
import {Contactos} from '../src/components/Contactos'
import { Error } from "../src/components/Error"

export const AppRouter = () => {
  return (
    <div className="container">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="nosotros" element={<Nosotros/>}/>
            <Route path="productos" element={<Productos/>}/>
            <Route path="contactos" element={<Contactos/>}/>
            <Route path="red" element={<Navigate to="/nosotros"/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </div>
  )
}
