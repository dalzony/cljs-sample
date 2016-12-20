// Compiled by ClojureScript 1.9.293 {}
goog.provide('merry_christmas.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
merry_christmas.core.images = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"santa","santa",-599568745)], null);
merry_christmas.core.image_size = (2000);
merry_christmas.core.load_image = (function merry_christmas$core$load_image(image){
var path = [cljs.core.str("./resources/"),cljs.core.str(cljs.core.name.call(null,image)),cljs.core.str(".png")].join('');
return quil.core.request_image.call(null,path);
});
merry_christmas.core.draw_image = (function merry_christmas$core$draw_image(state,k,p__9059){
var vec__9063 = p__9059;
var x = cljs.core.nth.call(null,vec__9063,(0),null);
var y = cljs.core.nth.call(null,vec__9063,(1),null);
return quil.core.image.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"images","images",1757475080),k], null)),x,y);
});
merry_christmas.core.setup = (function merry_christmas$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

quil.core.image_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"images","images",1757475080),cljs.core.zipmap.call(null,merry_christmas.core.images,cljs.core.map.call(null,merry_christmas.core.load_image,merry_christmas.core.images))], null);
});
merry_christmas.core.draw_state = (function merry_christmas$core$draw_state(state){
var w = quil.core.width.call(null);
var h = quil.core.height.call(null);
var tr__8120__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w / (2)),(h / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8120__auto__);

quil.core.scale.call(null,((function (){var x__6881__auto__ = w;
var y__6882__auto__ = h;
return ((x__6881__auto__ < y__6882__auto__) ? x__6881__auto__ : y__6882__auto__);
})() / ((2) * merry_christmas.core.image_size)));

quil.core.background.call(null,(89),(117),(80));

var tr__8120__auto___9066__$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8120__auto___9066__$1);

merry_christmas.core.draw_image.call(null,state,new cljs.core.Keyword(null,"santa","santa",-599568745),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}finally {quil.core.pop_matrix.call(null);
}
quil.core.pop_matrix.call(null);

return quil.core.fill.call(null,(255),((255) * new cljs.core.Keyword(null,"fade","fade",1167694157).cljs$core$IFn$_invoke$arity$1(state)));
}finally {quil.core.pop_matrix.call(null);
}});
merry_christmas.core.merry_christmas = (function merry_christmas$core$merry_christmas(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"merry-christmas",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,merry_christmas.core.setup))?(function() { 
var G__9067__delegate = function (args){
return cljs.core.apply.call(null,merry_christmas.core.setup,args);
};
var G__9067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9068__i = 0, G__9068__a = new Array(arguments.length -  0);
while (G__9068__i < G__9068__a.length) {G__9068__a[G__9068__i] = arguments[G__9068__i + 0]; ++G__9068__i;}
  args = new cljs.core.IndexedSeq(G__9068__a,0);
} 
return G__9067__delegate.call(this,args);};
G__9067.cljs$lang$maxFixedArity = 0;
G__9067.cljs$lang$applyTo = (function (arglist__9069){
var args = cljs.core.seq(arglist__9069);
return G__9067__delegate(args);
});
G__9067.cljs$core$IFn$_invoke$arity$variadic = G__9067__delegate;
return G__9067;
})()
:merry_christmas.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,merry_christmas.core.draw_state))?(function() { 
var G__9070__delegate = function (args){
return cljs.core.apply.call(null,merry_christmas.core.draw_state,args);
};
var G__9070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9071__i = 0, G__9071__a = new Array(arguments.length -  0);
while (G__9071__i < G__9071__a.length) {G__9071__a[G__9071__i] = arguments[G__9071__i + 0]; ++G__9071__i;}
  args = new cljs.core.IndexedSeq(G__9071__a,0);
} 
return G__9070__delegate.call(this,args);};
G__9070.cljs$lang$maxFixedArity = 0;
G__9070.cljs$lang$applyTo = (function (arglist__9072){
var args = cljs.core.seq(arglist__9072);
return G__9070__delegate(args);
});
G__9070.cljs$core$IFn$_invoke$arity$variadic = G__9070__delegate;
return G__9070;
})()
:merry_christmas.core.draw_state));
});
goog.exportSymbol('merry_christmas.core.merry_christmas', merry_christmas.core.merry_christmas);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7735__7736__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7735__7736__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),merry_christmas.core.merry_christmas,new cljs.core.Keyword(null,"host-id","host-id",742376279),"merry-christmas"], null));
}

//# sourceMappingURL=core.js.map