import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { Colors } from '@/components/molecules/colors'
import { Typography } from '@/components/molecules/typography'
import { Grid } from '@/components/templates/grid'
import Form from './Form'

/**
 * https://tailwindcss.com/docs/customizing-colors
 */
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Grid />}>
        <Route path="colors" element={<Colors />} />
        <Route path="typography" element={<Typography />} />
        <Route path="form" element={<Form />} />
      </Route>,
    ),
  )

  return <RouterProvider router={router} />
}

export default App
