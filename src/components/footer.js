import React, { Component } from "react";
import LocaleSelect from "./locale_select";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small mdb-color">
        {/* <!-- Footer Links --> */}
        <div className="container text-center text-md-left">
          {/* NOTE: The following section can be uncommented if you want a more extensive footer */}
          {/* <div className="row text-center text-md-left mt-3 pb-3">
            
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                TWD Hotels
              </h6>
              <p>
                TWD Hotels is focused on providing the top experiences in the
                world's epicenters of beauty and adventure.
              </p>
            </div>
            

            <hr className="w-100 clearfix d-md-none" />

            
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Guest Center
              </h6>
              <p>
                <a href="#!">Experience Promise</a>
              </p>
              <p>
                <a href="#!">Experiences</a>
              </p>
            </div>
            

            <hr className="w-100 clearfix d-md-none" />

            
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Our Company
              </h6>
              <p>
                <a href="#!">The Destinations</a>
              </p>
              <p>
                <a href="#!">The Team</a>
              </p>
            </div>

            
            <hr className="w-100 clearfix d-md-none" />

            
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>10969 Berlin, DE</p>
              <p>info@twdhotels.com</p>
              <p>+49 12345678901</p>
            </div>
            
          </div> */}

          <hr />

          {/* <!-- Grid row --> */}
          <div className="row d-flex align-items-center">
            <div className="col-xs-12 col-md-7 col-lg-8">
              <p className="text-center text-md-left">
                © 2019
                <a href="https://www.contentful.com">
                  <strong> TWD Hotels, Inc</strong>
                </a>
                . All rights reserved.
              </p>
            </div>
            <div className="col-xs-12 col-md-5 col-lg-4">
              <LocaleSelect
                locales={this.props.locales}
                currentLocale={this.props.currentLocale}
                handleSelectLocale={this.props.handleSelectLocale}
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
