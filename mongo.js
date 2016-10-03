var models = require('./models');

models.sync(function(){
    var obj = {
        user: 'DNelson',
        pass: 'password',
        first: 'DeAndre',
        last: 'Nelson',
        settings: {
            printer: 176998,
            home: 'receiving'
        },
        roles: ['57bb1d26d393fd0a2fb1d237']
    }
    models.Users.create(obj, function(err, res){
        console.log(err);
        console.log(JSON.stringify(res, null, 2));
    });
});