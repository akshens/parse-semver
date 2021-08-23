const core = require('@actions/core');
const parse = require('./parse');

try {
  const version = core.getInput('version');
  const { isPreRelease, tag } = parse(version);
  core.setOutput("is-prerelease", JSON.stringify(isPreRelease));
  core.setOutput("tag", tag);
} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}