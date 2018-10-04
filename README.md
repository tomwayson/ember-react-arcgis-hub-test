# ember-react-arcgis-hub-test

This application tests how to share Bootstrap styles and i18n messages between an Ember application and React components. I created [react-arcgis-hub](https://github.com/tomwayson/react-arcgis-hub) as a library of React components that are specifically designed to work in both React and Ember applications that use Bootstrap and either [react-intl](https://github.com/yahoo/react-intl) or [ember-intl] respectively. This application verifies that those components work in an Ember application using [ember-cli-react], [ember-intl], and [ember-bootstrap].

![react-in-ember](https://user-images.githubusercontent.com/662944/46497205-c3fb0b00-c7ce-11e8-847f-36b5dd9f0bf7.gif)

## How it works
All I had to do to make the React components available to the Ember app was:

```bash
ember i ember-cli-react
ember i ember-auto-import
ember i ember-intl
yarn add react-arcgis-hub
```

Thanks to the magic of   [ember-auto-import](https://github.com/ef4/ember-auto-import) and [ember-cli-react], I was then able to write DDAU-style React components in my app [like this](./app/components/HubAuthForm.jsx) that `import` components from react-arcgis-hub and pass down properties and closure actions:

```hbs
{{hub-auth-form intl=intl onSignIn=(action 'signIn') }}
```

#### i18n

Notice how I pass in ember-intl's [intl](https://github.com/ember-intl/ember-intl/blob/2.x/docs/ember-service-api.md) service? The React components use that service to look up translations. Their translations need to be merged with those of the Ember app in order for this to work. Right now this happens via [an in-repo addon that has a copy of  react-arcgis-hub translations](./lib/ember-react-arcgis-hub/translations). However there are still some [kinks to be worked out](https://github.com/tomwayson/ember-react-arcgis-hub-test/issues/1).

#### Styles
This example application uses [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) to [import and compile the .scss files that are distributed with react-arcgis-hub](./app/styles/app.scss) along with the Bootstrap sass files provided by [ember-bootstrap]. This allows the application to overwrite component styles by setting variables. Alternatively the application could have used the [compiled CSS that react-arcgis-hub distributes](https://unpkg.com/react-arcgis-hub@0.0.1/dist/css/) along with Bootstrap's own pre-compiled CSS.

### Limitations

First, ember-cli-react describes itself as an "experimental addon" that [the authors are not even using yet in production](https://github.com/AltSchool/ember-cli-react).

Beyond that, there are a few [constraints I had to follow when authoring the React component library](https://github.com/tomwayson/react-arcgis-hub/blob/master/README.md#limitations).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-react-arcgis-hub-test`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

[ember-cli-react]:https://github.com/AltSchool/ember-cli-react
[ember-bootstrap]:https://www.ember-bootstrap.com/
[ember-intl]:https://github.com/ember-intl/ember-intl
