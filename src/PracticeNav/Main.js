import React from 'react'
import ComponentNav from './ComponentNav'
import FormPracticeMui from './FormPracticeMui'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Routes/Router'

function Main() {
    return (
        <div>
            <RouterProvider router={Router}/>
        </div>
    )
}

export default Main