var localStorage = window.localStorage;

var saveData = function()
{
    //console.log(config.savesis);
    //print(JSON.stringify(config));
    console.log('saving...');
    localStorage.setItem('config', JSON.stringify(config));
}

var loadData = function()
{
    console.log('loading...');
    var retreivedObject = localStorage.getItem('config');


    if(retreivedObject != null){
        config = JSON.parse(retreivedObject);
    }

}

loadData();
