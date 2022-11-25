import config from 'config';

console.log("DB_URL",config.get('DB_URL'));
console.log('NODE_CONFIG_DIR: ' + config.util.getEnv('NODE_CONFIG_DIR'));

if(config.has("authentications")) {
    let authenlist = config.get("authentications") as any;
    console.log("authentications",authenlist);
    for(let i=0,isz=authenlist.length;i<isz;i++) {
        console.log(JSON.stringify(authenlist[i]));
    }
}
