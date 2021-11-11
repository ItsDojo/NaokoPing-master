'use strict';

var n = require('../lib/Naoko-ping');

var test = async function(){
    try{
        var host    = 'projectsuki.com';
        var res     = await n.ping(host);
        console.log(res);
    }catch(e){
        console.log(e);
    }
};

test();
