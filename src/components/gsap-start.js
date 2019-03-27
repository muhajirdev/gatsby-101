import React, { Component } from "react";
import { TweenLite } from "gsap/all";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
  }

  componentDidMount() {
    // use the node ref to create the animation
    this.myTween = TweenLite.from(this.myElement, 1, { x: 100, y: 100 });
  }

  render() {
    return (
      <>
        <style>{`
        .test {
            margin-top: 100px;
            margin-left: 100px;
        }
            `}</style>
        <div className="test" ref={div => (this.myElement = div)}>
          aaa
        </div>
      </>
    );
  }
}

export default MyComponent;
