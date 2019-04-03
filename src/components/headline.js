import React from "react";

export default class Headline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        data-content-type="headline"
        className={`${this.props.className} text-center`}
      >
        <h2>{this.props.fields.headline}</h2>
        {this.props.fields.subHeadline && (
          <h4>{this.props.fields.subHeadline}</h4>
        )}
      </div>
    );
  }
}
