import _ from 'lodash';
import Heading from "./components/heading/heading";
import KiwiImage from "./components/kiwi-image/kiwi-image";

const heading = new Heading();
const kiwiImage = new KiwiImage();


heading.render(_.upperFirst('kiwi'));
kiwiImage.render();

