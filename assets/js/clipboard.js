function clipboard(element){
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();

    copied();
};

function copied(){
    document.getElementById("copied").innerHTML = "Copied to clipboard!";

    setTimeout(clearCopied,3000);
}

function clearCopied(){
    document.getElementById("copied").innerHTML = "";
}