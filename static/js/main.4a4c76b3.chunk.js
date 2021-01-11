(this["webpackJsonpchuck-norris-react-redux"]=this["webpackJsonpchuck-norris-react-redux"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n(0),r=n.n(a),i=n(13),c=n.n(i);n(34),n(35),n(36);var s=function(){return Object(o.jsx)("section",{className:"header"})},d=n(15),l=n(3);n(41),n(42);var u=function(e){var t=Object(l.f)().pathname;r.a.useEffect((function(){if(Object.keys(e.favoriteJokes).length>10){e.deleteFavorite(e.favoriteJokes[0].id);for(var t=11;t<e.favoriteJokes.length;t++)e.deleteFavorite(e.favoriteJokes[t].id)}}),[]);var n=Object(o.jsxs)("div",{children:["/"===t&&e.favoriteJokes.some((function(t){return t.jokes===e.joke.jokes}))&&Object(o.jsx)("button",{className:"jokes__save-button_marker",onClick:function(t){t.preventDefault();var n=e.favoriteJokes.filter((function(t){return t.jokes==e.joke.jokes}));e.deleteFavorite(n[0].id)}}),"/"===t&&!e.favoriteJokes.some((function(t){return t.jokes===e.joke.jokes}))&&Object(o.jsx)("button",{className:"jokes__save-button",onClick:function(t){t.preventDefault(),e.addFavorite({id:e.id,jokes:e.jokes})}}),"/favorite"===t&&Object(o.jsx)("button",{className:"jokes__delete-button",onClick:function(t){t.preventDefault(),e.deleteFavorite(e.id)}})]});return Object(o.jsxs)("article",{className:"jokes",children:[Object(o.jsx)("p",{className:"jokes__body",children:e.jokes}),n]})},j=n(8);var v=function(e){return Object(o.jsxs)("section",{className:"main",children:[Object(o.jsxs)("div",{className:"main__buttons",children:[Object(o.jsxs)("div",{className:"main__load main__load-title_margin",children:[Object(o.jsx)("h3",{className:"main__load-title",children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e \u0448\u0443\u0442\u043e\u043a:"}),Object(o.jsx)("p",{className:"main__load-subtitle",children:Object(o.jsx)("span",{children:Object.keys(e.productsReducer).length})})]}),Object(o.jsxs)("div",{className:"main__buttons-container",children:[!e.changeButton&&Object(o.jsx)("button",{className:"main__buttons-item main__load-title_margin",onClick:e.startServer,children:"Start server"}),e.changeButton&&Object(o.jsx)("button",{className:"main__buttons-item main__load-title_margin",onClick:e.stopServer,children:"Stop server"}),Object(o.jsx)("button",{className:"main__buttons-item main__load-title_margin",onClick:e.getOneJoke,children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0434\u043d\u0443 \u0448\u0443\u0442\u043a\u0443"}),Object(o.jsx)(j.b,{to:"/favorite",className:"main__buttons-item main__buttons-item_mod",children:"\u041b\u044e\u0431\u0438\u043c\u044b\u0435 \u0448\u0443\u0442\u043a\u0438"})]})]}),e.productsReducer.map((function(t,n){return Object(o.jsx)(u,{jokes:t.jokes,id:t.id,addFavorite:e.addFavorite,productsReducer:e.productsReducer,favoriteJokes:e.favoriteJokes,joke:t,deleteFavorite:e.deleteFavorite},n)}))]})};var f=function(e){var t=e.favoriteJokes.length>0?"main__buttons-item":"main__buttons-item_none",n=e.favoriteJokes.length<1?"main__buttons_width":"main__buttons",a=e.favoriteJokes.length<1?"main__buttons-item_width":"main__buttons-item_mod main__load-title_margin";return Object(o.jsxs)("section",{className:"main main_color",children:[Object(o.jsxs)("div",{className:"".concat(n),children:[Object(o.jsxs)("div",{className:"main__load main__load-title_margin",children:[Object(o.jsx)("h3",{className:"main__load-title",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e \u0448\u0443\u0442\u043e\u043a:"}),Object(o.jsx)("p",{className:"main__load-subtitle",children:Object(o.jsx)("span",{children:Object.keys(e.favoriteJokes).length})})]}),Object(o.jsx)(j.b,{to:"/",className:"main__buttons-item  ".concat(a),children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}),Object(o.jsx)("button",{className:"".concat(t," main__load-title_margin"),onClick:function(){for(var t=0;t<e.favoriteJokes.length;t++)e.deleteFavorite(e.favoriteJokes[t].id)},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"})]}),e.favoriteJokes.map((function(t,n){return Object(o.jsx)(u,{jokes:t.jokes,id:t.id,deleteFavorite:e.deleteFavorite,saveJoke:t,favoriteJokes:e.favoriteJokes},n)}))]})},b="FETCH_PRODUCTS_SUCCESS",h="FETCH_PRODUCTS_ERROR",m="CHANGE_BUTTON",_="ADD_FAVORITE",k="DELETE_FAVORITE",O="ADD_INTERVAL";var p=Object(d.b)((function(e,t){return{ownProps:t,productsReducer:e.productsReducer,intervalId:e.intervalId,changeButton:e.changeButton,favoriteJokes:e.favoriteJokes}}),(function(e){return{fetchProducts:function(){return e({type:"FETCH_PRODUCTS_PENDING"}),fetch("https://api.chucknorris.io/jokes/random",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){if(t.error)throw t.error;e({type:b,payload:t.value})})).catch((function(t){e({type:h,error:t})}))},onAddId:function(t){e({type:O,payload:t})},onChangeButton:function(t){e({type:m,payload:t})},onAddFavorite:function(t){e({type:_,payload:t})},deleteFavorite:function(t){e({type:k,payload:{id:t}})}}}))((function(e){var t,n=e.intervalId.reduce((function(e,t){return e>t?e:t}));return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(s,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",children:Object(o.jsx)(v,{productsReducer:e.productsReducer,favoriteJokes:e.favoriteJokes,startServer:function(){e.fetchProducts(),t=setInterval((function(){return e.fetchProducts()}),3e3),e.onAddId(t),e.onChangeButton(!0)},getOneJoke:function(){e.fetchProducts()},stopServer:function(){clearInterval(n),e.onChangeButton(!1)},changeButton:e.changeButton.changeOn,addFavorite:function(t){e.onAddFavorite({id:t.id,jokes:t.jokes})},deleteFavorite:e.deleteFavorite})}),Object(o.jsx)(l.a,{exact:!0,path:"/favorite",children:Object(o.jsx)(f,{favoriteJokes:e.favoriteJokes,deleteFavorite:e.deleteFavorite})})]})]})})),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),a(e),r(e),i(e)}))},x=n(9),J=n(26),N=n(27),y=n(10),F=JSON.parse(localStorage.getItem("reduxState")),C=function(){return Math.random().toString(36).substr(2,9)},S=[];var R=[0];var T=n(21),E={changeOn:!1};var I=null===F?[]:F;var D=Object(x.combineReducers)({routing:N.routerReducer,productsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return[].concat(Object(y.a)(e),[{id:C(),jokes:t.payload}]);case h:return[].concat(Object(y.a)(e),[{error:t.error}]);default:return e}},intervalId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;return t.type===O?[].concat(Object(y.a)(e),[t.payload]):e},changeButton:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return t.type===m?Object(T.a)(Object(T.a)({},e),{},{changeOn:t.payload}):e},favoriteJokes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.type===_?[].concat(Object(y.a)(e),[t.payload]):t.type===k?e.filter((function(e){return e.id!==t.payload.id})):e}}),B=n(28),P=Object(x.createStore)(D,Object(J.composeWithDevTools)(Object(x.applyMiddleware)(B.a)));P.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(P.getState().favoriteJokes))})),c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(d.a,{store:P,children:Object(o.jsx)(j.a,{children:Object(o.jsx)(p,{})})})}),document.getElementById("root")),g()}},[[46,1,2]]]);
//# sourceMappingURL=main.4a4c76b3.chunk.js.map