(()=>{"use strict";function e(){const e=document.querySelector("#content");e.replaceChildren(""),document.querySelector(".topNav"),document.getElementsByClassName(".logoImg"),document.querySelector(".fa-location-dot"),document.querySelector(".Find a restaurant"),document.querySelector(".mainNav");const t=document.getElementById("menu");document.getElementById("stories"),document.querySelector(".signInWrapper"),document.querySelector(".orderNow").textContent="Order \r\n Now";const n=document.createElement("section");n.className="mainContentContainer",e.appendChild(n);const c=document.createElement("div");c.className="bannerWrapper",n.appendChild(c);const d=document.createElement("img");d.src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/CFA_Icon_CFAOne2_Red_PMS_new.png?h=288&w=288&la=en",d.className="bannerImg",c.appendChild(d);const a=document.createElement("div");a.className="bannerTextWrap",c.appendChild(a);const o=document.createElement("h3");o.textContent="Make every order count",a.appendChild(o);const l=document.createElement("div");l.className="joinTextWrap",a.appendChild(l);const m=document.createElement("h1");m.textContent="Join Chick-fil-A One",l.appendChild(m);const r=document.createElement("i");r.className="fa-regular fa-registered",l.appendChild(r);const i=document.createElement("h1");i.textContent="today",l.appendChild(i);const s=document.createElement("div");s.className="joinToday",c.appendChild(s);const p=document.createElement("p");p.className="joinTodayTextP",p.textContent="Join today",s.appendChild(p);const u=document.createElement("i");u.className="fa-solid fa-angle-right",p.appendChild(u),p.addEventListener("mouseover",(function(){u.style.right="-2px"})),p.addEventListener("mouseout",(function(){u.style.right="0px"}));const C=document.createElement("div");C.className="orderContainer",n.appendChild(C);const h=document.createElement("div");h.className="leftSideContent",C.appendChild(h);const E=document.createElement("h1");E.textContent="Peach";const g=document.createElement("h1");g.textContent="Milkshake";const x=document.createElement("h1");x.textContent="season is here",h.appendChild(E),h.appendChild(g),h.appendChild(x);const w=document.createElement("h4");w.className="inLineShakeText",w.textContent="Peach Milkshake season is here",h.appendChild(w);const f=document.createElement("p");f.textContent="Cool off with this creamy classic",h.appendChild(f);const v=document.createElement("div");v.className="orderButtonsWrap",h.appendChild(v);const N=document.createElement("div");v.appendChild(N);const y=document.createElement("i");y.className="fa-solid fa-utensils",N.appendChild(y);const S=document.createElement("p");S.textContent="Order Pickup",N.appendChild(S);const _=document.createElement("div");v.appendChild(_);const D=document.createElement("i");D.className="fa-solid fa-car-side",_.appendChild(D);const k=document.createElement("p");k.textContent="Order Delivery",_.appendChild(k);const O=document.createElement("div");C.appendChild(O);const b=document.createElement("img");b.src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/1918791242001/6f42cbab-9dd5-453b-ac27-8f11658e157a/7f0d0e79-6c2a-4371-ad98-10b9e5b72801/1280x720/match/image.jpg",b.className="shake",O.appendChild(b);const P=window.matchMedia("(min-width: 980px)"),q=window.matchMedia("(max-width: 979px)");window.addEventListener("load",(e=>{P.matches&&(b.style.transform="translateX(0px)")})),window.addEventListener("mousemove",(function(){q.matches?b.style.transform="translateX(-50%)":b.style.transform="translateX(0px)"}));const B=document.createElement("nav");B.className="menuDropDown",e.appendChild(B);const M=document.createElement("li");M.textContent="Breakfast",B.appendChild(M);const I=document.createElement("li");I.textContent="Entrées",B.appendChild(I);const A=document.createElement("li");A.textContent="Salads",B.appendChild(A);const L=document.createElement("li");L.textContent="Sides",B.appendChild(L);const W=document.createElement("li");W.textContent="Kid's Meals",B.appendChild(W);const F=document.createElement("li");F.textContent="Treats",B.appendChild(F);const T=document.createElement("li");T.textContent="Drinks",B.appendChild(T);const j=document.createElement("li");j.textContent="Dipping Sauces and Dressings",B.appendChild(j);const J=document.createElement("li");J.textContent="Catering",B.appendChild(J);let R=!1;t.addEventListener("mouseover",(function(){B.style.display="flex",R=!0})),document.addEventListener("mouseover",(e=>{"menu"==e.target.id||"menuDropDown"==e.target.className||e.target.closest(".menuDropDown")||"bannerWrapper"==e.target.className||"topNav"==e.target.className||R&&(B.style.display="none",R=!1)}))}function t(){const e=document.querySelector("#content");e.replaceChildren(""),document.querySelector(".topNav"),document.getElementsByClassName(".logoImg"),document.querySelector(".fa-location-dot"),document.querySelector(".Find a restaurant"),document.querySelector(".mainNav");const t=document.getElementById("menu");document.getElementById("stories"),document.querySelector(".signInWrapper"),document.querySelector(".orderNow").textContent="Order \r\n Now";const n=document.createElement("nav");n.className="menuDropDown",e.appendChild(n);const c=document.createElement("li");c.textContent="Breakfast",n.appendChild(c);const d=document.createElement("li");d.textContent="Entrées",n.appendChild(d);const a=document.createElement("li");a.textContent="Salads",n.appendChild(a);const o=document.createElement("li");o.textContent="Sides",n.appendChild(o);const l=document.createElement("li");l.textContent="Kid's Meals",n.appendChild(l);const m=document.createElement("li");m.textContent="Treats",n.appendChild(m);const r=document.createElement("li");r.textContent="Drinks",n.appendChild(r);const i=document.createElement("li");i.textContent="Dipping Sauces and Dressings",n.appendChild(i);const s=document.createElement("li");s.textContent="Catering",n.appendChild(s);let p=!1;t.addEventListener("mouseover",(function(){n.style.display="flex",p=!0})),document.addEventListener("mouseover",(e=>{"menu"==e.target.id||"menuDropDown"==e.target.className||e.target.closest(".menuDropDown")||"bannerWrapper"==e.target.className||"topNav"==e.target.className||p&&(n.style.display="none",p=!1)}));const u=document.createElement("div");u.className="getStartedBanner",e.appendChild(u);const C=document.createElement("h1");C.textContent="What kind of order can we get started for you?",u.appendChild(C);const h=document.createElement("div");h.className="pickupDeliveryCateringWrap",u.appendChild(h);const E=document.createElement("div");h.appendChild(E);const g=document.createElement("i");g.className="fa-solid fa-store",E.appendChild(g);const x=document.createElement("p");x.textContent="Order\n Pickup",E.appendChild(x);const w=document.createElement("div");h.appendChild(w);const f=document.createElement("i");f.className="fa-solid fa-car",w.appendChild(f);const v=document.createElement("p");v.textContent="Order \n Delivery",w.appendChild(v);const N=document.createElement("div");h.appendChild(N);const y=document.createElement("i");y.className="fa-solid fa-bell-concierge",N.appendChild(y);const S=document.createElement("p");S.textContent="Order \n Catering",N.appendChild(S);const _=document.createElement("div");e.appendChild(_),_.className="menuBanner";const D=document.createElement("div");D.className="menuTitleWrap",_.appendChild(D);const k=document.createElement("h1");k.textContent="Chick-fil-A",D.appendChild(k);const O=document.createElement("i");O.className="fa-regular fa-registered",O.id="registered",D.appendChild(O);const b=document.createElement("h1");b.textContent="Menu",D.appendChild(b);const P=document.createElement("p");_.appendChild(P),P.textContent="Availability may differ at different locations.";const q=document.createElement("div");q.className="entreeBar",e.appendChild(q);const B=document.createElement("img");B.className="entreeBarImg",B.src="https://www.cfacdn.com/img/order/menu/Online/Entrees/Jul19_CFASandwich_pdp.png",q.appendChild(B);const M=document.createElement("p");M.textContent="Entrées",q.appendChild(M);const I=document.createElement("i");I.className="fa-solid fa-chevron-up",q.appendChild(I);const A=document.createElement("section");e.appendChild(A),A.className="menuPageContentWrap";const L=document.createElement("div");A.appendChild(L),L.className="rowOne";const W=document.createElement("div");L.appendChild(W);const F=document.createElement("div");F.className="imgContainer",W.appendChild(F);const T=document.createElement("img");T.src="https://www.cfacdn.com/img/order/menu/Online/Entrees/Jul19_CFASandwich_pdp.png",F.appendChild(T);const j=document.createElement("h1");j.textContent="Chick-fil-A Chicken Sandwich",W.appendChild(j);const J=document.createElement("p");J.textContent="440 Cal per Sandwich",W.appendChild(J);const R=document.createElement("button");R.textContent="Order now",W.appendChild(R);const G=document.createElement("div");L.appendChild(G);const X=document.createElement("div");X.className="imgContainer",G.appendChild(X);const z=document.createElement("img");z.src="https://www.cfacdn.com/img/order/COM/Menu_Refresh/Entree/Entree%20PDP/_0000s_0004_NEWStack6200001CFAPDPDeluxeSandwich1085png.png",X.appendChild(z);const K=document.createElement("h1");K.textContent="Chick-fil-A Deluxe Sandwich",G.appendChild(K);const H=document.createElement("p");H.textContent="500 Cal per Sandwich",G.appendChild(H);const Q=document.createElement("button");Q.textContent="Order now",G.appendChild(Q);const U=document.createElement("div");L.appendChild(U);const V=document.createElement("div");V.className="imgContainer",U.appendChild(V);const Y=document.createElement("img");Y.src="https://www.cfacdn.com/img/order/menu/Online/Entrees/CFASpicySandwich_1080.png",V.appendChild(Y);const Z=document.createElement("h1");Z.textContent="Spicy Chicken Sandwich",U.appendChild(Z);const $=document.createElement("p");$.textContent="460 Cal per Sandwich",U.appendChild($);const ee=document.createElement("button");ee.textContent="Order now",U.appendChild(ee);const te=document.createElement("div");A.appendChild(te),te.className="rowOne";const ne=document.createElement("div");te.appendChild(ne);const ce=document.createElement("div");ce.className="imgContainer",ne.appendChild(ce);const de=document.createElement("img");de.src="https://www.cfacdn.com/img/order/COM/Menu_Refresh/Entree/Entree%20Desktop/_0003s_0012_%5BFeed%5D_0001s_0023_Entrees_Spicy-Deluxe-Sandwich.png",ce.appendChild(de);const ae=document.createElement("h1");ae.textContent="Spicy Deluxe Sandwich",ne.appendChild(ae);const oe=document.createElement("p");oe.textContent="550 Cal per Sandwich",ne.appendChild(oe);const le=document.createElement("button");le.textContent="Order now",ne.appendChild(le);const me=document.createElement("div");te.appendChild(me);const re=document.createElement("div");re.className="imgContainer",me.appendChild(re);const ie=document.createElement("img");ie.src="https://www.cfacdn.com/img/order/COM/Menu_Refresh/Entree/Entree%20PDP/_0000s_0009_Final__0026_CFA_PDP_Grilled-Deluxe-Sandwich_1085.png",re.appendChild(ie);const se=document.createElement("h1");se.textContent="Grilled Chicken Sandwich",me.appendChild(se);const pe=document.createElement("p");pe.textContent="380 Cal per Sandwich",me.appendChild(pe);const ue=document.createElement("button");ue.textContent="Order now",me.appendChild(ue);const Ce=document.createElement("div");te.appendChild(Ce);const he=document.createElement("div");he.className="imgContainer",Ce.appendChild(he);const Ee=document.createElement("img");Ee.src="https://www.cfacdn.com/img/order/menu/Online/Entrees/grilledClub_colbyJack_PDP.png",he.appendChild(Ee);const ge=document.createElement("h1");ge.textContent="Chic-fil-A Grilled Chicken Club Sandwich",Ce.appendChild(ge);const xe=document.createElement("p");xe.textContent="520 Cal per Sandwich",Ce.appendChild(xe);const we=document.createElement("button");we.textContent="Order now",Ce.appendChild(we)}e(),document.querySelector(".logoImg").addEventListener("click",e),document.getElementById("menu").addEventListener("click",t),document.getElementById("stories").addEventListener("click",(function(){document.querySelector("#content").replaceChildren("")})),document.querySelector(".fa-bars").addEventListener("click",t)})();