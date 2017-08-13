import React from 'react';

const LandingPageCardsContainer = props => {
  return (
     <div className="row px-3">
       <div className="col-12">
         <div className="card-deck">
           <div className="card">
             <div className="card-block">
               <h3 className="card-title">Top Questions</h3>
               <p>Test your expertise and check out our top questions!</p>
               <p className="card-text">
               </p>
               <a href="" className="btn btn-primary">Answer</a>
             </div>
             <div className="card-footer">
             </div>
           </div>
           <div className="card">
             <div className="card-block">
               <h3 className="card-title">Popular Tags</h3>
               <p className="card-text">Explore popular tags on InstaSmart</p>
               <a href="" className="btn btn-primary">Check it out</a>
             </div>
             <div className="card-footer">
             </div>
           </div>
           <div className="card">
              <div className="card-block">
                <h2>Actual Tag Cloud</h2>
                  <ul className="list-unstyled">

                  </ul>
             </div>
             <div className="card-block">
               <h2>Mock Up Tag Cloud</h2>
               <ol className="list-unstyled">
                 <li className="m-1 badge badge-info"><h3>Growth</h3></li>
                 <li className="m-1 badge badge-info"><h3>Culture</h3></li>
                 <li className="m-1 badge badge-info"><h4>Engineering</h4></li>
                 <li className="m-1 badge badge-info"><h5>Profitability</h5></li>
                 <li className="m-1 badge badge-info"><h5>Happiness</h5></li>
                 <li className="m-1 badge badge-info"><h6>Rails</h6></li>
                 <li className="m-1 badge badge-info"><h6>React</h6></li>
               </ol>
             </div>
             <div className="card-footer">
             </div>
           </div>
         </div>
     </div>
    </div>

  );
}

export default LandingPageCardsContainer;


// <% tag_cloud(@tags, %w(h5 h4 h3 h2)) do |tag, css_class| %>
//   <li class="m-1 badge badge-warning css_class"><%= link_to tag.name, { :id => tag.name }, :class => "css_class" %></li>
// <% end %>