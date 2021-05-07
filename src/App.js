import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      responsive: {
        0: {
          items: 1
        },
        450: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 2
        }
      }
     }
  }


  render(){
    return (
      <div className="container">
  
  <div className="row">
        <div className="col-12 col-12 testimony_heading mt-5 text-center">
              <h2>Here are few testimonies from our happy users</h2>
        </div>
          <div className="col-12 col-md-12 testimony mt-5 text-center">
              <OwlCarousel className="owl-theme" loop nav
              items={3}
              className="owl-theme"
              loop={true}
              margin={20}
              nav={true}
              dots={false}
              autoplay={true}
              autoplayTimeout={2000}
              items={2}
              responsive={this.state.responsive}
          >
            {/* First Slide Start*/}
              <div class="item">
                    <div className="row">
                       <div className="col-12 col-md-6 d-block d-md-none">
                            <img src="/assets/customer1.jpg" className="img-fluid"/>
                        </div>
                        <div className="col-12 col-md-6">
                          <p>"I have been able to double my online sales as users can easily pay for what I sell via WhatsApp"</p>
                          <p>Mark Luren</p>
                          <small>CEO, MixFit Online Store</small>
                        </div>
                        <div className="col-12 col-md-6 d-none d-md-block">
                            <img src="/assets/customer1.jpg" className="img-fluid"/>
                        </div>
                    </div>
              </div>
            {/* Third First end*/}

            {/* Second Slide */}
            <div class="item">
                    <div className="row">
                        <div className="col-12 col-md-6 d-block d-md-none">
                            <img src="/assets/customer3.jpg" className="img-fluid" width="100%"/>
                        </div>
                        <div className="col-12 col-md-6">
                          <p>"I have been able to double my online sales as users can easily pay for what I sell via WhatsApp"</p>
                          <p>Mark Luren</p>
                          <small>CEO, MixFit Online Store</small>
                        </div>
                        <div className="col-12 col-md-6 d-none d-md-block">
                            <img src="/assets/customer3.jpg" className="img-fluid" width="100%"/>
                        </div>
                    </div>
              </div>
              {/* Second Slide end*/}

              {/* Third Slide Start*/}
            <div class="item">
                    <div className="row">
                        <div className="col-12 col-md-6 d-block d-md-none">
                            <img src="/assets/customer2.jpg" className="img-fluid"/>
                        </div>
                        <div className="col-12 col-md-6">
                          <p>"I have been able to double my online sales as users can easily pay for what I sell via WhatsApp"</p>
                          <p>Mark Luren</p>
                          <small>CEO, MixFit Online Store</small>
                        </div>
                        <div className="col-12 col-md-6 d-none d-md-block">
                            <img src="/assets/customer2.jpg" className="img-fluid"/>
                        </div>
                    </div>
              </div>
              {/* Third Slide end*/}
            </OwlCarousel>
          </div>
      </div>
      </div>
    );
  }

}

export default App;
