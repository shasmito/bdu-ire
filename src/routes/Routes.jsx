import { createBrowserRouter } from 'react-router-dom'
import Index from '../layout/Index'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Notice from '../pages/Notice/Notice'
import Academic from '../pages/Acaddemic/Academic'
import Peoples from '../pages/Peoples/Peoples'
import Gallery from '../components/Gallery/Gallery'
import GalleryPage from '../pages/Gallery/GalleryPage'
import FacultyDetailsPage from '../pages/Peoples/FacultyDetailsPage'
import Undergrade from '../pages/Acaddemic/Undergrade'
import AcademicIndex from '../pages/Acaddemic/AcademicIndex'
import Research from '../pages/Research/Research'
import DetailsPage from '../pages/Details'
import Postgrad from '../pages/Acaddemic/Postgrad'
import ComingSoon from '../components/ComingSoon'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: "/notice",
                element: <Notice />
            },
            {
                path: "/academic",
                element: <AcademicIndex />,
                children: [
                    {
                        path: '',
                        element: <Academic />
                    }
                    ,
                    {
                        path: 'undergrad',
                        element: <Undergrade />
                    }
                ]
            },
            {
                path: '/undergrad',
                element: <Undergrade />
            },
            {
                path: '/postgrad',
                element: <Postgrad/>
            },
            {
                path: '/graduate',
                element: <Undergrade />
            },
            {
                path: '/training-programs',
                element: <ComingSoon />
            },
            {
                path: "/peoples",
                element: <Peoples />
            },
            {
                path: "/research",
                element: <Research />
            },
            {
                path: "/gallery",
                element: <GalleryPage />
            }
            ,
            {
                path: '/faculty-details/:id',
                element: <FacultyDetailsPage />
            },
            {
                path: '/details',
                element: <DetailsPage />
            }

        ]
    }
])