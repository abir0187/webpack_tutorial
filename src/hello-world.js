import React from 'react';
import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from "./components/heading/heading";

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();

heading.render('hello world');
helloWorldButton.render();
