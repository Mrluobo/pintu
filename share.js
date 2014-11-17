/**
 * Created by Administrator on 2014/10/24.
 */

var data = {
    app: '',
    img: function() {
    return 'imgsrc'
    },
    link: 'href',
    desc: "玩智力拼图游戏，赢取精美大礼！",
    title: '延长壳牌送礼品'
    };

wechat('timeline', data, function(){
    if(finish==true){
        alert("请将此页截图并发送至延长壳牌加油站公众号，领取您的精美礼品！")
    }else{
        alert("您还没有完成拼图哦~赶快加油，赢取精美大礼！")
    }
    //alert("test");
//    $.ajax({
//        type:'GET',
//        url:'<?php echo site_url("my/listen/share_timeline"); ?>',
//
//        dataType:'json',
//        success:function(data){
//            alert(data.info);
            // alert("分享成功，成功获得1元佣金");
            //window.location.href = "";
//        }
//    })
    });