import React from "react";

import CallToAction from "./call_to_action";
import Headline from "./headline";
import ImageCarousel from "./image_carousel";
import ImageWithCaption from "./image_with_caption";
import ParagraphWithHeadline from "./paragraph_with_headline";
import TextWithImage from "./text_with_image";

export default class SetOfTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classNameAttributes = "col-md";

    return (
      <div className="set-of-two row my-lg-5" data-content-type="setOfTwo">
        {this.props.fields.items.map((item, idx) => {
          switch (item.sys.contentType.sys.id) {
            case "callToAction":
              return (
                <CallToAction
                  className={classNameAttributes}
                  key={item.sys.id}
                  fields={item.fields}
                />
              );
            case "headline":
              return (
                <Headline
                  className={classNameAttributes}
                  key={item.sys.id}
                  fields={item.fields}
                />
              );
            case "imageWithCaption":
              return (
                <ImageWithCaption
                  className={classNameAttributes}
                  key={item.sys.id}
                  fields={item.fields}
                  defaultImageURL={this.props.defaultImageURL}
                />
              );
            case "paragraphWithHeadline":
              return (
                <ParagraphWithHeadline
                  className={classNameAttributes}
                  key={item.sys.id}
                  fields={item.fields}
                />
              );
            case "textWithImage":
              return (
                <TextWithImage
                  className={classNameAttributes}
                  key={item.sys.id}
                  fields={item.fields}
                  defaultImageURL={this.props.defaultImageURL}
                />
              );
            // case 'imageCarousel':
            //   return (
            //     item.fields.images.map((image, idx) => {
            //       return (
            //         <img key={image.sys.id} src={"https:" + image.fields.file.url} />
            //       )
            //     })
            //   )
          }
        })}
      </div>
    );
  }
}
