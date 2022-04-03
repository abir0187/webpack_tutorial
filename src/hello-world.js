import _ from 'lodash';
import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from "./components/heading/heading";

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();

heading.render(_.upperFirst('hello world'));
helloWorldButton.render();
