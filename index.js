import express from 'express';
const app = express();
// add just below const  app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/api/hello', function (httpRequest, httpResponse) {
 const name =  httpRequest.query.name;
 const surname = httpRequest.query.surname;
 httpResponse.json({

    message: "Hello, " + name + " " + surname
 });
});

app.post('/api/hello', function (httpRequest, httpResponse){
    const name = httpRequest.body.name;
    const surname = httpRequest.body.surname;
    httpResponse.json({

        message : "Hello" + name + " " + surname
    });
});
app.listen(3000, function () {
    console.log('Example app listening on  port 3000!');
})

