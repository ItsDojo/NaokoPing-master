# NaokoPing-master

```javascript
'use strict';

var n = require('itsdojo/naoko-ping');

var pinger = async function(){
    try{
        var host    = 'projectsuki.com';
        var res     = await n.ping(host);
        console.log(res);
    }catch(e){
        console.log(e);
    }
 };
 pinger();
```

## Option PingOnly
```javascript
res.time
```

