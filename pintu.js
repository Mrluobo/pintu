document.addEventListener("touchmove", function(e){
    e.preventDefault();
}, false);
var body = $("body");

var width = parseInt(body.css("width"));
var can = $("<canvas></canvas>").attr("width",width).attr("height",width);
body.append(can);
var small = $("<img src='tt.png'/>") 
body.append(small);
var btn = $("<button id='reset'>重置</button>");
body.append(btn);
var a = (width-9)/4;
var position = [
    {x:0,y:0},
    {x:a+3,y:0},
    {x:2*a+6,y:0},
    {x:3*a+9,y:0},
    {x:0,y:a+3},
    {x:a+3,y:a+3},
    {x:2*a+6,y:a+3},
    {x:3*a+9,y:a+3},
    {x:0,y:2*a+6},
    {x:a+3,y:2*a+6},
    {x:2*a+6,y:2*a+6},
    {x:3*a+9,y:2*a+6},
    {x:0,y:3*a+9},
    {x:a+3,y:3*a+9},
    {x:2*a+6,y:3*a+9},
    {x:3*a+9,y:3*a+9}
];
var ctx = can[0].getContext("2d");
var img = new Image();
var kong_pos = 15;
var kong_i = 15;
//img.width = width;
//img.height = width;
img.onload = function(){
    img_width = img.width/4;
    img_pos = [
        {x:0,y:0,i:0},
        {x:img_width,y:0,i:1},
        {x:2*img_width,y:0,i:2},
        {x:3*img_width,y:0,i:3},
        {x:0,y:img_width,i:4},
        {x:img_width,y:img_width,i:5},
        {x:2*img_width,y:img_width,i:6},
        {x:3*img_width,y:img_width,i:7},
        {x:0,y:2*img_width,i:8},
        {x:img_width,y:2*img_width,i:9},
        {x:2*img_width,y:2*img_width,i:10},
        {x:3*img_width,y:2*img_width,i:11},
        {x:0,y:3*img_width,i:12},
        {x:img_width,y:3*img_width,i:13},
        {x:2*img_width,y:3*img_width,i:14},
        {x:3*img_width,y:3*img_width,i:15}
    ];
//    for(var i=0;i<15;i++){
//        ctx.drawImage(img,img_pos[i].x,img_pos[i].y,img_width,img_width,position[i].x,position[i].y,a,a);
//    }
    callback();
}
img.src = "tt.png";
var count;
btn.on("tap",callback);
var time = 0;
function callback(){
    time =0;
    clearInterval(count);
    count = setInterval(function(){
        time += 1;
        $("#time").text(time);
    },1000)
    for(var w=0;w<img_pos.length;w++){
        if(img_pos[w].i==15){
            img_pos.splice(w,1);
        }
    }
    function randomsort(a, b) {
        return Math.random()>.5 ? -1 : 1;
    }
    img_pos.sort(randomsort);
    img_pos[15] = {i:15};
    test = 15;
    ctx.clearRect(0, 0,width,width);
    for(var i=0;i<15;i++){
        ctx.drawImage(img,img_pos[i].x,img_pos[i].y,img_width,img_width,position[i].x,position[i].y,a,a);
    }
    console.log(img_pos);
    key = {x:position[15].x,y:position[15].y}
}
//ctx.clearRect(200,200,200,200)
var key = {x:position[15].x,y:position[15].y}
var test = 15;
var test2;
$(document).on("swipeRight",function(){
    if(key.x>0){
        var imagedata = ctx.getImageData(key.x-a-3,key.y,a,a);
        ctx.putImageData(imagedata,key.x,key.y);
        ctx.clearRect(key.x-a-3-1,key.y-1,a+2,a+2);
        key.x = key.x-a-3;
        console.log("right");
//        kong_pos-=1;
//        kong_i = img_pos[kong_pos].i;
//        img_pos[kong_pos].i = img_pos[kong_pos-1].i;
//        img_pos[kong_pos-1].i =kong_i;
        test = test-1;
        console.log(test);
        test2 = img_pos[test];
        img_pos[test] = img_pos[test+1];
        img_pos[test+1] = test2;
        checkWin()
    }

})
$(document).on("swipeLeft",function(){
    if(key.x<3*a+9){
        var imagedata = ctx.getImageData(key.x+a+3,key.y,a,a);
        ctx.putImageData(imagedata,key.x,key.y);
        ctx.clearRect(key.x+a+3-1,key.y-1,a+2,a+2);
        key.x = key.x+a+3;
        console.log("left");

        test = test+1;
        console.log(test);

        test2 = img_pos[test];
        img_pos[test] = img_pos[test-1];
        img_pos[test-1] = test2;
        checkWin()
    }

})
$(document).on("swipeDown",function(){
    if(key.y>0){
        var imagedata = ctx.getImageData(key.x,key.y-a-3,a,a);
        ctx.putImageData(imagedata,key.x,key.y);
        ctx.clearRect(key.x-1,key.y-a-3-1,a+2,a+2);
        key.y = key.y-a-3;
        console.log("down");
        test = test-4;
        console.log(test);
        test2 = img_pos[test];
        img_pos[test] = img_pos[test+4];
        img_pos[test+4] = test2;
        checkWin()
    }

})
$(document).on("swipeUp",function(){
    if(key.y<3*a+9){
        var imagedata = ctx.getImageData(key.x,key.y+a+3,a,a);
        ctx.putImageData(imagedata,key.x,key.y);
        ctx.clearRect(key.x-1,key.y+a+3-1,a+2,a+2);
        key.y = key.y+a+3;
        console.log("up");
        test = test+4;
        test2 = img_pos[test];
        console.log(test);
        img_pos[test] = img_pos[test-4];
        img_pos[test-4] = test2;
        checkWin()
    }
})
var finish = false;
function checkWin(){
    var s="";
    console.log(img_pos);
    for(var i=0;i<15;i++){
        s += img_pos[i].i.toString()+",";
    }
    console.log(s);
    if(s=="0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,"){
        clearInterval(count);
        finish = true;
        data.desc = '我用了'+time+"秒就完成了拼图，大家一起来玩拼图，赢取精美礼品吧！";
        alert("您用了"+time+"秒就完成了拼图！请将此游戏分享至朋友圈，领取精美礼品吧！")
    }
}