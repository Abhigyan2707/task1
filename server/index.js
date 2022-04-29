const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

const app= express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.post("/", (req, res)=>{
    const k=Number(req.body.num);
    console.log(req.body);
    console.log(k);
    var m={msg : ""};
    if(k%2===0){
        m.msg="dialog";
    }else{
        m.msg="redirect";
    }
    res.send(m);
});

app.listen(PORT, () => {
    console.log(`server is up, running and listening on port ${PORT}`);
});
