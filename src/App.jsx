import React from 'react'; 
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {Helmet} from "react-helmet";
import ScrollToTop from 'react-router-scroll-top'
import Header from "./comp/Header";
import Routes from "./Routes";
import Footer from "./comp/Footer" 
import NotFound from "./comp/NotFound";


function App() {
  return (
       <>
          <Helmet title="My App New"></Helmet>
          <Router>
            <Header></Header>
          
          <ScrollToTop>
               <Switch>
               {
                   Routes.map((route,index) => {
                   return (
                   <Route key={index} 
                          path={route.path}  
                          exact={true}
                          render={() => <route.component  
                                                title={route.title}
                                                subtitle={route.subtitle}/>
                                              }
                                              />
                      );
                 })} 
                <Router component={NotFound} />
               </Switch>
          </ScrollToTop>
          <Footer></Footer>
          </Router>
        
        </>
      
  );
}

export default App;
