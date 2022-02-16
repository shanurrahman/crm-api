"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2646],{9247:($,A,l)=>{l.d(A,{U:()=>f});var c=l(655),p=l(520),o=l(2340),d=l(9300),g=l(5e3);let f=(()=>{class s{constructor(a){this.http=a}getCampaigns(a,u,m,_,T){return this.http.post(`${o.N.apiUrl}/campaign/get`,{page:a,perPage:u,filters:m,sortField:_,sortOrder:T})}getHandlerEmailHints(a){let u=(new p.LE).append("partialEmail",`${a}`);return this.http.get(`${o.N.apiUrl}/campaign/autocomplete/suggestEmails`,{params:u})}getAllEmailTemplates(a){return this.http.get(`${o.N.apiUrl}/lead/getAllEmailTemplates?campaignId=${a}`)}createEmailTemplate(a){return this.http.post(`${o.N.apiUrl}/lead/getAllEmailTemplates`,a)}handleFilesUpload(a){const u=new p.aW("POST",`${o.N.apiUrl}/lead/saveAttachments`,a,{});return this.http.request(u).pipe((0,d.h)(m=>m instanceof p.Zn))}createCampaignAndDisposition(a){const u=new p.aW("POST",`${o.N.apiUrl}/campaign/createCampaignAndDisposition`,a);return this.http.request(u).pipe((0,d.h)(m=>m instanceof p.Zn))}uploadMultipleLeadFiles(a){const u=new p.aW("POST",`${o.N.apiUrl}/lead/uploadMultipleLeadFiles`,a,{});return this.http.request(u).pipe((0,d.h)(m=>m instanceof p.Zn))}handleEmailTemplateUpload(a){return this.http.post(`${o.N.apiUrl}/lead/createEmailTemplate`,a)}uploadCampaignFile(a){const u=new p.aW("POST",`${o.N.apiUrl}/campaign/config/upload`,a,{});return this.http.request(u).pipe((0,d.h)(m=>m instanceof p.Zn))}getDisposition(a){return this.http.get(`${o.N.apiUrl}/campaign/disposition/${a}`)}getUniqueKey(){return Math.random().toString(36).substring(2)+Date.now().toString(36)}getCampaignById(a,u){return this.http.get(`${o.N.apiUrl}/campaign/${a}?identifier=${u}`)}populateCampaignDropdown(a){return(0,c.mG)(this,void 0,void 0,function*(){return new Promise((u,m)=>{this.getCampaigns(1,20,a,"","asc").subscribe(_=>{u(_.data)},_=>{m(_)})})})}archiveCampaign(a){return this.http.delete(`${o.N.apiUrl}/campaign/archive/${a}`)}updateConfigs(a,u,m){return this.http.patch(`${o.N.apiUrl}/campaign/addConfigs/${u}/${m}`,a)}removeConfig(a){return this.http.post(`${o.N.apiUrl}/campaign/delete/config`,a)}cloneCampaign(a){return this.http.post(`${o.N.apiUrl}/campaign/clone`,{campaignId:a})}}return s.\u0275fac=function(a){return new(a||s)(g.LFG(p.eN))},s.\u0275prov=g.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},3621:($,A,l)=>{l.d(A,{f:()=>d});var c=l(520),p=l(2340),o=l(5e3);let d=(()=>{class g{constructor(s){this.http=s}getUsers(s,t,a,u,m){return this.http.post(`${p.N.apiUrl}/user/allUsers`,{page:s,perPage:t,sortField:a,sortOrder:u,filters:m})}getAllUsersHack(){return this.http.get(`${p.N.apiUrl}/user`)}getAllResellers(){return this.http.get(`${p.N.apiUrl}/reseller`)}transformFilterObjectToQueryParams(s){return Object.keys(s).map(t=>t+"="+s[t]).join("&")}getManagersForReassignment(){return this.http.get(`${p.N.apiUrl}/user/managersForReassignment`)}getManagersForRoleType(s){return this.http.get(`${p.N.apiUrl}/user/managersForRoleType/${s}`)}assignManager(s,t){return this.http.post(`${p.N.apiUrl}/user/assignManager`,{newManager:s,user:t})}getUsersLeadActivity(s,t){const a=this.transformFilterObjectToQueryParams(t);return this.http.get(`${p.N.apiUrl}/user/lead/activity/${s}?${a}`)}getUserById(s){return this.http.get(`${p.N.apiUrl}/user/single/${s}`)}updateUser(s,t){return this.http.put(`${p.N.apiUrl}/user/${s}`,t)}getUsersLeadLogs(s,t){return this.http.post(`${p.N.apiUrl}/lead/activity/logs`,{userEmail:s,dateRange:t})}createReseller(s){return this.http.post(`${p.N.apiUrl}/user/reseller`,s)}getAllResellerOrganizations(){return this.http.get(`${p.N.apiUrl}/organization/reseller`)}getAllManagers(s){const t=new c.LE;return s&&t.set("userEmail",s),this.http.get(`${p.N.apiUrl}/user/managers`,{params:t})}getUserProfile(){return this.http.get(`${p.N.apiUrl}/user/profile`)}updateUserProfile(s){return this.http.post(`${p.N.apiUrl}/user/profile`,s)}}return g.\u0275fac=function(s){return new(s||g)(o.LFG(c.eN))},g.\u0275prov=o.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},2646:($,A,l)=>{l.r(A),l.d(A,{RulesModule:()=>mt});var c=l(9808),p=l(6696),o=l(3075),d=(()=>{return(i=d||(d={})).dispositionChange="dispositionChange",i.numberOfAttempts="numberOfAttempts",i.overdueFollowups="overdueFollowups",i.repeatedDisposition="repeatedDisposition",i.changeHandler="changeHandler",d;var i})();const g=[{label:"Disposition Change",value:d.dispositionChange},{label:"Number Of Attempts",value:d.numberOfAttempts},{label:"Overdue Followups",value:d.overdueFollowups},{label:"Repeated Disposition",value:d.repeatedDisposition},{label:"Change Handler",value:d.changeHandler}];var f=(()=>{return(i=f||(f={})).changeDisposition="changeDisposition",i.callApi="callApi",i.changeProspectHandler="changeProspectHandler",f;var i})();const s=[{label:"Change Disposition",value:f.changeDisposition},{label:"Call Api",value:f.callApi},{label:"Change Prospect Handler",value:f.changeProspectHandler}];var t=l(5e3),a=l(9247),u=l(3621),m=l(2340),_=l(520);let T=(()=>{class i{constructor(e){this.http=e}addRule(e){return this.http.post(`${m.N.apiUrl}/rules`,e)}getAllRules(e,r=20,h=0){return this.http.get(`${m.N.apiUrl}/rules/all/${e}?limit=${r}&offset=${h}`)}getRuleById(e){return this.http.get(`${m.N.apiUrl}/rules/${e}`)}activateRule(e,r){return this.http.post(`${m.N.apiUrl}/rules/changeState`,{ruleId:e,isActive:r})}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(_.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var v=l(7672),C=l(7322),q=l(4107),R=l(7423),I=l(508),x=l(7531);function D(i,n){if(1&i&&(t.TgZ(0,"mat-option",9),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e.value),t.xp6(1),t.Oqu(e.label)}}function b(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Overdue is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function O(i,n){if(1&i&&(t.TgZ(0,"mat-form-field",2),t.TgZ(1,"mat-label"),t._uU(2,"Days Overdue"),t.qZA(),t._UZ(3,"input",10),t.YNc(4,b,4,0,"mat-error",7),t.qZA()),2&i){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.daysOverdue.hasError("required"))}}function w(i,n){if(1&i&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e.key)("disabled",e.disabled),t.xp6(1),t.Oqu(e.title)}}function y(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Disposition is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function E(i,n){if(1&i&&(t.TgZ(0,"mat-form-field",2),t.TgZ(1,"mat-label"),t._uU(2,"Disposition"),t.qZA(),t.TgZ(3,"mat-select",11),t.YNc(4,w,2,3,"mat-option",12),t.qZA(),t.YNc(5,y,4,0,"mat-error",7),t.qZA()),2&i){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.dispositionOpts),t.xp6(1),t.Q6J("ngIf",e.disposition.hasError("required"))}}function F(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Number of attempts is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function J(i,n){if(1&i&&(t.TgZ(0,"mat-form-field",2),t.TgZ(1,"mat-label"),t._uU(2,"Number of Attempts"),t.qZA(),t._UZ(3,"input",14),t.YNc(4,F,4,0,"mat-error",7),t.qZA()),2&i){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.numberOfAttempts.hasError("required"))}}function Y(i,n){if(1&i&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e.key)("disabled",e.disabled),t.xp6(1),t.Oqu(e.title)}}function M(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," From Disposition is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function P(i,n){if(1&i&&(t.TgZ(0,"mat-form-field",2),t.TgZ(1,"mat-label"),t._uU(2,"From Disposition"),t.qZA(),t.TgZ(3,"mat-select",15),t.YNc(4,Y,2,3,"mat-option",12),t.qZA(),t.YNc(5,M,4,0,"mat-error",7),t.qZA()),2&i){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.dispositionOpts),t.xp6(1),t.Q6J("ngIf",e.fromDisposition.hasError("required"))}}function H(i,n){if(1&i&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e.key)("disabled",e.disabled),t.xp6(1),t.Oqu(e.title)}}function L(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," From Disposition is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function Q(i,n){if(1&i&&(t.TgZ(0,"mat-form-field",2),t.TgZ(1,"mat-label"),t._uU(2,"To Disposition"),t.qZA(),t.TgZ(3,"mat-select",16),t.YNc(4,H,2,3,"mat-option",12),t.qZA(),t.YNc(5,L,4,0,"mat-error",7),t.qZA()),2&i){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.dispositionOpts),t.xp6(1),t.Q6J("ngIf",e.toDisposition.hasError("required"))}}function S(i,n){if(1&i&&(t.TgZ(0,"mat-option",9),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e.value),t.xp6(1),t.Oqu(e.label)}}function k(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Action is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function B(i,n){if(1&i&&(t.TgZ(0,"mat-option",9),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e._id),t.xp6(1),t.Oqu(e.email)}}function W(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," New Handler is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function K(i,n){if(1&i&&(t.TgZ(0,"mat-form-field",2),t.TgZ(1,"mat-label"),t._uU(2,"New Handler"),t.qZA(),t.TgZ(3,"mat-select",17),t.YNc(4,B,2,2,"mat-option",4),t.qZA(),t.YNc(5,W,4,0,"mat-error",7),t.qZA()),2&i){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.handlers),t.xp6(1),t.Q6J("ngIf",e.newHandler.hasError("required"))}}function z(i,n){if(1&i&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e.key)("disabled",e.disabled),t.xp6(1),t.Oqu(e.title)}}function G(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," New Disposition is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function X(i,n){if(1&i&&(t.TgZ(0,"mat-form-field",2),t.TgZ(1,"mat-label"),t._uU(2,"New Disposition"),t.qZA(),t.TgZ(3,"mat-select",18),t.YNc(4,z,2,3,"mat-option",12),t.qZA(),t.YNc(5,G,4,0,"mat-error",7),t.qZA()),2&i){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.dispositionOpts),t.xp6(1),t.Q6J("ngIf",e.newDisposition.hasError("required"))}}function V(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Action url "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function j(i,n){if(1&i&&(t.TgZ(0,"mat-form-field",2),t.TgZ(1,"mat-label"),t._uU(2,"Trigger Action URL"),t.qZA(),t._UZ(3,"input",19),t.YNc(4,V,4,0,"mat-error",7),t.qZA()),2&i){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.url.hasError("required"))}}let tt=(()=>{class i{constructor(e,r,h,Z,N){this.fb=e,this.campaignService=r,this.activatedRoute=h,this.userService=Z,this.ruleService=N,this.triggerEnum=d,this.triggerOptions=g,this.eActions=f,this.actionOptions=s,this.campaignId="",this.ruleId=null,this.ruleButtonText="Waiting ...",this.handlers=[],this.dispositionOpts=[],this.trigger=new o.NI("",[o.kI.required]),this.action=new o.NI("",[o.kI.required]),this.url=new o.NI("",[o.kI.required]),this.numberOfAttempts=new o.NI("",[o.kI.required]),this.fromDisposition=new o.NI("",[o.kI.required]),this.toDisposition=new o.NI("",[o.kI.required]),this.daysOverdue=new o.NI("",[o.kI.required]),this.repeatedDisposition=new o.NI("",[o.kI.required]),this.changeHandler=new o.NI("",[o.kI.required]),this.disposition=new o.NI("",[o.kI.required]),this.newHandler=new o.NI("",[o.kI.required]),this.newDisposition=new o.NI("",[o.kI.required]),this.dictionary={"Common Fields":["$First name$ First name of the prospect","$Last name$ Last name of the prospect","$Full name$ Full name of the prospect","$Mobile phone$ Comma separated list of all the prospects mobile phone numbers","$Home phone$ Comma separated list of all the prospects home phone numbers","$Work phone$ Comma separated list of all the prospects home work numbers","$Last called phone$ The phone number used for the last contact with the prospect","$Email$ Comma separated list of all the prospects email addresses","$Handler email$ Email address of the last handler","$Handler name$ Name of the last handler","$Handler phone number$ Handler's phone number","$Handler mobile PIN$ PIN of the Call Handler","$Disposition$ The disposition","$Follow up time$ The follow up time converted to UTC in YYYY-MM-DD HH:mm:ss format","$Source$ The source of the prospect's data","$Unique call ID$ Unique Call Identifier","$Remark$ Remark recorded with the transaction"],"Call Details":["$Call Direction$ inbound or outbound","$Call Duration$ in seconds","$Call Status$ answered or unanswered or unknown","$Called At$ Timestamp of when the call occured","$Call Recording URL$ URL of the call recording"]}}ngOnInit(){const e=this.activatedRoute.snapshot.queryParamMap;this.campaignId=e.get("campaignId"),this.ruleId=e.get("ruleId"),this.ruleButtonText=this.ruleId?"Update Rule":"Add New Rule",this.initRuleForm(),this.initDispositionNodes(),this.getAllHandler()}getAllHandler(){this.userService.getAllUsersHack().subscribe(e=>{this.handlers=e[0].users},e=>{console.log(e)})}initDispositionNodes(){this.campaignService.getDisposition(this.campaignId).subscribe(e=>{this.flattenDispositionTree(e.options)},e=>{console.log(e)})}flattenDispositionTree(e){e.forEach(r=>{this.flattenNode(r)})}flattenNode(e){!e||(this.dispositionOpts.push({title:e.title,key:e.key,disabled:!e.isLeaf}),e.children.forEach(r=>{this.flattenNode(r)}))}initRuleForm(){this.ruleForm=this.fb.group({_id:new o.NI(null),campaign:new o.NI(this.campaignId),trigger:this.trigger,numberOfAttempts:this.numberOfAttempts,action:this.action,url:this.url,fromDisposition:this.fromDisposition,toDisposition:this.toDisposition,changeHandler:this.changeHandler,daysOverdue:this.daysOverdue,disposition:this.disposition,newHandler:this.newHandler,newDisposition:this.newDisposition}),this.ruleId&&this.ruleService.getRuleById(this.ruleId).subscribe(e=>{this.ruleForm.patchValue(e)})}handleSubmit(e){switch(console.log(e),e.trigger){case this.triggerEnum.dispositionChange:if(!e.fromDisposition||!e.toDisposition)return;break;case this.triggerEnum.changeHandler:break;case this.triggerEnum.numberOfAttempts:if(!e.numberOfAttempts)return;break;case this.triggerEnum.overdueFollowups:if(!e.daysOverdue)return;break;case this.triggerEnum.repeatedDisposition:if(!e.disposition||!e.numberOfAttempts)return;break;default:return}switch(console.log("Passed trigger check"),e.action){case this.eActions.callApi:if(!e.url)return;break;case this.eActions.changeDisposition:if(!e.newDisposition)return;break;case this.eActions.changeProspectHandler:if(!e.newHandler)return;break;default:return}console.log("Passed trigger and action check"),this.ruleId?console.log("update will be called here!"):this.ruleService.addRule(e).subscribe(r=>{console.log(r)},r=>{console.log(r)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(o.qu),t.Y36(a.U),t.Y36(p.gz),t.Y36(u.f),t.Y36(T))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-rules"]],decls:26,vars:13,consts:[[2,"margin","8px","padding","8px"],[3,"formGroup","ngSubmit"],["appearance","outline",1,"mat-full-width"],["formControlName","trigger"],[3,"value",4,"ngFor","ngForOf"],["class","mat-full-width","appearance","outline",4,"ngIf"],["formControlName","action"],[4,"ngIf"],["type","submit","mat-raised-button","","color","primary",1,"mat-full-width"],[3,"value"],["type","number","matInput","","formControlName","daysOverdue"],["formControlName","disposition"],[3,"value","disabled",4,"ngFor","ngForOf"],[3,"value","disabled"],["type","number","matInput","","formControlName","numberOfAttempts"],["formControlName","fromDisposition"],["formControlName","toDisposition"],["formControlName","newHandler"],["formControlName","newDisposition"],["matInput","","type","url","formControlName","url"]],template:function(e,r){1&e&&(t.TgZ(0,"ion-content"),t.TgZ(1,"div",0),t.TgZ(2,"h2"),t._uU(3,"Add Rule"),t.qZA(),t.TgZ(4,"form",1),t.NdJ("ngSubmit",function(){return r.handleSubmit(r.ruleForm.value)}),t.TgZ(5,"mat-form-field",2),t.TgZ(6,"mat-label"),t._uU(7,"Trigger"),t.qZA(),t.TgZ(8,"mat-select",3),t.YNc(9,D,2,2,"mat-option",4),t.qZA(),t.qZA(),t.YNc(10,O,5,1,"mat-form-field",5),t.YNc(11,E,6,2,"mat-form-field",5),t.YNc(12,J,5,1,"mat-form-field",5),t.YNc(13,P,6,2,"mat-form-field",5),t.YNc(14,Q,6,2,"mat-form-field",5),t.TgZ(15,"mat-form-field",2),t.TgZ(16,"mat-label"),t._uU(17,"Action"),t.qZA(),t.TgZ(18,"mat-select",6),t.YNc(19,S,2,2,"mat-option",4),t.qZA(),t.YNc(20,k,4,0,"mat-error",7),t.qZA(),t.YNc(21,K,6,2,"mat-form-field",5),t.YNc(22,X,6,2,"mat-form-field",5),t.YNc(23,j,5,1,"mat-form-field",5),t.TgZ(24,"button",8),t._uU(25),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Q6J("formGroup",r.ruleForm),t.xp6(5),t.Q6J("ngForOf",r.triggerOptions),t.xp6(1),t.Q6J("ngIf",r.trigger.value===r.triggerEnum.overdueFollowups),t.xp6(1),t.Q6J("ngIf",r.trigger.value===r.triggerEnum.repeatedDisposition),t.xp6(1),t.Q6J("ngIf",r.trigger.value===r.triggerEnum.numberOfAttempts||r.trigger.value===r.triggerEnum.repeatedDisposition),t.xp6(1),t.Q6J("ngIf",r.trigger.value===r.triggerEnum.dispositionChange),t.xp6(1),t.Q6J("ngIf",r.trigger.value===r.triggerEnum.dispositionChange),t.xp6(5),t.Q6J("ngForOf",r.actionOptions),t.xp6(1),t.Q6J("ngIf",r.action.hasError("required")),t.xp6(1),t.Q6J("ngIf",r.action.value===r.eActions.changeProspectHandler),t.xp6(1),t.Q6J("ngIf",r.action.value===r.eActions.changeDisposition),t.xp6(1),t.Q6J("ngIf",r.action.value===r.eActions.callApi),t.xp6(2),t.hij(" ",r.ruleButtonText," "))},directives:[v.W2,o._Y,o.JL,o.sg,C.KE,C.hX,q.gD,o.JJ,o.u,c.sg,c.O5,R.lW,I.ey,o.wV,x.Nt,o.Fj,C.TO],styles:[""]}),i})();var et=l(7489),U=l(1125),it=l(8930);function rt(i,n){if(1&i&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&i){const e=t.oxw().$implicit,r=t.oxw().$implicit,h=t.oxw();t.xp6(1),t.AsE("",h.startCase(e)," : ","createdAt"===e||"updatedAt"===e?t.lcZ(2,2,r[e]):r[e],"")}}const ot=function(){return["_id","campaign"]};function nt(i,n){if(1&i&&(t.ynx(0),t.YNc(1,rt,3,4,"p",4),t.BQk()),2&i){const e=n.$implicit,r=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",r[e]&&!t.DdM(1,ot).includes(e))}}function at(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"mat-expansion-panel"),t.TgZ(1,"mat-expansion-panel-header"),t.TgZ(2,"mat-panel-title"),t._uU(3),t.qZA(),t.qZA(),t.YNc(4,nt,2,2,"ng-container",0),t.ALo(5,"objectkeys"),t.TgZ(6,"mat-action-row"),t.TgZ(7,"button",2),t.NdJ("click",function(){const Z=t.CHM(e).$implicit;return t.oxw().activateRule(Z)}),t._uU(8),t.qZA(),t.TgZ(9,"button",3),t.NdJ("click",function(){const Z=t.CHM(e).$implicit;return t.oxw().navigateToRuleDetails(Z)}),t._uU(10,"Edit"),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=n.$implicit,r=t.oxw();t.xp6(3),t.hij(" ",r.startCase(e.trigger)," "),t.xp6(1),t.Q6J("ngForOf",t.lcZ(5,4,e)),t.xp6(3),t.Q6J("color",e.isActive?"warn":"primary"),t.xp6(1),t.Oqu(e.isActive?"DeActivate":"Activate")}}const st=[{path:"add-rules",pathMatch:"full",component:tt},{path:"list-rules",pathMatch:"full",component:(()=>{class i{constructor(e,r,h){this.ruleService=e,this.router=r,this.activatedRouter=h,this.startCase=et.startCase,this.campaignId="",this.objectKeys=Object.keys}ngOnInit(){this.campaignId=this.activatedRouter.snapshot.queryParamMap.get("campaignId"),this.ruleService.getAllRules(this.campaignId,20,0).subscribe(e=>{this.rules=e},e=>{console.log(e)})}activateRule(e){e.isActive=!e.isActive,this.ruleService.activateRule(e._id,e.isActive).subscribe(r=>{console.log(r)},r=>{e.isActive=!1})}navigateToRuleDetails(e){this.router.navigate(["rules","add-rules"],{queryParams:{ruleId:e._id,campaignId:this.campaignId}})}navigateToAddRule(){this.router.navigate(["rules","add-rules"],{queryParams:{campaignId:this.campaignId}})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(T),t.Y36(p.F0),t.Y36(p.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-list-rules"]],decls:4,vars:1,consts:[[4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"mat-full-width",3,"click"],["mat-button","",3,"color","click"],["mat-button","","color","primary",3,"click"],[4,"ngIf"]],template:function(e,r){1&e&&(t.TgZ(0,"ion-content"),t.YNc(1,at,11,6,"mat-expansion-panel",0),t.TgZ(2,"button",1),t.NdJ("click",function(){return r.navigateToAddRule()}),t._uU(3,"Add Rule"),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",r.rules))},directives:[v.W2,c.sg,R.lW,U.ib,U.yz,U.yK,U.VG,c.O5],pipes:[it.B,c.uU],styles:[""]}),i})()}];let lt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[p.Bz.forChild(st)],p.Bz]}),i})();var pt=l(9661),ut=l(1514);let mt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[v.Pc,c.ez,lt,o.u5,o.UX,pt.O,ut.SharedModule]]}),i})()}}]);