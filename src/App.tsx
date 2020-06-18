/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { Provider} from 'react-redux';
import store from 'store/store';
import { getUserList, updatePasswordUser } from "./store/user/function";


import Crypto from "service/Crypto";
import Firestore from "service/Firestore";

const App = React.memo(()=>{

    useEffect(()=>{
        Firestore.init();
        Crypto.log();
        getUserList();

        updatePasswordUser('test', 'lllll');
    },[])
    return (<Provider store={store}>
        <BrowserRouter>
        <Switch>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
          <Redirect from="/" to="/admin/index" />
        </Switch>
      </BrowserRouter>
    </Provider>

    )
})

export default App;

