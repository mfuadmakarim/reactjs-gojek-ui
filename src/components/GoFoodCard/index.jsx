import React from 'react';
import logoGoFood from './../../img/logo-gofood.png';
import food1 from './../../img/food1.jpg';
import food2 from './../../img/food2.jpg';
import food3 from './../../img/food3.jpg';
import food4 from './../../img/food4.jpg';
import food5 from './../../img/food5.jpg';

const GoFoodCard = () => {
  return(
    <div>
        <div className="gofood-container mb-3">
            <div className="gofood-header">
                <div className="flex">
                  <img src={logoGoFood} width="55px" alt="gofood"/>
                  <a href="#" className="float-right text-link mt-2">See All</a>
                </div>
                <p className="mb-0">Your Favourit Foods</p>
            </div>
            <div className="scroll-x">
                <div className="gofood-list">
                    <ul>
                        <li>
                            <a href="#">
                                <div className="gofood-image">
                                    <img src={food1} alt="go food" />
                                </div>
                                Noodles
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="gofood-image">
                                    <img src={food2} alt="go food" />
                                </div>
                                Chicken & Duck
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="gofood-image">
                                    <img src={food3} alt="go food" />
                                </div>
                                Japanese
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="gofood-image">
                                    <img src={food4} alt="go food" />
                                </div>
                                Western
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="gofood-image">
                                    <img src={food5} alt="go food" />
                                </div>
                                Thai
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="mx-2 my-2"/>
    </div>
  );
};
export default GoFoodCard;
