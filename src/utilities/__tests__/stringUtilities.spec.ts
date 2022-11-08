import { describe, it, expect } from "vitest";
import stringUtilities from "../stringUtilities";

const { replaceSpaceWithPlusSign, getInitials } = stringUtilities;

describe("stringUtilities", () => {
  it("replaces spaces with plus signs", () => {
    //Arrange
    const stringUnderTest = "Jesse Pinkman"
    //Act
    const resultString = replaceSpaceWithPlusSign(stringUnderTest);
    //Assert
    expect(resultString).toEqual("Jesse+Pinkman");
  });
  it("returns initials from name", () => {
    //Arrange
    const stringUnderTest = "Jesse Pinkman"
    //Act
    const resultString = getInitials(stringUnderTest);
    //Assert
    expect(resultString).toEqual("JP");
  });
  it("strips non alpha characters then returns initials from name", () => {
    //Arrange
    const stringUnderTest = "Jesse 1 Pinkman & His Dog"
    //Act
    const resultString = getInitials(stringUnderTest);
    //Assert
    expect(resultString).toEqual("JPHD");
  });
});
