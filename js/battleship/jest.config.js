module.exports = {
  modulePaths: ["src"],
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules"],
  //testDirectoryName: "tests",
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};
