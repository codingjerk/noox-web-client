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
};

describe("Icons", () => {
  Object.keys(Icons).forEach(name => {
    describe(`<${name} />`, () => {
      testIcon(Icons[name]);
    });
  });
});
