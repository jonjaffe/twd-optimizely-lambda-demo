import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //If the component comes through with an image resolved use that, otherwise use the test image
    //NOTE: For locales with no fallback or localized images added, this can happen currently
    const imageURL =
      this.props.fields.logo && this.props.fields.logo.fields.file
        ? this.props.fields.logo.fields.file.url
        : this.props.defaultImageURL;

    return (
      <div
        className="header navbar navbar-expand-lg navbar-light bg-light"
        data-content-type="header"
      >
        <a className="navbar-brand" href="/">
          <picture>
            <source
              srcSet={`https:${imageURL}?h=40&fm=webp`}
              type="image/webp"
            />
            <img src={`https:${imageURL}?h=40&fm=png`} />
          </picture>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse nav-justified justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            {this.props.fields.navigationLinks.map(navLink => {
              return (
                <a
                  key={navLink.sys.id}
                  className="nav-item nav-link"
                  href={
                    navLink.fields.url === undefined ? "#" : navLink.fields.url
                  }
                >
                  <strong>{navLink.fields.displayText}</strong>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
