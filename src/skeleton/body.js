import React from 'react';
import CustonPage from './custonPage';
import Leftside from './leftSide';
class Body extends React.Component{
      render() {
        return (
          <div>
              <div className="row">
                <div className="col-md-2">
                  <Leftside/> 
                </div>
                <div className="col-md-10">
                  <CustonPage/>
                </div>
             </div>
          </div>
        
        );
      }
}
export default Body;