// https://www.npmjs.com/package/semantic-release-config-conventional#configuration
process.env.SR_CONFIG_NPM_PUBLISH = "false";

/** @type import("semantic-release").GlobalConfig */
const config = {
  extends: "semantic-release-config-conventional",
};

module.exports = config;
