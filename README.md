# Parse SemVer GitHub Action

[![pnpm](https://img.shields.io/static/v1?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAADI0lEQVR4nO3YIY5VWRSG0aNIMBhEJ8yBYBgACskAWuB7Fig044B6pBOStjAsXiF2W/Io9wj3fFXrS35/du5Sdy3pyObjenQ+rSnv+2l9u7zr9vN6e/S7rt3tzfrn8q7zzfpy9Luu3XxeTwEMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgeBMC11vp+s76Wd3uzPlx+qB+f1uuj33X1TuvNLwBP6/3h77py8996cnmXJEmSlG9m/pqZV/E9u7zr/O96/uPTelXeARz+fDPzdvo9jN8w97EBcNsB2AnAagPgtgOwE4DVBsBtB2AnAKsNgNsOwE4AVhsAtx2AnQCsNgBuOwA7AVhtANx2AHYCsNoAuO0A7ARgtQFw2wHYCcBqA+C2A7ATgNUGwG0HYCcAqw2A2w7ATgBWGwC3HYCdAKw2AG47ADsBWG0A3HYAdgKw2gC47QDsBGC1AXDbAdgJwGoD4LYDsBOA1QbAbQdgJwCrDYDbDsBOAFYbALcdgJ0ArDYAbjsAOwFYbQDcdgB2ArDaALjtHgrAFzPzLr6Xl3edT+vv82m9K28+rsdHmJAkSdJGzczX+D7ccdPrDd517d7ccdf7Dd517Z78fNCj6fftjg91L3/DzMyXox/1G3r680EA7huAkQBsBWAkACMB2ArASABGArAVgJEAjARgKwAjARgJwFYARgIwEoCtAIwEYCQAWwEYCcBIALYCMBKAkQBsBWAkACMB2ArASABGArAVgJEAjARgKwAjARgJwFYARgIwEoCtAIwEYCQAWwEYCcBIALYCMBKAkQBsBWAkACMB2ArASABGArAVgJEAjARgKwAjARgJwFYARgIwEoCtAIwEYCQAWwEY6f4DlCRJR/Q/zoV3IvK4wkkAAAAASUVORK5CYII=&label=managed%20by&message=pnpm&color=informational)](https://pnpm.js.org/)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

GitHub Action that parses SemVer version which can be a tag.

## Inputs

- `version`

  **Required** Input version to get parsed

## Outputs

- `is-prerelease`

  Indicates whether the version is a pre-release

- `tag`

  Version tag, whether is a release or a pre-release. Is is guaranteed that `tag` output has a value. In case when the `version` is detected as a pre-release version, if there is an identifier provided in the `version`, e.g., using `--preid` option of `npm version` command, the provided identifier will be returned as the `tag`, otherwise, `dev` tag will be returned. And in case where the version is detected as a version (non-pre-release), the `tag` value will be `latest`. See examples below for more.

## Example Usage

- Successful pre-release version with identifier parse:

  - Input:

    ```yaml
    uses: "akshens/semver-parse@v1"
    with:
      version: "1.3.6-alpha.3"
    ```

  - Output:

    ```yaml
    is-prerelease: "true"
    tag: "alpha"
    ```

- Successful pre-release version without identifier parse:

  - Input:

    ```yaml
    uses: "akshens/semver-parse@v1"
    with:
      version: "1.0.6-1"
    ```

  - Output:

    ```yaml
    is-prerelease: "true"
    tag: "dev"
    ```

- Successful release parse:

  - Input:

    ```yaml
    uses: "akshens/semver-parse@v1"
    with:
      version: "1.3.0"
    ```

  - Output:

    ```yaml
    is-prerelease: "false"
    tag: "latest"
    ```
