(this["webpackJsonphotel-page"]=this["webpackJsonphotel-page"]||[]).push([[0],{18:function(e,n,t){e.exports=t(28)},23:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(12),o=t.n(i),c=(t(23),t(24),t(13)),l=t(6),s=t(1),d=t(3);function m(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  height: 1rem;\n  \n  p {\n    margin-right: 10px;\n  }\n  select {\n    border-radius: 5px;\n    border: 1px solid ",";\n    padding: 0.25rem 0.5rem;\n    color: ",";\n    background-color: rgba(255,105,15,0.5)\n  }\n"]);return m=function(){return e},e}var u=d.a.div(m(),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.white})),p=function(e){var n=e.handleCurrencyChange,t=e.currency;return a.a.createElement(u,null,a.a.createElement("p",null,"Currency"),a.a.createElement("select",{name:"currency",id:"currency",form:"currencyForm",onChange:n,value:t,"data-testid":"currency"},a.a.createElement("option",{value:"USD","data-testid":"usd"},"USD"),a.a.createElement("option",{value:"SGD","data-testid":"sgd"},"SGD"),a.a.createElement("option",{value:"CNY","data-testid":"cny"},"CNY"),a.a.createElement("option",{value:"KRW","data-testid":"krw"},"KRW")))};function f(){var e=Object(s.a)(["\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 50px;\n  display: flex;\n  align-items: center;\n  .img {\n    display: flex;\n    align-items: center;\n    img{\n      height: 40px;\n      width: 40px;\n      margin-right: 10px;\n    }\n  }\n"]);return f=function(){return e},e}function g(){var e=Object(s.a)(["\n  height: 62px;\n  color: ",";\n  background-color: ",";\n  display: flex;\n  font-size: 1rem;\n  padding: 0 2rem;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 999;\n"]);return g=function(){return e},e}var h=d.a.div(g(),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.main_color})),_=d.a.div(f()),x=function(e){var n=e.handleCurrencyChange;return a.a.createElement(h,null,a.a.createElement(_,null,a.a.createElement("div",{className:"img","data-testid":"logo"},a.a.createElement("img",{src:"https://tsungtingdu.github.io/hotel-page/assets/hotel.png",alt:""})),a.a.createElement("div",{"data-testid":"title"},"Your Hotel.com")),a.a.createElement(p,{handleCurrencyChange:n,currency:e.currency}))};function b(){var e=Object(s.a)(["\n  width: 100%;\n  height: 50vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  font-weight: 800;\n  padding: 2rem;\n  color: ",";\n  text-align: center;\n"]);return b=function(){return e},e}function v(){var e=Object(s.a)(["\n  width: 850px;\n  height: 250px;\n  border-radius: 8px;\n  border: 1px solid transparent;\n  box-shadow: 0 0 2px 0 rgba(19,26,31,0.12),0 2px 4px 0 rgba(19,26,31,0.22);\n  margin-bottom: 2rem;\n  display: flex;\n  position: relative;\n\n  .img{\n    img{\n      width: 250px;\n      height: 250px;\n      border-bottom-left-radius: 8px;\n      border-top-left-radius: 8px;\n      object-fit: cover;\n      object-position: 50% 50%;\n    }\n  }\n\n  .description {\n    height: 250px;\n    width: calc(106%);\n    top: 0;\n    left: 0;\n    position: absolute;\n    padding: 0.75rem;\n    background-color: ",";\n    z-index: 200;\n    overflow-y: auto;\n\n    &__text {\n      flex: 0 0 95%;\n      font-size: 0.75rem;\n      padding-right: 0.25rem;\n      font-weight: 400;\n    }\n\n    &__button {\n      flex: 0 0 5%;\n      height: 1.5rem;\n      line-height: 1.5rem;\n      font-size: 0.8rem;\n      color: ",";\n      border-radius: 8px;\n      margin: 0 auto;\n      padding-left: 0.25rem;\n      font-weight: 1000px;\n      text-align: center;\n      cursor: pointer;\n    }\n  }\n\n  .info {\n    padding: 1rem 2rem;\n    width: 400px;\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n    position: relative;\n\n    &__main {\n      &__name {\n        font-size: 1.5rem;\n        font-weight: 600;\n      }\n\n      &__address {\n        font-size: 0.75em;\n        padding: 0.5rem 0;\n        word-wrap: normal;\n      }\n\n      &__stars {\n        color:  ",";\n      }\n    }\n\n    &__bottomWrapper {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-top: auto;\n      margin-bottom: 0.5rem;\n\n      &__rating {\n        color: #ffffff;\n        width: 30px;\n        height: 30px;\n        line-height: 30px;\n        font-weight: 600;\n        text-align: center;\n        background-color: ",";\n        border-radius: 8px;\n      }\n\n      &__more {\n        display: flex;\n        align-items: flex-end;\n        height: 100%;\n        color:  ",";\n        font-size: 0.8rem;\n        font-style: italic;\n        cursor: pointer;\n      }\n    }\n\n    &__competitors{\n      width: 100%;\n      align-items: flex-end;\n      display: flex;\n      justify-content: flex-start;\n      overflow-y: hidden;\n      overflow-x: auto;\n      border-top: 1px solid ",";\n      padding-top: 10px;\n\n      &__item {\n        height: 45px;\n        padding: 0 1rem;\n        font-size: 0.7rem;\n        line-height: 0.7rem;\n        display: flex;\n        flex-flow: column;\n        justify-content: center;\n        align-items: center;\n        white-space: nowrap;\n\n        .name {\n          font-weight: 800;\n          margin-bottom: -0.5rem;\n        }\n      }\n\n      &__item.highlight {\n        border-radius: 5px;\n        color: ",";\n        background-color: ",";\n        }\n    }\n  }\n\n  .deal{\n    display: flex;\n    flex-flow: column-reverse;\n    margin: 1rem auto;\n    position: relative;\n    border-left: 1px solid ",";\n    padding-left: 1rem;\n\n    &__price {\n      font-weight: 750;\n      font-size: 1.25rem;\n\n      &__tax {\n        display: flex;\n        flex-flow: column;\n        justify-content: flex-start;\n        height: 15px;\n        font-weight: 400;\n        font-size: 0.8rem;\n        line-height:  0.8rem;\n        margin: -0.5rem 0 1rem;\n\n        p {\n          border-bottom: 1px dotted ",";\n        }\n      }\n    }\n\n    &__button {\n      color:  ",";\n      background-color:  ",";\n      border-radius: 2px;\n      width: 120px;\n      height: 35px;\n      line-height: 35px;\n      font-weight: 600;\n      text-align: center;\n      margin-top: 0.6rem;\n      box-shadow: 0 0 2px 0 rgba(19,26,31,0.12),0 2px 4px 0 rgba(19,26,31,0.22);\n    }\n\n    &__button.cursor{\n      cursor: pointer;\n      background-color: ",";\n      &:hover {\n        transform: scale(1.05);\n      }\n    }\n\n    &__savedCost {\n      color: ",";\n      font-size: 0.8rem;\n      line-height: 0.8rem;\n      margin: 0.5rem 0;\n\n      &--highlight {\n        font-weight: 800;\n      }\n\n      &--strikethrough {\n        font-style: italic;\n        text-decoration: line-through;\n        font-weight: 400;\n        margin-right: 1rem;\n      }\n    }\n  }\n\n  .tooltip {\n    position: relative;\n    display: inline-block;\n    cursor: pointer;\n  }\n\n  .tooltip {\n    .tooltiptext {\n      visibility: hidden;\n      display: flex;\n      flex-flow: column;\n      justify-content: flex-start;\n      align-items: flex-start;\n      width: 150px;\n      background-color: ",";\n      border: 1px solid ",";\n      border-radius: 5px;\n      text-align: center;\n      border-radius: 6px;\n      padding: 0.5rem;\n      font-size: 0.8rem;\n      \n      position: absolute;\n      transform: translate(-105%, -100%);\n      z-index: 1;\n\n      p {\n        line-height: 0px;\n        font-weight: 600;\n      }\n    }\n  }\n\n  .tooltip:hover .tooltiptext {\n    visibility: visible;\n  }\n"]);return v=function(){return e},e}function y(){var e=Object(s.a)(["\n  padding: 7rem 0 5rem;\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n"]);return y=function(){return e},e}var w=d.a.div(y()),E=d.a.div(v(),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.dark_blue}),(function(e){return e.theme.colors.dark_yellow}),(function(e){return e.theme.colors.dark_blue}),(function(e){return e.theme.colors.dark_blue}),(function(e){return e.theme.colors.bg_grey}),(function(e){return e.theme.colors.dark_green}),(function(e){return e.theme.colors.bg_green}),(function(e){return e.theme.colors.bg_grey}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.dark_grey}),(function(e){return e.theme.colors.main_color}),(function(e){return e.theme.colors.dark_red}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.dark_yellow})),k=d.a.div(b(),(function(e){return e.theme.colors.bg_grey})),N=function(e){var n=e.hoteldata,t=n.isLoading,r=n.data,i=n.currency,o=r,c=function(e){var n=Number(e.target.id),t=e.target.nextSibling,r=Object(l.a)(e.target.nextSibling.children,2),a=r[0],i=r[1],c=o.filter((function(e){return e.id===n}));c=c[0].description.replace(/<br>/g,""),a.innerHTML=c,t.classList.remove("d-none"),i.addEventListener("click",(function(){t.scrollTop=0,a.innerHTML="",t.classList.add("d-none")}))};return a.a.createElement(w,null,o.length>0&&!t?o.map((function(e){return a.a.createElement(E,{key:e.id},a.a.createElement("div",{className:"img"},a.a.createElement("img",{src:e.photo,alt:""})),a.a.createElement("div",{className:"info"},a.a.createElement("div",{className:"info__main"},a.a.createElement("div",{className:"info__main__name","data-testid":"name"},e.name),a.a.createElement("div",{className:"info__main__address","data-testid":"address"},e.address),e.stars||0===e.stars?a.a.createElement("div",{className:"info__main__stars","data-testid":"stars"},function(e){e=Math.round(e);for(var n="",t=0;t<e;t++)n+="\u2605";return n}(e.stars)):""),a.a.createElement("div",{className:"info__bottomWrapper"},e.rating||0===e.rating?a.a.createElement("div",{className:"info__bottomWrapper__rating","data-testid":"rating"},e.rating):"",a.a.createElement("div",{className:"info__bottomWrapper__more",onClick:c,id:e.id,"data-testid":"more"},"see more"),a.a.createElement("div",{className:"description d-none"},a.a.createElement("div",{className:"description__text","data-testid":"description"}),a.a.createElement("div",{className:"description__button","data-testid":"description-btn"},"back"))),a.a.createElement("div",{className:"info__competitors"},e.price&&e.price.competitionSet.length>1&&e.price.savedCost>0?e.price.competitionSet.map((function(e){return"Our Price"===e.name?a.a.createElement("div",{className:"info__competitors__item highlight",key:e.name},a.a.createElement("p",{className:"name"},e.name),a.a.createElement("p",{className:"price"},Math.round(e.price).toLocaleString())):a.a.createElement("div",{className:"info__competitors__item",key:e.name},a.a.createElement("p",{className:"name"},e.name),a.a.createElement("p",{className:"price"},Math.round(e.price).toLocaleString()))})):"")),a.a.createElement("div",{className:"deal","data-testid":"deal"},e.price?a.a.createElement("div",{className:"deal__button cursor","data-testid":"cta-btn"},"Book now!"):a.a.createElement("div",{className:"deal__button"},"Unavailable"),a.a.createElement("div",{className:"deal__price"},a.a.createElement("div",{className:"tooltip"},e.price?a.a.createElement("span",{"data-testid":"price"},function(e,n){return n=Math.round(n),["KRW","JPY","IDR"].includes(e)&&(n=n.toLocaleString()),"".concat(e," ").concat(n)}(i,e.price.price)):"",e.price&&e.price.taxes_and_fees?a.a.createElement("div",{className:"deal__price__tax","data-testid":"tax-included-msg"},a.a.createElement("p",null,"*tax-inclusive")):"",e.price&&e.price.taxes_and_fees?a.a.createElement("span",{className:"tooltiptext"},a.a.createElement("p",{className:"fees","data-testid":"tax"},e.price.taxes_and_fees.tax?"tax: $".concat(e.price.taxes_and_fees.tax):""),a.a.createElement("p",{className:"fees","data-testid":"hotel-fee"},e.price.taxes_and_fees.hotel_fees?"hotel fees: $".concat(e.price.taxes_and_fees.hotel_fees):"")):"")),e.price&&e.price.savedCost>0?a.a.createElement("div",{className:"deal__savedCost"},a.a.createElement("span",{className:"deal__savedCost--strikethrough","data-testid":"expensive-price"},"$",Math.round(e.price.savedCost+e.price.price).toLocaleString()),a.a.createElement("span",{className:"deal__savedCost--highlight","data-testid":"saved-percentage"},"Save ",(100*e.price.savedCost/e.price.price).toFixed(1),"% !")):""))})):t?a.a.createElement(k,null,"Loading..."):a.a.createElement(k,null,"Sorry, no result for this search."))},C=t(10),j=t.n(C),S=t(17),O=function(e){return fetch("https://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo/1/".concat(e)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return[]}))},z=function(e){var n=Object(r.useState)({isLoading:!0,currency:e,data:[]}),t=Object(l.a)(n,2),a=t[0],i=t[1],o=Object(r.useCallback)(Object(S.a)(j.a.mark((function n(){var t,r,a,o,c;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo").then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return[]}));case 2:return t=n.sent,n.next=5,O(e);case 5:r=n.sent,t.length>0?(a={},r.forEach((function(e){var n=[{name:"Our Price",price:e.price}];if(e.competitors)for(var t in e.competitors){var r={name:t,price:e.competitors[t]};n.push(r)}n.sort((function(e,n){return e.price-n.price})),e.competitionSet=n;var i=n[n.length-1].price-e.price;e.savedCost=i,a[e.id]=e})),t.map((function(e){return e.price=a[e.id],e})),o=[],c=[],t.forEach((function(e){e.price?c.push(e):o.push(e)})),c.sort((function(e,n){return n.price.savedCost-e.price.savedCost})),c=c.concat(o),i({isLoading:!1,currency:e,data:c})):i({isLoading:!1,currency:e,data:[]});case 7:case"end":return n.stop()}}),n)}))),[e]);return Object(r.useEffect)((function(){o()}),[o]),[a,o]},L=function(){var e=Object(r.useState)(window.localStorage.getItem("hotelPageCurrency")?window.localStorage.getItem("hotelPageCurrency"):"USD"),n=Object(l.a)(e,2),t=n[0],i=n[1],o=z(t),c=Object(l.a)(o,2),s=c[0],d=c[1];return Object(r.useEffect)((function(){i(window.localStorage.getItem("hotelPageCurrency")?window.localStorage.getItem("hotelPageCurrency"):"USD"),d(t)}),[]),a.a.createElement(r.Fragment,null,a.a.createElement(x,{handleCurrencyChange:function(e){i(e.target.value),window.localStorage.setItem("hotelPageCurrency",e.target.value)},currency:t}),a.a.createElement(N,{hoteldata:s}))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,{theme:{colors:{main_color:"#ff690f",black:"#000000",white:"#ffffff",dark_blue:"#003580",dark_yellow:"#feba02",dark_green:"#008009",dark_grey:"#333333",dark_red:"#bf323b",bg_green:"rgba(0,128,9,0.05)",bg_grey:"rgba(200, 200, 200, 0.5)"}}},a.a.createElement(L,null))),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.92a20300.chunk.js.map