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

Notice how I pass in ember-intl's [intl](https://github.com/ember-intl/ember-intl/blob/2.x/docs/ember-service-api.md) service? The React components use that service to look up translations. Their translations need to be merged with those of the Ember app in order for this to work. Right now this happens via [an in-repo addon that has a copy of  react-arcgis-hub translations](./lib/ember-react-arcgis-hub/ttranslations). However there are still some kinks to be worked out. [react-intl only supports a flat structure for message JSON files](https://github.com/yahoo/react-intl/issues/207#issuecomment-154176858), but ember-intl's can be nested or even YAML. Maybe this can be automated using the [new treeForTranslations() hook in ember-intl 3.0](https://github.com/ember-intl/ember-intl/blob/master/docs/addon-support.md#advanced-usage-treefortranslations).

#### Styles
This example application uses [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) to [import and compile the .scss files that are distributed with react-arcgis-hub](./app/styles/app.scss) along with the Bootstrap sass files provided by [ember-bootstrap]. This allows the application to overwrite component styles by setting variables. Alternatively the application could have used the [compiled CSS that react-arcgis-hub distributes](https://unpkg.com/react-arcgis-hub@0.0.1/dist/css/) along with Bootstrap's own pre-compiled CSS.

### Limitations

First, ember-cli-react describes itself as an "experimental addon" that [the authors are not even using yet in production](https://github.com/AltSchool/ember-cli-react).

Beyond that, there are many constraints you have to follow when authoring the React component library. For example I chose not to bundle any React implementation of interactive Bootstrap components (you know, [the ones that require JavaScript](https://getbootstrap.com/docs/3.3/javascript/)). This means the library components can't contain those Bootstrap components. This works fine for modals, tabs, and collapses because the library component can be just contents that go in the container. It is a significant limitation to not be able to use others like tooltips, drop downs, and button groups in the library though. Speaking of Bootstrap, should the library support v3 as well as v4?

Similarly, I've chosen not to bundle react-intl with the react-arcgis-hub components and instead am expecting the consuming app to pass an `intl` prop to each component. This works because react-intl and ember-intl share underlying libraries and browser primitives and have very similar APIs. However, this means that react-arcgis-hub components cannot use react-intl's convenience components like `<FormattedDate>`, etc and must instead use the functions exposed by `this.props.intl` and/or a [few utility functions](https://github.com/tomwayson/react-arcgis-hub/blob/3571d335b73b8170b12a0669546ee1bf08043492/src/utils/index.ts) that handle a couple of differences in the APIs exposed by ember-intl.

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
