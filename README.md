# WIP: Create React Chrome Extension Typescript

Currently only boilerplate but intension is to be like Create-React-App but for building chrome extensions.

#### Popup

![Popup](https://cloud.githubusercontent.com/assets/3001525/14128490/dc05e9f8-f653-11e5-9de6-82d1de01844a.gif)

The `todos` state will be saved to `chrome.storage.local`.

#### Window

![Window](https://cloud.githubusercontent.com/assets/3001525/14128489/da176b62-f653-11e5-9bff-fefc35232358.gif)

The context menu is created by [chrome/extension/background/contextMenus.js](chrome/extension/background/contextMenus.js).

#### Inject page

The inject script is being run by [chrome/extension/background/inject.js](chrome/extension/background/inject.js). A simple example will be inject bottom of page(`https://github.com/*`) if you visit.

If you are receiving the error message `Failed to load resource: net::ERR_INSECURE_RESPONSE`, you need to allow invalid certificates for resources loaded from localhost. You can do this by visiting the following URL: `chrome://flags/#allow-insecure-localhost` and enabling **Allow invalid certificates for resources loaded from localhost**.

## Development

* Run script
```bash
# build files to './dev'
# start webpack development server
$ yarn start
```
* If you're developing Inject page, please allow `https://localhost:3000` connections. (Because `injectpage` injected GitHub (https) pages, so webpack server procotol must be https.)
* [Load unpacked extensions](https://developer.chrome.com/extensions/getstarted#unpacked) with `./dev` folder.

## Test

* `test/app`: React components, Redux actions & reducers tests
* `test/e2e`: E2E tests (use [chromedriver](https://www.npmjs.com/package/chromedriver), [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver))

```bash
# lint
$ npm run lint
# test/app
$ npm test
$ npm test -- --watch  # watch files
# test/e2e
$ npm run build
$ npm run test-e2e
```

## LICENSE

[MIT](LICENSE)
