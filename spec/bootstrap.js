import bootstrap from "bootstrap";

describe("bootstrap", () => {
  beforeEach(() => {
    bootstrap();
  });

  it("should insert div node to render in", () => {
    const divCount = document.getElementsByTagName("div").length;
    expect(divCount).to.equal(1);
  });

  it("should render current working-on component inside", () => {
    const div = document.getElementsByTagName("div")[0];
    expect(div.innerHTML).to.not.be.empty;
  });
});
