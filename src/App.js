import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/NotFound.js/NotFound';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { adminRouter } from './constants/adminRouters';
import PrivateRouter from './components/Router/PrivateRouter';
import React, { Suspense, useEffect } from 'react';
import { Spin } from 'antd';
import { userRouter } from './constants/userRouters';
import { useDispatch, useSelector } from 'react-redux';
import LoginAdmin from './pages/Admins/LoginAdmin/LoginAdmin';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { actLogin } from './Redux/actions/actionAuthAdmin';

function App() {
  const dispatch = useDispatch()
  const userAdmin = JSON.parse(localStorage.getItem('userAdmin')) || null;
  const authAdmin = useSelector(state => state.authAdmin)
  const isAuthAdmin = authAdmin.isAuthenticated

  useEffect(() => {
    if (userAdmin) {
      dispatch(actLogin({
        email: userAdmin.email,
        password: userAdmin.password
      }))
    }
  }, [])

  return (
    <>
      <Suspense fallback={<div><Spin /></div>}>
        <Router>
          <Switch>
            {adminRouter.map((route, index) => {
              const Component = route.component;
              return (
                <Route
                  key={index}
                  exact={route.isExact}
                  path={route.path}
                  render={() => (
                    <PrivateRouter isAuthAdmin={isAuthAdmin}>
                      <Component />
                    </PrivateRouter>
                  )}
                >
                </Route>
              )
            })}

            {userRouter.map((route, index) => {
              const Component = route.component;
              return (
                <Route
                  key={index}
                  exact={route.isExact}
                  path={route.path}
                  render={() => (
                    <DefaultLayout >
                      <Component />
                    </DefaultLayout>
                  )}
                >
                </Route>
              )
            })}
            <Route exact path='/adminUI/login'>
              <LoginAdmin />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </Suspense>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
