const isValidSemverVersion = require('semver/functions/valid');
const praseSemverVersionPreRelease = require('semver/functions/prerelease');

function parsePreReleaseTag(prerelease) {
  if (prerelease.length === 1) {
    return 'dev'
  }
  return prerelease[0]
}

function parse(version) {
  if (!isValidSemverVersion(version)) {
    throw new Error('Invalid semver version is provided')
  }

  const prerelease = praseSemverVersionPreRelease(version);

  const isPreRelease = prerelease !== null;
  const tag = isPreRelease ? parsePreReleaseTag(prerelease) : 'latest';

  return {
    isPreRelease,
    tag
  }
}

module.exports = parse;
