const Metalsmith = require('metalsmith')
const markdown   = require('metalsmith-markdown')
const layouts    = require('metalsmith-layouts')
const permalinks  = require('metalsmith-permalinks')
const metallic  = require('metalsmith-metallic')
const updated  = require('metalsmith-updated')

Metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .use(metallic())
  .use(markdown())
  .use(updated())
  .use(permalinks())
  .use(layouts({
     engine: 'handlebars'
  }))
  .build(function(err) {
     if (err) throw err;
  });
