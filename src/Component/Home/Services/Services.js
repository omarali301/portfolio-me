import React from 'react';
import cart1 from '../../../images/cart1.jpg';
import cart2 from '../../../images/cart2.jpg';
import cart3 from '../../../images/cart3.jpg';
import cart4 from '../../../images/cart4.jpg';
import cart5 from '../../../images/cart5.jpg';
import cart6 from '../../../images/cart6.jpg';

const Services = () => {
    return (
        <div className="container">
 <div class="row row-cols-1 row-cols-md-3 g-4 ps-5">
  <div class="col">
    <div class="card h-100">
      <img src={cart1} class="card-img-top p-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">panda website</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={cart2} class="card-img-top p-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Ticket Flights</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={cart4} class="card-img-top p-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">International cricket team</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={cart3} class="card-img-top p-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">service provider</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={cart5} class="card-img-top p-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">amazon shopping</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={cart6} class="card-img-top p-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">city travel</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Services;