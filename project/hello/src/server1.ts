import express from 'express';

const app = express();

app.use(express.static("public"));

app.get("/home", function(request, response)  {
    response.sendFile(__dirname + '/public/homePage.html');
});

app.listen(8080);
