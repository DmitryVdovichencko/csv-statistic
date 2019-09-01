import Controller from './Controller.js';
import Model from './Model.js';
import View from './View.js';
import '../scss/style.scss';
import "../assets/img/csvLogo.svg";
import "../assets/img/GitHubLogo.png";
import "../assets/img/GitHub.png";

const app = new Controller(new Model(), new View());