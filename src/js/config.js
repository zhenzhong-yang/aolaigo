/*
    requirejs的配置文件 
 */
require.config({
    // baseUrl:'lib',

    // 配置别名（虚拟路径）
    paths:{
        // 格式：别名:真实路径（基于baseUrl）
        jQuery:'../lib/jquery-3.2.1',
        lyzoom:'../lib/jquery-lyZoom/jquery.lyZoom',
        lycarousel:'../lib/jquery-lycarousel/jquery.lyCarousel',
        jquerySession:'../js/jquerySession',
        fly:'../lib/jquery.fly.min'
    },

    // 配置依赖
    shim:{
        lyzoom:['jQuery'],
        lycarousel:['jQuery'],
        jquerySession:['jQuery'],
        fly:['jQuery'],
    }
});