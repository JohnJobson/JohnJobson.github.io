// ==UserScript==
// @name         书签菜单
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://www.tampermonkey.net/scripts.php
// @include     http*
// @include     ftp*
// @grant        Ajax_html

// @charset     UTF-8
// @grant       GM_xmlhttpRequest
// @grant       GM_getResourceText
// @grant       GM_openInTab
// @grant       GM_registerMenuCommand
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_download
// @run-at    document-end
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function Ajax_html(){

    //css
    let style = document.createElement("style");

    style.appendChild(document.createTextNode(`
    #yue_muenbox{
        position: fixed;
        top: 0;
        left: 0;
        width: 160px;
        height: 100vh;
        z-index: 100000;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
    }

    #yue_overflow{position: fixed;left: 0;top: 0;bottom: 0;right: 0;background-color: rgba(0,0,0,0.4);}
    #yue_muenbox .header{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-weight: bold;
        background-color: #FFFFFF;
    }
    #yue_muen {
        position: relative;
        width: 160px;
        background-color: #FFFFFF;
        border-right: 1px solid #e2e2e2;
    }

    #yue_muen ul {
        height: 100vh;
        box-sizing: border-box;
        overflow-y: scroll;
    }
   #yue_muen ul li{
        border-bottom: 1px dashed #E2E2E2;
    }
    #yue_muen ul li:first-child{padding-top: 40px;}
    #yue_muen ul li:last-child{padding-bottom: 20px;}

    #yue_muen a{display: inline-block;width: 100%;height: 28px;line-height: 28px;font-size: 14px;text-decoration: none;color: #666666;text-align: center;}
    #yue_muen a:hover{color: #00a4ff;background-color: #e2e2e2;}
    #yue_btn {
        position: absolute;
        right: -120px;
        top: 50%;
        margin-top: -20px;
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: yellow;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    #yue_muenbox.active {
        margin-left: -160px;
    }
`));

        document.head.appendChild(style);

        $.ajax({
                url:'https://johnjobson.github.io/ajax/number.json',//地址
                dataType:'json',//数据类型
                type:'GET',//类型
                timeout:2000,//超时
                //请求成功
                success:function(data){
                    //alert(data);
                    console.log(JSON.stringify(data));
                    var istr = '';
                    $.each(data, function(i, item) {
                       var str = '<li><a href="javascript:;">姓名:' + item.name + ' 性别：' + item.sex + '</a></li>';
                        istr += str;
                    })
                   var ihtml = '<div id="yue_overflow"></div><div id="yue_muenbox"><div id="yue_muen"><div class="header">我的书签</div><div id="yue_btn">按钮</div><ul>' + istr + '</ul></div></div>';
                    $('body').append(ihtml);
                },
                //失败/超时
                error:function(){

                }
        });

    }
    ``
    Ajax_html();

//js

 $("body").on("click", "#yue_btn", function(){
     $('#yue_muenbox').toggleClass('active');
     $(this).toggleClass('active');
     $('#yue_overflow').toggle();
 })

})();