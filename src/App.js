import productApi from 'api/productApi';
import 'bootstrap/dist/css/bootstrap.css';
import SignIn from 'features/Auth/pages/SignIn';
import firebase from "firebase";
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';


 const Photo = React.lazy(() => import('./features/Photo'));
 const config = {
  apiKey: 'AIzaSyCCtm_q0nimtDLWfZ1-aH0FrgD880SRyvY',
  authDomain: 'photo-app-786c8.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);

function App() {
  const[productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try{
        const params = {
          _page:1,
          _limit:10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log('Falied to fetch product list: ', error);
      }
    }
    fetchProductList();
  }, []);
  useEffect(()=> {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
    if(!user) {
      console.log('User is not logged in');
      return;
    }
    console.log('Logged in  user: ', user.displayName);
    const token = await user.getIdToken();
    console.log('Loged in user token: ', token); 
  });
    return () => unregisterAuthObserver();
  },[]);
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
        
         <Header/>
         <Switch>
           <Redirect exact from="/" to="/photos"/>
           <Route path="/photos" component={Photo}/>
           <Route path="/sign-in" component={SignIn}/>
           <Route component={NotFound}/>
         </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
