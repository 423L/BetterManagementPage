"id.sonyentertainmentnetwork.com"==window.location.host?(window.realNameClick=function(){var e=document.getElementsByClassName("primary-button row-button text-button")[0];window.overrideNameChangeRequest=!0;var t=document.getElementsByClassName("textfield ember-text-field ember-view")[0],n=document.getElementsByClassName("textfield ember-text-field ember-view")[1],a=document.getElementsByClassName("textfield ember-text-field ember-view")[2];window.overrideFirstName=t.value,window.overrideMiddleName=n.value,window.overrideLastName=a.value,t.value="OVERRIDDEN",n.value="OVERRIDDEN",a.value="OVERRIDDEN";var i=document.createEvent("KeyboardEvent");i.initEvent("keyup",!0,!0),t.dispatchEvent(i),(i=document.createEvent("KeyboardEvent")).initEvent("keyup",!0,!0),n.dispatchEvent(i),(i=document.createEvent("KeyboardEvent")).initEvent("keyup",!0,!0),a.dispatchEvent(i),e.click()},window.buttonAdded=!1,window.enablePage=function(){var e=document.getElementsByClassName("primary-button row-button text-button")[0];if(null!=e)if("Save"==e.innerText){if(!window.buttonAdded){window.buttonAdded=!0;var t=e.parentElement.parentElement;t.appendChild(document.createElement("div")).setAttribute("class","separator-pageitems beside narrow");var n=t.appendChild(document.createElement("div"));n.setAttribute("data-components","pdr-button"),n.setAttribute("class","column-flex button ember-view");var a=n.appendChild(document.createElement("button"));a.innerHTML='<span dir="ltr" class="caption">Force Save</span>',a.setAttribute("tabIndex",3),a.setAttribute("class","primary-button row-button text-button"),a.setAttribute("onclick","realNameClick()")}}else window.buttonAdded=!1;else window.buttonAdded=!1;window.setTimeout(window.enablePage,0)},window.setTimeout(window.enablePage,0),XMLHttpRequest.prototype.openOg=XMLHttpRequest.prototype.open,XMLHttpRequest.prototype.open=function(e,t,n){return"PUT"==e&&t.includes("accounts/me/communication")&&window.overrideNameChangeRequest&&(this.sendOg=this.send,this.send=function(e){var t=JSON.parse(e);t.realName.name.first=window.overrideFirstName,t.realName.name.middle=window.overrideMiddleName,t.realName.name.last=window.overrideLastName;var n=JSON.stringify(t);return console.log(e+" -> "+n),this.sendOg(n)},window.overrideNameChangeRequest=!1),"PUT"==e&&t.includes("users/me/avatar")&&(this.sendOg=this.send,this.send=function(e){'{"avatarId":100000}'==e&&(console.log("Setting default avatar."),e='{"avatarId":0}'),this.sendOg(e)}),"GET"==e&&t.includes("avatars/categories/0?offset=0&limit=48")&&(this.sendOg=this.send,this.send=function(){return this.onreadystatechangeOg=this.onreadystatechange,this.onreadystatechange=function(){if(4===this.readyState){var e=JSON.parse(this.response);e.avatars.unshift({avatarId:1e5,avatarUrls:[{size:"m",avatarUrl:"https://static-resource.np.community.playstation.net/avatar_m/default/DefaultAvatar_m.png"}]});var t=JSON.stringify(e);Object.defineProperty(this,"response",{writable:!0}),Object.defineProperty(this,"responseText",{writable:!0}),this.response=t,this.responseText=t,Object.defineProperty(this,"response",{writable:!1}),Object.defineProperty(this,"responseText",{writable:!1})}return this.onreadystatechangeOg()},this.sendOg()}),this.openOg(e,t,n)},alert("Better Management Page script by SilicaAndPina loaded! and on the correct domain.")):alert('Wrong domain! please run on\n"https://id.sonyentertainmentnetwork.com/id/management/#/p/psn_profile".');