
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext'
 import { PostProvider } from './context/PostContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <PostProvider>
      <App />
      </PostProvider>
    </AuthProvider>
     
  </BrowserRouter>
   
  
)
