var expect = require("chai").expect;
var titleize = require("../titleize");

describe("Titleize", function() {
  it("to capitalize initial letter of each word in input", function() {
    expect(titleize("seth smith")).to.equal("Seth Smith");
  })
  it("to properly case mixed case strings", function() {
    expect(titleize("Mr ALEXANDER PushKIn")).to.equal("Mr. Alexander Pushkin");
  });
});

