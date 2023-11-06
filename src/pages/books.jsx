import HTMLFlipBook from "react-pageflip";
import React, { useState } from "react";
import "./books.css";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover" ref={ref} data-density="hard">
      <div>
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>{props.number}</p>
    </div>
  );
});

function MyAlbum(props) {
  const [inputText, setInputElement] = useState("");
  const [text, setText] = useState("This IS TEXT");
  const printText = () => {
    setText(inputText);
    setInputElement("");
  };

  return (
    <div>
      <HTMLFlipBook
        width={550}
        height={650}
        minWidth={315}
        maxWidth={1000}
        minHeight={420}
        maxHeight={1350}
        showCover={true}
        flippingTime={1000}
        style={{ margin: "0 auto" }}
        maxShadowOpacity={0.5}
        className="album-web"
      >
        <PageCover>Book 1</PageCover>
        <PageCover></PageCover>
        <Page number="1">
          <hr></hr>
          <p contentEditable="true">Chapter 1</p>
        </Page>
        <Page number="2">
          <hr></hr>
        </Page>
        <Page number="3">
          <hr></hr>
        </Page>
        <Page number="4">
          <hr></hr>
        </Page>
        <PageCover></PageCover>
        <PageCover>see you</PageCover>
      </HTMLFlipBook>
    </div>
  );
}

export default MyAlbum;
