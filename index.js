const core = require('@actions/core');
const parse = require('./parse');

try {
  const version = core.getInput('version');
  const { isPreRelease, tag } = parse(version);
  core.setOutput("is-prerelease", JSON.stringify(isPreRelease));
  core.setOutput("tag", tag);
} catch (error) {
  console.error(error);
  core.debug(error);
  core.setFailed(error.message);
}