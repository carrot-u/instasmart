import React from 'react';
import loading from '../../images/loading.svg'

const LoadingIndexQuestion = props => {
  return (
    <div className="card d-block img-fluid mb-2">
      <div className="card-block px-5 pb-1">
        <div className="row">
          <div className="col-md-3 pr-0">
            <h2 style={{color: "darkgreen"}}>LOADING</h2>
          </div>
          <div className="col-md-9 pr-0">
            <div className="lds-css ng-scope" style={{width: "200px", height: "200px"}}>
              <div style={{width:"100%", height:"100%"}} className="lds-facebook">              
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingIndexQuestion;