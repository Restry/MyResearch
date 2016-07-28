var handlebars = require('handlebars');
var layouts = require('handlebars-layouts');
var fs =require("fs")

// Register helpers
handlebars.registerHelper(layouts(handlebars));

// Register partials
handlebars.registerPartial('layout', fs.readFileSync('layouts.hbs', 'utf8'));

// Compile template
var template = handlebars.compile(fs.readFileSync('page.html', 'utf8'));

// Render template
var output = template({
    title: 'Layout Test',
    items: [
        'apple',
        'orange',
        'banana'
    ]
});

console.log(output);