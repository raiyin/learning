import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LazyAbout } from './pages/about/About.lazy'
import { Shop } from './pages/Shop'
import { Suspense } from 'react'

const root = document.getElementById('root')

if (!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'loading...'}><LazyAbout /></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={'loading...'}><Shop /></Suspense>
            }
        ]
    },
]);

container.render(
    <RouterProvider router={router} />
)
