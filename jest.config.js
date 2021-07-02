const config = {
    verbose: true,
    roots: ["<rootDir>/tests"],
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
};

module.exports = config;