var express = require("express");
var app = express();
var bodyParser = require("body-parser");


var campgrounds = [
        { name : " la Mauricie " , image : "https://cdn.familyfuncanada.com/wp-content/uploads/2015/04/Pacific-Rim-NPR-credit-Parks-Canada.jpg"},
        { name : " Mont-Orford " , image : "https://www.quebecoriginal.com/en/listing/images/800x600/8a4aa246-bb38-4584-98c8-506423f30da1/camping-parc-national-du-mont-orford-lac-stukely-camping.jpg"},
        { name : " Mont-Tremblant" , image : "https://www.quebecoriginal.com/en/listing/images/800x600/ae2894cf-af0a-46dc-904d-8a91b0059376/camping-parc-national-du-mont-tremblant-de-la-diable-camping-secteur-la-diable.jpg"},
        { name : " Parc National De La Jacques Cartier ", image: "https://www.sepaq.com/resources/images/pq/jac/caroussel/Mathieu-Dupuis-JAC-5.jpg"},
        { name : " Gatineau Park ", image: "https://www.quebecoriginal.com/en/listing/images/800x600/d10f7f82-c2ea-43c7-a3c9-02fd568684a2/camping-parc-de-la-gatineau-photo.jpg"},
        { name : " Boucherville ", image: "https://www.quebecgetaways.com/images/photos/photos_600_400/camping_du_parc_national_des_iles_de_boucherville_2.jpg"},
        { name: " mont-Gosford ", image: "https://www.sepaq.com/resources/images/pq/mme/caroussel/Steve-Deschenes-MME.jpg "},
        { name: " Frontenac ", image: " https://farm6.staticflickr.com/5697/20663033041_7e31e35825.jpg "}
        
        ];

app.use(bodyParser.urlencoded({extended: true}));

app.set(" view engine ", "ejs");

app.get("/", function(req, res){
    res.render("landing.ejs");
});

app.get("/campgrounds", function(req, res){
    
        
        res.render("campgrounds.ejs",{campgrounds:campgrounds});
});

//get the data from the form and add to the campground array
//redirected to the campgrounds page
app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newcampground = {name: name, image: image};
    campgrounds.push(newcampground);
    res.redirect("/campgrounds");
});




app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log(" camperrr server has started ");
    
});