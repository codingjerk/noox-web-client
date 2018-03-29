const register = require("babel-core/register");
const chai = require("chai");
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const React = require("react");

register({presets: ["env", "stage-0", "react"]});
enzyme.configure({adapter: new Adapter()});

Object.assign(global, {
  React,
  shallow: enzyme.shallow,
  expect: chai.expect,
});
