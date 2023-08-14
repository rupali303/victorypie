// import React from 'react'
// import Provider from "react-redux"
// import { BasicStore } from './BasicRedux/ReduxStore'
// import ReduxComp from './BasicRedux/ReduxComp'
// function Main() {
//   return (
//     <>
//      <Provider store={BasicStore}>
// <ReduxComp/>
//      </Provider>
//     </>
//   )
// }

// export default Main

import React from 'react'
import { Provider } from 'react-redux'
import SliceComp from './AdvanceRedux/SliceComp'
import { SliceStore } from './AdvanceRedux/SliceStore'

function Main() {
  return (
    <>
        <Provider store={SliceStore}>
            <SliceComp/>
        </Provider>
    </>
  )
}

export default Main