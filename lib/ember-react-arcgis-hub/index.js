/* eslint-env node */
'use strict';
// var Funnel = require('broccoli-funnel');
// var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-react-arcgis-hub',

  isDevelopingAddon() {
    return true;
  },

  // TODO: upgrade ember-intl to enable treeForTranslations
  // see: https://github.com/ember-intl/ember-intl/blob/master/docs/addon-support.md
  // for now we've not only manually copying them to ./translations folder
  // but also had to nestify the ids, so
  // "arcgisHub.ExampleComponent.ExampleComponent": "Example component:"
  // becomes { "arcgisHub": "ExampleComponent": { "ExampleComponent": "Example component:"} }
  // treeForTranslations: function(tree) {
  //   console.log('_treeFor', arguments);
  // },

  // TODO: also copy translations to public so that the current locale can be side-loaded
  // treeForPublic: function(tree) {
  //   // var assetsTree = new Funnel('public');
  //   // return mergeTrees([tree, assetsTree], {
  //   //   overwrite: true
  //   // });
  // }
};
