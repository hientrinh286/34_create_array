function random(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
/*var a0 = random(100,10);
var a1 = random(100,10);
var a2 = random(100,10);
var a3 = random(100,10);
var a4 = random(100,10);
var a5 = random(100,10);
var a6 = random(100,10);
var a7 = random(100,10);
var a8 = random(100,10);
var a9 = random(100,10);
var a = [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9];*/
var a = new Array();
function create_array(){
    var p = +document.getElementById('array').value;
    var element = '';
    for (let m = 0; m<p; m++){
        let x = random(100,10);
        a.push(x);
    }
    console.log(a);
    document.getElementById('creat_array').innerHTML = 'Create a random array: '+ a.join(' ');
    document.getElementById('input').style.display = 'block';
}
function check(){
    var p = +document.getElementById('array').value;
    let count = 0;
    let number = +document.getElementById('number').value;
    index = ' ';
    for (let m = 0; m<p ; m++){
        if (number == a[m]){
            count = count+1;
            index += (m+1)+' ';
        }
    }
    percent = parseFloat(count / p *100).toFixed(2);
    document.getElementById('tientrinh').style.display = 'block';
    if (count == 0){
        document.getElementById('check').innerHTML = 'There is no '+number+ ' in the array.';
    } else if (count == 1) {
        document.getElementById('check').innerHTML = number+' appears once ('+percent+'%) at the position: '+index+' in the array';
    } else {
        document.getElementById('check').innerHTML = number+' appears '+ count+' times ('+percent+'%) at the positions: '+index+' in the array';
    }
    var highlight1 = a.join(' ');
    var highlight_a = highlight1.replaceAll(number, '<b style=color:red>'+number+'</b>');
    document.getElementById('creat_array').innerHTML = 'Create a random array: '+highlight_a;
    document.getElementById('tientrinh').value= percent;
    document.getElementById('tientrinh').innerHTML = percent+'%';
}
function sort(){
    a.sort();
    var s = a.join(' ');
    document.getElementById('result').innerHTML = 'New array after sort: '+s;
}
function reset(){
    location.reload();
}