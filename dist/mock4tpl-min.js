/*! mock-data 14-08-2013 */
!function(){var a={VERSION:"0.0.1"},b=Mock.Random,c=Mock.Util,d=function(){function a(){this.yy={}}var b={trace:function(){},yy:{},symbols_:{error:2,root:3,statements:4,EOF:5,program:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,CLOSE_UNESCAPED:24,OPEN_PARTIAL:25,partialName:26,partial_option0:27,inMustache_repetition0:28,inMustache_option0:29,dataName:30,param:31,STRING:32,INTEGER:33,BOOLEAN:34,hash:35,hash_repetition_plus0:36,hashSegment:37,ID:38,EQUALS:39,DATA:40,pathSegments:41,SEP:42,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",38:"ID",39:"EQUALS",40:"DATA",42:"SEP"},productions_:[0,[3,2],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[35,1],[37,3],[26,1],[26,1],[26,1],[30,2],[21,1],[41,3],[41,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[36,1],[36,2]],performAction:function(a,b,c,d,e,f){var g=f.length-1;switch(e){case 1:return new d.ProgramNode(f[g-1]);case 2:this.$=new d.ProgramNode([],f[g]);break;case 3:this.$=new d.ProgramNode(f[g-2],f[g]);break;case 4:this.$=new d.ProgramNode(f[g-1],[]);break;case 5:this.$=new d.ProgramNode(f[g]);break;case 6:this.$=new d.ProgramNode([]);break;case 7:this.$=new d.ProgramNode([]);break;case 8:this.$=[f[g]];break;case 9:f[g-1].push(f[g]),this.$=f[g-1];break;case 10:this.$=new d.BlockNode(f[g-2],f[g-1].inverse,f[g-1],f[g]);break;case 11:this.$=new d.BlockNode(f[g-2],f[g-1],f[g-1].inverse,f[g]);break;case 12:this.$=f[g];break;case 13:this.$=f[g];break;case 14:this.$=new d.ContentNode(f[g]);break;case 15:this.$=new d.CommentNode(f[g]);break;case 16:this.$=new d.MustacheNode(f[g-1][0],f[g-1][1]);break;case 17:this.$=new d.MustacheNode(f[g-1][0],f[g-1][1]);break;case 18:this.$=f[g-1];break;case 19:this.$=new d.MustacheNode(f[g-1][0],f[g-1][1],"&"===f[g-2][2]);break;case 20:this.$=new d.MustacheNode(f[g-1][0],f[g-1][1],!0);break;case 21:this.$=new d.PartialNode(f[g-2],f[g-1]);break;case 22:break;case 23:this.$=[[f[g-2]].concat(f[g-1]),f[g]];break;case 24:this.$=[[f[g]],null];break;case 25:this.$=f[g];break;case 26:this.$=new d.StringNode(f[g]);break;case 27:this.$=new d.IntegerNode(f[g]);break;case 28:this.$=new d.BooleanNode(f[g]);break;case 29:this.$=f[g];break;case 30:this.$=new d.HashNode(f[g]);break;case 31:this.$=[f[g-2],f[g]];break;case 32:this.$=new d.PartialNameNode(f[g]);break;case 33:this.$=new d.PartialNameNode(new d.StringNode(f[g]));break;case 34:this.$=new d.PartialNameNode(new d.IntegerNode(f[g]));break;case 35:this.$=new d.DataNode(f[g]);break;case 36:this.$=new d.IdNode(f[g]);break;case 37:f[g-2].push({part:f[g],separator:f[g-1]}),this.$=f[g-2];break;case 38:this.$=[{part:f[g]}];break;case 41:this.$=[];break;case 42:f[g-1].push(f[g]);break;case 45:this.$=[f[g]];break;case 46:f[g-1].push(f[g])}},table:[{3:1,4:2,8:3,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,10],22:[1,12],23:[1,13],25:[1,14]},{1:[3]},{5:[1,15],8:16,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,10],22:[1,12],23:[1,13],25:[1,14]},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],25:[2,8]},{4:19,6:17,7:18,8:3,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,20],20:[2,7],22:[1,12],23:[1,13],25:[1,14]},{4:19,6:21,7:18,8:3,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,20],20:[2,7],22:[1,12],23:[1,13],25:[1,14]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{17:22,21:23,30:24,38:[1,27],40:[1,26],41:25},{17:28,21:23,30:24,38:[1,27],40:[1,26],41:25},{17:29,21:23,30:24,38:[1,27],40:[1,26],41:25},{17:30,21:23,30:24,38:[1,27],40:[1,26],41:25},{21:32,26:31,32:[1,33],33:[1,34],38:[1,27],41:25},{1:[2,1]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{10:35,20:[1,36]},{4:37,8:3,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,10],20:[2,6],22:[1,12],23:[1,13],25:[1,14]},{7:38,8:16,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,20],20:[2,5],22:[1,12],23:[1,13],25:[1,14]},{17:22,18:[1,39],21:23,30:24,38:[1,27],40:[1,26],41:25},{10:40,20:[1,36]},{18:[1,41]},{18:[2,41],24:[2,41],28:42,32:[2,41],33:[2,41],34:[2,41],38:[2,41],40:[2,41]},{18:[2,24],24:[2,24]},{18:[2,36],24:[2,36],32:[2,36],33:[2,36],34:[2,36],38:[2,36],40:[2,36],42:[1,43]},{21:44,38:[1,27],41:25},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],38:[2,38],40:[2,38],42:[2,38]},{18:[1,45]},{18:[1,46]},{24:[1,47]},{18:[2,39],21:49,27:48,38:[1,27],41:25},{18:[2,32],38:[2,32]},{18:[2,33],38:[2,33]},{18:[2,34],38:[2,34]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{21:50,38:[1,27],41:25},{8:16,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,10],20:[2,2],22:[1,12],23:[1,13],25:[1,14]},{4:51,8:3,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,10],20:[2,4],22:[1,12],23:[1,13],25:[1,14]},{14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{18:[2,43],21:55,24:[2,43],29:52,30:59,31:53,32:[1,56],33:[1,57],34:[1,58],35:54,36:60,37:61,38:[1,62],40:[1,26],41:25},{38:[1,63]},{18:[2,35],24:[2,35],32:[2,35],33:[2,35],34:[2,35],38:[2,35],40:[2,35]},{14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{18:[1,64]},{18:[2,40]},{18:[1,65]},{8:16,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,10],20:[2,3],22:[1,12],23:[1,13],25:[1,14]},{18:[2,23],24:[2,23]},{18:[2,42],24:[2,42],32:[2,42],33:[2,42],34:[2,42],38:[2,42],40:[2,42]},{18:[2,44],24:[2,44]},{18:[2,25],24:[2,25],32:[2,25],33:[2,25],34:[2,25],38:[2,25],40:[2,25]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],38:[2,26],40:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],38:[2,27],40:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],38:[2,28],40:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],38:[2,29],40:[2,29]},{18:[2,30],24:[2,30],37:66,38:[1,67]},{18:[2,45],24:[2,45],38:[2,45]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],38:[2,38],39:[1,68],40:[2,38],42:[2,38]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],38:[2,37],40:[2,37],42:[2,37]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,46],24:[2,46],38:[2,46]},{39:[1,68]},{21:55,30:59,31:69,32:[1,56],33:[1,57],34:[1,58],38:[1,27],40:[1,26],41:25},{18:[2,31],24:[2,31],38:[2,31]}],defaultActions:{15:[2,1],49:[2,40]},parseError:function(a,b){if(!b.recoverable)throw new Error(a);this.trace(a)},parse:function(a){function b(){var a;return a=c.lexer.lex()||m,"number"!=typeof a&&(a=c.symbols_[a]||a),a}var c=this,d=[0],e=[null],f=[],g=this.table,h="",i=0,j=0,k=0,l=2,m=1;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var n=this.lexer.yylloc;f.push(n);var o=this.lexer.options&&this.lexer.options.ranges;this.parseError="function"==typeof this.yy.parseError?this.yy.parseError:Object.getPrototypeOf(this).parseError;for(var p,q,r,s,t,u,v,w,x,y={};;){if(r=d[d.length-1],this.defaultActions[r]?s=this.defaultActions[r]:((null===p||"undefined"==typeof p)&&(p=b()),s=g[r]&&g[r][p]),"undefined"==typeof s||!s.length||!s[0]){var z="";x=[];for(u in g[r])this.terminals_[u]&&u>l&&x.push("'"+this.terminals_[u]+"'");z=this.lexer.showPosition?"Parse error on line "+(i+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+x.join(", ")+", got '"+(this.terminals_[p]||p)+"'":"Parse error on line "+(i+1)+": Unexpected "+(p==m?"end of input":"'"+(this.terminals_[p]||p)+"'"),this.parseError(z,{text:this.lexer.match,token:this.terminals_[p]||p,line:this.lexer.yylineno,loc:n,expected:x})}if(s[0]instanceof Array&&s.length>1)throw new Error("Parse Error: multiple actions possible at state: "+r+", token: "+p);switch(s[0]){case 1:d.push(p),e.push(this.lexer.yytext),f.push(this.lexer.yylloc),d.push(s[1]),p=null,q?(p=q,q=null):(j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,n=this.lexer.yylloc,k>0&&k--);break;case 2:if(v=this.productions_[s[1]][1],y.$=e[e.length-v],y._$={first_line:f[f.length-(v||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(v||1)].first_column,last_column:f[f.length-1].last_column},o&&(y._$.range=[f[f.length-(v||1)].range[0],f[f.length-1].range[1]]),t=this.performAction.call(y,h,j,i,this.yy,s[1],e,f),"undefined"!=typeof t)return t;v&&(d=d.slice(0,2*-1*v),e=e.slice(0,-1*v),f=f.slice(0,-1*v)),d.push(this.productions_[s[1]][0]),e.push(y.$),f.push(y._$),w=g[d[d.length-2]][d[d.length-1]],d.push(w);break;case 3:return!0}}return!0}},c=function(){var a={EOF:1,parseError:function(a,b){if(!this.yy.parser)throw new Error(a);this.yy.parser.parseError(a,b)},setInput:function(a){return this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var b=a.match(/(?:\r\n?|\n).*/g);return b?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-b-1),this.offset-=b;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-b},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-b]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=new Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},test_match:function(a,b){var c,d,e;if(this.options.backtrack_lexer&&(e={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(e.yylloc.range=this.yylloc.range.slice(0))),d=a[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],c=this.performAction.call(this,this.yy,this,b,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var f in e)this[f]=e[f];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d;this._more||(this.yytext="",this.match="");for(var e=this._currentRules(),f=0;f<e.length;f++)if(c=this._input.match(this.rules[e[f]]),c&&(!b||c[0].length>b[0].length)){if(b=c,d=f,this.options.backtrack_lexer){if(a=this.test_match(c,e[f]),a!==!1)return a;if(this._backtrack){b=!1;continue}return!1}if(!this.options.flex)break}return b?(a=this.test_match(b,e[d]),a!==!1?a:!1):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},pushState:function(a){this.begin(a)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(a,b,c,d){function e(a,c){return b.yytext=b.yytext.substr(a,b.yyleng-c)}switch(c){case 0:return b.yytext="\\",14;case 1:if("\\"!==b.yytext.slice(-1)&&this.begin("mu"),"\\"===b.yytext.slice(-1)&&(e(0,1),this.begin("emu")),b.yytext)return 14;break;case 2:return 14;case 3:return"\\"!==b.yytext.slice(-1)&&this.popState(),"\\"===b.yytext.slice(-1)&&e(0,1),14;case 4:return e(0,4),this.popState(),15;case 5:return 25;case 6:return 25;case 7:return 16;case 8:return 20;case 9:return 19;case 10:return 19;case 11:return 23;case 12:return 22;case 13:this.popState(),this.begin("com");break;case 14:return e(3,5),this.popState(),15;case 15:return 22;case 16:return 39;case 17:return 38;case 18:return 38;case 19:return 42;case 20:break;case 21:return this.popState(),24;case 22:return this.popState(),18;case 23:return b.yytext=e(1,2).replace(/\\"/g,'"'),32;case 24:return b.yytext=e(1,2).replace(/\\'/g,"'"),32;case 25:return 40;case 26:return 34;case 27:return 34;case 28:return 33;case 29:return 38;case 30:return b.yytext=e(1,2),38;case 31:return"INVALID";case 32:return 5}},rules:[/^(?:\\\\(?=(\{\{)))/,/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\{\{>)/,/^(?:\{\{include\b)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{\s*else\b)/,/^(?:\{\{\{)/,/^(?:\{\{&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:=)/,/^(?:\.(?=[}\/ ]))/,/^(?:\.\.)/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}\}\})/,/^(?:\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=[}\s]))/,/^(?:false(?=[}\s]))/,/^(?:-?[0-9]+(?=[}\s]))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],conditions:{mu:{rules:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],inclusive:!1},emu:{rules:[3],inclusive:!1},com:{rules:[4],inclusive:!1},INITIAL:{rules:[0,1,2,32],inclusive:!0}}};return a}();return b.lexer=c,a.prototype=b,b.Parser=a,new a}(),e={};e.ProgramNode=function(a,b){this.type="program",this.statements=a,b&&(this.inverse=new e.ProgramNode(b))},e.MustacheNode=function(a,b,c){this.type="mustache",this.escaped=!c,this.hash=b;var d=this.id=a[0],e=this.params=a.slice(1),f=this.eligibleHelper=d.isSimple;this.isHelper=f&&(e.length||b)},e.PartialNode=function(a,b){this.type="partial",this.partialName=a,this.context=b},e.BlockNode=function(a,b,c,d){if(a.id.original!==d.original)throw new Exception(a.id.original+" doesn't match "+d.original);this.type="block",this.mustache=a,this.program=b,this.inverse=c,this.inverse&&!this.program&&(this.isInverse=!0)},e.ContentNode=function(a){this.type="content",this.string=a},e.HashNode=function(a){this.type="hash",this.pairs=a},e.IdNode=function(a){this.type="ID";for(var b="",c=[],d=0,e=0,f=a.length;f>e;e++){var g=a[e].part;if(b+=(a[e].separator||"")+g,".."===g||"."===g||"this"===g){if(c.length>0)throw new Exception("Invalid path: "+b);".."===g?d++:this.isScoped=!0}else c.push(g)}this.original=b,this.parts=c,this.string=c.join("."),this.depth=d,this.isSimple=1===a.length&&!this.isScoped&&0===d,this.stringModeValue=this.string},e.PartialNameNode=function(a){this.type="PARTIAL_NAME",this.name=a.original},e.DataNode=function(a){this.type="DATA",this.id=a},e.StringNode=function(a){this.type="STRING",this.original=this.string=this.stringModeValue=a},e.IntegerNode=function(a){this.type="INTEGER",this.original=this.integer=a,this.stringModeValue=Number(a)},e.BooleanNode=function(a){this.type="BOOLEAN",this.bool=a,this.stringModeValue="true"===a},e.CommentNode=function(a){this.type="comment",this.comment=a},d.yy=e,a.mock=function(a,b,c,d){return f.gen(a,null,b,c,d)};var f={debug:a.debug||!1,extend:c.extend};f.gen=function(b,d,e,g,h){if(c.isString(b)){var i=Parser.parse(b),j=f.gen(i,d,e,g,h);return j}if(d=d||[{}],e=e||{},this[b.type]!==c.noop){e.__path=e.__path||[],(a.debug||f.debug)&&(console.log(),console.group("["+b.type+"]",JSON.stringify(b)),console.log("[options]",e.__path.length,JSON.stringify(e)));var k=e.__path.length;return this[b.type](b,d,e,g,h),e.__path.splice(k),(a.debug||f.debug)&&console.groupEnd(),d[d.length-1]}},f.val=function(d,e,g,h){if(d!==e.__path[e.__path.length-1])throw new Error(d+"!=="+e.__path);if((a.debug||f.debug)&&console.log("[options]",d,e.__path),h&&(h=Mock.mock(h)),e){var i=Mock.mock(e);if(c.isString(i))return i;if(d in i)return i[d]}return c.isArray(g[0])?{}:h||d||b.word()},f.program=function(a,b,c,d,e){for(var f=0;f<a.statements.length;f++)this.gen(a.statements[f],b,c,d,e)},f.mustache=function(a,b,d,e,f){var g,h=b[0],i=b.length;if("array"===c.type(h)&&(h.push({}),h=h[h.length-1],b.unshift(h)),a.isHelper||e&&e[a.id.string]){if(0===a.params.length);else for(g=0;g<a.params.length;g++)this.gen(a.params[g],b,d,e,f);a.hash&&this.gen(a.hash,b,d,e,f)}else this.gen(a.id,b,d,e,f);b.length>i&&b.splice(0,b.length-i)},f.block=function(a,d,e,f,h){var i,j,k,l,m,n=a.mustache.id.parts,o=d[0],p=d.length;if(a.inverse,a.mustache.isHelper||f&&f[a.mustache.id.string])m=n[0],l=(g[m]||g.custom).apply(this,arguments),o=d[0];else for(i=0;i<n.length;i++)e.__path.push(n[i]),k=n[i],l=this.val(k,e,d,{}),o[k]=c.isArray(l)&&[]||l,m=c.type(o[k]),("object"===m||"array"===m)&&(o=o[k],d.unshift(o));if(a.program)if("array"===c.type(o))for(j=l.length||b.integer(3,7),i=0;j>i;i++)o.push("undefined"!=typeof l[i]?l[i]:{}),e.__path.push("[]"),d.unshift(o[o.length-1]),this.gen(a.program,d,e,f,h),e.__path.pop(),d.shift();else this.gen(a.program,d,e,f,h);d.length>p&&d.splice(0,d.length-p)},f.hash=function(a,b,c,d,e){var f,g,h,i=a.pairs;for(g=0;g<i.length;g++)for(f=i[g],h=1;h<f.length;h++)this.gen(f[h],b,c,d,e)},f.ID=function(a,b,d){var e,f,g,h,i,j,k,l,m,n=a.parts,o=b[a.depth],p=b.length;if(c.isArray(o)&&(o=b[a.depth+1]),n.length)for(e=0,f=n.length;f>e;e++)d.__path.push(n[e]),g=n[e],h=n[e-1],m=d[h],i=e===f-1?o[g]:{},j=this.val(g,d,b,i),k=c.type(o[g]),l=c.type(j),"undefined"===k?o[g]=f-1>e&&"object"!==l&&"array"!==l?{}:c.isArray(j)&&[]||j:f-1>e&&"object"!==k&&"array"!==k&&(o[g]=c.isArray(j)&&[]||{}),k=c.type(o[g]),("object"===k||"array"===k)&&(o=o[g],b.unshift(o));else;b.length>p&&b.splice(0,b.length-p)},f.partial=function(a,b,c,d,e){var g=a.partialName.name,h=e&&e[g],i=b.length;h&&f.gen(h,b,c,d,e),b.length>i&&b.splice(0,b.length-i)},f.content=c.noop,f.PARTIAL_NAME=c.noop,f.DATA=c.noop,f.STRING=c.noop,f.INTEGER=c.noop,f.BOOLEAN=c.noop,f.comment=c.noop;var g={};g.each=function(a,b,d){var e,f,g,h,i,j,k,l=b[0];for(i=a.mustache.params[0].parts,e=0,f=i.length;f>e;e++)d.__path.push(i[e]),g=i[e],j=e===f-1?[]:{},h=this.val(g,d,b,j),l[g]=c.isArray(h)&&[]||h,k=c.type(l[g]),("object"===k||"array"===k)&&(l=l[g],b.unshift(l));return h},g["if"]=g.unless=function(a,b,d){var e,f,g,h,i,j,k=a.mustache.params,l=b[0];for(e=0;e<k.length;e++)for(parts=k[e].parts,f=0;f<parts.length;f++)0===e&&d.__path.push(parts[f]),g=parts[f],i=f===parts.length-1?"@BOOL(2,1,true)":{},h=this.val(g,d,b,i),f===parts.length-1&&(h="true"===h?!0:"false"===h?!1:h),l[g]=c.isArray(h)?[]:h,j=c.type(l[g]),("object"===j||"array"===j)&&(l=l[g],b.unshift(l));return h},g["with"]=function(a,b,c){var d,e,f,g,h,i=b[0];for(g=a.mustache.params[0].parts,d=0;d<g.length;d++)c.__path.push(g[d]),e=g[d],h={},f=this.val(e,c,b,h),i=i[e]=f,b.unshift(i);return f},g.log=function(){},g.custom=function(a,b,d){var e,f,g,h,i,j,k,l=b[0];if(0!==a.mustache.params.length){for(i=a.mustache.params[0].parts,e=0,f=i.length;f>e;e++)d.__path.push(i[e]),g=i[e],j=e===f-1?[]:{},h=this.val(g,d,b,j),l[g]=c.isArray(h)&&[]||h,k=c.type(l[g]),("object"===k||"array"===k)&&(l=l[g],b.unshift(l));return h}},a.Parser=d,a.AST=e,"object"==typeof module&&module.exports?module.exports=a:"function"==typeof define&&define.amd?define(function(){return a}):this.Mock4Tpl=a,"undefined"!=typeof KISSY&&KISSY.add("mock4tpl",function(){return a},{requires:["mock"]})}.call(this);