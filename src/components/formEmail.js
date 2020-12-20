/* eslint-disable array-callback-return */
import React from 'react';
import { useViewport } from "../hooks/viewPort";

const FormEmail = () => {
  const { width } = useViewport();
  const breakpoint = 560;

  function getFormData(form) {
    let elements = form.elements;
    let honeypot;    
    let fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) === pos && item;
    });    
    let formData = {};
    fields.forEach(function(name){
      let element = elements[name];      // singular form elements just have one value
      formData[name] = element.value;      // when our element has multiple items, get their values
      if (element.length) {
        let data = [];
        for (let i = 0; i < element.length; i++) {
          let item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail
      = form.dataset.email || ""; // no email by default    
    return {data: formData, honeypot: honeypot};
  }

  const sendForm = (e) => {
    e.preventDefault();
    document.getElementById('thankyou_message').classList.add('d-none');
    document.getElementById('error_message').classList.add('d-none');

    let form = e.target;

    let formData = getFormData(form)
    let data = formData.data;
    console.log('teste')
    console.log(data)
    console.log('testing?')

    if (formData.honeypot) {
      return false;
    }

    let buttons = form.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }

    let url = form.action;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          form.reset();
          let formElements = form.querySelector(".form-elements")
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }      
          document.getElementById('thankyou_message').classList.remove('d-none');
        } else {
          document.getElementById('error_message').classList.remove('d-none');
        }
    };
    // url encode form data for sending as post data
    let encoded = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  };

  if (width < breakpoint) {
    return (
      <div className="blurrable">
      </div>
    );
  }

  return (
    <div className="blurrable">
      <form id="gform" method="POST" className="pure-form pure-form-stacked" data-email="from_email@example.com"
        onSubmit={sendForm} action="https://script.google.com/macros/s/AKfycbzomy4oZw9rylk5CTN0Rbmf0DF82qUvKRl8qEiSf5GOBLwRv7c/exec">
        <label htmlFor="name">
          Name: 
        </label>
        <input id="name" name="name" placeholder="How should I call you?" />       
        <label htmlFor="message">
          Message: 
        </label>
        <textarea id="message" name="message" rows="10"
                  placeholder="Tell me what's on your mind...">
        </textarea>             
        <label htmlFor="email">
            <em>Your</em> Email Address:
        </label>
        <input id="email" name="email" type="email"
            required placeholder="your.name@email.com" />        
        <button className="button-success pure-button button-xlarge">
            <i className="fa fa-paper-plane" />
            &nbsp;Send
        </button>    
      </form>
      <div className="d-none" id="thankyou_message">
        <h2>
            <em>Thanks</em> for contacting us!
            We will get back to you soon!
        </h2>
      </div>
      <div className="d-none" id="error_message">
        <h2>
            Sorry something wrong on our servers, please try again in a few minutes.
        </h2>
      </div>
    </div>
  );
};

export default FormEmail;