const source = document.getElementsByTagName("textarea")[0];
const result = document.getElementById("result");

var run = ()=>{
    result.srcdoc = source.value;
}