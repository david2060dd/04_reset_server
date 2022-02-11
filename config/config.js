process.env.PORT = process.env.PORT || 3000;



let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/coffe';
} else {
    urlDB = 'mongodb+srv://david2060dd:1724450158@cluster0.tusox.mongodb.net/test';
}

process.env.URLDB = urlDB;