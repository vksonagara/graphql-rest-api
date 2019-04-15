const config = {
    db: {
        host: 'localhost',
        port: 27017,
        name: 'testDB2'
    },
    port: process.env.PORT || 3000
};

module.exports = config;