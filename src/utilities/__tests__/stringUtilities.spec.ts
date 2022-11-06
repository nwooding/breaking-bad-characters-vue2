import { describe, it, expect } from "vitest";
import stringUtilities from "../stringUtilities";

const { replaceSpaceWithPlusSign } = stringUtilities;

describe("stringUtilities", () => {
  it("replaces spaces with plus signs", () => {
    //Arrange
    const stringUnderTest = "Jesse Pinkman"
    //Act
    const resultString = replaceSpaceWithPlusSign(stringUnderTest);
    //Assert
    expect(resultString).toEqual("Jesse+Pinkman");
  });
});
