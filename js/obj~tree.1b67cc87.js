(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["obj~tree"],{"00ee":function(n,t,e){var r=e("b622"),o=r("toStringTag"),i={};i[o]="z",n.exports="[object z]"===String(i)},"0d26":function(n,t,e){var r=e("e330"),o=Error,i=r("".replace),c=function(n){return String(o(n).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,s=a.test(c);n.exports=function(n,t){if(s&&"string"==typeof n&&!o.prepareStackTrace)while(t--)n=i(n,a,"");return n}},"26c0":function(n,t,e){},"2ba4":function(n,t,e){var r=e("40d5"),o=Function.prototype,i=o.apply,c=o.call;n.exports="object"==typeof Reflect&&Reflect.apply||(r?c.bind(i):function(){return c.apply(i,arguments)})},"3bbe":function(n,t,e){var r=e("1626"),o=String,i=TypeError;n.exports=function(n){if("object"==typeof n||r(n))return n;throw i("Can't set "+o(n)+" as a prototype")}},"3d99":function(n,t,e){"use strict";var r=e("7a23");const o=n=>(Object(r["v"])("data-v-23269d94"),n=n(),Object(r["t"])(),n),i={key:0,class:"network"},c={align:"left"},a={key:0,align:"left"},s={key:1,align:"left"},l={id:"graphviz"},u=["src"],p={key:1,class:"error"},d={key:0},_=o(()=>Object(r["g"])("br",null,null,-1));function f(n,t,e,o,f,h){return Object(r["s"])(),Object(r["f"])(r["a"],null,[n.data.panel_name?(Object(r["s"])(),Object(r["f"])("div",i,[Object(r["g"])("h1",c,Object(r["B"])(n.data.panel_name),1),n.data.defect_fmid?(Object(r["s"])(),Object(r["f"])("h3",a,"不具合No："+Object(r["B"])(n.data.defect_fmid),1)):Object(r["e"])("",!0),n.data.fuguaiNaiyou?(Object(r["s"])(),Object(r["f"])("h3",s,"不具合内容："+Object(r["B"])(n.data.fuguaiNaiyou),1)):Object(r["e"])("",!0),Object(r["g"])("div",l,[Object(r["g"])("iframe",{src:n.data.src},null,8,u)])])):Object(r["e"])("",!0),n.data.error.title?(Object(r["s"])(),Object(r["f"])("div",p,[n.data.error.title?(Object(r["s"])(),Object(r["f"])("h1",d,Object(r["B"])(n.data.error.title),1)):Object(r["e"])("",!0),(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(n.data.error.message,n=>(Object(r["s"])(),Object(r["f"])("div",{style:{"text-align":"left"},key:n},[Object(r["h"])(Object(r["B"])(n),1),_]))),128))])):Object(r["e"])("",!0)],64)}e("14d9"),e("d9e2");var h=e("cee4"),g=e("34d4");async function b(n){try{const t=g.sparqlUrl,e=y(n),r=t+"?query="+encodeURIComponent(e),o=await h["a"].get(r);let i="",c=[],a={},s=[];[i,c,a,s]=m(o.data.results.bindings);const l=w(c,a,s);return[i,l,""]}catch(t){return["Error","",t]}}function m(n){let t="";const e=[],r={},o=[];return n.forEach(n=>{!t&&n["fuguai_naiyou_val"]&&(t=n["fuguai_naiyou_val"]["value"]),console.log("fuguai_naiyou_val: "+t),n["koshou_nm"]&&-1==e.indexOf(n["koshou_nm"]["value"])&&e.push(n["koshou_nm"]["value"]);const i=n["fuguai_nm"]?n["fuguai_nm"]["value"]:"";(n["fuguai_nm"]&&!(i in r)||n["eikyou_nm"]&&!(i in r))&&(r[i]=[]),n["eikyou_nm"]&&-1==r[i].indexOf(n["eikyou_nm"]["value"])&&r[i].push(n["eikyou_nm"]["value"]),n["konpon_genin_nm"]&&-1==o.indexOf(n["konpon_genin_nm"]["value"])&&o.push(n["konpon_genin_nm"]["value"])}),[t,e,r,o]}function w(n,t,e){let r=0,o="";for(const i of Object.values(n))o+=`subgraph cluster_${r++} {\n`,o+="node [style=filled];\n",o+=`"${i}";\n`,o+='label = "故障";\n',o+="color=red\n",o+="}\n";for(const i of Object.keys(t))o+=`subgraph cluster_${r++} {\n`,i&&(o+=`subgraph cluster_${r++} {\n`,o+="node [style=filled];\n",o+=`"${i}";\n`,o+='label = "不具合認知";\n',o+="color=green\n",o+="}\n"),o+="node [style=filled];\n",o+=`"${t[i].join('","')}";\n`,o+='label = "影響";\n',o+="color=blue\n",o+="}\n";for(const i of Object.values(e))o+=`subgraph cluster_${r++} {\n`,o+="node [style=filled];\n",o+=`"${i}";\n`,o+='label = "根本原因";\n',o+="color=orange\n",o+="}\n";return o}function y(n){const t=`\n        PREFIX brick: <https://brickschema.org/schema/Brick#>\n        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n        \n        select distinct ?issue ?issue_nm ?fuguai_naiyou_val ?fuguai ?fuguai_nm ?koshou ?koshou_nm ?eikyou ?eikyou_nm ?konpon_genin ?konpon_genin_nm where{\n            #issueを取得\n            ?issue <http://www.semanticweb.org/chensisi/ontologies/2022/9/untitled-ontology-163:OWLObjectProperty_c91c8dae_12f9_45ab_ac9e_35a81e8c9dc3> "${n}"@ja. #FMID：検索キー\n            ?issue rdfs:label ?issue_nm.\n            \n            #不具合内容取得\n            OPTIONAL{\n                ?issue <http://www.semanticweb.org/chensisi/ontologies/2023/0/untitled-ontology-188#OWLDataProperty_00000000000000000009> ?fuguai_naiyou_val.\n                <http://www.semanticweb.org/chensisi/ontologies/2023/0/untitled-ontology-188#OWLDataProperty_00000000000000000009> rdfs:label ?fuguai_naiyou_prop_nm.\n            }\n            \n            #不具合認知を取得\n            OPTIONAL{\n                ?issue <http://www.semanticweb.org/chensisi/ontologies/2023/0/untitled-ontology-188#OWLObjectProperty_00000000000000000003> ?fuguai.\n                ?fuguai rdfs:label ?fuguai_nm.\n                <http://www.semanticweb.org/chensisi/ontologies/2023/0/untitled-ontology-188#OWLObjectProperty_00000000000000000003> rdfs:label ?fuguai_prop_nm.\n            }\n            \n            #故障を取得\n            OPTIONAL{\n                ?issue <http://www.semanticweb.org/chensisi/ontologies/2023/0/untitled-ontology-188#OWLObjectProperty_00000000000000000004> ?koshou.\n                ?koshou rdfs:label ?koshou_nm.\n                <http://www.semanticweb.org/chensisi/ontologies/2023/0/untitled-ontology-188#OWLObjectProperty_00000000000000000004> rdfs:label ?koshou_prop_nm.\n            }\n            \n            #影響を取得\n            OPTIONAL{\n                ?issue <http://www.semanticweb.org/chensisi/ontologies/2023/0/untitled-ontology-188#OWLObjectProperty_00000000000000000005> ?eikyou.\n                ?eikyou rdfs:label ?eikyou_nm.\n                <http://www.semanticweb.org/chensisi/ontologies/2023/0/untitled-ontology-188#OWLObjectProperty_00000000000000000005> rdfs:label ?eikyou_prop_nm.\n            }\n            \n            #根本原因を取得\n            OPTIONAL{\n                ?issue <http://www.semanticweb.org/chensisi/ontologies/2023/0/untitled-ontology-188#OWLObjectProperty_00000000000000000006> ?konpon_genin.\n                ?konpon_genin rdfs:label ?konpon_genin_nm.\n                <http://www.semanticweb.org/chensisi/ontologies/2023/0/untitled-ontology-188#OWLObjectProperty_00000000000000000006> rdfs:label ?konpon_genin_prop_nm.\n            }\n                \n        }\n    `;return t}async function O(n,t,e){try{const r=g.sparqlUrl;let o="",i="";if("obj"==t)o=I(n),i=E(n);else{if("tree"!=t)throw new Error("URIパスが存在しません。");o=P(n),i=R(n)}const c=r+"?query="+encodeURIComponent(o),a=r+"?query="+encodeURIComponent(i),s=await h["a"].get(c),l=await h["a"].get(a);let u="",p={},d={};[u,p,d]=k(s.data.results.bindings,u,p,d),[u,p,d]=k(l.data.results.bindings,u,p,d);let _="",f="";u&&e&&await b(e).then(([n,t,e])=>{if(n&&"Error"==n)throw new Error(e);f=n,_=t});const m=j(u,p,d,_);return[u,f,m,""]}catch(r){return["Error","","",r]}}function k(n,t,e,r){return n.forEach(n=>{t||(t=n["tgt_nm"]["value"]),console.log("tgt_node: "+t);const o=n["parent_nm"]["value"];console.log("parent_nm: "+o);const i=n["child_nm"]?n["child_nm"]["value"]:n["child"]["value"];console.log("child_nm: "+i);let c=1==n["parent_is_uri"]["value"]?n["parent"]["value"]:"";c=v(c),console.log("parent_uri: "+c);let a=1==n["child_is_uri"]["value"]||n["child"]&&n["child"]["value"].startsWith("http")?n["child"]["value"]:"";a=v(a),console.log("child_uri: "+a);const s=n["proc_nm"]?n["proc_nm"]["value"]:"";console.log("edge: "+s),o+i+s in e||(e[o+i+s]={parent_nm:o,child_nm:i,edge:s},o in r||(r[o]=c),i in r||(r[i]=a))}),[t,e,r]}function j(n,t,e,r){let o="digraph g {\n";o+="rankdir=LR\n",o+="node [style=filled,color=red];\n",o+=`"${n}";\n`,o+="node [style=filled,color=lightgrey];\n";for(const i of Object.values(t))o+=`"${i.parent_nm}" -> "${i.child_nm}" [label="${i.edge}"]\n`;for(const i of Object.keys(e))o+=`"${i}" [URL="${e[i]}"]\n`;return o+=r,o+="}",console.log(o),o}function v(n){try{const t=new URL(n),e=t.origin,r=t.pathname,o=encodeURIComponent(t.search.slice(1));return e+r+(o?"?"+o:"")}catch(t){return n}}function I(n){const t=`\n        PREFIX brick: <https://brickschema.org/schema/Brick#>\n        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n        select distinct ?tgt ?tgt_nm ?parent_nm ?proc_nm ?child_nm ?parent ?child ?parent_tp_nm ?child_tp_nm ?parent_is_uri ?child_is_uri where{\n            #検索対象を取得\n            ?child <http://www.semanticweb.org/chensisi/ontologies/2022/9/untitled-ontology-163:OWLObjectProperty_c91c8dae_12f9_45ab_ac9e_35a81e8c9dc3> "${n}"@ja. #FMID：検索キー\n            \n            #再帰的に検索対象の下流のオブジェクトを検索（全種類の述語）\n            ?parent ?proc ?child.\n            ?parent rdfs:label ?parent_nm.\n            ?child rdfs:label ?child_nm.\n            ?proc rdfs:label ?proc_nm.\n            \n            #上流側要素のタイプ\n            ?parent a ?parent_tp.\n            ?parent_tp rdfs:label ?parent_tp_nm.\n        \n            #下流側要素のタイプ\n            ?child a ?child_tp.\n            ?child_tp rdfs:label ?child_tp_nm.\n        \n            #URIかどうか確認\n            BIND (isURI(?parent) AS ?parent_is_uri)\n            BIND (isURI(?child) AS ?child_is_uri)\n        \n            #tgtに値を設定\n            BIND (?child AS ?tgt)\n            ?tgt rdfs:label ?tgt_nm.\n        }\n    `;return t}function E(n){const t=`\n        PREFIX brick: <https://brickschema.org/schema/Brick#>\n        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n        \n        select distinct ?tgt ?tgt_nm ?parent_nm ?proc_nm ?child_nm ?parent ?child ?parent_tp_nm ?child_tp_nm ?parent_is_uri ?child_is_uri where{\n            #検索対象を取得\n            ?parent <http://www.semanticweb.org/chensisi/ontologies/2022/9/untitled-ontology-163:OWLObjectProperty_c91c8dae_12f9_45ab_ac9e_35a81e8c9dc3> "${n}"@ja. #FMID：検索キー\n        \n            #再帰的に検索対象の下流のオブジェクトを検索（全種類の述語）\n            ?parent ?proc ?child.\n            ?parent rdfs:label ?parent_nm.\n            OPTIONAL {?child rdfs:label ?child_nm.} #?childが文字列の場合は?child_nmが取れないので、任意とした\n            ?proc rdfs:label ?proc_nm.\n            \n            #上流側要素のタイプ\n            ?parent a ?parent_tp.\n            ?parent_tp rdfs:label ?parent_tp_nm.\n            \n            #下流側要素のタイプ #?childが文字列の場合は?child_tpが取れないので、任意とした\n            OPTIONAL {\n                ?child a ?child_tp.\n                ?child_tp rdfs:label ?child_tp_nm.\n            }\n            \n            #URIかどうか確認\n            BIND (isURI(?parent) AS ?parent_is_uri)\n            BIND (isURI(?child) AS ?child_is_uri)\n            \n            #tgtに値を設定\n            BIND (?parent AS ?tgt)\n            ?tgt rdfs:label ?tgt_nm.\n        }\n    `;return t}function P(n){const t=`\n        PREFIX brick: <https://brickschema.org/schema/Brick#>\n        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n        \n        select distinct ?tgt ?tgt_nm ?parent_nm ?proc_nm ?child_nm ?parent ?child ?parent_tp_nm ?child_tp_nm ?parent_is_uri ?child_is_uri where{\n            #電灯盤取得\n            ?tgt <http://www.semanticweb.org/chensisi/ontologies/2022/9/untitled-ontology-163:OWLObjectProperty_c91c8dae_12f9_45ab_ac9e_35a81e8c9dc3> "${n}"@ja. #FMID：検索キー\n            ?tgt rdfs:label ?tgt_nm.\n        \n            #再帰的に電灯盤の上流のオブジェクトを検索（hasPartsまたはfeedsで結びつくもの）\n            ?parent (brick:hasPart|brick:feeds)+ ?tgt. #1回以上再帰的に検索\n            ?child (brick:hasPart|brick:feeds)* ?tgt. #0回以上再帰的に検索\n            ?parent rdfs:label ?parent_nm.\n            ?child rdfs:label ?child_nm.\n            ?parent ?proc ?child.\n            ?proc rdfs:label ?proc_nm.\n            \n            #上流側要素のタイプ\n            ?parent a ?parent_tp.\n            ?parent_tp rdfs:label ?parent_tp_nm.\n            \n            #下流側要素のタイプ\n            ?child a ?child_tp.\n            ?child_tp rdfs:label ?child_tp_nm.\n                \n            #URIかどうか確認\n            BIND (isURI(?parent) AS ?parent_is_uri)\n            BIND (isURI(?child) AS ?child_is_uri)\n        }\n    `;return t}function R(n){const t=`\n        PREFIX brick: <https://brickschema.org/schema/Brick#>\n        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n        \n        select distinct ?tgt ?tgt_nm ?parent_nm ?proc_nm ?child_nm ?parent ?child ?parent_tp_nm ?child_tp_nm ?parent_is_uri ?child_is_uri where{\n            #電灯盤取得\n            ?tgt <http://www.semanticweb.org/chensisi/ontologies/2022/9/untitled-ontology-163:OWLObjectProperty_c91c8dae_12f9_45ab_ac9e_35a81e8c9dc3> "${n}"@ja. #FMID：検索キー\n            ?tgt rdfs:label ?tgt_nm.\n        \n            #再帰的に電灯盤の配下のオブジェクトを検索（hasPartsまたはfeedsで結びつくもの）\n            ?tgt (brick:hasPart|brick:feeds)* ?parent. #0回以上再帰的に検索\n            ?tgt (brick:hasPart|brick:feeds)+ ?child. #1回以上再帰的に検索\n            ?parent rdfs:label ?parent_nm.\n            ?child rdfs:label ?child_nm.\n            ?parent ?proc ?child.\n            ?proc rdfs:label ?proc_nm.\n            \n            #上流側要素のタイプ\n            ?parent a ?parent_tp.\n            ?parent_tp rdfs:label ?parent_tp_nm.\n            \n            #下流側要素のタイプ\n            ?child a ?child_tp.\n            ?child_tp rdfs:label ?child_tp_nm.\n                \n            #URIかどうか確認\n            BIND (isURI(?parent) AS ?parent_is_uri)\n            BIND (isURI(?child) AS ?child_is_uri)\n        }\n    `;return t}var L=Object(r["j"])({name:"Network",props:{panel_fmid:String,url_pathTop:String,defect_fmid:String},setup(n){const t=Object(r["w"])({panel_name:"",defect_fmid:"",fuguaiNaiyou:"",treedata:[{}],active:"",src:"",error:{title:"",message:[]}});return O(n.panel_fmid,n.url_pathTop,n.defect_fmid).then(([e,r,o,i])=>{if(e&&"Error"!==e){t.panel_name=e,n.defect_fmid&&(t.defect_fmid=n.defect_fmid,t.fuguaiNaiyou=r);let i=encodeURIComponent(o);const c=g.graphvizUrl+"?digraph="+i;console.log(c),t.src=c}else e?(t.error.title=g.dataException.title,g.dataException.message.forEach(n=>{t.error.message.push(n)}),t.error.message.push("・エラーコード：E002"),t.error.message.push("・URLパラメータ1："+n.url_pathTop),t.error.message.push("・FMID："+n.panel_fmid),t.error.message.push("・内容："+i)):(t.error.title=g.notFound.title,g.notFound.message.forEach(n=>{t.error.message.push(n)}),t.error.message.push("・エラーコード：E001"),t.error.message.push("・URLパラメータ1："+n.url_pathTop),t.error.message.push("・FMID："+n.panel_fmid))}),{data:t}}}),x=(e("e484"),e("6b0d")),U=e.n(x);const F=U()(L,[["render",f],["__scopeId","data-v-23269d94"]]);t["a"]=F},"577e":function(n,t,e){var r=e("f5df"),o=String;n.exports=function(n){if("Symbol"===r(n))throw TypeError("Cannot convert a Symbol value to a string");return o(n)}},"6f19":function(n,t,e){var r=e("9112"),o=e("0d26"),i=e("b980"),c=Error.captureStackTrace;n.exports=function(n,t,e,a){i&&(c?c(n,t):r(n,"stack",o(e,a)))}},7156:function(n,t,e){var r=e("1626"),o=e("861d"),i=e("d2bb");n.exports=function(n,t,e){var c,a;return i&&r(c=t.constructor)&&c!==e&&o(a=c.prototype)&&a!==e.prototype&&i(n,a),n}},ab36:function(n,t,e){var r=e("861d"),o=e("9112");n.exports=function(n,t){r(t)&&"cause"in t&&o(n,"cause",t.cause)}},aeb0:function(n,t,e){var r=e("9bf2").f;n.exports=function(n,t,e){e in n||r(n,e,{configurable:!0,get:function(){return t[e]},set:function(n){t[e]=n}})}},b980:function(n,t,e){var r=e("d039"),o=e("5c6c");n.exports=!r((function(){var n=Error("a");return!("stack"in n)||(Object.defineProperty(n,"stack",o(1,7)),7!==n.stack)}))},d2bb:function(n,t,e){var r=e("e330"),o=e("825a"),i=e("3bbe");n.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var n,t=!1,e={};try{n=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),n(e,[]),t=e instanceof Array}catch(c){}return function(e,r){return o(e),i(r),t?n(e,r):e.__proto__=r,e}}():void 0)},d9e2:function(n,t,e){var r=e("23e7"),o=e("da84"),i=e("2ba4"),c=e("e5cb"),a="WebAssembly",s=o[a],l=7!==Error("e",{cause:7}).cause,u=function(n,t){var e={};e[n]=c(n,t,l),r({global:!0,constructor:!0,arity:1,forced:l},e)},p=function(n,t){if(s&&s[n]){var e={};e[n]=c(a+"."+n,t,l),r({target:a,stat:!0,constructor:!0,arity:1,forced:l},e)}};u("Error",(function(n){return function(t){return i(n,this,arguments)}})),u("EvalError",(function(n){return function(t){return i(n,this,arguments)}})),u("RangeError",(function(n){return function(t){return i(n,this,arguments)}})),u("ReferenceError",(function(n){return function(t){return i(n,this,arguments)}})),u("SyntaxError",(function(n){return function(t){return i(n,this,arguments)}})),u("TypeError",(function(n){return function(t){return i(n,this,arguments)}})),u("URIError",(function(n){return function(t){return i(n,this,arguments)}})),p("CompileError",(function(n){return function(t){return i(n,this,arguments)}})),p("LinkError",(function(n){return function(t){return i(n,this,arguments)}})),p("RuntimeError",(function(n){return function(t){return i(n,this,arguments)}}))},e391:function(n,t,e){var r=e("577e");n.exports=function(n,t){return void 0===n?arguments.length<2?"":t:r(n)}},e484:function(n,t,e){"use strict";e("26c0")},e5cb:function(n,t,e){"use strict";var r=e("d066"),o=e("1a2d"),i=e("9112"),c=e("3a9b"),a=e("d2bb"),s=e("e893"),l=e("aeb0"),u=e("7156"),p=e("e391"),d=e("ab36"),_=e("6f19"),f=e("83ab"),h=e("c430");n.exports=function(n,t,e,g){var b="stackTraceLimit",m=g?2:1,w=n.split("."),y=w[w.length-1],O=r.apply(null,w);if(O){var k=O.prototype;if(!h&&o(k,"cause")&&delete k.cause,!e)return O;var j=r("Error"),v=t((function(n,t){var e=p(g?t:n,void 0),r=g?new O(n):new O;return void 0!==e&&i(r,"message",e),_(r,v,r.stack,2),this&&c(k,this)&&u(r,this,v),arguments.length>m&&d(r,arguments[m]),r}));if(v.prototype=k,"Error"!==y?a?a(v,j):s(v,j,{name:!0}):f&&b in O&&(l(v,O,b),l(v,O,"prepareStackTrace")),s(v,O),!h)try{k.name!==y&&i(k,"name",y),k.constructor=v}catch(I){}return v}}},f5df:function(n,t,e){var r=e("00ee"),o=e("1626"),i=e("c6b6"),c=e("b622"),a=c("toStringTag"),s=Object,l="Arguments"==i(function(){return arguments}()),u=function(n,t){try{return n[t]}catch(e){}};n.exports=r?i:function(n){var t,e,r;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(e=u(t=s(n),a))?e:l?i(t):"Object"==(r=i(t))&&o(t.callee)?"Arguments":r}}}]);
//# sourceMappingURL=obj~tree.1b67cc87.js.map