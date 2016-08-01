var html = require("./tpl.html");
require("../autocomplete/levenshtein.js");
require("../autocomplete/knockout.autocomplete.js");
require("../autocomplete/knockout.autocomplete.css");
require("../../js/lib/ko.paged")
var data = [
    {city:"Fort Dodge", zip:"34889"},
    {city:"Fitchburg", zip:"83366"},
    {city:"Menomonee Falls", zip:"52534"},
    {city:"Norfolk", zip:"02232"},
    {city:"Dearborn", zip:"55899"},
    {city:"Pomona", zip:"90483"},
    {city:"Port Orford", zip:"02565"},
    {city:"Clovis", zip:"98500"},
    {city:"Sister Bay", zip:"20285"},
    {city:"Bethlehem", zip:"57757"},
    {city:"Broken Arrow", zip:"18820"},
    {city:"Idabel", zip:"65964"},
    {city:"Macomb", zip:"43974"},
    {city:"Dearborn", zip:"03451"},
    {city:"Corinth", zip:"93401"},
    {city:"El Paso", zip:"26282"},
    {city:"Cortland", zip:"67010"},
    {city:"Barre", zip:"52555"},
    {city:"Aspen", zip:"62155"},
    {city:"New Brunswick", zip:"68095"},
    {city:"Garland", zip:"85242"},
    {city:"Gloucester", zip:"33586"},
    {city:"Beacon", zip:"21493"},
    {city:"New Rochelle", zip:"82251"},
    {city:"Fairbanks", zip:"66241"},
    {city:"Lewiston", zip:"38572"},
    {city:"Bismarck", zip:"91912"},
    {city:"Hammond", zip:"69642"},
    {city:"Uniontown", zip:"31508"},
    {city:"Rolla", zip:"92430"}
];

function viewModel(params) { 
    
    var model ={};

    model.SearchCount= ko.observable();
    model.showMetadata= ko.observable();

    model.search=function(){

            $.ajaxSetup ({ cache: false}); 
        $.getJSON("http://192.168.5.1:3000/posts?title_like="+model.Title()).done(function(res){
            model.results(res);
        })

    }
    model.results=ko.observableArray().paged(5);

    model.Keyword=ko.observable();
    model.Title=ko.observable();
    model.MetaDataInfo=ko.observableArray();
    model.knowledgeTypes= ko.observableArray();
    model.selectedKnowledgeType=ko.observable();

 
    model.folders = ko.observableArray();

    $.getJSON(params.url).done(function(res){
        model.folders(res);
    })

    return model;
}


module.exports = {
    viewModel: viewModel,
    template: html
};