(()=>{"use strict";var e={817:(e,t,n)=>{n.r(t)},977:(e,t,n)=>{n.r(t)},337:(e,t,n)=>{n.r(t)},424:(e,t,n)=>{n.r(t)},948:(e,t,n)=>{n.r(t)},373:(e,t,n)=>{n.r(t)},752:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const i=n(0),s=n(366),a=n(583),o=n(754);t.App=class{constructor(){var e;if(this.bodyElement=Array.from(document.getElementsByTagName("body")).shift(),!this.bodyElement)throw Error("App body element not found");this.bodyElement.classList.add("body","unselectable"),this.bodyElement.ondragstart=()=>!1,this.bodyElement.ondrop=()=>!1,this.wrapper=document.createElement("div"),this.wrapper.classList.add("wrapper"),this.slider=document.createElement("div"),this.slider.classList.add("slider"),this.prev=document.createElement("div"),this.next=document.createElement("div"),this.prev.classList.add("arrow","prev","arrow-hidden"),this.next.classList.add("arrow","next");const t=document.createElement("div"),n=document.createElement("div");t.classList.add("container","front-page"),n.classList.add("container","back-page"),this.pages=[t,n];const l=new s.Header,c=new a.Main,d=new i.Footer;t.append(l.element,c.element),n.append(d.element),this.pages.forEach((e=>this.slider.append(e))),this.wrapper.append(this.prev,this.slider,this.next),null===(e=this.bodyElement)||void 0===e||e.append(this.wrapper),this.inputMoveModel=new o.InputMoveModel,this.addListeners(c,d)}addListeners(e,t){this.prev.onclick=()=>{this.prev.classList.add("arrow-hidden"),this.next.classList.remove("arrow-hidden"),this.slider.scrollLeft=-this.slider.offsetWidth-1},this.next.onclick=()=>{this.next.classList.add("arrow-hidden"),this.prev.classList.remove("arrow-hidden"),this.slider.scrollBy(this.slider.offsetWidth+1,0)},e.asideParts.forEach((e=>e.getInputs().forEach((e=>e.getToogle().addEventListener("mousedown",(e=>this.inputMoveModel.startMove(e))))))),t.asideParts.forEach((e=>e.getInputs().forEach((e=>e.getToogle().addEventListener("mousedown",(e=>this.inputMoveModel.startMove(e))))))),document.onmouseup=()=>this.inputMoveModel.reset(),document.onmousemove=e=>this.inputMoveModel.move(e),window.onresize=e=>this.prev.dispatchEvent(new Event("click"))}}},619:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AsidePart=void 0;const i=n(829),s=n(229);t.AsidePart=class{constructor(e="",t=[]){this.element=document.createElement("section"),e?e===i.C.TITLES.contacts?(this.element.classList.add("contacts-container"),this.element.innerHTML=`\n        <h3>${e}</h3>\n        <div class="contacts with-border">\n          <div class="contacts__icon phone"></div>\n          <div>\n            <p class="contacts__title">phone</p>\n            <p class="contacts__text"><a href="tel:+380689815510">+38 (068) 981 55 10</a></p>\n          </div>\n        </div>\n        <div class="contacts">\n          <div class="contacts__icon email"></div>\n          <div>\n            <p class="contacts__title">email</p>\n            <p class="contacts__text"><a href="mailto:mariacherkez@gmail.com">mariacherkez@gmail.com</a></p>\n          </div>\n        </div>`):e===i.C.TITLES.experience?(this.element.classList.add("experience"),this.element.innerHTML=` \n        <h3>${e}</h3>\n        <div class="experience__container">\n        <p class="experience__title">freelance</p>\n        <div class="experience__period">01.2018 / now</div>\n        </div>\n        <p class="experience__name">Designer, HTML/CSS-coder, Webmaster</p>\n        <p class="experience__text">Website design development, landing pages creation, \n        responsive HTML coding, customization Wordpress etc.</p>\n    `):e===i.C.TITLES.languages?(this.element.classList.add("languages"),this.element.innerHTML=` \n        <h3>${e}</h3>\n        <div class="languages-box">\n          <p>English...........................................................................</p><span>B1</span>\n          <p>Russian..........................................................................</p><span>C2</span>\n          <p>Ukrainian........................................................................</p><span>C2</span>\n        </div> \n    `):e===i.C.TITLES.hobbies?(this.element.classList.add("hobbies-container"),this.element.innerHTML=` <h3>${e}</h3>\n      <div class="hobbies with-border">\n        <div class="hobbies__icon-container">\n          <div class="hobbies__icon plane-ticket">\n            <div class="hobbies__tooltip">travels</div>\n          </div>\n        </div>\n        <div class="hobbies__icon-container">\n          <div class="hobbies__icon science">\n            <div class="hobbies__tooltip">education</div>\n          </div>\n        </div>\n        <div class="hobbies__icon-container">\n          <div class="hobbies__icon cooking">\n            <div class="hobbies__tooltip">cooking</div>\n          </div>\n        </div>\n        <div class="hobbies__icon-container">\n          <div class="hobbies__icon sports">\n            <div class="hobbies__tooltip">activity</div>\n          </div>\n        </div>\n      </div>\n      <div class="hobbies">\n        <div class="hobbies__icon-container">\n          <div class="hobbies__icon yoga">\n            <div class="hobbies__tooltip">yoga</div>\n          </div>\n        </div>\n        <div class="hobbies__icon-container">\n          <div class="hobbies__icon development">\n            <div class="hobbies__tooltip">development</div>\n          </div>\n        </div>\n        <div class="hobbies__icon-container">\n          <div class="hobbies__icon hands">\n            <div class="hobbies__tooltip">driving</div>\n          </div>\n        </div>\n        <div class="hobbies__icon-container">\n          <div class="hobbies__icon sport">\n            <div class="hobbies__tooltip">sport</div>\n          </div>\n        </div>\n      </div>`):(e===i.C.TITLES.softSkills?this.element.classList.add("soft-skills"):this.element.classList.add("hard-skills"),this.element.innerHTML=`<h3>${e}</h3>`,t.length>0&&(this.inputs=[],t.forEach((e=>{var t;return null===(t=this.inputs)||void 0===t?void 0:t.push(new s.InputRange(e))})),this.inputs.forEach((e=>this.element.append(e.element))))):(this.element.classList.add("photo-container"),this.element.innerHTML='\n      <div class="photo">\n        <div class="photo__img"></div>\n        <div class="photo__caption">Ukraine, Kiev</div>\n      </div>')}getInputs(){var e;return null!==(e=this.inputs)&&void 0!==e?e:[]}}},0:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=void 0;const i=n(619),s=n(218),a=n(829);n(424),n(337),n(977),n(817),t.Footer=class{constructor(){this.element=document.createElement("footer"),this.element.classList.add("footer"),this.element.innerHTML='\n    <div class="footer-row">\n    <div class="aside"></div>\n    <div class="content-container"></div>\n    </div>\n    <div class="footer-row">\n    <div class="aside"></div>\n    <div class="content-container"></div>\n    </div>\n    ',this.asideParts=[new i.AsidePart(a.C.TITLES.softSkills,a.C.SOFT_SKILLS),new i.AsidePart(a.C.TITLES.hobbies)],this.parts=[new s.MainPart(a.C.TITLES.education),new s.MainPart(a.C.TITLES.followMe)],Array.from(this.element.getElementsByClassName("aside")).forEach(((e,t)=>{e.append(this.asideParts[t].element)})),Array.from(this.element.getElementsByClassName("content-container")).forEach(((e,t)=>e.append(this.parts[t].element)))}}},366:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;const i=n(619),s=n(218);n(977),n(817),n(424),n(337);const a=n(829);t.Header=class{constructor(){this.element=document.createElement("header"),this.element.classList.add("header"),this.element.innerHTML='\n    <div class="header-row">\n    <div class="aside"></div>\n    <div class="content-container"></div>\n    </div>\n    <div class="header-row">\n    <div class="aside"></div>\n    <div class="content-container"></div>\n    </div>\n    ',this.asideParts=[new i.AsidePart(a.C.TITLES.contacts),new i.AsidePart],this.parts=[new s.MainPart(a.C.TITLES.title),new s.MainPart(a.C.TITLES.profile)],Array.from(this.element.getElementsByClassName("aside")).forEach(((e,t)=>{e.append(this.asideParts[t].element)})),Array.from(this.element.getElementsByClassName("content-container")).forEach(((e,t)=>e.append(this.parts[t].element)))}}},229:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InputRange=void 0,t.InputRange=class{constructor(e){this.element=document.createElement("div"),this.element.classList.add("skill-box"),this.element.innerHTML=`\n    <p class="skill-box__title">${e[0]}</p>\n    <div class="skill-box__scale">\n     <div class="skill-box__scale-fill-path" style="width: ${e[1]}%"></div>\n     <div class="skill-box__scale-toggle"></div>\n     <div class="skill-box__scale-empty-path" style="width: ${100-parseInt(e[1].toString(),10)}%"></div>\n    </div>\n  `}getToogle(){return this.element.getElementsByClassName("skill-box__scale-toggle")[0]}}},218:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MainPart=void 0;const i=n(829);t.MainPart=class{constructor(e){this.element=document.createElement("section"),e===i.C.TITLES.profile?(this.element.classList.add("profile"),this.element.innerHTML=`\n      <h3 class="profile__title">${e}</h3>\n      <div class="profile__text content-box">My name is Maria and my passion \n      is to create beautiful and functional front-end websites using modern technologies.\n      I am currently learning React.\n      I want to develop my skills in a company of like-minded people and implement interesting projects.\n      So, I am looking for a junior position of Front End developer.\n      </div>`):e===i.C.TITLES.title?(this.element.classList.add("title"),this.element.innerHTML='\n      <h1 class="h1">Mariia Cherkez</h1>\n      <h2 class="h2">Junior Front End Developer</h2> '):e===i.C.TITLES.followMe?(this.element.classList.add("follow"),this.element.innerHTML=`\n      <h3>${e}</h3>\n      <div class="follow-container">\n        <div class="follow-container__follow">\n          <div class="follow-container__icon facebook"></div>\n          <div>\n            <p class="follow-container__title">facebook</p>\n            <p class="follow-container__text">\n            <a href="https://www.facebook.com/maria.cherkez/" target="_blank">/maria.cherkez</a></p>\n          </div>\n        </div>\n        <div class="follow-container__follow">\n          <div class="follow-container__icon linkedin"></div>\n          <div>\n            <p class="follow-container__title">linkedin</p>\n            <p class="follow-container__text">\n            <a href="https://www.linkedin.com/in/maria-cherkez/" target="_blank">/maria-cherkez</a></p>\n          </div>\n        </div>\n        <div class="follow-container__follow">\n          <div class="follow-container__icon github"></div>\n          <div>\n            <p class="follow-container__title">github</p>\n            <p class="follow-container__text">\n            <a href="https://github.com/MariaCherkez" target="_blank">/MariaCherkez</a></p>\n          </div>\n        </div>\n        <div class="follow-container__follow">\n          <div class="follow-container__icon codewars"></div>\n          <div>\n            <p class="follow-container__title">codewars</p>\n            <p class="follow-container__text">\n            <a href="https://www.codewars.com/users/MarChe" target="_blank">/MarChe</a></p>\n          </div>\n        </div>\n      </div>\n `):e===i.C.TITLES.education?(this.element.classList.add("education"),this.element.innerHTML=`\n      <h3>${e}</h3> \n      <div class="content-box">\n        <div class="content-box__title">\n          <div>\n            <p class="content-box__name">js / front-end developer</p>\n            <p class="content-box__position">\n            <a href="https://rs.school/" target="_blank">RS School <span> | </span>Online </a></p>\n          </div>\n          <div class="content-box__period">03.2021 / now</div>\n        </div>\n      </div>\n      <div class="content-box">\n        <div class="content-box__title">\n          <div>\n            <p class="content-box__name">java developer</p>\n            <p class="content-box__position">\n            <a href="https://kiev.itstep.org/" target="_blank">IT Step <span> | </span> Kiev </a></p>\n          </div>\n          <div class="content-box__period">02.2019 / 02.2020 </div>\n        </div>\n      </div>\n      <div class="content-box">\n      <div class="content-box__title">\n        <div>\n          <p class="content-box__name">software developer</p>\n          <p class="content-box__position">\n          <a href="https://kiev.itstep.org/" target="_blank">IT Step <span> | </span> Kiev </a></p>\n        </div>\n        <div class="content-box__period">04.2016 / 02.2017 </div>\n      </div>\n    </div>\n    <div class="content-box">\n    <div class="content-box__title">\n      <div>\n        <p class="content-box__name">management</p>\n        <p class="content-box__position">\n        <a href="https://kneu.edu.ua/en/" target="_blank">\n        Kiev National Economic University <span> | </span> Kiev </a></p>\n      </div>\n      <div class="content-box__period">09.2008 / 05.2013 </div>\n    </div>\n  </div>\n      `):e===i.C.TITLES.employment&&(this.element.classList.add("employment"),this.element.innerHTML=`\n      <h3>${e}</h3>\n      <div class="content-box">\n        <div class="content-box__title">\n          <div>\n            <p class="content-box__name">English for kids</p>\n            <p class="content-box__position">\n              <a href="https://english-for-kids-s1e1.netlify.app/" target="_blank">\n              https://english-for-kids-s1e1.netlify.app\n              </a>\n            </p>\n          </div>\n        </div>\n        <p class="content-box__text">HTML, CSS, TypeScript, SASS, \n        WebPack, IndexedDb, Adaptive design, CSS Animations, Single page application (SPA)</p>\n      </div>\n\n      <div class="content-box">\n      <div class="content-box__title">\n        <div>\n          <p class="content-box__name">Match Match Game</p>\n          <p class="content-box__position">\n            <a href="https://rolling-scopes-school.github.io/mariacherkez-JSFE2021Q1/match-match/" target="_blank">\n            https://rolling-scopes-school.github.io/mariacherkez-JSFE2021Q1/match-match\n            </a>\n          </p>\n        </div>\n      </div>\n      <p class="content-box__text">HTML, CSS, TypeScript, SASS, WebPack, \n          IndexedDb, CSS Animations, Single page application (SPA)\n      </p>\n    </div>\n\n    <div class="content-box">\n    <div class="content-box__title">\n      <div>\n        <p class="content-box__name">Async Race</p>\n        <p class="content-box__position">\n        <a href="https://rolling-scopes-school.github.io/mariacherkez-JSFE2021Q1/async-race-build/" target="_blank">\n        https://rolling-scopes-school.github.io/mariacherkez-JSFE2021Q1/async-race-build/\n        </a> \n        </p>\n      </div>\n    </div>\n    <p class="content-box__text">Work with API \n    (<a href="https://github.com/mikhama/async-race-api" target="_blank">\n    https://github.com/mikhama/async-race-api</a>), \n        TypeScript,  WebPack, CSS, HTML, SASS \n    </p>\n  </div>\n\n\n  <div class="content-box">\n  <div class="content-box__title">\n    <div>\n      <p class="content-box__name">website piratmag</p>\n      <p class="content-box__position">\n        <a href="https://piratmag.net/" target="_blank">https://piratmag.net/</a>\n      </p>\n    </div>\n  </div>\n  <p class="content-box__text">HTML, CSS, Adaptive design, JavaScript</p>\n</div>\n\n\n  <div class="content-box">\n  <div class="content-box__title">\n    <div>\n      <p class="content-box__name">photo filter</p>\n      <p class="content-box__position">\n        <a href="  https://mariacherkez.github.io/photo-filter/photo-filter/" target="_blank">  \n        https://mariacherkez.github.io/photo-filter/photo-filter/\n        </a>\n      </p>\n    </div>\n  </div>\n  <p class="content-box__text">HTML, CSS, JavaScript</p>\n</div>\n<div class="content-box">\n<div class="content-box__title">\n  <div>\n    <p class="content-box__name">website Online Zoo</p>\n    <p class="content-box__position">\n    <a href="https://rolling-scopes-school.github.io/mariacherkez-JSFE2021Q1/online-zoo-v1" target="_blank">\n    https://rolling-scopes-school.github.io/mariacherkez-JSFE2021Q1/online-zoo-v1/</a>\n    </p>\n  </div>\n</div>\n<p class="content-box__text">HTML, CSS, Adaptive design, JavaScript</p>\n</div>\n<div class="content-box">\n<div class="content-box__title">\n  <div>\n    <p class="content-box__name">virtual piano</p>\n    <p class="content-box__position">\n      <a href="https://rolling-scopes-school.github.io/mariacherkez-JSFE2021Q1/virtual-piano/" target="_blank">  \n      https://rolling-scopes-school.github.io/mariacherkez-JSFE2021Q1/virtual-piano/\n      </a>\n    </p>\n  </div>\n</div>\n<p class="content-box__text">HTML, CSS, JavaScript</p>\n</div>\n \n\n    <div class="content-box">\n    <div class="content-box__title">\n      <div>\n        <p class="content-box__name">Android Radio</p>\n        <p class="content-box__position">\n          <a href="https://play.google.com/store/apps/details?id=marche.com" target="_blank">\n          https://play.google.com/store/apps/details?id=marche.com</a>\n        </p>\n      </div>\n    </div>\n    <p class="content-box__text">Java, SQLite</p>\n  </div>\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    `)}}},583:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Main=void 0;const i=n(619),s=n(218),a=n(829);n(977),n(817),n(424),n(337),t.Main=class{constructor(){this.element=document.createElement("main"),this.element.classList.add("main"),this.element.innerHTML='\n    <div class="aside"></div>\n    <div class="content-container"></div>\n    ',this.asideParts=[new i.AsidePart(a.C.TITLES.hardSkills,a.C.HARD_SKILLS),new i.AsidePart(a.C.TITLES.experience),new i.AsidePart(a.C.TITLES.languages)],this.parts=[new s.MainPart(a.C.TITLES.employment)],this.asideParts.forEach((e=>{var t;return null===(t=this.element.querySelector(".aside"))||void 0===t?void 0:t.append(e.element)})),this.parts.forEach((e=>{var t;return null===(t=this.element.querySelector(".content-container"))||void 0===t?void 0:t.append(e.element)}))}}},754:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InputMoveModel=void 0,t.InputMoveModel=class{constructor(){this.isMove=!1,this.startX=void 0,this.startEmphyWidth=0,this.startFillWidth=0,this.fillPath=null,this.emptyPath=null,this.minWidth=0,this.maxWidth=0}reset(){this.isMove=!1,this.startX=void 0,this.emptyPath=null,this.fillPath=null}move(e){if(this.isMove){this.startX||(this.startX=e.pageX,this.setStartWidth());const t=this.startX-e.pageX;this.setWidth(this.startEmphyWidth+t,this.emptyPath),this.setWidth(this.startFillWidth-t,this.fillPath)}}startMove(e){if(e.target instanceof HTMLElement){const t=e.target.parentElement;t&&(this.emptyPath=t.querySelector(".skill-box__scale-empty-path"),this.fillPath=t.querySelector(".skill-box__scale-fill-path"),this.maxWidth=parseInt(getComputedStyle(t).width,10)-parseInt(getComputedStyle(e.target).width,10))}this.isMove=!0}setStartWidth(){this.emptyPath&&(this.emptyPath.style.width=getComputedStyle(this.emptyPath).width,this.startEmphyWidth=parseInt(this.emptyPath.style.width,10)),this.fillPath&&(this.fillPath.style.width=getComputedStyle(this.fillPath).width,this.startFillWidth=parseInt(this.fillPath.style.width,10))}setWidth(e,t){t&&(e<=this.maxWidth&&e>=this.minWidth?t.style.width=`${e}px`:e>this.maxWidth?t.style.width=`${this.maxWidth}px`:e<this.minWidth&&(t.style.width=`${this.minWidth}px`))}}},829:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.C=void 0;const n={SOFT_SKILLS:[["Energy",80],["Creative",65],["Motivation",85],["Learnability",90],["Positive",65],["Teamwork",75]],HARD_SKILLS:[["HTML (HTML5)",90],["CSS (CSS3)",85],["JavaScript",75],["TypeScript",65],["WebPack",30],["Git & GitHub",30],["Node.js",20],["MySQL",80],["Photoshop, Figma",90]],TITLES:{softSkills:"Soft skills",hobbies:"hobbies",education:"Education",followMe:"Follow me",hardSkills:"Hard skills",experience:"work experience",languages:"languages",employment:"Employment History",contacts:"contacts",title:"title",profile:"Profile"}};t.C=n,Object.freeze(n)}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(948),n(373);const e=n(752);window.onload=()=>{new e.App}})()})();
