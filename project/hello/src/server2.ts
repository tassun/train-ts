import express from 'express';

const app = express();
//using ejs as view engine so we can cal variable like <%=var%> in .ejs file
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/test", function(request, response)  {
    response.render("testPage",{username: "John"});
});

app.listen(8080);
