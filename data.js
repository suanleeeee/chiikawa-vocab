// 테마(주인공 교체) + 8단계 레벨 데이터
const THEMES=[
 {id:'rakko',name:'랏코',desc:'바다 수련'},
 {id:'chiikawa',name:'치이카와',desc:'기본'},
 {id:'hachiware',name:'하치와레',desc:'이색 패턴'},
 {id:'usagi',name:'우사기',desc:'토끼'},
 {id:'momonga',name:'모몽가',desc:'하늘다람쥐'},
 {id:'shisa',name:'시사',desc:'오키나와 수호신'}
];
const LEVELS=[
 {id:'hs',label:'고등 필수'},
 {id:'adv',label:'심화'},
 {id:'tr0',label:'편입 입문'},
 {id:'t0',label:'토익 기초'},
 {id:'t6',label:'토익 600+'},
 {id:'t7',label:'토익 700+'},
 {id:'t8',label:'토익 800+'},
 {id:'t9',label:'토익 900+'}
];

function sc(bg,text,why,levels){return{bg,text,why,levels}}
function lv(c,w1,w2){return{choices:[c,w1,w2],answer:0}}
function ch(en,key,ko){return{en,key,ko}}

const EPISODES=[
{title:'바닷가 메모',scenes:[
 sc('beach','이른 아침 바닷가. 파도에 떠밀려 온 병 안에 접힌 쪽지가 보인다. 병은 금이 가 있어서 세게 잡으면 깨질 것 같다.','병에 금이 가 있어서 조심히 다뤄야 해요.',{
  hs:lv(ch('open it cautiously','cautiously','조심스럽게 연다'),ch('smash it on a rock','smash','바위에 내리쳐 깬다'),ch('discard it at once','discard','즉시 버린다')),
  adv:lv(ch('handle it gently','gently','부드럽게 다룬다'),ch('crack it open forcibly','forcibly','강제로 깨서 연다'),ch('toss it aside carelessly','carelessly','부주의하게 던져버린다')),
  tr0:lv(ch('unseal it tentatively','tentatively','머뭇거리며 조심스레 연다'),ch('shatter it against a rock','shatter','바위에 부딪쳐 깨뜨린다'),ch('dispose of it hastily','hastily','성급하게 처분한다')),
  t0:lv(ch('open the package carefully','package','소포,포장'),ch('damage the fragile item','fragile','깨지기 쉬운'),ch('discard the item immediately','immediately','즉시')),
  t6:lv(ch('handle the fragile item properly','properly','제대로,적절히'),ch('mishandle the shipment','mishandle','잘못 다루다'),ch('dispose of it without inspection','inspection','검사')),
  t7:lv(ch('inspect it before opening','inspect','점검하다'),ch('damage the contents recklessly','recklessly','무모하게'),ch('discard it without verification','verification','확인,검증')),
  t8:lv(ch('handle it with precaution','precaution','주의,예방조치'),ch('compromise the fragile container','compromise','손상시키다'),ch('discard it without due care','due','마땅한,정당한')),
  t9:lv(ch('exercise caution when opening it','caution','조심,신중함'),ch('jeopardize the fragile contents','jeopardize','위태롭게 하다'),ch('discard it indiscriminately','indiscriminately','무분별하게'))
 }),
 sc('lake','쪽지엔 "호숫가 낡은 다리 아래"라고 적혀 있었다. 가 보니 하치와레가 다리 밑에서 비에 젖어 떨고 있다.','추위에 떨고 있는 친구는 위로해 줘야 해요.',{
  hs:lv(ch('comfort the shivering friend','comfort','떨고 있는 친구를 위로한다'),ch('scold him for hiding there','scold','거기 숨었다고 혼낸다'),ch('ignore the trembling friend','ignore','못 본 척한다')),
  adv:lv(ch('reassure the shivering friend','reassure','떨고 있는 친구를 안심시킨다'),ch('mock him for getting wet','mock','젖었다고 놀린다'),ch('walk past without noticing','notice','알아채지 못하고 지나친다')),
  tr0:lv(ch('console the trembling friend','console','떨고 있는 친구를 달랜다'),ch('reprimand him for wandering off','reprimand','돌아다녔다고 꾸짖는다'),ch('disregard his condition entirely','disregard','그의 상태를 완전히 무시한다')),
  t0:lv(ch('check on the soaked friend','soaked','흠뻑 젖은'),ch('criticize him for being late','criticize','늦었다고 비판한다'),ch('overlook his condition','overlook','간과하다')),
  t6:lv(ch('attend to the shivering friend','attend to','돌보다,신경 쓰다'),ch('blame him for the delay','blame','지연을 탓하다'),ch('neglect his condition','neglect','소홀히 하다')),
  t7:lv(ch('accommodate his urgent need for warmth','accommodate','편의를 봐주다'),ch('reprimand him over the incident','incident','사건'),ch('dismiss his discomfort','dismiss','대수롭지 않게 여기다')),
  t8:lv(ch('address his condition promptly','promptly','즉시,지체 없이'),ch('rebuke him without reason','rebuke','책망하다'),ch('disregard his evident distress','distress','고통,괴로움')),
  t9:lv(ch('alleviate his evident distress','alleviate','완화하다'),ch('admonish him unjustly','admonish','훈계하다'),ch('remain indifferent to his plight','indifferent','무관심한'))
 }),
 sc('forest','하치와레를 데리고 집으로 가는 길, 숲 안쪽에서 길을 잃은 듯한 희미한 목소리가 들린다. "도와줘"라는 우사기의 소리 같다.','도움을 요청하는 소리를 들었으면 찾아봐야 해요.',{
  hs:lv(ch('search for the lost voice','search','소리가 난 쪽을 찾아본다'),ch('pretend not to hear it','pretend','못 들은 척한다'),ch('run away out of fear','fear','무서워서 도망친다')),
  adv:lv(ch('track down the faint voice','track down','추적하여 찾아내다'),ch('dismiss it as the wind','dismiss','바람 소리라 치부한다'),ch('flee the forest immediately','flee','즉시 숲을 떠난다')),
  tr0:lv(ch('venture in to locate the voice','venture','위험을 무릅쓰고 나아가다'),ch('disregard the faint cry','cry','외침,울음'),ch('retreat without investigating','retreat','조사하지 않고 물러난다')),
  t0:lv(ch('investigate the faint sound','investigate','조사하다'),ch('ignore the unclear noise','unclear','불분명한'),ch('leave the area at once','leave','떠나다')),
  t6:lv(ch('respond to the call for help','respond to','응답하다,대응하다'),ch('overlook the faint request','request','요청'),ch('withdraw without confirming','confirm','확인하다')),
  t7:lv(ch('locate the source of distress','source','근원,출처'),ch('disregard the urgent plea','plea','간청,호소'),ch('abandon the search prematurely','prematurely','시기상조로,성급히')),
  t8:lv(ch('pinpoint the origin of the call','pinpoint','정확히 찾아내다'),ch('neglect the evident plea','evident','명백한'),ch('withdraw without substantiating it','substantiate','입증하다')),
  t9:lv(ch('ascertain the source of the plea','ascertain','확인하다,알아내다'),ch('dismiss the plea as trivial','trivial','사소한'),ch('retreat without due diligence','diligence','근면,세심한 주의'))
 })
],ending:sc('beach','쪽지의 주인이 누구였는지는 끝내 알 수 없었지만, 셋 다 무사히 집으로 돌아왔다. 창밖 바다는 다시 잠잠했다.','',null)},

{title:'라멘 가게 한나절',scenes:[
 sc('stall','손님이 몰려 치이카와가 혼자 가게를 보고 있다. 주문이 쌓여 쩔쩔매는 눈치다.','힘들어하는 친구는 도와야 해요.',{
  hs:lv(ch('offer to help out','offer','돕겠다고 나선다'),ch('complain about the crowd','complain','손님이 많다고 불평한다'),ch('sneak out the back door','sneak','뒷문으로 몰래 빠져나간다')),
  adv:lv(ch('step in to assist her','step in','나서서 돕다'),ch('grumble about the long line','grumble','투덜거리다'),ch('slip away quietly','slip away','슬쩍 빠져나가다')),
  tr0:lv(ch('volunteer to lend a hand','lend a hand','도움을 주다'),ch('gripe about the busy shift','gripe','불평하다'),ch('retreat to avoid the work','retreat','피해서 물러나다')),
  t0:lv(ch('assist with the orders','assist','돕다'),ch('complain about the workload','workload','업무량'),ch('avoid the busy counter','avoid','피하다')),
  t6:lv(ch('coordinate with her to catch up','coordinate','협력하다,조율하다'),ch('criticize the understaffed shift','understaffed','인원이 부족한'),ch('withdraw from the situation','withdraw','물러나다')),
  t7:lv(ch('expedite the backlog of orders','expedite','신속히 처리하다'),ch('complain about the inconvenience','inconvenience','불편'),ch('disengage from the task','disengage','손을 떼다')),
  t8:lv(ch('alleviate her workload promptly','alleviate','경감시키다'),ch('reproach her for falling behind','reproach','비난하다'),ch('opt out of assisting','opt out','빠지다,관여하지 않다')),
  t9:lv(ch('mitigate the mounting backlog','mitigate','완화하다'),ch('reprimand her over the delay','reprimand','질책하다'),ch('relinquish any responsibility','relinquish','포기하다,넘기다'))
 }),
 sc('town','배달 주소가 잘못 적혀서 손님이 화가 나 있다.','실수했을 땐 사과하고 바로잡아야 해요.',{
  hs:lv(ch('apologize and fix the order','apologize','사과하고 주문을 고친다'),ch('argue with the customer','argue','손님과 다툰다'),ch('deny any mistake','deny','잘못을 부정한다')),
  adv:lv(ch('apologize and correct the address','correct','바로잡다'),ch('dispute the customer’s complaint','dispute','이의를 제기하다'),ch('shift the blame elsewhere','shift blame','책임을 떠넘기다')),
  tr0:lv(ch('offer a sincere apology and amend it','amend','수정하다,고치다'),ch('contest the customer’s claim','contest','다투다,반박하다'),ch('evade responsibility for the error','evade','회피하다')),
  t0:lv(ch('apologize and revise the order','revise','수정하다'),ch('argue over the complaint','complaint','불만,항의'),ch('refuse to admit the error','refuse','거부하다')),
  t6:lv(ch('apologize and resolve the discrepancy','discrepancy','차이,불일치'),ch('dispute the customer’s account','account','설명,진술'),ch('decline to acknowledge the mistake','decline','거절하다')),
  t7:lv(ch('rectify the order without delay','rectify','바로잡다,정정하다'),ch('contest the delivery complaint','contest','반박하다'),ch('evade accountability for the mix-up','accountability','책임')),
  t8:lv(ch('promptly rectify the clerical error','clerical','사무상의'),ch('dispute the legitimacy of the claim','legitimacy','정당성'),ch('circumvent responsibility for the mistake','circumvent','회피하다,피해가다')),
  t9:lv(ch('rectify the discrepancy forthwith','forthwith','즉시'),ch('refute the customer’s grievance','refute','반박하다'),ch('absolve oneself of any fault','absolve','면제하다,책임을 벗다'))
 }),
 sc('shop','면이 부족해서 옆 가게에 좀 빌려야 한다. 주인이 낯설어 망설여진다.','모르는 사이라도 정중히 부탁하면 돼요.',{
  hs:lv(ch('politely ask to borrow some','borrow','정중히 좀 빌려달라 부탁한다'),ch('take it without permission','permission','허락 없이 가져간다'),ch('postpone the order instead','postpone','대신 주문을 미룬다')),
  adv:lv(ch('courteously request to borrow some','courteously','정중하게'),ch('help yourself without asking','help yourself','마음대로 가져가다'),ch('delay the orders instead','delay','미루다')),
  tr0:lv(ch('humbly request a small loan of it','humbly','겸손하게,공손히'),ch('appropriate it without consent','appropriate','무단으로 쓰다'),ch('stall the orders instead','stall','지연시키다')),
  t0:lv(ch('request to borrow supplies','supplies','용품,물품'),ch('take supplies without approval','approval','승인'),ch('postpone fulfilling the orders','fulfill','이행하다')),
  t6:lv(ch('formally request the supplies','formally','공식적으로'),ch('procure them without authorization','procure','조달하다'),ch('defer the pending orders','defer','미루다,연기하다')),
  t7:lv(ch('negotiate to borrow the ingredients','negotiate','협상하다'),ch('obtain them without consent','obtain','얻다,입수하다'),ch('postpone fulfillment indefinitely','indefinitely','무기한으로')),
  t8:lv(ch('solicit the ingredients courteously','solicit','요청하다,간청하다'),ch('appropriate the goods unilaterally','unilaterally','일방적으로'),ch('defer the orders without notice','notice','통지')),
  t9:lv(ch('tactfully solicit the needed supplies','tactfully','요령 있게'),ch('commandeer the goods without consent','commandeer','징발하다,강제로 가져가다'),ch('indefinitely stall the pending orders','pending','보류 중인'))
 })
],ending:sc('stall','다음 날 치이카와가 활짝 웃으며 또 와줘서 고맙다고 했다. 가게 앞 간판이 햇살에 빛났다.','',null)},

{title:'수련 하루',scenes:[
 sc('meadow','토벌 수련 중 우사기가 지쳐서 그만두려 한다.','힘들어하는 동료는 응원해 줘야 해요.',{
  hs:lv(ch('cheer him on','cheer','응원한다'),ch('mock his weak stamina','stamina','약한 체력을 놀린다'),ch('abandon the training together','abandon','같이 그만둔다')),
  adv:lv(ch('encourage him to push through','push through','버텨내도록 격려한다'),ch('ridicule his lack of endurance','ridicule','조롱하다'),ch('quit the training with him','quit','같이 그만두다')),
  tr0:lv(ch('bolster his flagging morale','bolster','북돋우다'),ch('belittle his poor stamina','belittle','얕보다,깎아내리다'),ch('abandon the regimen altogether','regimen','훈련 과정')),
  t0:lv(ch('motivate him to continue','motivate','동기를 부여하다'),ch('criticize his low stamina','criticize','비판하다'),ch('give up on the training','give up','포기하다')),
  t6:lv(ch('boost his morale to continue','boost','북돋우다,높이다'),ch('disparage his endurance','disparage','폄하하다'),ch('discontinue the training together','discontinue','중단하다')),
  t7:lv(ch('reinvigorate his flagging resolve','reinvigorate','다시 활기를 북돋다'),ch('disparage his lack of stamina','lack','부족'),ch('abandon the regimen prematurely','prematurely','시기상조로')),
  t8:lv(ch('galvanize him to persevere','galvanize','자극하여 분발시키다'),ch('deride his waning stamina','deride','조롱하다'),ch('forsake the training entirely','forsake','저버리다')),
  t9:lv(ch('rally him to persevere','rally','결집시키다,분발시키다'),ch('disparage his dwindling resolve','dwindling','점점 줄어드는'),ch('relinquish the training altogether','relinquish','포기하다'))
 }),
 sc('forest','수련 중 가시덤불에 걸려 멈춰 선 치이카와. 머뭇거리며 나아가지 못한다.','가시덤불에 걸렸을 땐 조심스럽게 도와야 해요.',{
  hs:lv(ch('help her through carefully','carefully','조심스럽게 도와서 지나간다'),ch('push her forward roughly','roughly','거칠게 밀어붙인다'),ch('leave her behind','behind','그냥 두고 간다')),
  adv:lv(ch('guide her through gently','guide','부드럽게 이끌어준다'),ch('shove her through the thorns','shove','거칠게 떠밀다'),ch('abandon her at the thicket','thicket','덤불,수풀')),
  tr0:lv(ch('ease her out of the thicket','ease','조심스레 빼내다'),ch('force her through recklessly','force','무리하게 밀어붙이다'),ch('desert her in the thicket','desert','버리고 떠나다')),
  t0:lv(ch('assist her out carefully','assist','돕다'),ch('pressure her to hurry','pressure','압박하다'),ch('leave her without help','without','없이')),
  t6:lv(ch('extract her from the thorns safely','extract','빼내다,추출하다'),ch('rush her through carelessly','rush','서두르다'),ch('proceed without waiting for her','proceed','진행하다')),
  t7:lv(ch('maneuver her clear of the thorns','maneuver','조심스럽게 움직이다'),ch('coerce her through the thicket','coerce','강요하다'),ch('forge ahead without her','forge ahead','계속 나아가다')),
  t8:lv(ch('extricate her from the thicket with care','extricate','조심스레 구해내다'),ch('compel her through forcibly','compel','강요하다'),ch('proceed, disregarding her plight','disregarding','무시하면서')),
  t9:lv(ch('painstakingly extricate her from the thorns','painstakingly','공들여,세심하게'),ch('coerce her forward regardless','regardless','상관없이'),ch('forge ahead, abandoning her','abandoning','버리면서'))
 }),
 sc('meadow','수련이 끝날 무렵 작은 상을 두고 셋이 경쟁하게 된다. 우사기가 유독 욕심을 낸다.','작은 상은 공평하게 나누는 게 알맞아요.',{
  hs:lv(ch('share the prize fairly','share','상을 공평하게 나눈다'),ch('grab it first','grab','먼저 잡아챈다'),ch('quarrel over the prize','quarrel','상을 두고 다툰다')),
  adv:lv(ch('divide the prize evenly','evenly','고르게'),ch('snatch it before the others','snatch','잽싸게 낚아채다'),ch('bicker over who deserves it','bicker','사소하게 다투다')),
  tr0:lv(ch('allocate the prize equitably','equitably','공평하게'),ch('seize it ahead of the others','seize','붙잡다,쟁취하다'),ch('squabble over ownership','squabble','옥신각신 다투다')),
  t0:lv(ch('split the prize equally','split','나누다'),ch('claim it before anyone else','claim','주장하다,요구하다'),ch('dispute who should get it','dispute','논쟁하다')),
  t6:lv(ch('distribute the reward fairly','distribute','분배하다'),ch('monopolize the reward','monopolize','독점하다'),ch('contest the rightful owner','contest','다투다,이의를 제기하다')),
  t7:lv(ch('allocate the reward proportionately','proportionately','비례하여'),ch('appropriate the reward solely','solely','단독으로'),ch('dispute entitlement to the reward','entitlement','자격,권리')),
  t8:lv(ch('apportion the reward equitably','apportion','할당하다,배분하다'),ch('arrogate the reward to oneself','arrogate','부당하게 차지하다'),ch('contest the allocation bitterly','allocation','배분,할당')),
  t9:lv(ch('equitably apportion the spoils','spoils','전리품,상'),ch('usurp the reward unilaterally','usurp','가로채다,빼앗다'),ch('dispute the apportionment acrimoniously','acrimoniously','신랄하게'))
 })
],ending:sc('meadow','랏코가 속마음을 말하자 둘 다 가만히 들어주었다. 다음 날 수련은 한결 가벼웠다.','',null)},

{title:'목욕탕 작은 사고',scenes:[
 sc('bath','치이카와가 실수로 물을 쏟아 하치와레의 옷이 다 젖었다.','실수했을 땐 바로 사과하는 게 알맞아요.',{
  hs:lv(ch('apologize right away','apologize','바로 사과한다'),ch('blame the slippery floor','slippery','바닥이 미끄럽다고 탓한다'),ch('laugh it off and leave','laugh','웃어넘기고 가버린다')),
  adv:lv(ch('apologize without delay','delay','지체'),ch('blame the wet floor instead','instead','대신'),ch('brush it off and walk away','brush off','가볍게 넘기다')),
  tr0:lv(ch('offer an immediate apology','immediate','즉각적인'),ch('attribute it to the floor','attribute','~탓으로 돌리다'),ch('shrug it off casually','shrug off','대수롭지 않게 넘기다')),
  t0:lv(ch('apologize immediately','immediately','즉시'),ch('blame the wet surface','surface','표면'),ch('dismiss the incident lightly','lightly','가볍게')),
  t6:lv(ch('apologize and offer to help dry it','offer','제안하다'),ch('attribute the spill to the floor','spill','엎지름'),ch('disregard the incident entirely','disregard','무시하다')),
  t7:lv(ch('tender a prompt apology','tender','제시하다,내놓다'),ch('attribute fault to the floor','fault','잘못,책임'),ch('dismiss the matter as trivial','trivial','사소한')),
  t8:lv(ch('proffer a sincere apology at once','proffer','내밀다,제공하다'),ch('deflect blame onto the floor','deflect','(책임을) 돌리다'),ch('trivialize the incident','trivialize','경시하다')),
  t9:lv(ch('proffer an unreserved apology','unreserved','거리낌 없는,전적인'),ch('deflect culpability onto the floor','culpability','과실,책임'),ch('dismiss the mishap as inconsequential','inconsequential','하찮은'))
 }),
 sc('room','젖은 옷을 널던 중 하치와레가 화가 나 말을 안 한다.','화난 친구에게는 차분히 설명하는 게 알맞아요.',{
  hs:lv(ch('calmly explain what happened','calmly','차분히 상황을 설명한다'),ch('shout back in frustration','frustration','짜증 내며 맞받아친다'),ch('avoid the topic entirely','avoid','그 얘기를 완전히 피한다')),
  adv:lv(ch('patiently explain the situation','patiently','차분하게'),ch('snap back irritably','snap back','짜증 내며 쏘아붙이다'),ch('sidestep the conversation','sidestep','피해가다')),
  tr0:lv(ch('calmly clarify what occurred','clarify','명확히 하다'),ch('retort in annoyance','retort','되받아치다'),ch('evade the conversation altogether','evade','회피하다')),
  t0:lv(ch('explain the situation calmly','situation','상황'),ch('respond angrily','angrily','화나게'),ch('avoid discussing it','discuss','논의하다')),
  t6:lv(ch('clarify the matter calmly','matter','사안,문제'),ch('react defensively','react','반응하다'),ch('postpone the discussion indefinitely','postpone','미루다')),
  t7:lv(ch('clarify the circumstances composedly','composedly','침착하게'),ch('retaliate with irritation','retaliate','보복하다,맞받다'),ch('circumvent the conversation','circumvent','회피하다')),
  t8:lv(ch('elucidate the situation calmly','elucidate','명료하게 설명하다'),ch('react with unwarranted hostility','hostility','적대감'),ch('evade candid discussion','candid','솔직한')),
  t9:lv(ch('elucidate matters with composure','composure','침착함'),ch('retaliate with undue hostility','undue','부당한'),ch('circumvent forthright discussion','forthright','솔직한,거침없는'))
 }),
 sc('bath','다음 날 다시 목욕탕에 가니 우사기가 물이 너무 뜨겁다고 겁을 낸다.','겁을 내는 친구에게는 미리 확인하라고 알려줘야 해요.',{
  hs:lv(ch('warn him to check the temperature first','warn','먼저 온도를 확인하라고 알려준다'),ch('push him in regardless','regardless','상관없이 밀어 넣는다'),ch('dismiss his fear as silly','dismiss','걱정을 바보같다고 무시한다')),
  adv:lv(ch('advise him to test the water first','advise','조언하다'),ch('shove him in anyway','shove','밀어 넣다'),ch('belittle his worry','belittle','얕보다')),
  tr0:lv(ch('caution him to check it beforehand','caution','주의를 주다'),ch('force him in nonetheless','nonetheless','그럼에도 불구하고'),ch('trivialize his apprehension','apprehension','우려,불안')),
  t0:lv(ch('remind him to check first','remind','상기시키다'),ch('push him in without asking','without asking','묻지 않고'),ch('ignore his worry','worry','걱정')),
  t6:lv(ch('advise him to verify the temperature','verify','확인하다,검증하다'),ch('disregard his hesitation and push him in','hesitation','망설임'),ch('downplay his concern','downplay','경시하다')),
  t7:lv(ch('alert him to verify beforehand','alert','주의를 환기시키다'),ch('override his objection and push him in','override','무시하다,묵살하다'),ch('downplay his legitimate concern','legitimate','정당한')),
  t8:lv(ch('forewarn him to verify the temperature','forewarn','미리 경고하다'),ch('disregard his reluctance entirely','reluctance','꺼림,주저함'),ch('trivialize his valid apprehension','valid','타당한')),
  t9:lv(ch('forewarn him to ascertain the temperature','ascertain','확인하다'),ch('override his evident reluctance','evident','명백한'),ch('dismiss his apprehension as unfounded','unfounded','근거 없는'))
 })
],ending:sc('bath','하치와레가 결국 괜찮다고 웃었다. 목욕탕 창밖으로 노을이 번지고 있었다.','',null)},

{title:'장마철 가게',scenes:[
 sc('shop','장마로 가게 지붕에서 물이 샌다. 치이카와가 혼자 어쩔 줄 모른다.','곤란한 상황에서는 자원해서 나서는 게 알맞아요.',{
  hs:lv(ch('volunteer to fix the leak','volunteer','자원해서 누수를 고친다'),ch('complain about the rain','rain','비가 온다고 불평한다'),ch('postpone everything and leave','leave','다 미루고 가버린다')),
  adv:lv(ch('step up to fix the leak','step up','나서서 해결하다'),ch('grumble about the weather','weather','날씨'),ch('walk away from the mess','mess','엉망인 상태')),
  tr0:lv(ch('volunteer to patch the leak','patch','임시로 때우다,고치다'),ch('gripe about the downpour','downpour','폭우'),ch('abandon the shop altogether','altogether','완전히')),
  t0:lv(ch('offer to repair the leak','repair','수리하다'),ch('complain about the storm','storm','폭풍우'),ch('leave without helping','leave','떠나다')),
  t6:lv(ch('take initiative to fix the leak','initiative','주도,솔선'),ch('complain about the inconvenience','inconvenience','불편'),ch('abandon the task altogether','task','과업,일')),
  t7:lv(ch('proactively address the leak','proactively','적극적으로,선제적으로'),ch('voice frustration over the weather','voice','표출하다'),ch('disengage from the problem','disengage','손을 떼다')),
  t8:lv(ch('take the initiative to remedy the leak','remedy','바로잡다,치료하다'),ch('lament the inconvenient weather','lament','한탄하다'),ch('forsake the task entirely','forsake','저버리다')),
  t9:lv(ch('proactively remedy the leak','proactively','선제적으로'),ch('bemoan the inclement weather','inclement','혹독한(날씨)'),ch('abdicate responsibility altogether','abdicate','책임을 버리다,포기하다'))
 }),
 sc('town','수리 도구가 없어서 이웃에게 빌려야 한다.','도구가 없으면 이웃에게 빌리는 게 알맞아요.',{
  hs:lv(ch('borrow tools from a neighbor','neighbor','이웃에게 도구를 빌린다'),ch('break in to get them','break','몰래 들어가서 가져온다'),ch('abandon the repair','repair','수리를 포기한다')),
  adv:lv(ch('ask a neighbor to lend tools','lend','빌려주다'),ch('trespass to retrieve them','trespass','무단 침입하다'),ch('give up on the repair','give up','포기하다')),
  tr0:lv(ch('request tools from a neighbor','request','요청하다'),ch('intrude to obtain them','intrude','침입하다'),ch('forgo the repair entirely','forgo','포기하다')),
  t0:lv(ch('borrow equipment from a neighbor','equipment','장비'),ch('enter without permission to get them','enter','들어가다'),ch('cancel the repair','cancel','취소하다')),
  t6:lv(ch('request to borrow the equipment','borrow','빌리다'),ch('obtain them without permission','permission','허락'),ch('cancel the repair plan','plan','계획')),
  t7:lv(ch('procure tools from a neighbor','procure','조달하다,구하다'),ch('trespass to acquire them','acquire','획득하다'),ch('abandon the repair plan','abandon','포기하다')),
  t8:lv(ch('procure the necessary tools from a neighbor','necessary','필요한'),ch('encroach on the neighbor’s property for them','encroach','침해하다'),ch('relinquish the repair effort','effort','노력')),
  t9:lv(ch('solicit the requisite tools from a neighbor','requisite','필요한,필수의'),ch('encroach upon the neighbor’s property','property','재산,소유지'),ch('relinquish the repair altogether','relinquish','포기하다'))
 }),
 sc('shop','수리하다 손을 다친 우사기가 아픈 걸 숨기고 계속하려 한다.','다친 걸 숨기는 친구에게는 쉬라고 해야 해요.',{
  hs:lv(ch('insist that he rest now','rest','지금 쉬라고 고집한다'),ch('permit him to continue','permit','계속하게 허락한다'),ch('tease him for being careless','careless','조심성 없다고 놀린다')),
  adv:lv(ch('urge him to stop and rest','urge','강하게 권하다'),ch('allow him to keep working','allow','허용하다'),ch('mock his carelessness','mock','조롱하다')),
  tr0:lv(ch('press him to take a break','press','촉구하다'),ch('tolerate him continuing to work','tolerate','용인하다'),ch('ridicule his clumsiness','clumsiness','서투름')),
  t0:lv(ch('insist he take a break','break','휴식'),ch('let him continue working','continue','계속하다'),ch('criticize his carelessness','criticize','비판하다')),
  t6:lv(ch('insist that he cease and rest','cease','중단하다'),ch('permit him to proceed regardless','proceed','진행하다'),ch('reproach him for the injury','reproach','비난하다')),
  t7:lv(ch('mandate that he rest immediately','mandate','지시하다,명하다'),ch('authorize him to continue working','authorize','허가하다'),ch('reproach him for his carelessness','carelessness','부주의')),
  t8:lv(ch('stipulate that he rest at once','stipulate','규정하다,명시하다'),ch('sanction his continued effort','sanction','승인하다'),ch('admonish him for his negligence','negligence','부주의,태만')),
  t9:lv(ch('mandate immediate rest for him','immediate','즉각적인'),ch('sanction his reckless continuation','reckless','무모한'),ch('admonish him over his negligence','admonish','훈계하다'))
 })
],ending:sc('shop','비가 그친 가게 지붕이 마침내 조용해졌다. 다들 젖은 몸으로 웃었다.','',null)},

{title:'밤 캠핑',scenes:[
 sc('night','캠핑 중 불이 꺼져 어두워졌다. 우사기가 겁을 먹고 조용히 있다.','겁먹은 친구는 조용히 안심시켜야 해요.',{
  hs:lv(ch('whisper reassurance to him','whisper','속삭이며 안심시킨다'),ch('startle him with a loud noise','startle','큰 소리로 놀래킨다'),ch('leave him alone in the dark','dark','어둠 속에 혼자 둔다')),
  adv:lv(ch('quietly reassure him','reassure','안심시키다'),ch('spook him with a sudden noise','spook','겁먹게 하다'),ch('leave him by himself','by himself','혼자')),
  tr0:lv(ch('gently allay his fear','allay','가라앉히다,누그러뜨리다'),ch('startle him deliberately','deliberately','의도적으로'),ch('abandon him in the darkness','darkness','어둠')),
  t0:lv(ch('calm him down quietly','calm down','진정시키다'),ch('frighten him suddenly','frighten','겁주다'),ch('leave him in the dark alone','alone','혼자')),
  t6:lv(ch('reassure him in a low voice','low voice','낮은 목소리'),ch('alarm him with a sudden sound','alarm','놀라게 하다'),ch('withdraw and leave him alone','withdraw','물러나다')),
  t7:lv(ch('placate his fear calmly','placate','달래다,진정시키다'),ch('unsettle him deliberately','unsettle','불안하게 하다'),ch('abandon him without a word','without a word','말없이')),
  t8:lv(ch('assuage his fear quietly','assuage','누그러뜨리다'),ch('provoke alarm in him needlessly','provoke','유발하다'),ch('forsake him in the darkness','forsake','저버리다')),
  t9:lv(ch('assuage his palpable fear','palpable','뚜렷한,명백한'),ch('needlessly provoke his alarm','needlessly','불필요하게'),ch('abandon him to the darkness','abandon','저버리다'))
 }),
 sc('forest','수풀에서 이상한 소리가 난다. 다들 긴장한다.','이상한 소리가 나면 차분히 함께 살펴보는 게 알맞아요.',{
  hs:lv(ch('investigate calmly together','investigate','다 같이 차분히 살펴본다'),ch('panic and scatter','panic','당황해서 흩어진다'),ch('blame each other for the noise','blame','서로 소리의 탓을 돌린다')),
  adv:lv(ch('check it out calmly as a group','check out','확인해보다'),ch('scatter in a panic','scatter','흩어지다'),ch('accuse one another of making it','accuse','비난하다')),
  tr0:lv(ch('examine the source together calmly','examine','조사하다'),ch('bolt in a panic','bolt','허둥지둥 도망치다'),ch('point fingers at each other','point fingers','서로 탓하다')),
  t0:lv(ch('look into the sound calmly','look into','조사하다'),ch('run away in panic','run away','도망치다'),ch('blame one another for it','blame','탓하다')),
  t6:lv(ch('jointly verify the source of the sound','jointly','공동으로'),ch('disperse in a panic','disperse','흩어지다'),ch('accuse each other without basis','basis','근거')),
  t7:lv(ch('collectively ascertain the source','collectively','집단으로,함께'),ch('react with unwarranted panic','unwarranted','부당한,근거 없는'),ch('attribute blame without evidence','evidence','증거')),
  t8:lv(ch('methodically investigate the disturbance','methodically','체계적으로'),ch('succumb to needless panic','succumb','굴복하다'),ch('attribute fault without justification','justification','정당화,근거')),
  t9:lv(ch('methodically ascertain the disturbance’s source','disturbance','소란,소동'),ch('succumb to unwarranted alarm','alarm','불안,경보'),ch('apportion blame without justification','apportion','할당하다'))
 }),
 sc('night','불을 다시 피우는 데 실패해서 다들 춥다.','실패해도 참고 다시 시도하는 게 알맞아요.',{
  hs:lv(ch('patiently try again','patiently','참고 다시 시도한다'),ch('give up and sulk','sulk','포기하고 시무룩해진다'),ch('snap at whoever is near','snap','옆에 있는 친구한테 짜증낸다')),
  adv:lv(ch('calmly attempt it again','attempt','시도하다'),ch('quit and pout','pout','부루퉁해지다'),ch('lash out at a nearby friend','lash out','화를 터뜨리다')),
  tr0:lv(ch('persevere and try once more','persevere','인내하며 계속하다'),ch('abandon the effort and sulk','effort','노력'),ch('vent frustration at a friend','vent','발산하다')),
  t0:lv(ch('try again patiently','try again','다시 시도하다'),ch('give up in frustration','frustration','좌절'),ch('get irritated at a friend','irritated','짜증난')),
  t6:lv(ch('persist and attempt it once more','persist','지속하다,끈기 있게 하다'),ch('abandon the attempt altogether','attempt','시도'),ch('vent irritation at a friend','irritation','짜증')),
  t7:lv(ch('persevere through the setback','setback','차질,좌절'),ch('relinquish the effort entirely','relinquish','포기하다'),ch('direct frustration at a bystander','bystander','구경꾼,옆사람')),
  t8:lv(ch('persist despite the repeated setback','despite','~에도 불구하고'),ch('capitulate to the difficulty','capitulate','굴복하다'),ch('vent frustration on an innocent friend','innocent','무고한')),
  t9:lv(ch('persevere notwithstanding the setback','notwithstanding','~에도 불구하고'),ch('capitulate and abandon the effort','capitulate','굴복하다'),ch('vent exasperation on a bystander','exasperation','격분,짜증'))
 })
],ending:sc('meadow','불은 결국 다시 피어올랐고, 아침 햇살 아래 다들 나란히 잠들었다.','',null)},

{title:'숲속 길찾기',scenes:[
 sc('forest','지도를 보다가 길이 두 갈래로 나뉜 걸 발견한다. 표지판 하나는 글씨가 지워져 있다.','표지판이 지워져 있으면 자세히 살펴보는 게 알맞아요.',{
  hs:lv(ch('examine the sign closely','examine','표지판을 자세히 살펴본다'),ch('guess randomly and go','randomly','아무렇게나 짐작해서 간다'),ch('refuse to choose either path','refuse','둘 다 안 가겠다고 거절한다')),
  adv:lv(ch('inspect the sign carefully','inspect','자세히 살피다'),ch('pick a path at random','random','무작위의'),ch('decline to pick a path','decline','거절하다')),
  tr0:lv(ch('scrutinize the faded sign','scrutinize','면밀히 살피다'),ch('choose a path arbitrarily','arbitrarily','임의로'),ch('hesitate and go nowhere','hesitate','망설이다')),
  t0:lv(ch('check the sign carefully','check','확인하다'),ch('choose a direction randomly','direction','방향'),ch('stay without deciding','decide','결정하다')),
  t6:lv(ch('verify the sign’s faded text','faded','흐릿해진'),ch('select a path arbitrarily','select','선택하다'),ch('remain undecided indefinitely','undecided','미결정의')),
  t7:lv(ch('scrutinize the sign’s worn text','worn','닳은,흐려진'),ch('opt for a path arbitrarily','opt for','선택하다'),ch('remain indecisive about the route','indecisive','우유부단한')),
  t8:lv(ch('meticulously examine the worn sign','meticulously','꼼꼼하게'),ch('select a route haphazardly','haphazardly','되는 대로'),ch('vacillate over the route','vacillate','망설이다,동요하다')),
  t9:lv(ch('meticulously scrutinize the faded inscription','inscription','새겨진 글씨'),ch('select a route arbitrarily','arbitrarily','임의로'),ch('vacillate indefinitely over the route','indefinitely','무기한으로'))
 }),
 sc('lake','호숫가 길에서 낡은 다리를 만난다. 다리가 흔들거린다.','흔들리는 다리는 먼저 튼튼한지 시험해보는 게 알맞아요.',{
  hs:lv(ch('test its strength first','strength','먼저 튼튼한지 시험해본다'),ch('rush across quickly','rush','서둘러 그냥 건넌다'),ch('turn back immediately','immediately','바로 돌아간다')),
  adv:lv(ch('check its sturdiness first','sturdiness','견고함'),ch('dash across without checking','dash','질주하다'),ch('retreat right away','retreat','물러나다')),
  tr0:lv(ch('assess the bridge’s stability','assess','평가하다'),ch('cross recklessly without testing','recklessly','무모하게'),ch('withdraw without attempting it','withdraw','물러나다')),
  t0:lv(ch('check if it is stable first','stable','안정적인'),ch('cross it hastily','hastily','성급하게'),ch('go back right away','go back','돌아가다')),
  t6:lv(ch('verify the bridge’s stability first','verify','확인하다'),ch('cross it without verification','without verification','확인 없이'),ch('retreat without attempting it','attempting','시도하는')),
  t7:lv(ch('ascertain the bridge’s soundness first','soundness','견고함,안전성'),ch('traverse it impulsively','impulsively','충동적으로'),ch('abandon the crossing altogether','abandon','포기하다')),
  t8:lv(ch('ascertain the structure’s integrity first','integrity','온전함,견고함'),ch('traverse it without due caution','due caution','당연한 주의'),ch('forgo the crossing entirely','forgo','포기하다')),
  t9:lv(ch('ascertain the bridge’s structural integrity','structural','구조적인'),ch('traverse it recklessly regardless','regardless','상관없이'),ch('forgo the crossing altogether','altogether','완전히'))
 }),
 sc('forest','길을 잘못 들어 다들 지쳤다. 하치와레가 나서서 지도를 다시 보자고 한다.','길을 잘 아는 사람의 제안은 믿어보는 게 알맞아요.',{
  hs:lv(ch('trust his suggestion','trust','그의 제안을 믿는다'),ch('doubt him and argue','doubt','의심하며 다툰다'),ch('wander off alone','wander','혼자 헤매러 간다')),
  adv:lv(ch('rely on his suggestion','rely on','의지하다'),ch('question him and bicker','bicker','사소하게 다투다'),ch('drift off by oneself','drift off','멀어지다')),
  tr0:lv(ch('place trust in his judgment','judgment','판단'),ch('challenge him and squabble','challenge','이의를 제기하다'),ch('stray off on one’s own','stray','길을 벗어나다')),
  t0:lv(ch('follow his suggestion','follow','따르다'),ch('argue against his idea','against','~에 반대하여'),ch('go off alone','go off','혼자 가다')),
  t6:lv(ch('defer to his judgment','defer to','따르다,맡기다'),ch('dispute his suggestion','dispute','반박하다'),ch('proceed alone without consulting','consulting','상의하는')),
  t7:lv(ch('concede to his sound judgment','concede','인정하다,양보하다'),ch('contest his suggestion needlessly','contest','반박하다'),ch('proceed independently without consensus','consensus','합의')),
  t8:lv(ch('defer to his sound judgment','sound','타당한,건전한'),ch('contest his proposal unreasonably','unreasonably','불합리하게'),ch('forge ahead unilaterally','unilaterally','일방적으로')),
  t9:lv(ch('acquiesce to his sound judgment','acquiesce','마지못해 따르다,수긍하다'),ch('contest his proposal obstinately','obstinately','고집스럽게'),ch('proceed unilaterally without him','proceed','나아가다'))
 })
],ending:sc('town','마을 등불이 하나씩 켜지는 걸 보며 다들 나란히 걸었다.','',null)},

{title:'겨울 준비',scenes:[
 sc('room','겨울이 다가와 담요와 장작을 모아야 한다. 양이 부족해 보인다.','부족해 보이면 더 모아오는 게 알맞아요.',{
  hs:lv(ch('gather more from the shed','gather','창고에서 더 모아온다'),ch('complain there is never enough','complain','항상 부족하다고 불평한다'),ch('wait and hope it is enough','hope','그냥 충분하길 바란다')),
  adv:lv(ch('collect more from the shed','collect','모으다'),ch('grumble about the shortage','shortage','부족'),ch('assume it will be enough','assume','가정하다')),
  tr0:lv(ch('procure more from the shed','procure','구하다'),ch('lament the insufficient supply','lament','한탄하다'),ch('presume there is enough','presume','추정하다')),
  t0:lv(ch('stock up more supplies','stock up','비축하다'),ch('complain about the shortage','shortage','부족'),ch('assume the supply is sufficient','sufficient','충분한')),
  t6:lv(ch('procure additional supplies','additional','추가의'),ch('voice concern over the shortage','voice concern','우려를 표하다'),ch('presume the stock is adequate','adequate','충분한,적절한')),
  t7:lv(ch('secure an adequate supply','secure','확보하다'),ch('lament the persistent shortage','persistent','지속적인'),ch('presume the stock suffices','suffice','충분하다')),
  t8:lv(ch('procure a sufficient stockpile','stockpile','비축량'),ch('bemoan the recurring shortage','recurring','반복되는'),ch('presume the reserves are adequate','reserves','비축분')),
  t9:lv(ch('secure an ample stockpile','ample','충분한,풍부한'),ch('bemoan the chronic shortage','chronic','만성적인'),ch('presume the reserves suffice','presume','추정하다'))
 }),
 sc('town','장 보러 나갔다가 길에서 떨고 있는 낯선 아이를 만난다.','떨고 있는 낯선 아이에게는 남는 담요를 건네는 게 알맞아요.',{
  hs:lv(ch('offer a spare blanket','spare','남는 담요를 건넨다'),ch('hurry past without looking','hurry','쳐다보지 않고 서둘러 지나간다'),ch('tell it to move along','move','비켜 가라고 말한다')),
  adv:lv(ch('offer an extra blanket','extra','여분의'),ch('rush by without a glance','glance','흘낏 봄'),ch('shoo it away','shoo away','쫓아버리다')),
  tr0:lv(ch('extend a spare blanket to it','extend','내밀다,제공하다'),ch('hasten past indifferently','indifferently','무관심하게'),ch('dismiss it and move on','dismiss','무시하다')),
  t0:lv(ch('provide a spare blanket','provide','제공하다'),ch('pass by quickly without noticing','notice','알아채다'),ch('tell it to leave','leave','떠나다')),
  t6:lv(ch('provide a spare blanket promptly','promptly','즉시'),ch('proceed past without acknowledging it','acknowledging','인정하는,알아보는'),ch('direct it to move elsewhere','direct','지시하다')),
  t7:lv(ch('extend assistance with a spare blanket','assistance','도움'),ch('bypass it without a second thought','bypass','지나치다'),ch('instruct it to relocate','relocate','이동하다')),
  t8:lv(ch('proffer a spare blanket at once','proffer','내밀다,제공하다'),ch('disregard it and proceed past','disregard','무시하다'),ch('instruct it to move along curtly','curtly','퉁명스럽게')),
  t9:lv(ch('proffer a spare blanket without hesitation','hesitation','망설임'),ch('disregard it callously and pass by','callously','냉담하게'),ch('curtly direct it elsewhere','curtly','퉁명스럽게'))
 }),
 sc('shop','겨울 용품을 사려는데 돈이 조금 부족하다. 주인이 에누리해 주겠다고 한다.','호의는 감사하며 받아들이는 게 알맞아요.',{
  hs:lv(ch('thank the owner and accept','accept','감사하며 받아들인다'),ch('refuse out of pride','pride','자존심 때문에 거절한다'),ch('demand a bigger discount','demand','더 큰 할인을 요구한다')),
  adv:lv(ch('gratefully accept the offer','gratefully','감사하게'),ch('decline out of pride','decline','거절하다'),ch('push for a bigger discount','push for','요구하다')),
  tr0:lv(ch('graciously accept the discount','graciously','정중히,기꺼이'),ch('spurn it out of pride','spurn','거절하다,물리치다'),ch('press for a larger discount','press for','강하게 요구하다')),
  t0:lv(ch('accept the discount gratefully','discount','할인'),ch('reject the offer out of pride','reject','거절하다'),ch('ask for an even bigger discount','bigger','더 큰')),
  t6:lv(ch('accept the discounted price gratefully','discounted','할인된'),ch('decline the offer out of pride','offer','제안'),ch('request a larger discount','request','요청하다')),
  t7:lv(ch('graciously accept the concession','concession','양보,할인'),ch('rebuff the offer out of pride','rebuff','퇴짜 놓다'),ch('press for a more generous discount','generous','후한,너그러운')),
  t8:lv(ch('graciously accept the owner’s concession','owner’s','주인의'),ch('rebuff the gesture out of pride','gesture','호의,몸짓'),ch('press for an even more generous discount','press for','요구하다')),
  t9:lv(ch('graciously accept the proffered concession','proffered','내밀어진,제공된'),ch('rebuff the gesture out of misplaced pride','misplaced','잘못된,엉뚱한'),ch('press for an exorbitant discount','exorbitant','과도한'))
 })
],ending:sc('room','창밖에 첫눈이 내리기 시작했다. 담요 속에서 다들 조용했다.','',null)},

{title:'생일 준비',scenes:[
 sc('stall','하치와레의 생일이 다가온다. 몰래 준비해야 한다.','깜짝 파티는 몰래 계획해야 해요.',{
  hs:lv(ch('plan it in secret','secret','몰래 계획을 짠다'),ch('announce it loudly','announce','크게 소문낸다'),ch('forget about it entirely','forget','완전히 잊어버린다')),
  adv:lv(ch('plan it quietly','quietly','조용히'),ch('broadcast it to everyone','broadcast','널리 알리다'),ch('let it slip one’s mind','slip one’s mind','깜빡 잊다')),
  tr0:lv(ch('plan it covertly','covertly','은밀히'),ch('publicize it openly','publicize','공개적으로 알리다'),ch('let it fall out of memory','fall out of memory','기억에서 사라지다')),
  t0:lv(ch('plan it secretly','secretly','비밀스럽게'),ch('tell everyone about it','tell','말하다'),ch('completely forget about it','completely','완전히')),
  t6:lv(ch('coordinate it discreetly','discreetly','신중하게,조심스럽게'),ch('disclose it to everyone','disclose','공개하다'),ch('overlook it entirely','overlook','간과하다')),
  t7:lv(ch('arrange it in strict confidence','confidence','비밀,신뢰'),ch('divulge it prematurely','divulge','누설하다'),ch('let it slip one’s attention','attention','주의,관심')),
  t8:lv(ch('orchestrate it in complete secrecy','orchestrate','조직하다,계획하다'),ch('inadvertently divulge the plan','inadvertently','무심코'),ch('neglect the preparations entirely','neglect','소홀히 하다')),
  t9:lv(ch('orchestrate it with utmost discretion','utmost','최대한의'),ch('prematurely divulge the surprise','prematurely','너무 일찍'),ch('neglect the preparations altogether','preparations','준비'))
 }),
 sc('shop','선물을 고르는데 예산이 빠듯하다.','예산이 빠듯하면 소박하지만 정성스러운 선물이 알맞아요.',{
  hs:lv(ch('choose something thoughtful and simple','thoughtful','소박하지만 정성스러운 걸 고른다'),ch('overspend without a plan','overspend','계획 없이 과하게 쓴다'),ch('pick whatever is cheapest','cheapest','그냥 가장 싼 걸 고른다')),
  adv:lv(ch('choose a modest, heartfelt gift','heartfelt','진심 어린'),ch('spend beyond the budget','beyond','~을 넘어서'),ch('grab the cheapest item available','grab','잡아채다')),
  tr0:lv(ch('select a humble yet sincere gift','humble','소박한'),ch('exceed the budget carelessly','exceed','초과하다'),ch('settle for the cheapest option','settle for','~에 만족하다')),
  t0:lv(ch('choose a simple, sincere gift','sincere','진실한'),ch('spend more than planned','planned','계획된'),ch('choose the lowest-priced item','lowest-priced','가장 싼')),
  t6:lv(ch('select a modest gift within budget','budget','예산'),ch('exceed the allocated budget','allocated','할당된'),ch('opt for the cheapest available item','opt for','선택하다')),
  t7:lv(ch('select a cost-effective yet sincere gift','cost-effective','비용 효율적인'),ch('overshoot the allocated budget','overshoot','초과하다'),ch('default to the lowest-cost option','default to','기본값으로 택하다')),
  t8:lv(ch('procure a modest, considerate gift','considerate','사려 깊은'),ch('exceed the stipulated budget','stipulated','규정된'),ch('settle for the most economical item','economical','경제적인')),
  t9:lv(ch('procure a frugal yet considerate gift','frugal','검소한'),ch('exceed the stipulated budget recklessly','recklessly','무모하게'),ch('default to the most economical option','most economical','가장 경제적인'))
 }),
 sc('town','깜짝 파티 장소를 정하는데 비가 올까 걱정이다.','비가 걱정되면 대비한 장소를 준비하는 게 알맞아요.',{
  hs:lv(ch('prepare a backup place','backup','비 올 때를 대비한 장소도 준비한다'),ch('ignore the forecast','forecast','날씨 예보를 무시한다'),ch('cancel the plan at once','cancel','바로 계획을 취소한다')),
  adv:lv(ch('arrange an alternative venue','alternative','대안의'),ch('disregard the weather forecast','disregard','무시하다'),ch('scrap the plan immediately','scrap','폐기하다')),
  tr0:lv(ch('secure a contingency venue','contingency','비상시의,대비책'),ch('overlook the weather forecast','overlook','간과하다'),ch('abort the plan right away','abort','중단하다')),
  t0:lv(ch('prepare an alternative location','location','장소'),ch('ignore the weather report','report','보고,예보'),ch('cancel the plan immediately','immediately','즉시')),
  t6:lv(ch('arrange a contingency plan for the venue','contingency plan','비상 계획'),ch('disregard the weather forecast entirely','entirely','완전히'),ch('scrap the event altogether','event','행사')),
  t7:lv(ch('secure a contingency venue in advance','in advance','미리'),ch('dismiss the forecast as unreliable','unreliable','신뢰할 수 없는'),ch('abort the event prematurely','prematurely','성급하게')),
  t8:lv(ch('preemptively secure a backup venue','preemptively','선제적으로'),ch('disregard the forecast altogether','altogether','완전히'),ch('abandon the event preemptively','abandon','포기하다')),
  t9:lv(ch('preemptively secure a contingency venue','secure','확보하다'),ch('dismiss the forecast cavalierly','cavalierly','무신경하게'),ch('abort the event without due cause','due cause','타당한 이유'))
 })
],ending:sc('room','다 같이 "생일 축하해"를 외치자 하치와레가 놀란 얼굴로 웃었다.','',null)},

{title:'수료식 전날',scenes:[
 sc('meadow','긴 수련 기간이 끝나가고, 다들 그동안을 돌아본다.','긴 과정이 끝나갈 땐 돌아보는 시간이 알맞아요.',{
  hs:lv(ch('reflect on how far they have come','reflect','그동안의 과정을 돌아본다'),ch('rush to the next thing','rush','서둘러 다음으로 넘어간다'),ch('dismiss the whole season','dismiss','그 기간 전체를 별것 아니라 여긴다')),
  adv:lv(ch('look back on their progress','look back','돌아보다'),ch('hurry on to what’s next','hurry on','서둘러 나아가다'),ch('brush off the whole experience','brush off','가볍게 넘기다')),
  tr0:lv(ch('contemplate their journey so far','contemplate','숙고하다'),ch('plunge ahead without pause','plunge ahead','거침없이 나아가다'),ch('discount the whole experience','discount','경시하다')),
  t0:lv(ch('look back on their achievements','achievements','성과'),ch('move on without pausing','pausing','멈추는'),ch('consider it unimportant','unimportant','중요하지 않은')),
  t6:lv(ch('review their progress together','review','되돌아보다,검토하다'),ch('move forward without reflection','reflection','성찰'),ch('regard the season as trivial','regard','간주하다')),
  t7:lv(ch('reflect collectively on their progress','collectively','함께,집단으로'),ch('advance without a moment’s pause','advance','나아가다'),ch('regard the period as inconsequential','inconsequential','하찮은')),
  t8:lv(ch('introspect on their collective journey','introspect','성찰하다'),ch('forge ahead without reflection','forge ahead','계속 나아가다'),ch('dismiss the period as inconsequential','period','기간')),
  t9:lv(ch('collectively introspect on their journey','introspect','성찰하다'),ch('forge ahead heedlessly','heedlessly','무심하게'),ch('dismiss the season as trivial','trivial','사소한'))
 }),
 sc('room','다음 계절에 뭘 할지 의견이 갈린다.','의견이 갈리면 서로 타협하는 게 알맞아요.',{
  hs:lv(ch('compromise on a shared plan','compromise','서로 타협해서 계획을 정한다'),ch('insist on one’s own way','insist','자기 방식만 고집한다'),ch('quarrel and split up','quarrel','다투고 흩어진다')),
  adv:lv(ch('negotiate a shared plan','negotiate','협상하다'),ch('push for one’s own idea only','push for','강하게 요구하다'),ch('argue and go separate ways','separate ways','각자의 길')),
  tr0:lv(ch('reach a mutual compromise','mutual','상호의'),ch('cling to one’s own opinion','cling to','집착하다'),ch('clash and part ways','clash','충돌하다')),
  t0:lv(ch('agree on a compromise','agree','동의하다'),ch('insist only on one’s own idea','idea','의견'),ch('argue and separate','separate','헤어지다')),
  t6:lv(ch('negotiate a mutually agreeable plan','mutually agreeable','상호 합의된'),ch('insist unilaterally on one’s own plan','unilaterally','일방적으로'),ch('dispute and go their separate ways','dispute','다투다')),
  t7:lv(ch('reach a consensus through negotiation','consensus','합의'),ch('persist stubbornly with one’s own view','persist','고집하다'),ch('clash and disband','disband','해산하다')),
  t8:lv(ch('broker a mutually acceptable compromise','broker','중개하다,성사시키다'),ch('obstinately insist on one’s own view','obstinately','고집스럽게'),ch('clash irreconcilably and part ways','irreconcilably','화해할 수 없게')),
  t9:lv(ch('broker an equitable compromise','equitable','공평한'),ch('obstinately persist in one’s own view','persist','고집하다'),ch('clash irreparably and disband','irreparably','돌이킬 수 없게'))
 }),
 sc('town','마을 사람들이 작은 축하 행사를 준비해 주었다.','누군가의 호의는 품위 있게 받아들이는 게 알맞아요.',{
  hs:lv(ch('accept the kindness graciously','graciously','호의를 품위 있게 받아들인다'),ch('feel embarrassed and flee','embarrassed','쑥스러워서 도망친다'),ch('brush off the gesture','gesture','그 마음을 대충 넘긴다')),
  adv:lv(ch('accept the gesture warmly','warmly','따뜻하게'),ch('feel shy and run off','shy','부끄러운'),ch('shrug off the kindness','shrug off','대수롭지 않게 넘기다')),
  tr0:lv(ch('receive the kindness with grace','grace','품위,우아함'),ch('feel flustered and retreat','flustered','당황한'),ch('dismiss the kind gesture','dismiss','대수롭지 않게 여기다')),
  t0:lv(ch('accept the kindness politely','politely','정중하게'),ch('feel embarrassed and leave','leave','떠나다'),ch('ignore the kind gesture','ignore','무시하다')),
  t6:lv(ch('accept the kind gesture graciously','kind gesture','친절한 행동'),ch('feel self-conscious and withdraw','self-conscious','남의 시선을 의식하는'),ch('overlook the thoughtful gesture','thoughtful','사려 깊은')),
  t7:lv(ch('graciously acknowledge the kind gesture','acknowledge','인정하다'),ch('feel flustered and withdraw hastily','hastily','성급하게'),ch('dismiss the thoughtful gesture lightly','lightly','가볍게')),
  t8:lv(ch('graciously accept the community’s gesture','community’s','공동체의'),ch('feel unduly self-conscious and retreat','unduly','부당하게,과도하게'),ch('trivialize the heartfelt gesture','heartfelt','진심 어린')),
  t9:lv(ch('graciously embrace the community’s gesture','embrace','받아들이다'),ch('feel unduly flustered and retreat','retreat','물러나다'),ch('trivialize the community’s heartfelt gesture','trivialize','경시하다'))
 })
],ending:sc('night','별빛 아래 다 같이 걸으며, 다음 계절을 기다리기로 했다.','',null)}
];
