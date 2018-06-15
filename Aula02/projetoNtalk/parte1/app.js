var express = require('express')
, load = require('consign')
, app = express();

load().include('models')
.then('controllers')
.then('routes')
.into(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
    console.log("Ntalk no ar.");
});
