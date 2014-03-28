// 移動 dom
// $( ".main-nav ul" ).appendAround();


// scrollable
var scrollable = document.getElementById("scrollable");
new ScrollFix(scrollable);


// image lazyload
// $("img.lazy").lazyload();
$("img.lazy").lazyload({
    effect : "fadeIn"
});

var banana = ''+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿卜卜彳丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿冷像凶剝稈三丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿卜光調釅釅糍刁丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丁畏矇欄芬丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿常離獵裨十丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿忌簸糠俠丈八卜丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿小若免玄扒竻企亍丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿ㄚ冷住木色待肯芎仃丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿八勿向仇拈流烏拱吉斤丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿二正幻池掠染趕咖芫允丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿小且句后牸單摸迷他北彳丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿六仍尤兇郊孝痴妖密幻八丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿力泳且斧珍第角技利仰二丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿ㄚ冇也半戎席理床釣閂拘彳丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿上芹主友恥但蚊依博捉封丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿了不兄五初追考哨秤淋長仁丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿二汗左叭包眨承弇戽枵哇星丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丁才勾必百捋核烏席博拔讓力丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿十付幻先帖桂芭梯起排浸舊倒丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿ㄚ小九出汙奸胡鮭兩使笴索簫續丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿了三社尤仍汰淋莊毯造雇期獵鷹卜丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿ㄚ了行志苧拉惡剖盈脢淨頂柳轟豔丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿了亍平尖泧紀拆滯節粄漆受誘竇曇丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿彳入去先巴成放嗀英催增殗會隱竇凹丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿彳三分討竟笴惱晃節跤秧季碌愚繼凝卜丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丁冇呈泥界按涿蓮詩盎直氣寒陵額仕丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿ㄚ斤封母流民擇香搞惜崎挺敬巢漂打丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿ㄚ江泉津該缽鍫檀蹀飢香坐委症六丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿千涼候事噭興晡穎耐尾寅問芎卡丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿孔罶噥嚼既個漲擇徙狀戎孔ㄚ丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿卜囊邋錘窮蒜消毛亍小彳丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿了市父二丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿\n'+
'丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿丿';

window.console && console.log(banana);