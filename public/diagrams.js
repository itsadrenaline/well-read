/* the moves: side-view figures. J = [head, shoulder, hip, knee, foot, foot2, [armA elbow, hand], [armB elbow, hand]] */
var HER="#FF5C8A", HIM="#FFB547";
function fig(j,col){
  var p=function(a){return a[0]+" "+a[1];}, s='<g stroke="'+col+'" fill="none" stroke-linecap="round" stroke-linejoin="round">';
  s+='<path stroke-width="9" d="M'+p(j.hip)+'L'+p(j.k1)+'L'+p(j.f1)+'M'+p(j.hip)+'L'+p(j.k2)+'L'+p(j.f2)+'"/>';
  s+='<path stroke-width="15" d="M'+p(j.sh)+'L'+p(j.hip)+'"/>';
  j.arms.forEach(function(a){s+='<path stroke-width="7" d="M'+p(j.sh)+'L'+p(a[0])+'L'+p(a[1])+'"/>';});
  s+='</g><circle cx="'+j.head[0]+'" cy="'+j.head[1]+'" r="10" fill="'+col+'"/>';
  return s;
}
function pin(n,x,y){return '<circle cx="'+x+'" cy="'+y+'" r="9" fill="#120E1F" stroke="#FFB547" stroke-width="2"/><text x="'+x+'" y="'+(y+4)+'" text-anchor="middle" font-size="11" font-weight="700" fill="#FFB547" font-family="sans-serif">'+n+'</text>';}
var GROUND='<path d="M10 190H230" stroke="#5A4A8A" stroke-width="2" stroke-linecap="round"/>';
var MOVES=[
{id:"lean",t:"The lean",where:"Walls and doorframes, in nearly every book on the shelf.",
 steps:["Forearm on the wall above her shoulder. One arm only.","Stop a hand's width away. She closes the gap or she does not.","Leave one side open so she can walk off whenever she likes."],say:"Tell me to move and I will.",
 art:'<path d="M46 20V190" stroke="#5A4A8A" stroke-width="6" stroke-linecap="round"/>'+
  fig({head:[66,70],sh:[64,90],hip:[64,134],k1:[66,162],f1:[64,188],k2:[70,162],f2:[74,188],arms:[[[70,110],[76,126]]]},HER)+
  fig({head:[104,56],sh:[110,78],hip:[122,130],k1:[120,160],f1:[114,188],k2:[130,160],f2:[136,188],arms:[[[84,56],[52,44]],[[122,102],[120,124]]]},HIM)+
  pin(1,52,28)+pin(2,88,96)+pin(3,84,172)},
{id:"chin",t:"The chin tilt",where:"The standard move right before a first kiss or a hard truth.",
 steps:["Two fingers under her chin. A lift, never a grip.","Raise it until she is looking at you.","Hold her eyes one breath longer than feels comfortable."],say:"Look at me. There you are.",
 art:fig({head:[98,72],sh:[96,92],hip:[96,136],k1:[98,164],f1:[96,188],k2:[102,164],f2:[106,188],arms:[[[98,112],[100,130]]]},HER)+
  fig({head:[142,58],sh:[144,80],hip:[146,132],k1:[144,162],f1:[140,188],k2:[150,162],f2:[156,188],arms:[[[128,98],[110,84]],[[150,104],[150,126]]]},HIM)+
  pin(1,112,100)+pin(2,84,60)+pin(3,120,44)},
{id:"forehead",t:"The forehead rest",where:"After the battle, after the fight, after any long day apart.",
 steps:["Both hands at her jaw, thumbs on her cheeks.","Rest your forehead on hers and stop talking.","Count to five before either of you says anything."],say:"I have you.",
 art:fig({head:[108,70],sh:[102,90],hip:[98,136],k1:[100,164],f1:[98,188],k2:[104,164],f2:[108,188],arms:[[[114,108],[128,100]]]},HER)+
  fig({head:[127,63],sh:[138,82],hip:[146,132],k1:[144,162],f1:[140,188],k2:[152,162],f2:[158,188],arms:[[[130,100],[114,80]]]},HIM)+
  pin(1,104,48)+pin(2,128,42)+pin(3,172,70)},
{id:"kneel",t:"The kneel",where:"Powerful men kneeling for exactly one person is a pillar of the genre.",
 steps:["Go down on one knee in front of her.","Tie the lace, fix the strap, zip the boot.","Look up at her before you stand."],say:"Hold still. I have it.",
 art:fig({head:[92,58],sh:[92,78],hip:[92,130],k1:[94,160],f1:[92,188],k2:[98,160],f2:[104,188],arms:[[[108,96],[128,112]]]},HER)+
  fig({head:[138,100],sh:[140,120],hip:[152,160],k1:[128,160],f1:[128,188],k2:[164,186],f2:[188,186],arms:[[[126,146],[108,176]]]},HIM)+
  pin(1,176,160)+pin(2,112,160)+pin(3,146,78)},
{id:"carry",t:"The carry",where:"She is hurt, exhausted or just barefoot. He does not ask twice.",
 steps:["One arm behind her back, one under her knees.","Lift with your legs. Her arm goes around your neck.","Walk like it weighs nothing. Set her down gently."],say:"You have walked enough today.",
 art:fig({head:[128,48],sh:[128,70],hip:[128,126],k1:[126,158],f1:[122,188],k2:[134,158],f2:[140,188],arms:[[[110,96],[98,104]],[[140,100],[156,106]]]},HIM)+
  fig({head:[88,80],sh:[98,90],hip:[136,104],k1:[160,96],f1:[168,124],k2:[162,98],f2:[172,122],arms:[[[112,74],[128,66]]]},HER)+
  pin(1,84,116)+pin(2,150,54)+pin(3,186,170)},
{id:"back",t:"The hand on the back",where:"Through every door, across every crowded ballroom.",
 steps:["Open palm at the small of her back.","Guide, never push. Stay half a step behind her.","Take the hand away once she is through the door."],say:"After you.",
 art:'<path d="M176 190V36H222V190" stroke="#5A4A8A" stroke-width="5" fill="none" stroke-linejoin="round"/>'+
  fig({head:[86,56],sh:[84,78],hip:[84,130],k1:[90,160],f1:[84,188],k2:[80,160],f2:[94,188],arms:[[[100,100],[116,114]]]},HIM)+
  fig({head:[130,70],sh:[128,90],hip:[128,134],k1:[136,162],f1:[130,188],k2:[124,162],f2:[142,188],arms:[[[136,108],[146,122]]]},HER)+
  pin(1,112,134)+pin(2,62,104)+pin(3,198,22)}
];


/* book-specific scenes: a few staged poses, dressed with props */
var PROP="#5A4A8A", LIGHT="#F4EFF8";
function stageArt(tpl,o){
  o=o||{}; var s="";
  if(tpl==="spar"){
    s+=fig({head:[84,74],sh:[86,94],hip:[80,138],k1:[92,162],f1:[96,188],k2:[70,164],f2:[60,188],arms:[[[104,98],[124,92]],[[92,112],[104,104]]]},HER);
    s+=fig({head:[162,60],sh:[160,82],hip:[168,134],k1:[156,160],f1:[150,188],k2:[180,162],f2:[190,188],arms:[[[146,94],[138,76]],[[152,102],[144,90]]]},HIM);
    if(o.blade) s+='<path d="M124 92L150 85" stroke="'+LIGHT+'" stroke-width="3.500" stroke-linecap="round"/><path d="M127 86L129 97" stroke="'+LIGHT+'" stroke-width="3" stroke-linecap="round"/>';
    if(o.magic) s+='<circle cx="128" cy="90" r="9" fill="#3FD0B6" opacity=".85"/><circle cx="128" cy="90" r="16" fill="#3FD0B6" opacity=".25"/><circle cx="136" cy="74" r="7" fill="#FF8A5C" opacity=".85"/><circle cx="136" cy="74" r="13" fill="#FF8A5C" opacity=".25"/>';
  }
  if(tpl==="wingcarry"){
    s+='<g fill="'+PROP+'" opacity=".95"><path d="M130 78C152 30 200 22 228 38 208 46 198 60 192 80 176 70 152 74 130 84Z"/><path d="M126 78C102 32 58 24 14 42 36 50 48 62 54 82 72 72 102 74 126 84Z"/></g>';
    s+='<g fill="'+LIGHT+'"><circle cx="30" cy="20" r="1.500"/><circle cx="70" cy="12" r="1"/><circle cx="196" cy="14" r="1.500"/><circle cx="222" cy="70" r="1"/><circle cx="20" cy="96" r="1"/></g>';
    s+=fig({head:[128,48],sh:[128,70],hip:[128,126],k1:[126,158],f1:[122,188],k2:[134,158],f2:[140,188],arms:[[[110,96],[98,104]],[[140,100],[156,106]]]},HIM);
    s+=fig({head:[88,80],sh:[98,90],hip:[136,104],k1:[160,96],f1:[168,124],k2:[162,98],f2:[172,122],arms:[[[112,74],[128,66]]]},HER);
  }
  if(tpl==="dance"){
    s+='<g fill="'+LIGHT+'" opacity=".7"><circle cx="40" cy="30" r="2"/><circle cx="200" cy="24" r="2"/><circle cx="60" cy="60" r="1.500"/><circle cx="186" cy="64" r="1.500"/></g>';
    s+=fig({head:[104,72],sh:[102,92],hip:[102,136],k1:[98,164],f1:[94,188],k2:[108,164],f2:[112,188],arms:[[[108,78],[122,66]],[[116,100],[134,86]]]},HER);
    s+=fig({head:[142,58],sh:[140,80],hip:[140,132],k1:[136,162],f1:[132,188],k2:[148,162],f2:[152,188],arms:[[[132,68],[122,66]],[[124,106],[106,122]]]},HIM);
  }
  if(tpl==="sit"){
    s+='<rect x="58" y="146" width="124" height="12" rx="4" fill="'+PROP+'"/><path d="M66 158V188M174 158V188" stroke="'+PROP+'" stroke-width="6" stroke-linecap="round"/>';
    s+=fig({head:[142,72],sh:[142,94],hip:[142,144],k1:[134,150],f1:[134,186],k2:[152,150],f2:[152,186],arms:[[[122,104],[92,106]],[[154,116],[150,134]]]},HIM);
    s+=fig({head:[100,84],sh:[100,104],hip:[100,146],k1:[92,152],f1:[92,186],k2:[110,152],f2:[110,186],arms:[[[92,122],[98,136]]]},HER);
    if(o.prop==="book") s+='<path d="M138 128l12-5 12 5v12l-12-5-12 5z" fill="'+LIGHT+'"/>';
    if(o.prop==="cups") s+='<rect x="143" y="126" width="11" height="13" rx="2" fill="'+LIGHT+'"/><rect x="93" y="128" width="11" height="13" rx="2" fill="'+LIGHT+'"/><path d="M146 122c0-4 4-4 4-8M96 124c0-4 4-4 4-8" stroke="'+LIGHT+'" stroke-width="1.500" fill="none" opacity=".6"/>';
    if(o.prop==="tv") s+='<rect x="18" y="26" width="70" height="42" rx="5" fill="#3FD0B6" opacity=".85"/><rect x="18" y="26" width="70" height="42" rx="5" fill="none" stroke="'+PROP+'" stroke-width="4"/><path d="M90 50L130 70M90 60L112 96" stroke="#3FD0B6" stroke-width="2" opacity=".3"/>';
    if(o.prop==="moons") s+='<circle cx="52" cy="38" r="18" fill="'+LIGHT+'"/><circle cx="96" cy="22" r="8" fill="'+LIGHT+'" opacity=".8"/><circle cx="196" cy="34" r="11" fill="'+LIGHT+'" opacity=".8"/><circle cx="170" cy="14" r="4" fill="'+LIGHT+'" opacity=".6"/>';
  }
  if(tpl==="bench"){
    s+='<rect x="118" y="120" width="64" height="9" rx="3" fill="'+PROP+'"/><path d="M126 129V188M174 129V188" stroke="'+PROP+'" stroke-width="6" stroke-linecap="round"/>';
    if(o.prop==="anvil") s+='<path d="M132 120v-8h-10l8-10h36v10h-8v8z" fill="'+LIGHT+'"/><path d="M128 110L112 84" stroke="'+LIGHT+'" stroke-width="4" stroke-linecap="round"/><rect x="104" y="76" width="16" height="10" rx="2" fill="'+LIGHT+'" transform="rotate(-30 112 81)"/><g fill="#FFB547"><circle cx="150" cy="90" r="2"/><circle cx="160" cy="80" r="1.500"/><circle cx="142" cy="78" r="1.500"/></g>';
    if(o.prop==="pot") s+='<path d="M136 120v-16h30v16z" fill="'+LIGHT+'"/><path d="M130 104h42" stroke="'+LIGHT+'" stroke-width="4" stroke-linecap="round"/><path d="M144 96c0-6 5-6 5-12M156 96c0-6 5-6 5-12" stroke="'+LIGHT+'" stroke-width="2" fill="none" opacity=".6"/>';
    s+=fig({head:[58,58],sh:[60,80],hip:[60,132],k1:[58,162],f1:[54,188],k2:[66,162],f2:[70,188],arms:[[[70,100],[76,120]]]},HIM);
    s+=fig({head:[98,72],sh:[100,92],hip:[98,136],k1:[96,164],f1:[92,188],k2:[104,164],f2:[108,188],arms:[[[114,104],[128,110]]]},HER);
  }
  if(tpl==="offer"){
    s+=fig({head:[84,72],sh:[86,92],hip:[86,136],k1:[84,164],f1:[80,188],k2:[92,164],f2:[96,188],arms:[[[100,104],[112,110]]]},HER);
    s+=fig({head:[160,58],sh:[158,80],hip:[158,132],k1:[154,162],f1:[150,188],k2:[164,162],f2:[170,188],arms:[[[146,98],[134,108]]]},HIM);
    s+='<path d="M112 110L176 100" stroke="'+LIGHT+'" stroke-width="3.500" stroke-linecap="round"/><path d="M124 102L126 116" stroke="'+LIGHT+'" stroke-width="3.500" stroke-linecap="round"/>';
  }
  if(tpl==="door"){
    s+='<path d="M176 190V36H222V190" stroke="'+PROP+'" stroke-width="5" fill="none" stroke-linejoin="round"/><path d="M180 188V40H218V188Z" fill="#FFB547" opacity=".16"/>';
    s+=fig({head:[150,58],sh:[150,80],hip:[150,132],k1:[148,162],f1:[144,188],k2:[154,162],f2:[158,188],arms:[[[164,92],[176,100]]]},HIM);
    s+=fig({head:[96,72],sh:[96,92],hip:[96,136],k1:[104,162],f1:[100,188],k2:[92,162],f2:[110,188],arms:[[[102,110],[110,126]]]},HER);
  }
  if(tpl==="table"){
    s+='<rect x="94" y="132" width="52" height="7" rx="3" fill="'+PROP+'"/><path d="M120 139V188" stroke="'+PROP+'" stroke-width="6" stroke-linecap="round"/><path d="M58 150H78M162 150H184" stroke="'+PROP+'" stroke-width="6" stroke-linecap="round"/>';
    s+=fig({head:[70,86],sh:[72,106],hip:[70,148],k1:[92,150],f1:[92,188],k2:[90,152],f2:[88,188],arms:[[[86,120],[102,128]]]},HER);
    s+=fig({head:[172,74],sh:[170,96],hip:[172,148],k1:[150,150],f1:[150,188],k2:[152,152],f2:[154,188],arms:[[[154,114],[138,128]]]},HIM);
    if(o.prop==="cups") s+='<rect x="104" y="120" width="10" height="12" rx="2" fill="'+LIGHT+'"/><rect x="127" y="120" width="10" height="12" rx="2" fill="'+LIGHT+'"/><path d="M107 116c0-4 4-4 4-8M130 116c0-4 4-4 4-8" stroke="'+LIGHT+'" stroke-width="1.500" fill="none" opacity=".6"/>';
    if(o.prop==="cards") s+='<g fill="'+LIGHT+'"><rect x="102" y="118" width="9" height="13" rx="1.500" transform="rotate(-12 106 124)"/><rect x="114" y="117" width="9" height="13" rx="1.500"/><rect x="126" y="118" width="9" height="13" rx="1.500" transform="rotate(12 130 124)"/></g>';
    if(o.prop==="jar") s+='<rect x="112" y="112" width="16" height="20" rx="3" fill="#FFB547"/><rect x="111" y="108" width="18" height="6" rx="2" fill="'+LIGHT+'"/>';
  }
  if(tpl==="lift"){
    s+='<g fill="'+LIGHT+'" opacity=".7"><circle cx="40" cy="120" r="1.500"/><circle cx="204" cy="110" r="2"/><circle cx="190" cy="30" r="1.500"/></g>';
    s+=fig({head:[120,98],sh:[120,118],hip:[120,158],k1:[114,174],f1:[110,188],k2:[126,174],f2:[132,188],arms:[[[108,98],[106,78]],[[132,98],[134,78]]]},HIM);
    s+=fig({head:[76,60],sh:[92,64],hip:[136,70],k1:[162,62],f1:[188,52],k2:[160,76],f2:[182,88],arms:[[[78,48],[62,38]]]},HER);
  }
  if(tpl==="hands"){
    s+=fig({head:[98,72],sh:[98,92],hip:[98,136],k1:[96,164],f1:[94,188],k2:[102,164],f2:[104,188],arms:[[[110,106],[122,110]]]},HER);
    s+=fig({head:[148,58],sh:[148,80],hip:[148,132],k1:[146,162],f1:[144,188],k2:[152,162],f2:[154,188],arms:[[[136,100],[122,110]]]},HIM);
    if(o.water) s+='<path d="M0 126c10-6 20-6 30 0s20 6 30 0 20-6 30 0 20 6 30 0 20-6 30 0 20 6 30 0 20-6 30 0 20 6 30 0V200H0Z" fill="#5CA8FF" opacity=".34"/><path d="M0 126c10-6 20-6 30 0s20 6 30 0 20-6 30 0 20 6 30 0 20-6 30 0 20 6 30 0 20-6 30 0 20 6 30 0" stroke="#5CA8FF" stroke-width="2.500" fill="none"/>';
  }
  return s;
}
var STAGE={
"fourth-wing":{t:"The sparring mat",tpl:"spar",o:{blade:1},steps:["Square up on the rug. She gets the knife. A wooden spoon works.","Leave an opening and let her find it. Tap out when the spoon touches your chest.","Stay down a second longer than you need to."],say:"Again. You almost had me."},
"acotar":{t:"The flight over the city",tpl:"wingcarry",steps:["Pick her up, one arm behind her back, one under her knees.","Carry her to the best view you have: the porch, the roof, the top of the hill.","Set her down facing the view and stay behind her."],say:"Hold on. Now look."},
"throne-of-glass":{t:"The ball",tpl:"dance",steps:["One hand at her waist, the other holding hers up.","Small steps. Nobody is grading you.","Keep going after the song ends."],say:"I am a terrible dancer. Dance with me anyway."},
"crescent-city":{t:"The couch",tpl:"sit",o:{prop:"tv"},steps:["Her show, not yours. No phone.","Sit close enough that your shoulders touch. Arm along the back of the couch.","Ask one real question about the plot."],say:"Fine. One more episode."},
"blood-and-ash":{t:"The diary reading",tpl:"sit",o:{prop:"book"},steps:["Sit beside her with her book open to a page she marked.","Read it out loud in your most serious voice.","Do not laugh. Raise one eyebrow at the good parts."],say:"Interesting. Should I keep going?"},
"quicksilver":{t:"At the forge",tpl:"bench",o:{prop:"anvil"},steps:["She is doing the thing she is good at. Stand close and keep your hands to yourself.","Pass her what she needs before she asks.","Take one instruction without arguing."],say:"Show me how you did that."},
"serpent":{t:"Training in the rooms",tpl:"spar",steps:["Hands up, both of you. She leads.","Mirror her. When she pushes, give ground.","Finish back to back, facing the door together."],say:"I have your back."},
"moon-hatched":{t:"The moon watch",tpl:"sit",o:{prop:"moons"},steps:["Blanket down, something warm to drink.","Sit beside her, arm behind her, both of you looking up.","Let her talk first."],say:"I would know you anywhere."},
"bridge-kingdom":{t:"The handover",tpl:"offer",steps:["Hold it out handle first. Car keys, the remote and the map all count.","Let her take it. Do not hang on.","Turn your back. That is the whole point."],say:"You lead. I trust you."},
"gild":{t:"The open door",tpl:"door",steps:["Open the door and step to the side, never in front of it.","Say nothing about which way she should go.","Follow only if she looks back."],say:"Your call. I will be right here."},
"zodiac":{t:"The duel",tpl:"spar",o:{magic:1},steps:["Pick the contest: cards, darts, a video game.","Square up. Trash talk is required.","Agree the stakes out loud before you start."],say:"Winner picks what happens next."},
"wicked":{t:"Her kitchen",tpl:"bench",o:{prop:"pot"},steps:["She runs the stove. You stand where you are told.","Chop what she hands you, the size she says.","Taste when it is offered. Take your time answering."],say:"Tell me what to do next."},
"one-dark-window":{t:"The cards on the table",tpl:"table",o:{prop:"cards"},steps:["Sit across from her and deal a hand of anything.","Keep your face still. Let her read you anyway.","Lose gracefully and offer your arm when you stand."],say:"After you, Miss [her last name]."},
"bride":{t:"The jar",tpl:"table",o:{prop:"jar"},steps:["Put her secret snack on the table. No comment.","Sit across from her and slide over the spoon.","Never mention it to anyone."],say:"I noticed. That is all."},
"icebreaker":{t:"The lift",tpl:"lift",steps:["Hands at her hips, knees bent, back straight.","Lift with your legs. A few inches off the floor counts.","Set her down slowly and keep your hands there a second."],say:"I have you. I am not going to drop you."},
"love-hypothesis":{t:"Coffee Wednesday",tpl:"table",o:{prop:"cups"},steps:["Same table, same time, every week.","Order her drink without asking what it is.","Stay until she finishes it."],say:"Same time next week."},
"never-got-over":{t:"The porch",tpl:"sit",o:{prop:"cups"},steps:["Two seats, side by side, facing out.","Bring her drink before she asks.","Stay there until the light goes."],say:"I was coming this way anyway."},
"twisted-love":{t:"The swimming lesson",tpl:"hands",o:{water:1},steps:["Stand facing her and take both her hands.","Walk backward. She sets the pace.","Stop the second she says stop."],say:"I have you. One more step."}
};
