const register = require("babel-core/register");
const chai = require("chai");
const enzyme = require("enzyme");
const chaiEnzyme = require("chai-enzyme");
const Adapter = require("enzyme-adapter-react-16");
const React = require("react");
const jsdom = require("jsdom");

chai.use(chaiEnzyme());
register({presets: ["env", "stage-0", "react"]});
enzyme.configure({adapter: new Adapter()});

const dom = new jsdom.JSDOM();

Object.assign(global, {
  React,
  shallow: enzyme.shallow,
  mount: enzyme.mount,
  expect: chai.expect,

  window: dom.window,
  document: dom.window.document,
});
