var handlebars = require('handlebars');
var layouts = require('handlebars-layouts');
var fs =require("fs")

var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');

// Register helpers
handlebars.registerHelper(layouts(handlebars));

// Register partials
handlebars.registerPartial('index', fs.readFileSync('src/views/knowledge/index.hbs', 'utf8'));

// Compile template
var template = handlebars.compile(fs.readFileSync('src/views/knowledge/tree.hbs', 'utf8'));
  
module.exports = function(htmlOptions) {

    return template({
                        page: htmlOptions.htmlWebpackPlugin.options.title,
                        left: function() {
                            return "./tree"
                        },
                        right: function() {
                            return "./list"
                        }
                    })

}