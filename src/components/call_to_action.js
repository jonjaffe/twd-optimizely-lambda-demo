import React from "react";
import Markdown from "react-remarkable";

export default class CallToAction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3" />
        <div
          data-content-type="callToAction"
          className={`${
            this.props.className
          } card text-center col-lg-6 border-info p-3 my-lg-3`}
        >
          <Markdown source={this.props.fields.text} />
          <button type="button" className="btn btn-info">
            {this.props.fields.buttonText}
          </button>
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}
