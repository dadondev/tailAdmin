import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Provider } from 'react-redux'
import store from '../redux/store'

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
  
          <Provider store={store}>
    <Outlet />
    </Provider>
    </React.Fragment>
  ),
})
