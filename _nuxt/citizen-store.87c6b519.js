import{r as e,aw as t,av as a,ax as r,h as n,a9 as i,ap as s,E as o,az as l}from"./entry.40e762a9.js";import{u as c,a as u,g as d}from"./wallet-store.d6533bc0.js";import"./index.77e4f8bb.js";import{i as p,u as m}from"./gallery-store.7012f5b9.js";import{r as h}from"./index.14014a4f.js";var v=h,f=function(e){e.charAt&&"#"===e.charAt(0)&&(e=function(e){var t=e.split("");return t.shift(),t.join("")}(e)),3===e.length&&(e=function(e){return e.split("").reduce((function(e,t){return e.concat([t,t])}),[]).join("")}(e));var t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},g=function(e,t,a){if(null==e)return[0,0,0];var r,n,i,s=(1-Math.abs(2*a-1))*t,o=e/60,l=s*(1-Math.abs(o%2-1));0===(o=Math.floor(o))?(r=s,n=l,i=0):1===o?(r=l,n=s,i=0):2===o?(r=0,n=s,i=l):3===o?(r=0,n=l,i=s):4===o?(r=l,n=0,i=s):5===o&&(r=s,n=0,i=l);var c=a-s/2;return r+=c,n+=c,i+=c,[Math.abs(Math.round(255*r)),Math.abs(Math.round(255*n)),Math.abs(Math.round(255*i))]};function _(e,t){return e>t?t:e}function k(e,t){return e<t?t:e}var b=function(e,t,a){return e=function(e){for(e=k(e=_(e,1e7),-1e7);e<0;)e+=360;for(;e>359;)e-=360;return e}(e),t=k(_(t,100),0),a=k(_(a,100),0),"#"+g(e,t/=100,a/=100).map((function(e){return(256+e).toString(16).substr(-2)})).join("")};const w=(e,t=50,a=70)=>{const r=[...e];r[1]=t,r[2]=a;const[n,i,s]=r;return b(n,i,s)},y=e=>{const t=`#${e}`,a=function(e){var t=v.apply(v,f(e));return[t[0],parseInt(t[1],10),parseInt(t[2],10)]}(t),r={hsl:a,hex:t};return r[O.Default]=w(a,30,35),r[O.Dark]=w(a,35,20),r[O.Light]=w(a,35,70),r},z=e=>`?cache=${e||(new Date).getTime()}`,C=(e,t)=>{const a=(r=e.data.value,JSON.parse(JSON.stringify(r)));var r;const n=a.citizen;n.wallet_tokens||(n.wallet_tokens=[]),n.profile||(n.profile={bio:"",nickname:"",renders:{},representative_token_id:""});const i=D(n),s=$(i),o=N(a.achievements);return{citizen:P(n),short_wallet_address:j(n.wallet_address),gallery_tokens:I(n.wallet_tokens,t.galleryUrl,t.tokenShift,t.contractAddress),achievements:o,sectors:a.achievementCategories,representativeToken:i,colors:s,passport:S(n),stats:T(n,o),files:E(n,o)}},$=e=>{var t;const a=null==(t=e.metadata)?void 0:t.background_color;return y(a)},T=(e,t)=>{const a=[...t.marks.filter((t=>e.achievements.mark.find((e=>e===t.achievement_id)))),...t.badges.filter((t=>e.achievements.badge.find((e=>e===t.badge_id))))];return{totalPoints:a.reduce(((e,t)=>e+t.points),0),totalAchieved:a.length,totalAchievements:t.all.length}},S=e=>{if(!e.profile)return null;const{passport_front:t,passport_back:a,passport_back_last_updated:r,passport_front_last_updated:n}=e.profile.renders;return t&&a?{front:`${t}${z(n)}`,back:`${a}${z(r)}`}:null},A=e=>e?e.replace("/images/","/images_fullbleed/"):"",D=e=>{var t,a;const r=e.wallet_tokens.length>0?e.wallet_tokens[0]:{},n=e.wallet_tokens.find((t=>t.id===e.profile.representative_token_id))||r,i=e=>{var t;return(null==(t=n.metadata)?void 0:t.attributes.find((t=>t.trait_type===e)))||{value:"-"}};return{...n,thumbnail:(s=null==(t=n.metadata)?void 0:t.image,s?s.replace("/images/","/thumbs/"):""),fullbleed:A(null==(a=n.metadata)?void 0:a.image),highlightTraits:{entity:i("Entity"),special:i("Special"),hair:i("Hair"),innerwear:i("Innerwear")}};var s},I=(e,t,a,r)=>(e||[]).map((e=>{var t;const n=parseInt(e.id),i=n,s=`https://opensea.io/assets/ethereum/${r}/${i}`,o=null==(t=e.metadata.image)?void 0:t.replace("/images","/thumbs"),l=e.metadata.image;return{id:p(n,a),idShifted:i,image:{overlay:l,thumb:o},openSeaUrl:s,source:null,traits:[],validFilters:[]}})),j=e=>e?`${e.substring(0,18)}...${e.substring(e.length-7)}`:null,N=e=>{if(e instanceof Array){const t=e.map((e=>({...e,type:"mark"})));return{badges:[],marks:t,all:t}}const t=e.badges.map((e=>({...e,type:"badge"}))),a=e.marks.map((e=>({...e,type:"mark"})));return{badges:t,marks:a,all:[...t,...a]}},P=e=>{const{wallet_address:t}=e;return e.achievements instanceof Array&&(e.achievements={badge:[],mark:e.achievements}),e.walletIdShort=j(t),e},E=(e,t)=>{if(!e.profile)return[];const a=[...t.marks.filter((t=>e.achievements.mark.find((e=>e===t.achievement_id)))),...t.badges.filter((t=>e.achievements.badge.find((e=>e===t.badge_id))))].map((e=>e.files)).flat(),{renders:r}=e.profile;return[{id:"identity",title:"Citizen Files",files:[(null==r?void 0:r.passport_front)?{type:"img",title:"Passport side A",filename:`${r.passport_front}${z(null==r?void 0:r.passport_front_last_updated)}`,fillBg:!0}:null,(null==r?void 0:r.passport_back)?{type:"img",title:"Passport side B",filename:`${r.passport_back}${z(null==r?void 0:r.passport_back_last_updated)}`,fillBg:!0}:null,(null==r?void 0:r.opengraph_poster)?{type:"img",title:"Citizen share image",filename:`${r.opengraph_poster}${z(null==r?void 0:r.opengraph_poster_last_updated)}`}:null].filter((e=>null!==e))},{id:"wallpapers",title:"Achievement files",files:a}]};var O=(e=>(e.Default="default",e.Light="light",e.Dark="dark",e))(O||{});const M=e=>e?e.replace("/images/","/thumbs/"):"",x=(p,h=!1)=>{const{GALLERY_URL:v,CONTRACT_ADDRESS:f,CONTRACT_TOKEN_ID_SHIFT:g,API_URL:_}=t().public,k=C(p,{tokenShift:parseInt(g),galleryUrl:v,contractAddress:f});return a("citizen-store"+(h?"-override":""),(()=>{var t;const a=(e=>{const t=c(),a=(t,a)=>new Promise(((r,n)=>{const i=setTimeout((()=>{clearInterval(o),n("Profile render timeout.")}),a.timeout),s=`${e}/citizen/${t}`,o=setInterval((async()=>{fetch(s,{method:"GET",mode:"cors",cache:"no-cache"}).then((e=>{if(e.ok)return e.json()})).then((e=>{if(a.dateComparison){if(a.dateComparison){let t=!0;["passport_front_last_updated","passport_back_last_updated","opengraph_poster_last_updated"].forEach((r=>{const n=e.citizen.profile.renders||{},i=new Date(n[r]||0);t=t&&i.getTime()>a.dateComparison.getTime()})),t&&(clearInterval(o),clearTimeout(i),r(e.citizen))}}else{const t=Object.keys(e.citizen.profile.renders||{});t.includes("passport_back")&&t.includes("passport_front")&&(clearInterval(o),clearTimeout(i),r(e.citizen))}}))}),a.poll)}));return{putCitizen:async a=>t.requestSignature(!1).then((t=>{const r=`${e}/citizen/${a.wallet_address}`;return fetch(r,{body:JSON.stringify({nickname:a.profile.nickname,bio:a.profile.bio,representative_token_id:a.profile.representative_token_id,color_theme:a.profile.color_theme}),mode:"cors",method:"PUT",headers:{authorization:t}})})),postCitizen:async r=>t.requestSignature(!1).then((t=>fetch(`${e}/citizen`,{mode:"cors",body:JSON.stringify(r),method:"POST",headers:{authorization:t}}))).then((async e=>{if(e.ok)return e.json();try{const t=await e.json();throw t.errors&&t.errors.length>0?new Error(t.errors[0]):new Error(`${e.status} : ${e.statusText}`)}catch(t){throw t}})).then((()=>a(r.wallet_address,{poll:1e3,timeout:9e4}))),getCitizen:async t=>fetch(`${e}/citizen/${t}`,{method:"GET",mode:"cors"}).then((e=>e.ok?e.json():null)).then((e=>e&&e.citizen?e.citizen:null)),pollCitizenProfileRenders:a}})(_),p=c(),h=e(k.citizen),v=r(k.representativeToken),f=r(k.gallery_tokens),g=r(k.achievements),b=r(k.sectors),w=e(0===h.value.wallet_tokens.length),y=r(k.stats),z=r(k.passport),C=e(k.files),A=r(k.colors),I=e(h.value.profile.color_theme||"default"),j=n((()=>A.value[I.value]));p.citizenNickname=(null==(t=h.value.profile)?void 0:t.nickname)||"";{const{id:e}=i().params;u.get(e)&&fetch(`/api/citizen/${e}`).then((e=>{if(e.ok)return e.json();throw new Error("Failed to load.")})).then((e=>{g.value=N(e.data.achievements),C.value=E(k.citizen,g.value),y.value=T(k.citizen,g.value)}))}s((()=>{const e=p.connected,t=p.accounts,a=p.isSigned;if(e){const e=t[0];try{d(e||"")===d(h.value.wallet_address||"")&&a?p.isSignedCitizen=!0:p.isSignedCitizen=!1}catch(r){p.isSignedCitizen=!1}}else p.isSignedCitizen=!1}));const P=e(!1),O=m(),M=l((e=>{a.pollCitizenProfileRenders(h.value.wallet_address,{poll:1e3,timeout:45e3,dateComparison:e}).then((e=>{z.value=S(e),C.value=E(e,g.value)}))}),500),x=l((()=>{const e=new Date(Date.now());a.putCitizen(h.value).then((()=>M(e)))}),100),R=e(null),L=e(null),U=e(!1),B=e=>{null==e?U.value=!U.value:"boolean"==typeof e&&(U.value=e)};return o(L,(e=>{e&&B(!1)})),{api:a,submit:async e=>(h.value=e,a.postCitizen(e).then((e=>(h.value=e,e)))),citizen:h,achievements:g,sectors:b,representativeToken:v,deactivated:w,stats:y,passport:z,files:C,gallery_tokens:f,showWalletTokenDetail:e=>{var t,a;const r=h.value.wallet_tokens.indexOf(e),n=f.value[r],i=null==(t=O.search)?void 0:t.getTokenDetail(n.id);null==(a=O.search)||a.setSelectedItem(i)},color:j,colors:A,colorTheme:I,updateBio:e=>e.length<1?{error:!0,message:"Bio is empty, please try again"}:(h.value.profile.bio=e,x(),{error:!1}),updateNickname:e=>e.length>16?{error:!0,message:"Nickname is too long, max character limit is 16"}:e.length<5?{error:!0,message:"Nickname is too short, min character limit is 5"}:(h.value.profile.nickname=e,p.citizenNickname=e,x(),{error:!1}),updateColorTheme:e=>{switch(e=e.toLowerCase()){case"default":case"dark":case"light":return I.value=e,h.value.profile.color_theme=e,x(),{error:!1};default:return{error:!0,message:`Not a valid color:', ${e}`}}},updateToken:e=>{if(e===h.value.profile.representative_token_id)return{error:!0,message:`Profile token already set to ${e}`};return h.value.wallet_tokens.reduce(((t,a)=>t||a.id===e),!1)?(h.value.profile.representative_token_id=e,v.value=D(h.value),A.value=$(v.value),x(),{error:!1}):{error:!0,message:`No matching token id: ${e}`}},showPassport:R,setPassportVisibility:e=>{R.value=e},showConsole:P,toggleConsole:e=>{p.isSignedCitizen&&(null==e?P.value=!P.value:"boolean"==typeof e&&(P.value=e))},achievementDetail:L,setAchievementDetail:e=>{L.value=e},showAchievementGrid:U,toggleAchievementGrid:B}}))()};let R;const L=()=>{R=null},U=t=>{if(R)return R;if(t&&!t.override)return R=x(t),R;if(t&&t.override){const a=t,r={citizen:a.citizen,achievements:a.achievements.achievements,achievementCategories:a.achievements.achievementCategories};return R=x({data:e(r)},!0),R}throw new Error("Citizen store must be pre-inited with async data.")};export{O as C,w as a,L as c,M as g,U as u};