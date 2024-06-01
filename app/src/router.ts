import Route from './dtos/route.dto';
import OrderView from './views/Order.ts'
import HomeView from './views/Home.ts'

const routes: Route[] = [
  {
    path: '/',
    data: HomeView
  },
  {
    path: '/order',
    data: OrderView
  },
]

const setRouteHtml = () => {
  const root: HTMLElement | null = document.getElementById('root')

  if (!root)
    return

  const route: Route | undefined = routes.find(route => route.path ==  window.location.pathname)

  if (!route)
    return

  const html: string = route.data
  root.style.opacity = "0.0"

  setTimeout(() => {
    root.innerHTML = html
    root.style.opacity = "1.0"
  }, 250)
}

const setNavLinkColor = () => {
  document.querySelectorAll<HTMLAnchorElement>('nav ul li a').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}

const router = (mouseEvent: MouseEvent) => {
  if (!mouseEvent)
    return

  mouseEvent.preventDefault()

  const target = (mouseEvent.target) as HTMLAnchorElement

  if (!target)
    return

  history.pushState({}, 'newUrl', target.href)
  setRouteHtml()
  setNavLinkColor()
}

const setEventListeners = () => {
  window.addEventListener('popstate', setRouteHtml)

  window.addEventListener('DOMContentLoaded', () => {
    setRouteHtml()
    setNavLinkColor()
  })
  
  document.querySelectorAll<HTMLAnchorElement>('nav ul li a').forEach(link => {
    link.addEventListener('click', router)
  })  
}

setEventListeners()