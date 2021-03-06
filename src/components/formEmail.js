/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
import React from 'react';
import { useViewport } from '../hooks/viewPort';
import loadingSvg from '../assets/loading.svg';

const FormEmail = () => {
  const { width } = useViewport();
  const breakpoint = 560;

  function getFormData(form) {
    const { elements } = form;
    let honeypot;
    const fields = Object.keys(elements).filter(k => {
      if (elements[k].name === 'honeypot') {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(k => {
      if (elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      } if (elements[k].length > 0) {
        return elements[k].item(0).name;
      }
    }).filter((item, pos, self) => self.indexOf(item) === pos && item);
    const formData = {};
    fields.forEach(name => {
      const element = elements[name]; // singular form elements just have one value
      formData[name] = element.value; // when our element has multiple items, get their values
      if (element.length) {
        const data = [];
        for (let i = 0; i < element.length; i++) {
          const item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    }); // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || 'responses'; // default sheet name
    formData.formGoogleSendEmail = form.dataset.email || ''; // no email by default
    return { data: formData, honeypot };
  }

  const sendForm = e => {
    e.preventDefault();
    document.getElementById('thankyou_message').classList.add('d-none');
    document.getElementById('error_message').classList.add('d-none');
    document.getElementById('loading-svg').classList.remove('d-none');

    const form = e.target;

    const formData = getFormData(form);
    const { data } = formData;

    if (formData.honeypot) {
      return false;
    }

    const buttons = form.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }

    const url = form.action;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        form.reset();
        document.getElementById('thankyou_message').classList.add('d-none');
        document.getElementById('error_message').classList.add('d-none');
        document.getElementById('gform').classList.add('d-none');
        document.getElementById('thankyou_message').classList.remove('d-none');
        document.getElementById('loading-svg').classList.add('d-none');
      } else if (xhr.status !== 200) {
        document.getElementById('error_message').classList.remove('d-none');
        document.getElementById('loading-svg').classList.add('d-none');
      }
    };
    // url encode form data for sending as post data
    const encoded = Object.keys(data).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`).join('&');
    xhr.send(encoded);
  };

  if (width < breakpoint) {
    return (
      <div id="Contact" className="padding-top-base blurrable d-flex justify-content-around align-items-center pb-4 mt-4 flex-column">
        <div className="contact-left-desktop mb-4 pb-4">
          <h2>
            I&apos;m always interested in hearing about new projects,
            so if you&apos;d like to chat please get in touch.
          </h2>
        </div>
        <div className="form-phone">
          <form
            id="gform"
            method="POST"
            className="pure-form pure-form-stacked form-elements"
            data-email="from_email@example.com"
            onSubmit={sendForm}
            action="https://script.google.com/macros/s/AKfycbzomy4oZw9rylk5CTN0Rbmf0DF82qUvKRl8qEiSf5GOBLwRv7c/exec"
          >
            <div className="d-flex flex-column">
              <input className="pl-2 mb-4" id="name" name="name" placeholder="Full Name" required />
              <input
                className="pl-2 mb-4"
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email address"
              />
              <textarea
                id="message"
                name="message"
                rows="10"
                className="p-2 mb-4"
                required
                placeholder="Write your message..."
              />
              <div className="d-flex align-self-center align-items-center">
                <button className="button-square py-1 px-3 font-weight-bold" type="submit">
                  Get in touch
                </button>
                <div id="loading-svg" className="ml-3 d-none">
                  <img className="sending-form" src={loadingSvg} alt="sending data" />
                </div>
              </div>
            </div>
          </form>
          <div className="d-none" id="thankyou_message">
            <h2>
              <em>Thanks</em>
              {' '}
              for contacting us!
              We will get back to you soon!
            </h2>
          </div>
          <div className="d-none" id="error_message">
            <h2>
              Sorry something wrong on our servers, please try again in a few minutes.
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="Contact" className="padding-top-base blurrable d-flex justify-content-around align-items-center pb-4 mt-4 contact-dsk">
      <div className="contact-left-desktop">
        <h2>
          I&apos;m always interested in hearing about new projects,
          so if you&apos;d like to chat please get in touch.
        </h2>
      </div>
      <div className="m-4 right-submit-margin">
        <form
          id="gform"
          method="POST"
          className="pure-form pure-form-stacked form-elements"
          data-email="from_email@example.com"
          onSubmit={sendForm}
          action="https://script.google.com/macros/s/AKfycbzomy4oZw9rylk5CTN0Rbmf0DF82qUvKRl8qEiSf5GOBLwRv7c/exec"
        >
          <div className="d-flex flex-column">
            <div className="d-flex mb-4">
              <input className="pl-2 mr-4" id="name" name="name" placeholder="First Name" required />
              <input className="pl-2" id="last" name="last" placeholder="Last Name" required />
            </div>
            <input
              className="pl-2 mb-4"
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email address"
            />
            <textarea
              id="message"
              name="message"
              rows="10"
              className="p-2 mb-4"
              required
              placeholder="Write your message..."
            />
            <div className="d-flex align-items-center">
              <button className="button-square py-1 px-3 font-weight-bold" type="submit">
                Get in touch
              </button>
              <div id="loading-svg" className="ml-3 d-none">
                <img className="sending-form" src={loadingSvg} alt="sending data" />
              </div>
            </div>
          </div>
        </form>
        <div className="d-none" id="thankyou_message">
          <h2>
            <em>Thanks</em>
            {' '}
            for contacting us!
            We will get back to you soon!
          </h2>
        </div>
        <div className="d-none" id="error_message">
          <h2>
            Sorry something wrong on our servers, please try again in a few minutes.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FormEmail;
