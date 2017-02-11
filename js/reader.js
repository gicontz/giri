
function readTextFile(file){
	var the_text;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                the_text = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return the_text;
}