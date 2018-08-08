const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3002;
let app = express();
if (process.env.NODE_ENV !== 'production') {
    app.use(express.static('dist'));
} else {
    app.use(express.static('dist'));
}

app.get('/', (req, res)=>{
    if (process.env.NODE_ENV !== 'production') {
        res.sendFile(path.join(__dirname+'/index.html'));
    } else {
        res.sendFile(path.join(__dirname+'/index.html'));
    }
});

app.listen(PORT, ()=>{
    console.log('Started');
});
