import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Esqueleto from './components/Esqueleto.jsx'

createRoot(document.getElementById('root')).render(
    <Esqueleto />
)
