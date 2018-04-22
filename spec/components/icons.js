import Icons from "components/icons";

const testIcon = Icon => {
  it("should render without error", () => {
    shallow(<Icon />);
  });

  it("should render svg element", () => {
    const icon = mount(<Icon />);
    expect(icon).to.have.tagName("svg");
  });

  it("should render path as well", () => {
    const icon = mount(<Icon />);
    expect(icon).to.have.descendants("path");
  });

  it("should get color from props", () => {
    const icon = mount(<Icon color="#FF0000"/>);
    expect(icon).to.contain.html().match(/#FF0000/);
  });

  it("should use black color by default", () => {
    const icon = mount(<Icon />);
    expect(icon).to.contain.html().match(/#000000/);
  });
};

describe("Icons", () => {
  Object.keys(Icons).forEach(name => {
    describe(`<${name} />`, () => {
      testIcon(Icons[name]);
    });
  });
});
