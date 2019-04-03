import React from "react";
import Markdown from "react-remarkable";

export default class ParagraphWithHeadline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        data-content-type="paragraphWithHeadline"
        className={this.props.className}
      >
        <h2 className="text-center paragraph-with-headline">
          {this.props.fields.headline}
        </h2>
        {this.props.fields.paragraph && (
          <Markdown source={this.props.fields.paragraph} />
        )}
      </div>
    );
  }
}
