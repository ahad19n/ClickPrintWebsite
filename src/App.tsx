import { useState, useEffect } from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'

type Route = 'home' | 'register'

function getInitialRoute(): Route {
  return window.location.pathname === '/register' ? 'register' : 'home'
}

export default function App() {
  const [route, setRoute] = useState<Route>(getInitialRoute)

  const go = (next: Route) => {
    const path = next === 'register' ? '/register' : '/'
    history.pushState({ route: next }, '', path)
    setRoute(next)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  useEffect(() => {
    const onPopState = (e: PopStateEvent) => {
      const r: Route = e.state?.route ?? getInitialRoute()
      setRoute(r)
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return (
    <>
      <Header isHome={route === 'home'} onHome={() => go('home')} onRegister={() => go('register')} />
      {route === 'home' ? (
        <HomePage onRegister={() => go('register')} />
      ) : (
        <RegisterPage onHome={() => go('home')} onRegister={() => go('register')} />
      )}
    </>
  )
}
