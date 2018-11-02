import React, { Component } from 'react';
import Splash from './../../components/Splash';
import GoFeedCard from './../../components/GoFeedCard';
import GoFoodCard from './../../components/GoFoodCard';
import Topbar from './../../components/Topbar';


const GoPayCard = () => {
    return(
      <div>
        <div className="gopay-container mb-2">
            <div className="gopay-header">
                <div className="float-left">GO <i className="fas fa-wallet"></i> PAY</div>
                <div className="float-right">Rp 25.000</div>
            </div>
            <div className="gopay-menu">
                <ul>
                    <li>
                        <a href="#"><i className="fas fa-arrow-circle-up"></i> Pay</a>
                    </li>
                    <li>
                        <a href="#"><i className="fas fa-map-marker-alt"></i> Nearby</a>
                    </li>
                    <li>
                        <a href="#"><i className="fas fa-plus-circle"></i> Top Up</a>
                    </li>
                    <li>
                        <a href="#"><i className="fas fa-bars"></i> More</a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    );
};

const GoMenu = () => {
  return(
      <div>
          <div className="gomenu-container">
              <ul>
                  <li>
                      <a href="">
                        <div className="gomenu-icon go-ride"><i className="fas fa-motorcycle"></i></div>
                        GO-RIDE
                      </a>
                  </li>
                  <li>
                      <a href="">
                        <div className="gomenu-icon go-send"><i className="fas fa-box"></i></div>
                        GO-SEND
                      </a>
                  </li>
                  <li>
                      <a href="">
                        <div className="gomenu-icon go-points"><i className="fas fa-trophy"></i></div>
                        GO-POINTS
                      </a>
                  </li>
                  <li>
                      <a href="">
                        <div className="gomenu-icon go-pulsa"><i className="fas fa-mobile-alt"></i></div>
                        GO-PULSA
                      </a>
                  </li>
                  <li>
                      <a href="">
                        <div className="gomenu-icon go-mart"><i className="fas fa-shopping-cart"></i></div>
                        GO-MART
                      </a>
                  </li>
                  <li>
                      <a href="">
                        <div className="gomenu-icon go-food"><i className="fas fa-utensils"></i></div>
                        GO-FOOD
                      </a>
                  </li>
                  <li>
                      <a href="">
                        <div className="gomenu-icon go-car"><i className="fas fa-car"></i></div>
                        GO-CAR
                      </a>
                  </li>
                  <li>
                      <a href="">
                        <div className="gomenu-icon more"><i className="fas fa-th-large"></i></div>
                        MORE
                      </a>
                  </li>
              </ul>
          </div>
      </div>
  );
};

class Home extends Component {
  constructor(){
    super();
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 3000);
  }

  render(){
    return(
      <div>
        { this.state.loading &&
          <Splash />
        }
        <Topbar />
        <div className="card pt-5">
            <div className="mt-1">
                <GoPayCard />
            </div>
            <GoMenu />
        </div>
        <div className="card mt-3">
            <GoFoodCard />
            <GoFeedCard />
        </div>

      </div>
    );
  }
};
export default Home;
