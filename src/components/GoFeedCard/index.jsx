import React from 'react';
import feed1 from './../../img/feed1.jpg';
import feed2 from './../../img/feed2.jpg';
const GoFeedCard = () => {
  return(
    <div>
        <div className="gofeed-container">
            <div className="gofeed-cover">
                <img src={feed1} alt="feed gojek" className="img-fluid" />
                <div className="watermark">
                  <span>GO <i className="fas fa-file-invoice"></i> BILLS</span>
                </div>
            </div>
            <div className="gofeed-content">
                <div className="title">
                    <h5>Indihome has a new home in GO-BILLS!</h5>
                </div>
                <div className="body">
                    <p>Did you know, GO-BILLS will give 10% CASHBACK up to Rp10.000
                    per transaction. Valid for next 5 transactions.</p>
                    <a href="#" className="btn btn-success btn-feed float-right">TRY NOW</a>
                </div>
            </div>
        </div>
        <hr className="mx-2 my-1"/>
                <div className="gofeed-container">
                    <div className="gofeed-cover">
                        <img src={feed2} alt="feed gojek" className="img-fluid" />
                        <div className="watermark">
                          <span>GO <i className="fas fa-file-invoice"></i> BILLS</span>
                        </div>
                    </div>
                    <div className="gofeed-content">
                        <div className="title">
                            <h5>Gaming is non-stop with GO-BILLS!</h5>
                        </div>
                        <div className="body">
                            <p>Buy Mobile Legend diamonds via GO-BILLS and enjoy non-stop gaming!</p>
                            <a href="#" className="btn btn-success btn-feed float-right">TOP UP</a>
                        </div>
                    </div>
                </div>
                <hr className="mx-2 my-1"/>
    </div>
  );
};
export default GoFeedCard;
