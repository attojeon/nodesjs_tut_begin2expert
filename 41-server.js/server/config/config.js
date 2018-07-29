var dbuser = '';
var passwd = '';
process.env.PORT = 3000;
process.env.MONGDB_URI = `mongodb://${dbuser}:${passwd}@ds249311.mlab.com:49311/tododb`;
DBCONN_STRING = `mongodb://${dbuser}:${passwd}@ds249311.mlab.com:49311/tododb`;

