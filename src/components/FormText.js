import React, { useState } from "react";
import PropTypes from 'prop-types';
import { jsPDF } from 'jspdf';


export default function FormText(props) {

  const handleUpClick = () => {
    console.log("UpperCase Button clicked");
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Uppercase is Done","success");
  }

  const handleOnChange = (event) => {
    console.log("Handling on change event");
    setText(event.target.value); //This will listen the event and change the value accordingly
  }

  const handleLoClick = () => {
    console.log("Lower case button clicked");
    const newText = text.toLowerCase();
    setText(newText); 
    props.showAlert("LowerCase is Done","success");

  }

  const handleSavePdf = () => {

    console.log("Saved As PDF");
    const content  = text;
    const pdf = new jsPDF();
    pdf.html(content, {
      callback: function (doc) {
          doc.save('sample.pdf');
      }
    });
    props.showAlert("PDF got saved","success");


  }


  const [text,setText] = useState("Enter text here");
  return (
    <>
    <div>
      <div className="mb-3">
        <label htmlFor="myTextBox" className={`form-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          {props.textBoxName}
        </label>
        <textarea
          className={`form-control  text-${props.mode === 'light'?'dark':'light'}`}
          style={{backgroundColor:props.mode ==='light'?'white':'grey'}}
          id="myTextBox"
          rows="5"
          value={text}
          onChange = {handleOnChange}
          placeholder = "Text Box"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-secondary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-success mx-2" onClick={handleSavePdf}>Save as PDF</button>
    </div>
    <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`} >
      <h2>Words and Characters</h2>
      <p>Total no of words {text.split(" ").length} and Characters {text.length}</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}

FormText.propTypes = {
    textBoxName : PropTypes.string,
}

FormText.defaultProps = {
    textBoxName : "Box name here"
}
