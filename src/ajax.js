export default class Ajax {
    get(url, sucfunc) {
        var data;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                data = JSON.parse(xmlhttp.responseText);
                sucfunc(data);
                console.log('get ' + url + ' success');
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
}