
// ============================================================
// DATA DEFINITIONS
// ============================================================

// ============================================================
// WEAPONS — 同一typeは戦闘中1本のみ使用可 (複数所持はOK)
// LEGENDARY追加・10階層対応
// ============================================================
const WEAPONS = {
  // ===== DAGGER (短剣) =====
  dagger: {
    id:'dagger', name:'短剣', icon:'🗡', type:'dagger', rarity:'common',
    atkDice:[{n:5,sides:4}], defDice:[{n:1,sides:10}],
    desc:'素早い多段攻撃',
    skills:['poison_blade','flurry','vital_strike'], defSkills:['dodge']
  },
  venom_dagger: {
    id:'venom_dagger', name:'毒蛇の短剣', icon:'🗡', type:'dagger', rarity:'uncommon',
    atkDice:[{n:4,sides:6}], defDice:[{n:1,sides:8}],
    desc:'毒特化・命中毎に毒を重ねる',
    skills:['poison_blade','double_poison','vital_strike'], defSkills:['dodge']
  },
  shadow_dagger: {
    id:'shadow_dagger', name:'影の短剣', icon:'🗡', type:'dagger', rarity:'rare',
    atkDice:[{n:5,sides:6}], defDice:[{n:2,sides:6}],
    desc:'影に溶け込む暗殺者の刃',
    skills:['flurry','shadow_step','vital_strike'], defSkills:['shadow_step']
  },
  twin_fang: {
    id:'twin_fang', name:'双牙の短剣', icon:'🗡', type:'dagger', rarity:'rare',
    atkDice:[{n:6,sides:6},{n:1,sides:8}], defDice:[{n:1,sides:6}],
    desc:'二刀流の高速連撃',
    skills:['flurry','twin_strike','poison_blade'], defSkills:['dodge']
  },
  obsidian_fang: {
    id:'obsidian_fang', name:'黒曜の牙', icon:'🗡', type:'dagger', rarity:'epic',
    atkDice:[{n:6,sides:8},{n:2,sides:6}], defDice:[{n:2,sides:8}],
    desc:'闇の結晶で作られた猛毒の刃',
    skills:['double_poison','flurry','shadow_step'], defSkills:['dodge','shadow_step']
  },
  death_whisper: {
    id:'death_whisper', name:'死神の囁き', icon:'🗡', type:'dagger', rarity:'legendary',
    atkDice:[{n:8,sides:8},{n:2,sides:10}], defDice:[{n:2,sides:10}],
    desc:'一撃に魂を削る伝説の短剣。毒と闇を同時に宿す',
    skills:['death_strike','double_poison','shadow_step'], defSkills:['dodge','shadow_step']
  },
  // ===== GREATSWORD (大剣) =====
  greatsword: {
    id:'greatsword', name:'大剣', icon:'⚔', type:'greatsword', rarity:'common',
    atkDice:[{n:2,sides:10}], defDice:[{n:1,sides:4}],
    desc:'一撃必殺の重厚な斬撃',
    skills:['shatter','wind_up','behead'], defSkills:[]
  },
  runic_blade: {
    id:'runic_blade', name:'ルーン大剣', icon:'⚔', type:'greatsword', rarity:'uncommon',
    atkDice:[{n:2,sides:12}], defDice:[{n:1,sides:6}],
    desc:'魔力を宿した古の大剣',
    skills:['shatter','empower','behead'], defSkills:[]
  },
  chaos_blade: {
    id:'chaos_blade', name:'混沌の大剣', icon:'⚔', type:'greatsword', rarity:'rare',
    atkDice:[{n:2,sides:20}], defDice:[{n:1,sides:4}],
    desc:'d20一本勝負！最大か最低か',
    skills:['wind_up','chaos_swing','behead'], defSkills:[]
  },
  titan_cleaver: {
    id:'titan_cleaver', name:'巨人の断刀', icon:'⚔', type:'greatsword', rarity:'epic',
    atkDice:[{n:3,sides:12},{n:1,sides:10}], defDice:[{n:1,sides:6}],
    desc:'全てを断ち切る超重量斬撃',
    skills:['shatter','wind_up','titan_blow'], defSkills:[]
  },
  god_slayer: {
    id:'god_slayer', name:'神殺しの剣', icon:'⚔', type:'greatsword', rarity:'legendary',
    atkDice:[{n:4,sides:12},{n:2,sides:10}], defDice:[{n:2,sides:6}],
    desc:'神をも斬り伏せる伝説の大剣。防御を根こそぎ貫く',
    skills:['divine_cut','titan_blow','wind_up'], defSkills:[]
  },
  // ===== SPEAR (槍) =====
  spear: {
    id:'spear', name:'槍', icon:'🔱', type:'spear', rarity:'common',
    atkDice:[{n:2,sides:8}], defDice:[{n:2,sides:6}],
    desc:'攻守バランス型',
    skills:['pierce','intercept','stance'], defSkills:['intercept']
  },
  thunder_lance: {
    id:'thunder_lance', name:'雷鳴の槍', icon:'🔱', type:'spear', rarity:'uncommon',
    atkDice:[{n:3,sides:8}], defDice:[{n:2,sides:6}],
    desc:'雷を纏った突撃の槍',
    skills:['pierce','thunder_thrust','stance'], defSkills:['intercept']
  },
  dragon_spear: {
    id:'dragon_spear', name:'竜殺しの槍', icon:'🔱', type:'spear', rarity:'rare',
    atkDice:[{n:3,sides:10}], defDice:[{n:2,sides:8}],
    desc:'龍の鱗を穿く神聖な槍',
    skills:['pierce','dragon_pierce','stance'], defSkills:['intercept','dragon_pierce']
  },
  celestial_lance: {
    id:'celestial_lance', name:'天穿の槍', icon:'🔱', type:'spear', rarity:'epic',
    atkDice:[{n:4,sides:10},{n:1,sides:8}], defDice:[{n:3,sides:8}],
    desc:'天を突く神話級の槍',
    skills:['pierce','dragon_pierce','thunder_thrust'], defSkills:['intercept','dragon_pierce']
  },
  gungnir: {
    id:'gungnir', name:'グングニル', icon:'🔱', type:'spear', rarity:'legendary',
    atkDice:[{n:5,sides:10},{n:2,sides:8}], defDice:[{n:3,sides:10}],
    desc:'必中の神槍。投げれば必ず当たり、必ず戻る',
    skills:['absolute_pierce','dragon_pierce','thunder_thrust'], defSkills:['intercept','divine_guard']
  },
  // ===== SHIELD (盾) =====
  shield: {
    id:'shield', name:'盾', icon:'🛡', type:'shield', rarity:'common',
    atkDice:[{n:1,sides:4}], defDice:[{n:3,sides:8}],
    desc:'防御特化・カウンター型',
    skills:['iron_wall','counter','guard_stance'], defSkills:['iron_wall','guard_stance','counter']
  },
  tower_shield: {
    id:'tower_shield', name:'タワーシールド', icon:'🛡', type:'shield', rarity:'uncommon',
    atkDice:[{n:1,sides:4}], defDice:[{n:5,sides:8}],
    desc:'巨大な防壁。移動が遅いが鉄壁',
    skills:['iron_wall','guard_stance','fortress'], defSkills:['iron_wall','guard_stance','fortress']
  },
  void_aegis: {
    id:'void_aegis', name:'虚空の盾', icon:'🛡', type:'shield', rarity:'rare',
    atkDice:[{n:2,sides:8}], defDice:[{n:4,sides:10}],
    desc:'攻防一体の神秘の盾',
    skills:['counter','iron_wall','void_reflect'], defSkills:['iron_wall','guard_stance','void_reflect']
  },
  divine_bulwark: {
    id:'divine_bulwark', name:'神盾', icon:'🛡', type:'shield', rarity:'epic',
    atkDice:[{n:3,sides:8}], defDice:[{n:5,sides:10}],
    desc:'神々が鍛えた究極の防壁',
    skills:['void_reflect','fortress','counter'], defSkills:['iron_wall','void_reflect','fortress']
  },
  aegis_absolute: {
    id:'aegis_absolute', name:'絶対盾エギス', icon:'🛡', type:'shield', rarity:'legendary',
    atkDice:[{n:4,sides:10}], defDice:[{n:7,sides:10}],
    desc:'あらゆる攻撃を跳ね返す伝説の盾',
    skills:['perfect_guard','void_reflect','counter'], defSkills:['perfect_guard','void_reflect','iron_wall']
  },
  // ===== STAFF (杖) =====
  staff: {
    id:'staff', name:'杖', icon:'🪄', type:'staff', rarity:'common',
    atkDice:[{n:3,sides:6}], defDice:[{n:1,sides:6}],
    desc:'ダイス変換・魔法型',
    skills:['empower','reroll_spell','arcane_surge'], defSkills:[]
  },
  chaos_staff: {
    id:'chaos_staff', name:'混沌の杖', icon:'🪄', type:'staff', rarity:'uncommon',
    atkDice:[{n:5,sides:6}], defDice:[{n:1,sides:4}],
    desc:'乱数を操る混沌の魔杖',
    skills:['reroll_spell','arcane_surge','chaos_magic'], defSkills:[]
  },
  soul_staff: {
    id:'soul_staff', name:'魂喰らいの杖', icon:'🪄', type:'staff', rarity:'rare',
    atkDice:[{n:4,sides:8},{n:2,sides:6}], defDice:[{n:2,sides:6}],
    desc:'敵の魂を吸収して力に変える',
    skills:['empower','soul_drain','arcane_surge'], defSkills:[]
  },
  elder_wand: {
    id:'elder_wand', name:'古老の魔杖', icon:'🪄', type:'staff', rarity:'epic',
    atkDice:[{n:6,sides:8},{n:1,sides:10}], defDice:[{n:2,sides:6}],
    desc:'魔法の頂点。全ダイスd8×6',
    skills:['empower','reroll_spell','arcane_surge','elder_magic'], defSkills:[]
  },
  staff_of_cosmos: {
    id:'staff_of_cosmos', name:'宇宙の杖', icon:'🪄', type:'staff', rarity:'legendary',
    atkDice:[{n:6,sides:10},{n:3,sides:8}], defDice:[{n:3,sides:8}],
    desc:'宇宙の力を操る伝説の魔杖。時空を歪める',
    skills:['cosmos_magic','elder_magic','soul_drain'], defSkills:[]
  },
  // ===== BOW (弓) =====
  bow: {
    id:'bow', name:'弓', icon:'🏹', type:'bow', rarity:'common',
    atkDice:[{n:3,sides:6}], defDice:[{n:1,sides:4}],
    desc:'射程・連続攻撃型',
    skills:['multishot','aimed_shot','volley'], defSkills:[]
  },
  hunting_bow: {
    id:'hunting_bow', name:'狩人の弓', icon:'🏹', type:'bow', rarity:'uncommon',
    atkDice:[{n:4,sides:6}], defDice:[{n:1,sides:6}],
    desc:'獲物を確実に仕留める',
    skills:['aimed_shot','hunting_mark','volley'], defSkills:[]
  },
  cursed_bow: {
    id:'cursed_bow', name:'呪われた弓', icon:'🏹', type:'bow', rarity:'rare',
    atkDice:[{n:5,sides:6}], defDice:[{n:1,sides:4}],
    desc:'呪いの矢。命中で呪い付与',
    skills:['multishot','curse_arrow','volley'], defSkills:[]
  },
  phantom_bow: {
    id:'phantom_bow', name:'幻影の弓', icon:'🏹', type:'bow', rarity:'epic',
    atkDice:[{n:5,sides:8},{n:2,sides:6}], defDice:[{n:2,sides:6}],
    desc:'幻の矢は防御を無視する',
    skills:['aimed_shot','phantom_shot','curse_arrow'], defSkills:[]
  },
  artemis_bow: {
    id:'artemis_bow', name:'アルテミスの弓', icon:'🏹', type:'bow', rarity:'legendary',
    atkDice:[{n:7,sides:8},{n:2,sides:10}], defDice:[{n:2,sides:8}],
    desc:'月の女神の弓。全ての矢が急所を貫く',
    skills:['lunar_shot','phantom_shot','aimed_shot'], defSkills:[]
  },
  // ===== AXE (斧) =====
  handaxe: {
    id:'handaxe', name:'手斧', icon:'🪓', type:'axe', rarity:'common',
    atkDice:[{n:2,sides:8}], defDice:[{n:1,sides:6}],
    desc:'荒々しい力任せの一撃',
    skills:['cleave','rage_strike','behead'], defSkills:[]
  },
  battle_axe: {
    id:'battle_axe', name:'戦斧', icon:'🪓', type:'axe', rarity:'uncommon',
    atkDice:[{n:2,sides:10},{n:1,sides:8}], defDice:[{n:1,sides:6}],
    desc:'戦場を制する重厚な斧',
    skills:['cleave','rage_strike','whirlwind'], defSkills:[]
  },
  berserker_axe: {
    id:'berserker_axe', name:'狂戦士の斧', icon:'🪓', type:'axe', rarity:'rare',
    atkDice:[{n:4,sides:10}], defDice:[{n:1,sides:4}],
    desc:'HPが低いほど強くなる',
    skills:['rage_strike','berserk_mode','whirlwind'], defSkills:[]
  },
  volcanic_axe: {
    id:'volcanic_axe', name:'火山の大斧', icon:'🪓', type:'axe', rarity:'epic',
    atkDice:[{n:4,sides:10},{n:2,sides:8}], defDice:[{n:2,sides:6}],
    desc:'溶岩を纏った灼熱の大斧',
    skills:['cleave','whirlwind','berserk_mode'], defSkills:[]
  },
  ragnarok_axe: {
    id:'ragnarok_axe', name:'ラグナロクの斧', icon:'🪓', type:'axe', rarity:'legendary',
    atkDice:[{n:5,sides:12},{n:3,sides:10}], defDice:[{n:2,sides:8}],
    desc:'世界の終焉を告げる破壊の大斧',
    skills:['world_cleave','berserk_mode','rage_strike'], defSkills:[]
  },
  // ===== GAUNTLET (拳) — 新武器種 =====
  iron_fist: {
    id:'iron_fist', name:'鉄の拳', icon:'👊', type:'gauntlet', rarity:'common',
    atkDice:[{n:4,sides:6}], defDice:[{n:2,sides:6}],
    desc:'鉄を纏った拳の連打',
    skills:['flurry','vital_strike','rage_strike'], defSkills:['dodge']
  },
  thunder_knuckle: {
    id:'thunder_knuckle', name:'雷拳', icon:'👊', type:'gauntlet', rarity:'uncommon',
    atkDice:[{n:5,sides:6}], defDice:[{n:2,sides:6}],
    desc:'雷を纏った高速打撃',
    skills:['flurry','thunder_thrust','vital_strike'], defSkills:['dodge']
  },
  demon_fist: {
    id:'demon_fist', name:'鬼神の拳', icon:'👊', type:'gauntlet', rarity:'rare',
    atkDice:[{n:5,sides:8}], defDice:[{n:3,sides:6}],
    desc:'鬼の力を宿した破壊の拳',
    skills:['rage_strike','berserk_mode','whirlwind'], defSkills:['dodge']
  },
  void_fist: {
    id:'void_fist', name:'虚空拳', icon:'👊', type:'gauntlet', rarity:'epic',
    atkDice:[{n:6,sides:8},{n:1,sides:10}], defDice:[{n:3,sides:8}],
    desc:'虚空を貫く究極の拳',
    skills:['chaos_magic','berserk_mode','vital_strike'], defSkills:['dodge']
  },
  fist_of_god: {
    id:'fist_of_god', name:'神の鉄拳', icon:'👊', type:'gauntlet', rarity:'legendary',
    atkDice:[{n:8,sides:8},{n:2,sides:10}], defDice:[{n:4,sides:8}],
    desc:'神が人に与えた最強の拳。打つ度に大地が震える',
    skills:['divine_cut','berserk_mode','world_cleave'], defSkills:['divine_guard']
  },
  // ===== KATANA (刀) — 新武器種 =====
  katana: {
    id:'katana', name:'刀', icon:'🔪', type:'katana', rarity:'common',
    atkDice:[{n:3,sides:8}], defDice:[{n:2,sides:6}],
    desc:'鋭い一閃・居合斬り',
    skills:['vital_strike','shatter','aimed_shot'], defSkills:['dodge']
  },
  muramasa: {
    id:'muramasa', name:'村正', icon:'🔪', type:'katana', rarity:'uncommon',
    atkDice:[{n:4,sides:8}], defDice:[{n:2,sides:6}],
    desc:'呪われた妖刀。使い手を選ぶ',
    skills:['vital_strike','curse_arrow','behead'], defSkills:['dodge']
  },
  masamune: {
    id:'masamune', name:'正宗', icon:'🔪', type:'katana', rarity:'rare',
    atkDice:[{n:4,sides:10}], defDice:[{n:3,sides:8}],
    desc:'匠の刀。守りも強く攻めも鋭い',
    skills:['aimed_shot','vital_strike','stance'], defSkills:['dodge','intercept']
  },
  oni_blade: {
    id:'oni_blade', name:'鬼斬り刀', icon:'🔪', type:'katana', rarity:'epic',
    atkDice:[{n:5,sides:10},{n:2,sides:8}], defDice:[{n:3,sides:8}],
    desc:'鬼をも斬り裂く魔刀',
    skills:['behead','vital_strike','death_strike'], defSkills:['dodge','intercept']
  },
  kusanagi: {
    id:'kusanagi', name:'天叢雲剣', icon:'🔪', type:'katana', rarity:'legendary',
    atkDice:[{n:7,sides:10},{n:2,sides:8}], defDice:[{n:4,sides:8}],
    desc:'草を薙ぐ天下の宝刀。神話に語り継がれる最強の刀',
    skills:['divine_cut','death_strike','absolute_pierce'], defSkills:['divine_guard','intercept']
  },
  // ===== WHIP (鞭) — 出血特化・多段 =====
  whip: {
    id:'whip', name:'鞭', icon:'🪢', type:'whip', rarity:'common',
    atkDice:[{n:4,sides:4},{n:2,sides:4}], defDice:[{n:1,sides:6}],
    desc:'多段攻撃・出血特化。素早い連撃',
    skills:['lash','bleed_strike','frenzy_lash'], defSkills:[]
  },
  thorned_whip: {
    id:'thorned_whip', name:'茨の鞭', icon:'🪢', type:'whip', rarity:'uncommon',
    atkDice:[{n:5,sides:4},{n:2,sides:6}], defDice:[{n:1,sides:6}],
    desc:'棘付き鞭。出血が深く刻まれる',
    skills:['bleed_strike','frenzy_lash','entangle'], defSkills:[]
  },
  blood_whip: {
    id:'blood_whip', name:'血縛の鞭', icon:'🪢', type:'whip', rarity:'rare',
    atkDice:[{n:6,sides:6},{n:2,sides:6}], defDice:[{n:2,sides:6}],
    desc:'血に染まった呪われた鞭',
    skills:['bleed_strike','frenzy_lash','entangle'], defSkills:[]
  },
  serpent_whip: {
    id:'serpent_whip', name:'蛇神の鞭', icon:'🪢', type:'whip', rarity:'epic',
    atkDice:[{n:7,sides:6},{n:2,sides:8}], defDice:[{n:2,sides:6}],
    desc:'蛇神の力を宿す。毒と出血を同時に付与',
    skills:['bleed_strike','lash','frenzy_lash'], defSkills:[]
  },
  chaos_whip: {
    id:'chaos_whip', name:'混沌の鞭', icon:'🪢', type:'whip', rarity:'legendary',
    atkDice:[{n:8,sides:6},{n:3,sides:8}], defDice:[{n:2,sides:8}],
    desc:'混沌を纏う究極の鞭。全状態異常を重ねがけ',
    skills:['frenzy_lash','bleed_strike','entangle'], defSkills:[]
  },
  // ===== SCYTHE (大鎌) — 脆弱・凍結 =====
  scythe: {
    id:'scythe', name:'大鎌', icon:'⚔', type:'scythe', rarity:'common',
    atkDice:[{n:2,sides:10}], defDice:[{n:1,sides:4}],
    desc:'死神の武器。命中で脆弱付与',
    skills:['reap','frost_cut','soul_harvest'], defSkills:[]
  },
  frost_scythe: {
    id:'frost_scythe', name:'霜の大鎌', icon:'⚔', type:'scythe', rarity:'uncommon',
    atkDice:[{n:3,sides:10}], defDice:[{n:1,sides:6}],
    desc:'凍てつく死の刃。凍結特化',
    skills:['frost_cut','reap','blizzard_reap'], defSkills:[]
  },
  phantom_scythe: {
    id:'phantom_scythe', name:'幻の大鎌', icon:'⚔', type:'scythe', rarity:'rare',
    atkDice:[{n:3,sides:12}], defDice:[{n:2,sides:6}],
    desc:'幻影の刃。防御を削り取る',
    skills:['reap','frost_cut','soul_harvest'], defSkills:[]
  },
  death_scythe: {
    id:'death_scythe', name:'死神の大鎌', icon:'⚔', type:'scythe', rarity:'epic',
    atkDice:[{n:4,sides:12},{n:1,sides:10}], defDice:[{n:1,sides:8}],
    desc:'魂を刈り取る恐怖の大鎌',
    skills:['soul_harvest','reap','blizzard_reap'], defSkills:[]
  },
  grimreaper: {
    id:'grimreaper', name:'グリムリーパー', icon:'⚔', type:'scythe', rarity:'legendary',
    atkDice:[{n:5,sides:12},{n:2,sides:10}], defDice:[{n:2,sides:8}],
    desc:'死神そのものの鎌。全状態異常の頂点',
    skills:['soul_harvest','blizzard_reap','reap'], defSkills:[]
  },
  // ===== TOME (魔導書) — 感電・焼却 =====
  tome: {
    id:'tome', name:'魔導書', icon:'📖', type:'tome', rarity:'common',
    atkDice:[{n:3,sides:6}], defDice:[{n:2,sides:6}],
    desc:'知識の力。感電と焼却を操る',
    skills:['shock_bolt','ignite','tome_blast'], defSkills:['arcane_ward']
  },
  forbidden_tome: {
    id:'forbidden_tome', name:'禁書', icon:'📖', type:'tome', rarity:'uncommon',
    atkDice:[{n:4,sides:6}], defDice:[{n:2,sides:6}],
    desc:'禁断の知識。感電が深く刺さる',
    skills:['shock_bolt','chain_lightning','ignite'], defSkills:['arcane_ward']
  },
  arcane_codex: {
    id:'arcane_codex', name:'魔法典', icon:'📖', type:'tome', rarity:'rare',
    atkDice:[{n:4,sides:8},{n:2,sides:6}], defDice:[{n:3,sides:6}],
    desc:'古代の呪文書。焼却で敵を弱体化',
    skills:['ignite','tome_blast','chain_lightning'], defSkills:['arcane_ward']
  },
  grimoire: {
    id:'grimoire', name:'グリモワール', icon:'📖', type:'tome', rarity:'epic',
    atkDice:[{n:6,sides:8},{n:1,sides:10}], defDice:[{n:3,sides:6}],
    desc:'魔王の魔法書。感電と焼却を同時に付与',
    skills:['chain_lightning','ignite','tome_blast'], defSkills:['arcane_ward']
  },
  necronomicon: {
    id:'necronomicon', name:'ネクロノミコン', icon:'📖', type:'tome', rarity:'legendary',
    atkDice:[{n:7,sides:8},{n:2,sides:10}], defDice:[{n:3,sides:8}],
    desc:'全知の禁断書。あらゆる状態異常を付与できる',
    skills:['chain_lightning','ignite','soul_harvest'], defSkills:['arcane_ward']
  },
};

// ============================================================
// SKILLS
// ============================================================
const SKILLS = {
  // --- DAGGER skills ---
  poison_blade: { name:'毒刃', icon:'☠', desc:'命中時に毒3付与', type:'atk',
    apply:(s)=>{ s.pendingPoison=3; addLog('毒刃 — 命中で毒3付与','system'); }
  },
  double_poison: { name:'二重毒', icon:'💚', desc:'命中時に毒5付与', type:'atk',
    apply:(s)=>{ s.pendingPoison=5; addLog('二重毒 — 毒5付与！','system'); }
  },
  flurry: { name:'乱舞', icon:'💫', desc:'+2d4追加', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:2,sides:4}); addLog('乱舞 — d4×2追加！','system'); }
  },
  vital_strike: { name:'急所突き', icon:'⚡', desc:'最大値が出たら+2成功', type:'atk',
    apply:(s)=>{ s.maxValBonus=2; addLog('急所突き — 最大値に+2成功','system'); }
  },
  dodge: { name:'回避', icon:'💨', desc:'+1d8防御', type:'def',
    apply:(s)=>{ s.extraDefDice.push({n:1,sides:8}); addLog('回避 — d8追加！','system'); }
  },
  shadow_step: { name:'影踏み', icon:'🌑', desc:'+1d10防御、+1d6攻撃', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:1,sides:6}); s.extraDefDice.push({n:1,sides:10}); addLog('影踏み — d6攻撃・d10防御追加！','system'); }
  },
  twin_strike: { name:'双撃', icon:'✌', desc:'+3d4追加', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:3,sides:4}); addLog('双撃 — d4×3追加！','system'); }
  },
  // --- GREATSWORD skills ---
  shatter: { name:'粉砕', icon:'💥', desc:'ダイス1個をd12に変換', type:'atk',
    apply:(s)=>{ s.upgradeOneDie=12; addLog('粉砕 — 1ダイスをd12化！','system'); }
  },
  wind_up: { name:'溜め斬り', icon:'🌀', desc:'+1d12追加', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:1,sides:12}); addLog('溜め斬り — d12追加！','system'); }
  },
  behead: { name:'断頭', icon:'💀', desc:'防御無視+2成功', type:'atk',
    apply:(s)=>{ s.armorPierce=2; addLog('断頭 — 防御無視+2！','system'); }
  },
  chaos_swing: { name:'混沌の一振り', icon:'🎲', desc:'d20追加(振るか振らないか)', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:1,sides:20}); addLog('混沌の一振り — d20追加！','system'); }
  },
  titan_blow: { name:'タイタン砕き', icon:'🏔', desc:'+1d12&防御無視+3', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:1,sides:12}); s.armorPierce=3; addLog('タイタン砕き — d12+防御無視+3！','system'); }
  },
  // --- SPEAR skills ---
  pierce: { name:'貫通', icon:'🎯', desc:'防御無視+3成功', type:'atk',
    apply:(s)=>{ s.armorPierce=3; addLog('貫通 — 防御無視+3！','system'); }
  },
  intercept: { name:'迎撃', icon:'↩', desc:'防御成功1につき+1反撃', type:'def',
    apply:(s)=>{ s.counterOnDef=true; addLog('迎撃 — 防御成功で反撃！','system'); }
  },
  stance: { name:'構え', icon:'⚖', desc:'+1d6攻撃 +1d6防御', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:1,sides:6}); s.extraDefDice.push({n:1,sides:6}); addLog('構え — d6攻防追加！','system'); }
  },
  thunder_thrust: { name:'雷迅突き', icon:'⚡', desc:'+1d8追加&最大値+3成功', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:1,sides:8}); s.maxValBonus=3; addLog('雷迅突き — d8追加+最大値+3！','system'); }
  },
  dragon_pierce: { name:'龍穿き', icon:'🐲', desc:'防御無視+4&+1d8', type:'atk',
    apply:(s)=>{ s.armorPierce=4; s.extraDice.push({n:1,sides:8}); addLog('龍穿き — 防御無視+4+d8！','system'); }
  },
  // --- SHIELD skills ---
  iron_wall: { name:'鉄壁', icon:'🧱', desc:'+2d8防御', type:'def',
    apply:(s)=>{ s.extraDefDice.push({n:2,sides:8}); addLog('鉄壁 — d8×2追加！','system'); }
  },
  counter: { name:'カウンター', icon:'🔄', desc:'防御成功数だけ敵にダメ', type:'def',
    apply:(s)=>{ s.counterDmg=true; addLog('カウンター準備！','system'); }
  },
  guard_stance: { name:'防御姿勢', icon:'🛡', desc:'このターン被ダメ-3', type:'def',
    apply:(s)=>{ s.dmgReduction=3; addLog('防御姿勢 — 被ダメ-3！','system'); }
  },
  fortress: { name:'要塞', icon:'🏰', desc:'+3d10防御(超重)', type:'def',
    apply:(s)=>{ s.extraDefDice.push({n:3,sides:10}); addLog('要塞 — d10×3追加！','system'); }
  },
  void_reflect: { name:'虚空反射', icon:'🌀', desc:'全防御成功を攻撃に転換', type:'def',
    apply:(s)=>{ s.counterDmg=true; s.dmgReduction=2; addLog('虚空反射 — カウンター+被ダメ-2！','system'); }
  },
  // --- STAFF skills ---
  empower: { name:'強化', icon:'✨', desc:'全ダイスを次の面数に上げる', type:'atk',
    apply:(s)=>{ s.upgradAllDice=true; addLog('強化 — 全ダイスアップグレード！','system'); }
  },
  reroll_spell: { name:'リキャスト', icon:'🔁', desc:'全1の目を振り直し', type:'atk',
    apply:(s)=>{ s.rerollOnes=true; addLog('リキャスト — 1を振り直し！','system'); }
  },
  arcane_surge: { name:'アルカンサージ', icon:'⚗', desc:'+3d6追加', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:3,sides:6}); addLog('アルカンサージ — d6×3追加！','system'); }
  },
  chaos_magic: { name:'混沌魔法', icon:'🎰', desc:'+1d4+1d6+1d8+1d10追加', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:1,sides:4},{n:1,sides:6},{n:1,sides:8},{n:1,sides:10}); addLog('混沌魔法 — 4種ダイス追加！','system'); }
  },
  soul_drain: { name:'魂吸収', icon:'💜', desc:'+2d8追加&命中時HP+2', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:2,sides:8}); s.lifeSteal=2; addLog('魂吸収 — d8×2+吸血！','system'); }
  },
  elder_magic: { name:'古老の魔法', icon:'🌟', desc:'全ダイス+2面upgrade&+2d6', type:'atk',
    apply:(s)=>{ s.upgradAllDice=true; s.extraDice.push({n:2,sides:6}); addLog('古老の魔法 — 全アップ+d6×2！','system'); }
  },
  // --- BOW skills ---
  multishot: { name:'マルチショット', icon:'🏹', desc:'+3d4追加', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:3,sides:4}); addLog('マルチショット — d4×3追加！','system'); }
  },
  aimed_shot: { name:'エイムショット', icon:'🎯', desc:'最高値ダイスを+4', type:'atk',
    apply:(s)=>{ s.topDieBonus=4; addLog('エイムショット — 最高値+4！','system'); }
  },
  volley: { name:'斉射', icon:'🌟', desc:'+1d8+1d6+1d4追加', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:1,sides:8},{n:1,sides:6},{n:1,sides:4}); addLog('斉射 — 3ダイス追加！','system'); }
  },
  hunting_mark: { name:'狩人の印', icon:'🎯', desc:'防御無視+2+最高値+2', type:'atk',
    apply:(s)=>{ s.armorPierce=2; s.topDieBonus=2; addLog('狩人の印 — 防御無視+2+最高値+2！','system'); }
  },
  curse_arrow: { name:'呪いの矢', icon:'💀', desc:'命中時に呪い3付与&+1d6', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:1,sides:6}); s.pendingCurse=3; addLog('呪いの矢 — d6追加+呪い付与！','system'); }
  },
  // --- AXE skills ---
  cleave: { name:'なぎ払い', icon:'🌊', desc:'+1d8追加&防御無視+1', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:1,sides:8}); s.armorPierce=1; addLog('なぎ払い — d8+防御無視+1！','system'); }
  },
  rage_strike: { name:'激怒打', icon:'😡', desc:'最大値+3成功&+1d8', type:'atk',
    apply:(s)=>{ s.maxValBonus=3; s.extraDice.push({n:1,sides:8}); addLog('激怒打 — 最大値+3+d8！','system'); }
  },
  whirlwind: { name:'旋風', icon:'🌪', desc:'+2d8追加', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:2,sides:8}); addLog('旋風 — d8×2追加！','system'); }
  },
  berserk_mode: { name:'狂戦士化', icon:'🩸', desc:'HPが半分以下なら+3d6', type:'atk',
    apply:(s)=>{ 
      if(G.hp <= G.maxHp/2){ s.extraDice.push({n:3,sides:6}); addLog('狂戦士化 — 発動！d6×3追加！','win'); }
      else addLog('狂戦士化 — HP不足(半分以下で発動)','system');
    }
  },
  // --- LEGENDARY / 高レア専用スキル ---
  death_strike: { name:'死の一撃', icon:'💀', desc:'+2d10追加&毒7付与', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:2,sides:10}); s.pendingPoison=7; addLog('死の一撃 — d10×2+毒7！','win'); }
  },
  divine_cut: { name:'神聖斬', icon:'✨', desc:'全ダイスd12化&防御無視+5', type:'atk',
    apply:(s)=>{ s.upgradeOneDie=12; s.upgradAllDice=true; s.armorPierce=5; addLog('神聖斬 — 全d12+防御無視+5！','win'); }
  },
  absolute_pierce: { name:'絶対貫通', icon:'🎯', desc:'防御無視+8成功', type:'atk',
    apply:(s)=>{ s.armorPierce=8; addLog('絶対貫通 — 防御無視+8！','win'); }
  },
  world_cleave: { name:'世界断絶', icon:'🌍', desc:'+3d12追加&防御無視+4', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:3,sides:12}); s.armorPierce=4; addLog('世界断絶 — d12×3+防御無視+4！','win'); }
  },
  perfect_guard: { name:'完全防御', icon:'🏰', desc:'+4d10防御&反撃ダメ2倍', type:'def',
    apply:(s)=>{ s.extraDefDice.push({n:4,sides:10}); s.counterDmg=true; s.dmgReduction=3; addLog('完全防御 — d10×4+反撃！','win'); }
  },
  divine_guard: { name:'神の加護', icon:'🌟', desc:'+3d12防御&被ダメ-5', type:'def',
    apply:(s)=>{ s.extraDefDice.push({n:3,sides:12}); s.dmgReduction=5; addLog('神の加護 — d12×3+被ダメ-5！','win'); }
  },
  cosmos_magic: { name:'宇宙魔法', icon:'🌌', desc:'+2d10+2d12追加&全ダイスアップ', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:2,sides:10},{n:2,sides:12}); s.upgradAllDice=true; addLog('宇宙魔法 — d10×2+d12×2+全アップ！','win'); }
  },
  phantom_shot: { name:'幻影射', icon:'👻', desc:'+2d8追加&防御無視+4', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:2,sides:8}); s.armorPierce=4; addLog('幻影射 — d8×2+防御無視+4！','win'); }
  },
  lunar_shot: { name:'月光射', icon:'🌙', desc:'+3d8追加&最大値+4成功', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:3,sides:8}); s.maxValBonus=4; addLog('月光射 — d8×3+最大値+4！','win'); }
  },
  // ===== WHIP スキル =====
  lash: { name:'鞭打ち', icon:'🪢', desc:'+3d4追加&出血1付与', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:3,sides:4}); s.pendingBleed=1; addLog('鞭打ち — d4×3+出血1！','system'); }
  },
  bleed_strike: { name:'出血打', icon:'🩸', desc:'出血3付与&+1d6', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:1,sides:6}); s.pendingBleed=3; addLog('出血打 — d6+出血3付与！','system'); }
  },
  frenzy_lash: { name:'狂乱の鞭', icon:'🌀', desc:'+4d4追加&出血2付与', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:4,sides:4}); s.pendingBleed=2; addLog('狂乱の鞭 — d4×4+出血2！','win'); }
  },
  entangle: { name:'絡め取り', icon:'🕸', desc:'脆弱2+凍結1付与', type:'atk',
    apply:(s)=>{ s.pendingFragile=2; s.pendingFrozen=1; addLog('絡め取り — 脆弱2+凍結1付与！','system'); }
  },
  // ===== SCYTHE スキル =====
  reap: { name:'刈り取り', icon:'⚔', desc:'+1d12追加&脆弱2付与', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:1,sides:12}); s.pendingFragile=2; addLog('刈り取り — d12+脆弱2！','system'); }
  },
  frost_cut: { name:'霜の斬撃', icon:'❄', desc:'+1d8追加&凍結2付与', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:1,sides:8}); s.pendingFrozen=2; addLog('霜の斬撃 — d8+凍結2！','system'); }
  },
  blizzard_reap: { name:'吹雪の刈り', icon:'🌨', desc:'+2d10追加&凍結3付与', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:2,sides:10}); s.pendingFrozen=3; addLog('吹雪の刈り — d10×2+凍結3！','win'); }
  },
  soul_harvest: { name:'魂の刈り取り', icon:'💀', desc:'+2d10&脆弱2&HP+3回復', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:2,sides:10}); s.pendingFragile=2; s.lifeSteal=3; addLog('魂の刈り取り — d10×2+脆弱2+吸血！','win'); }
  },
  // ===== TOME スキル =====
  shock_bolt: { name:'感電弾', icon:'⚡', desc:'+2d6追加&感電2付与', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:2,sides:6}); s.pendingShocked=2; addLog('感電弾 — d6×2+感電2！','system'); }
  },
  ignite: { name:'焼却', icon:'🔥', desc:'+1d8追加&焼却2付与', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:1,sides:8}); s.pendingBurning=2; addLog('焼却 — d8+焼却2付与！','system'); }
  },
  chain_lightning: { name:'連鎖稲妻', icon:'⚡', desc:'+3d6追加&感電3付与', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:3,sides:6}); s.pendingShocked=3; addLog('連鎖稲妻 — d6×3+感電3！','win'); }
  },
  tome_blast: { name:'魔本爆発', icon:'💥', desc:'+2d8追加&焼却1+感電1付与', type:'atk',
    apply:(s)=>{ s.extraDice.push({n:2,sides:8}); s.pendingBurning=1; s.pendingShocked=1; addLog('魔本爆発 — d8×2+焼却+感電！','win'); }
  },
  arcane_ward: { name:'魔力障壁', icon:'🔮', desc:'+2d6防御&被ダメ-1', type:'def',
    apply:(s)=>{ s.extraDefDice.push({n:2,sides:6}); s.dmgReduction=1; addLog('魔力障壁 — d6×2防御+被ダメ-1！','system'); }
  },
};

// ============================================================
// RELICS — stackable: 同じレリックを複数所持可能
// ============================================================
const RELICS = [
  // ダイス変換系
  { id:'even_boost', name:'偶数の石', icon:'🔷', desc:'偶数の目が出たら+1(重複可)', effect:'even_boost', stackable:true },
  { id:'odd_boost', name:'奇数の牙', icon:'🔺', desc:'奇数の目が出たら+1(重複可)', effect:'odd_boost', stackable:true },
  { id:'d4_to_d6', name:'四面変異', icon:'🎲', desc:'d4をd6に変換', effect:'d4_to_d6' },
  { id:'d6_to_d8', name:'六面変異', icon:'🎲', desc:'d6をd8に変換', effect:'d6_to_d8' },
  { id:'d8_to_d10', name:'八面変異', icon:'🎲', desc:'d8をd10に変換', effect:'d8_to_d10' },
  { id:'all_up', name:'全面変異石', icon:'💠', desc:'全ダイスを1段階アップ(重複可)', effect:'all_up', stackable:true },
  // 追加ダイス系
  { id:'max_extra', name:'暴走の欠片', icon:'💢', desc:'最大値が出たら追加d6(重複可)', effect:'max_extra', stackable:true },
  { id:'first_extra', name:'先制の刻印', icon:'⏩', desc:'戦闘開始時+1d8(重複可)', effect:'first_extra', stackable:true },
  { id:'crit_chain', name:'連鎖の石', icon:'⛓', desc:'最大値の出たダイス数だけ追加d4(重複可)', effect:'crit_chain', stackable:true },
  { id:'triple_one', name:'三連の印', icon:'🔢', desc:'1が3個以上出たらd12追加', effect:'triple_one' },
  { id:'bonus_die', name:'余剰の骰子', icon:'🎯', desc:'毎攻撃+1d4追加(重複可)', effect:'bonus_die', stackable:true },
  { id:'giant_die', name:'巨人の骰子', icon:'🎱', desc:'毎攻撃+1d8追加(重複可)', effect:'giant_die', stackable:true },
  // 振り直し系
  { id:'reroll_1s', name:'再起の護符', icon:'♻', desc:'1の目を1回振り直し', effect:'reroll_1s' },
  { id:'reroll_low', name:'捨牌の石', icon:'🔃', desc:'3以下の目を振り直し(重複=全振り直し)', effect:'reroll_low', stackable:true },
  // HP・回復系
  { id:'bloodlust', name:'血渇き', icon:'🩸', desc:'ダメージ毎HP+1回復(重複可)', effect:'bloodlust', stackable:true },
  { id:'vampiric', name:'吸血の牙', icon:'🦷', desc:'成功3以上でHP+2回復(重複可)', effect:'vampiric', stackable:true },
  { id:'thorn', name:'茨の鎧', icon:'🌹', desc:'被ダメ時に1ダメ反撃(重複可)', effect:'thorn', stackable:true },
  { id:'iron_will', name:'鉄の意志', icon:'🦾', desc:'HPが20以下なら被ダメ-2(重複可)', effect:'iron_will', stackable:true },
  { id:'regeneration', name:'再生の指輪', icon:'💚', desc:'毎ターン開始時HP+2回復(重複可)', effect:'regeneration', stackable:true },
  // 累積・特殊系
  { id:'dice_hoard', name:'ダイス蒐集家', icon:'🎰', desc:'攻撃ダイス5個以上なら+2成功(重複可)', effect:'dice_hoard', stackable:true },
  { id:'glass_cannon', name:'ガラス大砲', icon:'🔮', desc:'防御ダイスなし→攻撃全+2(重複可)', effect:'glass_cannon', stackable:true },
  { id:'momentum', name:'加速の石', icon:'💨', desc:'連続攻撃成功でさらに+1(重複可)', effect:'momentum', stackable:true },
  { id:'lucky_star', name:'幸運の星', icon:'⭐', desc:'毎攻撃d6追加(重複可)', effect:'lucky_star', stackable:true },
  { id:'curse_ward', name:'呪い除け', icon:'🧿', desc:'呪い状態を受けない', effect:'curse_ward' },
  { id:'poison_master', name:'毒の達人', icon:'☣', desc:'毒ダメージ+2(重複可)', effect:'poison_master', stackable:true },
  { id:'berserker_heart', name:'狂戦士の心臓', icon:'❤️‍🔥', desc:'HP30以下で全ダイス+2(重複可)', effect:'berserker_heart', stackable:true },
  { id:'gold_magnet', name:'黄金の磁石', icon:'🧲', desc:'戦闘後Gold+3(重複可)', effect:'gold_magnet', stackable:true },
  { id:'void_crystal', name:'虚空の結晶', icon:'🔮', desc:'防御無視+1常時付与(重複可)', effect:'void_crystal', stackable:true },
  { id:'ancient_rune', name:'古代のルーン', icon:'🔯', desc:'毎攻撃最大値ダイス+1(重複可)', effect:'ancient_rune', stackable:true },
  // ===== 新システム対応レリック =====
  // 疲労系
  { id:'zeal_relic', name:'熱狂', icon:'🔥', desc:'疲労3以上でダメージ+(疲労÷3)×スタック', effect:'zeal_relic', stackable:true },
  { id:'iron_mind', name:'鉄の精神', icon:'🧠', desc:'疲労回復速度+1(毎ターン追加回復)', effect:'iron_mind', stackable:true },
  { id:'hyperfocus', name:'過集中', icon:'🎯', desc:'疲労0の時+1d8追加(重複可)', effect:'hyperfocus', stackable:true },
  // 状態異常系
  { id:'ice_heart', name:'氷心', icon:'❄', desc:'凍結状態を受けない', effect:'ice_heart' },
  { id:'blood_feast', name:'血宴', icon:'🩸', desc:'出血中の敵を攻撃するとHP+1(重複可)', effect:'blood_feast', stackable:true },
  { id:'curse_nucleus', name:'呪詛核', icon:'💀', desc:'敵の状態異常数×1の防御無視(重複可)', effect:'curse_nucleus', stackable:true },
  { id:'burning_blade', name:'炎刃', icon:'🔥', desc:'毎攻撃焼却1付与ボーナス', effect:'burning_blade', stackable:true },
  { id:'shock_amp', name:'感電増幅', icon:'⚡', desc:'感電中の敵へのダメージ+2(重複可)', effect:'shock_amp', stackable:true },
  { id:'bleed_master', name:'出血王', icon:'🩸', desc:'出血ダメージ+1(重複可)', effect:'bleed_master', stackable:true },
  // 特殊戦略系
  { id:'fatigue_shield', name:'疲労盾', icon:'🛡', desc:'疲労5以上で防御ダイス+2(重複可)', effect:'fatigue_shield', stackable:true },
];

// ============================================================
// ENEMIES (10階層対応)
// ============================================================
// resist: 武器タイプ→ダメージ半減 (×0.5, 切り上げ)
// immune: 武器タイプ→ダメージ無効 (0)
// weak:   武器タイプ→ダメージ1.5倍
const ENEMIES = {
  // Floor 1
  slime:     { id:'slime',     name:'スライム',   icon:'🟢', hp:24,  atkDice:[{n:4,sides:4}],  defDice:[{n:2,sides:4}],  gold:[2,6],   attacks:['溶解液','粘着攻撃'],
    resist:['dagger','katana'], weak:['staff','bow'], immune:[],
    passive: 'tie_defense', passiveDesc:'同値防御成功' },
  goblin:    { id:'goblin',    name:'ゴブリン',   icon:'👺', hp:30,  atkDice:[{n:3,sides:6}],  defDice:[{n:2,sides:6}],  gold:[3,8],   attacks:['乱撃','噛みつき'],
    resist:[], weak:['greatsword','axe'], immune:[] },
  bat:       { id:'bat',       name:'コウモリ',   icon:'🦇', hp:20,  atkDice:[{n:3,sides:4}],  defDice:[{n:1,sides:4}],  gold:[1,4],   attacks:['爪撃','超音波'],
    resist:['spear'], weak:['axe','bow'], immune:[] },
  // Floor 2
  orc:       { id:'orc',       name:'オーク',     icon:'👹', hp:42,  atkDice:[{n:3,sides:8}],  defDice:[{n:2,sides:6}],  gold:[4,10],  attacks:['棍棒','突進','雄叫び'],
    resist:['staff'], weak:['axe','greatsword'], immune:[],
    passive: 'self_buff', passiveDesc:'毎ターン攻撃強化' },
  knight:    { id:'knight',    name:'鉄騎士',    icon:'🤖', hp:50,  atkDice:[{n:2,sides:8}],  defDice:[{n:4,sides:6}],  gold:[5,12],  attacks:['鉄槌','防御突破','突撃'],
    resist:['dagger','bow'], weak:['greatsword','spear'], immune:[],
    passive: 'multi_resist', passiveDesc:'多段耐性(成功-1)' },
  assassin:  { id:'assassin',  name:'暗殺者',    icon:'🥷', hp:38,  atkDice:[{n:4,sides:6}], defDice:[{n:2,sides:6}],   gold:[4,10],  attacks:['影斬り','連撃','毒針'],
    resist:['greatsword','spear'], weak:['staff','bow'], immune:[],
    passive: 'poison_immune', passiveDesc:'毒無効' },
  // Floor 3
  werewolf:  { id:'werewolf',  name:'狼人間',    icon:'🐺', hp:55,  atkDice:[{n:3,sides:8}],  defDice:[{n:3,sides:6}],  gold:[5,12],  attacks:['噛み砕き','爪連撃','遠吠え'],
    resist:['axe'], weak:['katana','spear'], immune:[],
    passive: 'bleed_weak', passiveDesc:'出血弱点' },
  golem:     { id:'golem',     name:'ゴーレム',   icon:'🗿', hp:70,  atkDice:[{n:3,sides:10}], defDice:[{n:3,sides:8}],  gold:[6,15],  attacks:['岩拳','大地震','岩石投げ'],
    resist:['dagger','katana','bow'], weak:['greatsword','staff'], immune:[],
    passive: 'high_face_resist', passiveDesc:'高面数耐性' },
  vampire:   { id:'vampire',   name:'吸血鬼',    icon:'🧛', hp:58,  atkDice:[{n:3,sides:8}],  defDice:[{n:3,sides:6}],  gold:[7,16],  attacks:['血吸い','魅了','変身'],
    resist:['axe','gauntlet'], weak:['staff','spear'], immune:[],
    passive: 'counter_on_def', passiveDesc:'防御成功時反撃' },
  // Floor 4
  wizard:    { id:'wizard',    name:'魔導師',    icon:'🧙', hp:62,  atkDice:[{n:5,sides:6}],  defDice:[{n:2,sides:8}],  gold:[6,14],  attacks:['魔法弾','爆裂魔法','魔力吸収'],
    resist:['staff'], weak:['dagger','katana'], immune:[],
    passive: 'reroll_defense', passiveDesc:'防御リロール' },
  demon:     { id:'demon',     name:'デーモン',   icon:'😈', hp:85,  atkDice:[{n:4,sides:10}], defDice:[{n:3,sides:8}],  gold:[10,22], attacks:['魔爪','地獄火','呪縛'],
    resist:['bow','dagger'], weak:['spear','staff'], immune:[],
    passive: 'excess_null', passiveDesc:'余剰成功無効' },
  chimera:   { id:'chimera',   name:'キメラ',    icon:'🦁', hp:75,  atkDice:[{n:3,sides:10}], defDice:[{n:4,sides:6}],  gold:[9,20],  attacks:['炎吐き','毒爪','翼撃'],
    resist:['gauntlet'], weak:['bow','axe'], immune:[] },
  // Floor 5
  dark_knight: { id:'dark_knight', name:'暗黒騎士', icon:'⚫', hp:100,atkDice:[{n:3,sides:12}], defDice:[{n:5,sides:6}], gold:[12,24], attacks:['魔剣','呪いの一撃','暗黒波動'],
    resist:['dagger','bow','katana'], weak:['greatsword','axe'], immune:[],
    passive: 'multi_resist', passiveDesc:'多段耐性(成功-1)' },
  ancient_golem: { id:'ancient_golem', name:'古代ゴーレム', icon:'🏛', hp:120,atkDice:[{n:4,sides:10}], defDice:[{n:4,sides:8}], gold:[14,28], attacks:['古代拳','岩石嵐','磁気嵐'],
    resist:['dagger','katana','gauntlet','bow'], weak:['staff','greatsword'], immune:[],
    passive: 'high_face_resist', passiveDesc:'高面数耐性' },
  lich:      { id:'lich',      name:'リッチ',    icon:'💀', hp:95,  atkDice:[{n:4,sides:8}],  defDice:[{n:3,sides:8}],  gold:[12,26], attacks:['死の呪文','骨吸い','魂絡め'],
    resist:['axe','gauntlet','bow'], weak:['staff','katana'], immune:[],
    passive: 'reroll_defense', passiveDesc:'防御リロール' },
  // Floor 6
  fallen_angel: { id:'fallen_angel', name:'堕天使', icon:'👼', hp:130,atkDice:[{n:4,sides:10}], defDice:[{n:3,sides:10}], gold:[16,32], attacks:['神聖斬','翼嵐','堕落の光'],
    resist:['axe','greatsword'], weak:['bow','staff'], immune:[],
    passive: 'max_bonus_defense', passiveDesc:'最大値防御+2' },
  dragon:    { id:'dragon',    name:'翠竜',     icon:'🐉', hp:140, atkDice:[{n:4,sides:10}], defDice:[{n:4,sides:8}],  gold:[20,40], attacks:['ブレス','龍爪','尾叩き'],
    resist:['dagger','gauntlet'], weak:['spear','greatsword'], immune:[],
    passive: 'poison_immune', passiveDesc:'毒無効' },
  void_mage: { id:'void_mage', name:'虚空魔導士',icon:'🌀', hp:110, atkDice:[{n:5,sides:8}],  defDice:[{n:2,sides:10}], gold:[15,30], attacks:['虚空弾','次元斬','魔力爆発'],
    resist:['staff'], weak:['katana','dagger'], immune:[] },           // 魔法反射フィールド
  // Floor 7
  giant:     { id:'giant',     name:'山巨人',    icon:'👾', hp:170, atkDice:[{n:3,sides:12}], defDice:[{n:3,sides:10}], gold:[20,40], attacks:['粉砕拳','踏み潰し','咆哮'],
    resist:['dagger','katana','bow'], weak:['greatsword','axe'], immune:[] }, // 巨体・厚皮
  demon_general: { id:'demon_general', name:'魔将軍', icon:'👿', hp:155,atkDice:[{n:4,sides:12}], defDice:[{n:4,sides:8}], gold:[20,40], attacks:['魔将の剣','暗黒軍陣','地獄呼び'],
    resist:['bow','gauntlet'], weak:['spear','greatsword'], immune:[] },
  elder_dragon: { id:'elder_dragon', name:'古龍', icon:'🔥', hp:180, atkDice:[{n:5,sides:10}], defDice:[{n:4,sides:10}], gold:[25,50], attacks:['古龍の炎','龍鱗衝','時空裂き'],
    resist:['dagger','gauntlet','bow'], weak:['spear','staff'], immune:[] }, // 古龍の鱗は究極の防壁
  // Floor 8
  void_titan: { id:'void_titan', name:'虚空の巨人', icon:'🌑', hp:200, atkDice:[{n:5,sides:12}], defDice:[{n:4,sides:10}], gold:[28,55], attacks:['虚空拳','次元砕き','宇宙圧縮'],
    resist:['bow','axe'], weak:['staff','greatsword'], immune:['gauntlet'] }, // 虚空に拳が消える
  necromancer: { id:'necromancer', name:'死霊術師', icon:'☠', hp:170, atkDice:[{n:5,sides:10}], defDice:[{n:3,sides:10}], gold:[25,50], attacks:['死の波動','骸骨召喚','魂喰い'],
    resist:['axe','greatsword'], weak:['staff','katana'], immune:[] },
  infernal_beast: { id:'infernal_beast', name:'地獄獣', icon:'🦂', hp:210,atkDice:[{n:5,sides:12}], defDice:[{n:5,sides:8}], gold:[30,58], attacks:['猛毒爪','地獄火炎','全身攻撃'],
    resist:['staff'], weak:['spear','bow'], immune:[] },              // 殻が魔法を弾く
  // Floor 9
  arch_demon: { id:'arch_demon', name:'大悪魔', icon:'👹', hp:240,atkDice:[{n:5,sides:12}], defDice:[{n:5,sides:10}], gold:[32,65], attacks:['絶望の波動','魔界招来','魂砕き'],
    resist:['bow','dagger','gauntlet'], weak:['spear','staff'], immune:[] },
  war_god:    { id:'war_god',    name:'戦神',     icon:'⚡', hp:260, atkDice:[{n:6,sides:12}], defDice:[{n:5,sides:10}], gold:[35,70], attacks:['神の雷','戦場の嵐','神聖粉砕'],
    resist:['dagger','bow'], weak:['greatsword','axe'], immune:['staff'] }, // 神は魔法を無効化
  // Floor 10
  world_eater: { id:'world_eater', name:'世界喰らい', icon:'🌍', hp:280,atkDice:[{n:6,sides:12}], defDice:[{n:6,sides:10}], gold:[40,80], attacks:['世界砕き','存在消去','無限連撃'],
    resist:['dagger','katana','bow','gauntlet'], weak:['greatsword'], immune:['staff'] }, // 万物を喰らう存在
  // BOSSES (各階層)
  floor1_boss: { id:'floor1_boss', name:'骸骨王', icon:'💀', hp:80,  atkDice:[{n:3,sides:8}],  defDice:[{n:2,sides:8}],  gold:[15,25], attacks:['骨槍','死の呪い','骸骨召喚'],   isBoss:true,
    resist:['axe','gauntlet'], weak:['greatsword','staff'], immune:[] }, // 骨は鈍器に強いが大剣・魔法に砕ける
  floor2_boss: { id:'floor2_boss', name:'翠竜',   icon:'🐉', hp:120, atkDice:[{n:3,sides:10}], defDice:[{n:3,sides:8}],  gold:[20,35], attacks:['ブレス','龍爪','尾叩き'],       isBoss:true,
    resist:['dagger','gauntlet'], weak:['spear','greatsword'], immune:[] },
  floor3_boss: { id:'floor3_boss', name:'リッチ王',icon:'💀', hp:150, atkDice:[{n:4,sides:10}], defDice:[{n:3,sides:10}], gold:[25,42], attacks:['死の呪文','骨吸い','魂絡め'],   isBoss:true,
    resist:['axe','bow','greatsword'], weak:['staff','katana'], immune:[] },
  floor4_boss: { id:'floor4_boss', name:'山巨人',  icon:'👾', hp:200, atkDice:[{n:3,sides:12}], defDice:[{n:3,sides:10}], gold:[30,50], attacks:['粉砕拳','踏み潰し','咆哮'],     isBoss:true,
    resist:['dagger','katana','bow'], weak:['greatsword','axe'], immune:[] },
  floor5_boss: { id:'floor5_boss', name:'魔王',    icon:'😡', hp:240, atkDice:[{n:5,sides:12}], defDice:[{n:4,sides:10}], gold:[40,70], attacks:['魔王の一撃','魂砕き','次元斬'], isBoss:true,
    resist:['bow','gauntlet'], weak:['spear','katana'], immune:['dagger'] }, // 魔王は短剣を無効化
  floor6_boss: { id:'floor6_boss', name:'堕天使王',icon:'😇', hp:280, atkDice:[{n:5,sides:12}], defDice:[{n:4,sides:12}], gold:[50,85], attacks:['神聖粉砕','天罰','堕落の光'],   isBoss:true,
    resist:['axe','greatsword'], weak:['bow','staff'], immune:[] },
  floor7_boss: { id:'floor7_boss', name:'古龍帝',  icon:'🔥', hp:330, atkDice:[{n:6,sides:12}], defDice:[{n:5,sides:10}], gold:[60,100],attacks:['龍帝炎','時空裂き','古龍咆哮'],  isBoss:true,
    resist:['dagger','katana','gauntlet','bow'], weak:['spear','greatsword'], immune:[] },
  floor8_boss: { id:'floor8_boss', name:'虚空神',  icon:'🌌', hp:380, atkDice:[{n:6,sides:12}], defDice:[{n:5,sides:12}], gold:[70,120],attacks:['虚空崩壊','次元砕き','神の消去'], isBoss:true,
    resist:['axe','greatsword','spear'], weak:['staff','katana'], immune:['gauntlet','bow'] },
  floor9_boss: { id:'floor9_boss', name:'滅亡の化身',icon:'☄', hp:440,atkDice:[{n:7,sides:12}], defDice:[{n:6,sides:12}], gold:[80,140],attacks:['滅亡波','星砕き','宇宙壊滅'],   isBoss:true,
    resist:['dagger','bow','gauntlet'], weak:['greatsword','axe'], immune:['staff'] },
  floor10_boss:{ id:'floor10_boss',name:'混沌神',  icon:'🌌', hp:520, atkDice:[{n:8,sides:12}], defDice:[{n:6,sides:12}], gold:[100,180],attacks:['混沌の息吹','次元崩壊','星砕き','虚無化','宇宙死'], isBoss:true,
    resist:['dagger','katana','bow','gauntlet','staff'], weak:['greatsword'], immune:['axe','spear'] },
};

const FLOOR_ENEMIES = {
  1:  ['slime','goblin','bat'],
  2:  ['goblin','orc','knight','assassin'],
  3:  ['orc','knight','assassin','werewolf'],
  4:  ['werewolf','golem','vampire','wizard'],
  5:  ['golem','demon','chimera','dark_knight'],
  6:  ['dark_knight','ancient_golem','lich','fallen_angel'],
  7:  ['fallen_angel','dragon','void_mage','giant'],
  8:  ['giant','demon_general','elder_dragon','void_titan'],
  9:  ['void_titan','necromancer','infernal_beast','arch_demon'],
  10: ['arch_demon','war_god','world_eater'],
};

const FLOOR_BOSSES = {
  1:'floor1_boss', 2:'floor2_boss', 3:'floor3_boss', 4:'floor4_boss',
  5:'floor5_boss', 6:'floor6_boss', 7:'floor7_boss', 8:'floor8_boss',
  9:'floor9_boss', 10:'floor10_boss'
};

// 武器タイプの日本語ラベル
const WEAPON_TYPE_LABEL = {
  dagger:    '🗡短剣',
  greatsword:'⚔大剣',
  spear:     '🔱槍',
  shield:    '🛡盾',
  staff:     '🪄杖',
  bow:       '🏹弓',
  axe:       '🪓斧',
  gauntlet:  '👊拳',
  katana:    '🔪刀',
  whip:      '🪢鞭',
  scythe:    '⚔大鎌',
  tome:      '📖魔導書',
};

// 武器レアリティカラー
const RARITY_COLOR = { common:'var(--text2)', uncommon:'var(--green2)', rare:'var(--blue2)', epic:'var(--purple2)', legendary:'var(--accent)' };
const RARITY_LABEL = { common:'COMMON', uncommon:'UNCOMMON', rare:'RARE', epic:'EPIC', legendary:'LEGENDARY' };

// ============================================================
// GAME STATE
// ============================================================

let G = {};

function newGame() {
  G = {
    floor: 1,
    phase: 0,
    hp: 50, maxHp: 50,
    gold: 10,
    weapons: { dagger: {...WEAPONS.dagger}, handaxe: {...WEAPONS.handaxe} },
    equippedWeapons: ['dagger', 'handaxe'],
    relics: [],
    statuses: {},
    totalKills: 0,
    inCombat: false,
    enemy: null,
    combatPhase: 'player_atk',
    selectedWeapon: null,
    selectedSkill: null,
    usedFirstExtra: false,
    consecutiveHits: 0,
    // 疲労システム
    fatigue: 0,       // 現在疲労値 (0-10)
    maxFatigue: 10,
    // スキルクールダウン
    skillCooldowns: {}, // { skillId: remainingTurns }
  };
}

// 戦闘中に使える武器 — 同一typeにつき1本のみ
function getCombatWeapons() {
  const seen = new Set();
  const result = [];
  for (const wId of G.equippedWeapons) {
    const w = G.weapons[wId];
    if (!w) continue;
    if (seen.has(w.type)) continue;
    seen.add(w.type);
    result.push(wId);
  }
  return result;
}

// ============================================================
// UTILITIES
// ============================================================

function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function rollDice(diceArr) {
  // diceArr: [{n, sides}, ...]
  let results = [];
  for (let d of diceArr) {
    for (let i = 0; i < d.n; i++) results.push({ sides: d.sides, val: rollDie(d.sides) });
  }
  return results;
}

function applyRelicsToDice(rolls, relicIds) {
  let results = [...rolls];
  const TIERS = [4,6,8,10,12,20];

  // countRelic: スタック数をカウント
  const countRelic = (id) => relicIds.filter(r => r === id).length;

  // Die-face upgrades (重複回数分適用)
  const d4to6 = countRelic('d4_to_d6');
  if (d4to6 > 0)
    results = results.map(d => d.sides===4 ? {...d,sides:6,val:Math.min(d.val,6)} : d);
  const d6to8 = countRelic('d6_to_d8');
  if (d6to8 > 0)
    results = results.map(d => d.sides===6 ? {...d,sides:8,val:Math.min(d.val,8)} : d);
  const d8to10 = countRelic('d8_to_d10');
  if (d8to10 > 0)
    results = results.map(d => d.sides===8 ? {...d,sides:10,val:Math.min(d.val,10)} : d);

  // all_up: 重複回数分だけ段階アップ
  const allUp = countRelic('all_up');
  for (let u = 0; u < allUp; u++) {
    results = results.map(d => {
      const idx = TIERS.indexOf(d.sides);
      const ns = idx>=0 && idx<TIERS.length-1 ? TIERS[idx+1] : d.sides;
      return {...d,sides:ns,val:Math.min(d.val,ns)};
    });
  }

  // Value modifiers (重複分加算)
  const evenBoost = countRelic('even_boost');
  if (evenBoost > 0)
    results = results.map(d => d.val%2===0 ? {...d,val:d.val+evenBoost} : d);
  const oddBoost = countRelic('odd_boost');
  if (oddBoost > 0)
    results = results.map(d => d.val%2!==0 ? {...d,val:d.val+oddBoost} : d);

  // ancient_rune: 最大値ダイスの目+1 (重複分)
  const ancientRune = countRelic('ancient_rune');
  if (ancientRune > 0) {
    results = results.map(d => d.val===d.sides ? {...d,val:d.val+ancientRune} : d);
  }

  // Rerolls
  const reroll1s = countRelic('reroll_1s');
  if (reroll1s > 0)
    results = results.map(d => d.val===1 ? {...d,val:rollDie(d.sides),rerolled:true} : d);
  const rerollLow = countRelic('reroll_low');
  if (rerollLow > 0) {
    // 重複があれば全部振り直し（複数回）
    for (let i = 0; i < rerollLow; i++)
      results = results.map(d => d.val<=3 ? {...d,val:rollDie(d.sides),rerolled:true} : d);
  }

  // Extra dice on max (重複分だけ追加)
  const maxExtra = countRelic('max_extra');
  if (maxExtra > 0) {
    let extras = [];
    for (let d of results) if (d.val===d.sides) {
      for (let i=0;i<maxExtra;i++) extras.push({sides:6,val:rollDie(6),isExtra:true});
    }
    results = results.concat(extras);
  }

  // Crit chain (重複分)
  const critChain = countRelic('crit_chain');
  if (critChain > 0) {
    let extras = [];
    for (let d of results) if (d.val===d.sides) {
      for (let i=0;i<critChain;i++) extras.push({sides:4,val:rollDie(4),isExtra:true});
    }
    results = results.concat(extras);
  }

  // Triple ones: if 3+ ones, add d12 (once per roll regardless of stack)
  if (countRelic('triple_one') > 0) {
    const ones = results.filter(d=>d.val===1).length;
    if (ones>=3) { results.push({sides:12,val:rollDie(12),isExtra:true}); addLog('三連の印発動！d12追加！','win'); }
  }

  // Lucky star: always +1d6 per stack
  const luckyStar = countRelic('lucky_star');
  for (let i=0;i<luckyStar;i++)
    results.push({sides:6,val:rollDie(6),isExtra:true});

  // bonus_die: +1d4 per stack
  const bonusDie = countRelic('bonus_die');
  for (let i=0;i<bonusDie;i++)
    results.push({sides:4,val:rollDie(4),isExtra:true});

  // giant_die: +1d8 per stack
  const giantDie = countRelic('giant_die');
  for (let i=0;i<giantDie;i++)
    results.push({sides:8,val:rollDie(8),isExtra:true});

  // berserker_heart: if HP<=30, +2 to all dice per stack
  const bersHeart = countRelic('berserker_heart');
  if (bersHeart > 0 && G.hp <= 30) {
    results = results.map(d => ({...d, val: d.val + bersHeart*2}));
    addLog(`狂戦士の心臓発動！全ダイス+${bersHeart*2}！`,'win');
  }

  // fatigue_shield: 疲労5以上で防御ダイス強化 (applyRelicsToDiceは攻撃ダイスにも使われるが、ここは防御時に呼ばれる場合)
  // → 防御時の処理は executePlayerDefend 内で別途行う

  // shock_amp: 感電中の敵への攻撃でダイス+値 (攻撃ダイスに適用)
  const shockAmp = countRelic('shock_amp');
  if (shockAmp > 0 && G.enemy && (G.enemy.statuses?.shocked||0) > 0) {
    results = results.map(d => ({...d, val: d.val + shockAmp}));
    addLog(`感電増幅×${shockAmp} — 感電中！全ダイス+${shockAmp}！`,'win');
  }

  // bleed_master: 出血ダメージ増加 (tickEnemyStatuses側で処理)
  // burning_blade: 焼却付与ボーナス (executePlayerAttack側で処理)

  // iron_mind: 毎ターン疲労追加回復 (tickCooldownsと一緒に処理)

  // void_crystal: 後でarmorPierceに加算（countだけ返す）
  // → compareDice側で参照

  return results;
}

function dicesToStr(diceArr) {
  return diceArr.map(d => `d${d.sides}×${d.n}`).join(' ');
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function addLog(text, type='system') {
  const log = document.getElementById('battle-log');
  if (!log) return;
  const el = document.createElement('div');
  el.className = `log-entry ${type}`;
  el.textContent = text;
  log.appendChild(el);
  log.scrollTop = log.scrollHeight;
}

function showDmgPopup(x, y, dmg, type) {
  const el = document.createElement('div');
  el.className = `dmg-popup ${type}`;
  el.textContent = type === 'enemy-dmg' ? `-${dmg}` : `-${dmg}`;
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1200);
}

function updateTopBar() {
  const pct = G.hp / G.maxHp * 100;
  const hp = document.getElementById('top-hp');
  const bar = document.getElementById('top-hp-bar');
  if (hp) hp.textContent = `${G.hp}/${G.maxHp}`;
  if (bar) bar.style.width = pct + '%';
  const gold = document.getElementById('top-gold');
  if (gold) gold.textContent = G.gold;
  renderTopRelics();
}

function renderTopRelics() {
  const el = document.getElementById('top-relics') || document.getElementById('combat-relics');
  if (!el) return;
  el.innerHTML = G.relics.map(r => {
    const rel = RELICS.find(x => x.id === r);
    return rel ? `<span class="relic-badge" data-relic-id="${rel.id}" data-name="${rel.name}" data-tip="${rel.desc}">${rel.icon}</span>` : '';
  }).join('');
  const cr = document.getElementById('combat-relics');
  if (cr) cr.innerHTML = el.innerHTML;
}

// ============================================================
// GAME START / TITLE
// ============================================================

function startGame() {
  newGame();
  updateTopBar();
  showMapScreen();
}

// ============================================================
// MAP / PHASE SCREEN
// ============================================================

function showMapScreen() {
  updateTopBar();
  renderPhaseIndicator();
  renderCards();
  showScreen('map-screen');
}

function renderPhaseIndicator() {
  const el = document.getElementById('phase-indicator');
  el.innerHTML = '';
  for (let i = 0; i < 6; i++) {
    const dot = document.createElement('div');
    dot.className = 'phase-dot';
    if (i < G.phase) dot.classList.add('done');
    else if (i === G.phase) dot.classList.add(i === 5 ? 'boss' : 'current');
    else if (i === 5) dot.classList.add('boss');
    el.appendChild(dot);
  }
  document.getElementById('floor-info').textContent = `FLOOR ${G.floor} — PHASE ${G.phase + 1}/6`;
}

function getPhaseCards() {
  if (G.phase === 5) return ['boss'];
  // weights: combat=60, chest=12, gacha=10, shop=10, elite=8
  const pool = [
    ...Array(60).fill('combat'),
    ...Array(12).fill('chest'),
    ...Array(10).fill('gacha'),
    ...Array(10).fill('shop'),
    ...Array(8).fill('elite'),
  ];
  let cards = [];
  for (let i = 0; i < 3; i++) {
    cards.push(pool[Math.floor(Math.random() * pool.length)]);
  }
  return cards;
}

const CARD_INFO = {
  combat: { name: '戦闘', icon: '⚔', desc: '敵を倒してGold・報酬を得よ', cls: 'combat' },
  chest: { name: '宝箱', icon: '📦', desc: '無料でランダム報酬', cls: 'chest' },
  gacha: { name: 'ガチャ', icon: '🎰', desc: '5G — ランダム報酬 低確率レア', cls: 'gacha' },
  shop: { name: '取引', icon: '🏪', desc: '武器・relicを購入', cls: 'shop' },
  elite: { name: '精鋭', icon: '💀', desc: '強敵 — 高品質報酬', cls: 'elite' },
  boss: { name: 'BOSS', icon: '👁', desc: '階層ボス — 撃破で次の階へ', cls: 'boss-card' },
};

function renderCards() {
  const container = document.getElementById('cards-container');
  container.innerHTML = '';
  const cards = getPhaseCards();

  for (let card of cards) {
    const info = CARD_INFO[card];
    const div = document.createElement('div');
    div.className = `phase-card ${info.cls}`;
    div.innerHTML = `
      <div class="card-header">PHASE ${G.phase + 1}</div>
      <div class="card-icon">${info.icon}</div>
      <div class="card-name">${info.name}</div>
      <div class="card-desc">${info.desc}</div>
    `;
    div.onclick = () => selectCard(card);
    container.appendChild(div);
  }
}

function selectCard(type) {
  G.phase++;
  switch (type) {
    case 'combat': startCombat(false); break;
    case 'elite': startCombat(true); break;
    case 'boss': startCombat(false, true); break;
    case 'chest': openChest(); break;
    case 'gacha': openGacha(); break;
    case 'shop': openShop(); break;
  }
}

// ============================================================
// COMBAT
// ============================================================

function startCombat(isElite, isBoss) {
  // Pick enemy
  let enemyId;
  if (isBoss) {
    enemyId = FLOOR_BOSSES[G.floor] || 'dragon';
  } else {
    const pool = FLOOR_ENEMIES[G.floor] || ['slime','goblin'];
    if (isElite) {
      const elitePool = FLOOR_ENEMIES[Math.min(G.floor + 1, 10)] || pool;
      enemyId = elitePool[Math.floor(Math.random() * elitePool.length)];
    } else {
      enemyId = pool[Math.floor(Math.random() * pool.length)];
    }
  }

  const template = ENEMIES[enemyId];
  G.enemy = {
    ...template,
    curHp: template.hp,
    statuses: {},
    isBoss,
    isElite,
  };

  G.inCombat = true;
  G.combatPhase = 'player_atk';
  G.selectedWeapon = null;
  G.selectedSkill = null;
  // 戦闘開始時に疲労を半分回復
  G.fatigue = Math.floor(G.fatigue / 2);
  G.skillCooldowns = {};

  // Clear log
  document.getElementById('battle-log').innerHTML = '';

  // First relic: first_extra
  if (G.relics.includes('first_extra')) {
    addLog('先制の刻印 — 初手d6追加！', 'system');
  }

  updateCombatUI();
  updateEnemyDisplay();
  prepareEnemyIntent();
  showScreen('combat-screen');
  document.getElementById('combat-floor-info').textContent = `FLOOR ${G.floor} · PHASE ${G.phase}/6`;
  document.getElementById('combat-gold').textContent = G.gold;

  addLog(`${G.enemy.isBoss ? '⚠ BOSS — ' : ''}${G.enemy.name} が現れた！`, 'system');
  if (G.relics.includes('combat-relics')) renderTopRelics();
  const cr = document.getElementById('combat-relics');
  if (cr) cr.innerHTML = G.relics.map(r => {
    const rel = RELICS.find(x => x.id === r);
    return rel ? `<span class="relic-badge" data-relic-id="${rel.id}" data-name="${rel.name}" data-tip="${rel.desc}">${rel.icon}</span>` : '';
  }).join('');
}

function updateEnemyDisplay() {
  document.getElementById('enemy-name').textContent = `${G.enemy.icon} ${G.enemy.name}`;
  const pct = G.enemy.curHp / G.enemy.hp * 100;
  document.getElementById('enemy-hp-fill').style.width = pct + '%';
  document.getElementById('enemy-hp-text').textContent = `${G.enemy.curHp}/${G.enemy.hp}`;

  // resistance badges + passive badge
  const resistEl = document.getElementById('enemy-resist-row');
  if (resistEl) {
    resistEl.innerHTML = '';
    for (const t of (G.enemy.immune||[])) {
      const b = document.createElement('span');
      b.className = 'resist-badge immune';
      b.title = `${WEAPON_TYPE_LABEL[t]||t}は無効`;
      b.textContent = `🚫${WEAPON_TYPE_LABEL[t]||t}`;
      resistEl.appendChild(b);
    }
    for (const t of (G.enemy.resist||[])) {
      const b = document.createElement('span');
      b.className = 'resist-badge resist';
      b.title = `${WEAPON_TYPE_LABEL[t]||t}のダメージ半減`;
      b.textContent = `🛡${WEAPON_TYPE_LABEL[t]||t}`;
      resistEl.appendChild(b);
    }
    for (const t of (G.enemy.weak||[])) {
      const b = document.createElement('span');
      b.className = 'resist-badge weak';
      b.title = `${WEAPON_TYPE_LABEL[t]||t}が弱点(×1.5)`;
      b.textContent = `⚡${WEAPON_TYPE_LABEL[t]||t}`;
      resistEl.appendChild(b);
    }
    // パッシブ表示
    if (G.enemy.passive && PASSIVE_LABEL[G.enemy.passive]) {
      const pl = PASSIVE_LABEL[G.enemy.passive];
      const b = document.createElement('span');
      b.className = 'resist-badge passive-badge';
      b.title = pl.desc;
      b.textContent = `${pl.icon}${pl.label}`;
      resistEl.appendChild(b);
    }
  }

  // statuses (拡張)
  const statusEl = document.getElementById('enemy-status');
  statusEl.innerHTML = '';
  for (let [k, v] of Object.entries(G.enemy.statuses || {})) {
    if (v > 0) {
      const b = document.createElement('span');
      const def = STATUS_DEFS[k] || {};
      b.className = `status-badge ${k}`;
      b.style.borderColor = def.color || '';
      b.title = def.desc || k;
      b.textContent = `${def.icon||'?'}${def.name||k}:${v}`;
      statusEl.appendChild(b);
    }
  }
}

function updatePlayerDisplay() {
  const pct = G.hp / G.maxHp * 100;
  document.getElementById('player-hp-fill').style.width = pct + '%';
  document.getElementById('player-hp-text').textContent = `HP ${G.hp}/${G.maxHp}`;

  // statuses (拡張)
  const statusEl = document.getElementById('player-status');
  statusEl.innerHTML = '';
  for (let [k, v] of Object.entries(G.statuses || {})) {
    if (v > 0) {
      const b = document.createElement('span');
      const def = STATUS_DEFS[k] || {};
      b.className = `status-badge ${k}`;
      b.style.borderColor = def.color || '';
      b.title = def.desc || k;
      b.textContent = `${def.icon||'?'}${def.name||k}:${v}`;
      statusEl.appendChild(b);
    }
  }
}

function updateFatigueDisplay() {
  const el = document.getElementById('fatigue-bar-fill');
  const txt = document.getElementById('fatigue-text');
  if (!el || !txt) return;
  const pct = (G.fatigue / G.maxFatigue) * 100;
  el.style.width = pct + '%';
  el.style.background = G.fatigue >= 8 ? 'var(--red2)' : G.fatigue >= 5 ? 'var(--accent)' : '#888';
  txt.textContent = `疲労 ${G.fatigue}/${G.maxFatigue}`;
}

function prepareEnemyIntent() {
  const enemy = G.enemy;
  const attack = enemy.attacks[Math.floor(Math.random() * enemy.attacks.length)];
  enemy.nextAttack = attack;
  enemy.nextAtkDice = [...enemy.atkDice];
  document.getElementById('intent-action').textContent = attack;
  const diceEl = document.getElementById('intent-dice');
  diceEl.innerHTML = enemy.nextAtkDice.map(d =>
    `<span style="font-family:'Share Tech Mono',monospace;font-size:11px;color:var(--red2);background:rgba(224,80,64,0.1);border:1px solid var(--red);padding:2px 6px;border-radius:3px">d${d.sides}×${d.n}</span>`
  ).join(' ');
}

function updateCombatUI() {
  updatePlayerDisplay();
  const ui = document.getElementById('combat-ui');
  ui.innerHTML = '';

  if (G.combatPhase === 'player_atk') {
    renderPlayerAttackUI(ui);
  } else if (G.combatPhase === 'player_def') {
    renderPlayerDefendUI(ui);
  } else if (G.combatPhase === 'anim') {
    ui.innerHTML = `<p style="font-family:'Cinzel',serif;color:var(--text2);font-size:14px;letter-spacing:0.2em">実行中...</p>`;
  }
}

function renderPlayerAttackUI(container) {
  const label = document.createElement('div');
  label.className = 'phase-label';
  label.textContent = '▶ 攻撃ターン — 武器を選び、スキルを選択';
  container.appendChild(label);

  // 疲労バー
  const fatBar = document.createElement('div');
  fatBar.className = 'fatigue-bar-wrap';
  fatBar.innerHTML = `<div class="fatigue-label" id="fatigue-text">疲労 ${G.fatigue}/${G.maxFatigue}</div>
    <div class="fatigue-bar"><div class="fatigue-bar-fill" id="fatigue-bar-fill" style="width:${G.fatigue/G.maxFatigue*100}%;background:${G.fatigue>=8?'var(--red2)':G.fatigue>=5?'var(--accent)':'#666'}"></div></div>`;
  container.appendChild(fatBar);

  // Weapon selection
  const weapRow = document.createElement('div');
  weapRow.className = 'weapon-row';
  for (let wId of getCombatWeapons()) {
    const w = G.weapons[wId];
    if (!w) continue;
    const btn = document.createElement('button');
    btn.className = `weapon-btn ${G.selectedWeapon === wId ? 'selected' : ''}`;
    btn.innerHTML = `${w.icon} ${w.name}<span class="w-dice">ATK: ${w.atkDice.map(d=>`d${d.sides}×${d.n}`).join('+')} | DEF: ${w.defDice.map(d=>`d${d.sides}×${d.n}`).join('+')}</span>`;
    btn.onclick = () => { G.selectedWeapon = wId; G.selectedSkill = null; updateCombatUI(); };
    weapRow.appendChild(btn);
  }
  container.appendChild(weapRow);

  // Skill selection
  if (G.selectedWeapon) {
    const w = G.weapons[G.selectedWeapon];
    const skillRow = document.createElement('div');
    skillRow.className = 'skill-row';

    const noneBtn = document.createElement('button');
    noneBtn.className = `skill-btn ${G.selectedSkill === null ? 'selected' : ''}`;
    noneBtn.textContent = '— なし（疲労回復+1）—';
    noneBtn.onclick = () => { G.selectedSkill = null; updateCombatUI(); };
    skillRow.appendChild(noneBtn);

    for (let sId of w.skills) {
      const s = SKILLS[sId];
      if (!s) continue;
      const sf = getSkillFatigue(sId);
      const onCD = isSkillOnCooldown(sId);
      const cdTurns = G.skillCooldowns[sId] || 0;
      const btn = document.createElement('button');
      btn.className = `skill-btn ${G.selectedSkill === sId ? 'selected' : ''} ${onCD ? 'skill-cd' : ''}`;
      if (onCD) btn.disabled = true;
      const fatigueInfo = sf.cost > 0 ? `<span class="skill-cost">疲労+${sf.cost}</span>` : '';
      const cdInfo = onCD ? `<span class="skill-cd-txt">CD:${cdTurns}T</span>` : (sf.cd > 0 ? `<span class="skill-cd-dim">CD:${sf.cd}T</span>` : '');
      btn.innerHTML = `${s.icon} ${s.name} ${fatigueInfo}${cdInfo}<span style="font-size:10px;color:var(--text3)">${s.desc}</span>`;
      btn.onclick = () => { G.selectedSkill = sId; updateCombatUI(); };
      skillRow.appendChild(btn);
    }
    container.appendChild(skillRow);
  }

  // GO button
  const actionRow = document.createElement('div');
  actionRow.className = 'action-row';
  const goBtn = document.createElement('button');
  goBtn.className = 'go-btn';
  goBtn.textContent = 'ROLL ▶';
  goBtn.disabled = !G.selectedWeapon;
  goBtn.onclick = () => {
    // スキルなし選択時に疲労を1回復
    if (!G.selectedSkill) recoverFatigue(1);
    executePlayerAttack();
  };
  actionRow.appendChild(goBtn);
  container.appendChild(actionRow);
}

function renderPlayerDefendUI(container) {
  const prompt = document.createElement('div');
  prompt.className = 'defend-prompt';
  prompt.innerHTML = `<div class="defend-prompt-title">⚠ ENEMY ATTACK — ${G.enemy.nextAttack}</div>
    <div class="defend-prompt-text">防御方法を選択 (武器 + スキル)</div>`;
  container.appendChild(prompt);

  const label = document.createElement('div');
  label.className = 'phase-label';
  label.textContent = '🛡 防御ターン';
  container.appendChild(label);

  // 疲労バー（防御時も表示）
  const fatBar = document.createElement('div');
  fatBar.className = 'fatigue-bar-wrap';
  fatBar.innerHTML = `<div class="fatigue-label" id="fatigue-text">疲労 ${G.fatigue}/${G.maxFatigue}</div>
    <div class="fatigue-bar"><div class="fatigue-bar-fill" id="fatigue-bar-fill" style="width:${G.fatigue/G.maxFatigue*100}%;background:${G.fatigue>=8?'var(--red2)':G.fatigue>=5?'var(--accent)':'#666'}"></div></div>`;
  container.appendChild(fatBar);

  const weapRow = document.createElement('div');
  weapRow.className = 'weapon-row';
  for (let wId of getCombatWeapons()) {
    const w = G.weapons[wId];
    if (!w) continue;
    const btn = document.createElement('button');
    btn.className = `weapon-btn ${G.selectedWeapon === wId ? 'selected' : ''}`;
    btn.innerHTML = `${w.icon} ${w.name}<span class="w-dice">DEF: ${w.defDice.map(d=>`d${d.sides}×${d.n}`).join('+')}</span>`;
    btn.onclick = () => { G.selectedWeapon = wId; G.selectedSkill = null; updateCombatUI(); };
    weapRow.appendChild(btn);
  }
  container.appendChild(weapRow);

  if (G.selectedWeapon) {
    const w = G.weapons[G.selectedWeapon];
    const skillRow = document.createElement('div');
    skillRow.className = 'skill-row';
    const noneBtn = document.createElement('button');
    noneBtn.className = `skill-btn ${G.selectedSkill === null ? 'selected' : ''}`;
    noneBtn.textContent = '— なし —';
    noneBtn.onclick = () => { G.selectedSkill = null; updateCombatUI(); };
    skillRow.appendChild(noneBtn);

    const defSkills = w.defSkills || [];
    for (let sId of defSkills) {
      const s = SKILLS[sId];
      if (!s) continue;
      const sf = getSkillFatigue(sId);
      const onCD = isSkillOnCooldown(sId);
      const cdTurns = G.skillCooldowns[sId] || 0;
      const btn = document.createElement('button');
      btn.className = `skill-btn ${G.selectedSkill === sId ? 'selected' : ''} ${onCD ? 'skill-cd' : ''}`;
      if (onCD) btn.disabled = true;
      const fatigueInfo = sf.cost > 0 ? `<span class="skill-cost">疲労+${sf.cost}</span>` : '';
      const cdInfo = onCD ? `<span class="skill-cd-txt">CD:${cdTurns}T</span>` : (sf.cd > 0 ? `<span class="skill-cd-dim">CD:${sf.cd}T</span>` : '');
      btn.innerHTML = `${s.icon} ${s.name} ${fatigueInfo}${cdInfo}<span style="font-size:10px;color:var(--text3)">${s.desc}</span>`;
      btn.onclick = () => { G.selectedSkill = sId; updateCombatUI(); };
      skillRow.appendChild(btn);
    }
    container.appendChild(skillRow);
  }

  const actionRow = document.createElement('div');
  actionRow.className = 'action-row';
  const goBtn = document.createElement('button');
  goBtn.className = 'go-btn';
  goBtn.textContent = 'DEFEND ▶';
  goBtn.disabled = !G.selectedWeapon;
  goBtn.onclick = executePlayerDefend;
  actionRow.appendChild(goBtn);
  container.appendChild(actionRow);
}

// ============================================================
// COMBAT LOGIC
// ============================================================

function buildDiceList(weaponId, isAtk, skillState) {
  const w = G.weapons[weaponId];
  let base = isAtk ? [...w.atkDice] : [...w.defDice];

  // First extra relic (only atk, only once per combat)
  if (isAtk && G.relics.includes('first_extra') && !G.usedFirstExtra) {
    base = [...base, {n:1,sides:8}];
    G.usedFirstExtra = true;
  }

  // Extra dice from skills
  for (let extra of skillState.extraDice || []) base = [...base, extra];
  for (let extra of skillState.extraDefDice || []) {
    if (!isAtk) base = [...base, extra];
  }

  return base;
}

function applySkillModifiers(rolls, skillState, isAtk) {
  let result = [...rolls];

  // Upgrade one die
  if (isAtk && skillState.upgradeOneDie) {
    result[0] = {...result[0], sides: skillState.upgradeOneDie, val: Math.min(result[0].val, skillState.upgradeOneDie)};
  }

  // Upgrade all dice to next tier
  const TIERS = [4,6,8,10,12,20];
  if (isAtk && skillState.upgradAllDice) {
    result = result.map(d => {
      const idx = TIERS.indexOf(d.sides);
      const newSides = idx >= 0 && idx < TIERS.length - 1 ? TIERS[idx + 1] : d.sides;
      return {...d, sides: newSides, val: Math.min(d.val, newSides)};
    });
  }

  // Reroll 1s
  if (skillState.rerollOnes) {
    result = result.map(d => d.val === 1 ? {...d, val: rollDie(d.sides), rerolled: true} : d);
  }

  // Top die bonus
  if (isAtk && skillState.topDieBonus) {
    let maxIdx = 0;
    for (let i = 1; i < result.length; i++) {
      if (result[i].val > result[maxIdx].val) maxIdx = i;
    }
    result[maxIdx] = {...result[maxIdx], val: result[maxIdx].val + skillState.topDieBonus};
  }

  return result;
}

function compareDice(atkRolls, defRolls, skillState) {
  let atk = [...atkRolls].sort((a,b) => b.val - a.val);
  let def = [...defRolls].sort((a,b) => b.val - a.val);

  // 感電: 一定確率でダイス目を1にする
  if (skillState && skillState._shockedTarget) {
    const shockedStacks = skillState._shockedTarget;
    atk = atk.map(d => {
      if (Math.random() < shockedStacks * 0.2) return { ...d, val: 1 };
      return d;
    });
  }

  let wins = 0;
  const comparisons = [];
  const tieDefense = skillState && skillState._tieDefense;
  const excessNull = skillState && skillState._excessNull;

  for (let i = 0; i < atk.length; i++) {
    if (i < def.length) {
      const win = tieDefense ? (atk[i].val > def[i].val) : (atk[i].val > def[i].val);
      // tie_defense: 同値は防御側の勝ち (通常: 同値=攻撃負け)
      comparisons.push({ atk: atk[i], def: def[i], win });
      if (win) wins++;
    } else {
      // 余剰 — excessNullなら無効
      if (excessNull) {
        comparisons.push({ atk: atk[i], def: null, win: false, surplus: true, nullified: true });
      } else {
        comparisons.push({ atk: atk[i], def: null, win: true, surplus: true });
        wins++;
      }
    }
  }

  // 合計差ボーナス
  const atkTotal = atkRolls.reduce((s,d) => s + d.val, 0);
  const defTotal = defRolls.reduce((s,d) => s + d.val, 0);
  const totalBonus = Math.floor(Math.max(0, atkTotal - defTotal) / 4);
  if (totalBonus > 0) wins += totalBonus;

  // Max val bonus from skills
  if (skillState && skillState.maxValBonus) {
    const penalty = getFatiguePenalty();
    if (!penalty.noMaxBonus) {
      for (let c of comparisons) {
        if (c.win && c.atk.val === c.atk.sides) {
          wins += skillState.maxValBonus;
          addLog(`急所！ 最大値 ${c.atk.val} — +${skillState.maxValBonus}成功！`, 'win');
        }
      }
    } else {
      addLog('疲労により最大値ボーナス無効！', 'system');
    }
  }

  // Armor pierce
  if (skillState && skillState.armorPierce) wins += skillState.armorPierce;

  // void_crystal relic pierce
  const voidCrystal = G.relics.filter(r=>r==='void_crystal').length;
  if (voidCrystal > 0) wins += voidCrystal;

  // 多段耐性: パッシブ multi_resist
  if (skillState && skillState._multiResist) {
    wins = Math.max(0, wins - 1);
    addLog('多段耐性発動！ 成功-1', 'defend');
  }

  // 高面数耐性
  if (skillState && skillState._highFaceResist) {
    const highFaceDice = atkRolls.filter(d => d.sides >= 10).length;
    if (highFaceDice > 0) {
      wins = Math.max(0, wins - highFaceDice);
      addLog(`高面数耐性！ d10以上×${highFaceDice} → -${highFaceDice}成功`, 'defend');
    }
  }

  return { wins, comparisons, atkTotal, defTotal, totalBonus };
}

function displayDice(rolls, elementId, color) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.innerHTML = '';
  for (let r of rolls) {
    const d = document.createElement('div');
    d.className = `die ${color}`;
    d.textContent = r.val;
    const label = document.createElement('span');
    label.className = 'die-label';
    label.textContent = `d${r.sides}`;
    d.appendChild(label);
    d.classList.add('rolling');
    el.appendChild(d);
  }
}

function displayComparedDice(atkRolls, defRolls, comparisons, atkEl, defEl) {
  const ae = document.getElementById(atkEl);
  const de = document.getElementById(defEl);
  if (!ae || !de) return;
  ae.innerHTML = ''; de.innerHTML = '';

  const sortedAtk = [...atkRolls].sort((a,b) => b.val - a.val);
  const sortedDef = [...defRolls].sort((a,b) => b.val - a.val);

  for (let i = 0; i < sortedAtk.length; i++) {
    const r = sortedAtk[i];
    const c = comparisons[i];
    const d = document.createElement('div');
    d.className = `die player-die ${c && c.win ? 'win-die' : ''} rolling`;
    d.textContent = r.val;
    const label = document.createElement('span');
    label.className = 'die-label';
    label.textContent = `d${r.sides}`;
    d.appendChild(label);
    ae.appendChild(d);
  }

  for (let i = 0; i < sortedDef.length; i++) {
    const r = sortedDef[i];
    const c = comparisons[i];
    const d = document.createElement('div');
    d.className = `die enemy-die ${c && !c.win ? 'win-die' : 'lose-die'} rolling`;
    d.textContent = r.val;
    const label = document.createElement('span');
    label.className = 'die-label';
    label.textContent = `d${r.sides}`;
    d.appendChild(label);
    de.appendChild(d);
  }
}

async function executePlayerAttack() {
  G.combatPhase = 'anim';
  updateCombatUI();

  const skillState = {
    extraDice: [], extraDefDice: [],
    maxValBonus: 0, upgradeOneDie: null,
    upgradAllDice: false, rerollOnes: false,
    topDieBonus: 0, armorPierce: 0, pendingPoison: 0,
    pendingCurse: 0, lifeSteal: 0,
    pendingBleed: 0, pendingFragile: 0, pendingFrozen: 0,
    pendingShocked: 0, pendingBurning: 0,
  };

  if (G.selectedSkill) {
    SKILLS[G.selectedSkill].apply(skillState);
    applySkillCooldown(G.selectedSkill);
  }

  // 疲労ペナルティ
  const fatPen = getFatiguePenalty();
  if (fatPen.diceMinus > 0) addLog(`疲労ペナルティ！ 攻撃ダイス-${fatPen.diceMinus}個`, 'system');
  if (fatPen.noReroll) { skillState.rerollOnes = false; addLog('疲労によりリロール無効！', 'system'); }

  // Build attack dice
  let baseAtk = buildDiceList(G.selectedWeapon, true, skillState);

  // 疲労ダイス削減
  if (fatPen.diceMinus > 0) {
    const expanded = [];
    for (const d of baseAtk) for (let i = 0; i < d.n; i++) expanded.push({ sides: d.sides, n: 1 });
    expanded.sort((a,b) => a.sides - b.sides);
    const kept = expanded.slice(fatPen.diceMinus);
    baseAtk = kept.length > 0 ? kept : [{ n: 1, sides: baseAtk[0]?.sides || 4 }];
  }

  // 凍結ペナルティ（プレイヤー）
  if ((G.statuses.frozen || 0) > 0) {
    const fp = G.statuses.frozen;
    addLog(`❄ 凍結によりダイス-${fp}個！`, 'system');
    const expanded = [];
    for (const d of baseAtk) for (let i = 0; i < d.n; i++) expanded.push({ sides: d.sides, n: 1 });
    const kept = expanded.slice(fp);
    baseAtk = kept.length > 0 ? kept : [{ n: 1, sides: 4 }];
    G.statuses.frozen = 0;
  }

  let atkRolls = rollDice(baseAtk);
  atkRolls = applyRelicsToDice(atkRolls, G.relics);
  atkRolls = applySkillModifiers(atkRolls, skillState, true);

  // 感電: 敵が感電していれば攻撃ダイスにも影響（skillState経由でcompareDiceへ）
  const shockedEnemy = (G.enemy.statuses?.shocked || 0);

  // 敵パッシブ: ターン開始時
  applyEnemyPassive_onTurnStart(G.enemy);

  // burning_blade レリック: 毎攻撃焼却付与ボーナス
  if (G.relics.includes('burning_blade')) {
    const bbCount = G.relics.filter(r => r === 'burning_blade').length;
    skillState.pendingBurning = (skillState.pendingBurning || 0) + bbCount;
  }

  // 過集中レリック: 疲労0時に追加ダイス
  if (G.relics.includes('hyperfocus') && G.fatigue === 0) {
    const hfCount = G.relics.filter(r => r === 'hyperfocus').length;
    for (let i = 0; i < hfCount; i++) atkRolls.push({ sides: 8, val: rollDie(8), isExtra: true });
    addLog(`過集中発動！ d8×${hfCount}追加！`, 'win');
  }

  // 呪詛核レリック
  const curseNucleus = G.relics.filter(r => r === 'curse_nucleus').length;
  if (curseNucleus > 0) {
    const statusCount = Object.values(G.enemy.statuses || {}).filter(v => v > 0).length;
    if (statusCount > 0) {
      skillState.armorPierce = (skillState.armorPierce || 0) + statusCount * curseNucleus;
      addLog(`呪詛核×${curseNucleus} — 状態異常${statusCount}個 → 防御無視+${statusCount * curseNucleus}！`, 'win');
    }
  }

  // glass_cannon bonus
  if (G.relics.includes('glass_cannon')) {
    const hasDef = G.equippedWeapons.some(wId => {
      const w = G.weapons[wId]; return w && w.defDice.some(d=>d.n>0);
    });
    if (!hasDef) {
      const gcCount = G.relics.filter(r=>r==='glass_cannon').length;
      skillState.armorPierce = (skillState.armorPierce||0) + gcCount*2;
      addLog(`ガラス大砲×${gcCount} — 防御無視+${gcCount*2}！`,'win');
    }
  }

  // dice_hoard bonus
  let diceHoardBonus = 0;
  if (G.relics.includes('dice_hoard') && atkRolls.length >= 5) {
    const dhCount = G.relics.filter(r=>r==='dice_hoard').length;
    diceHoardBonus = dhCount * 2;
    addLog(`ダイス蒐集家×${dhCount} — ${atkRolls.length}個！+${diceHoardBonus}成功！`,'win');
  }

  // Enemy defends
  let defRolls = rollDice(G.enemy.defDice);

  // 脆弱: 敵の防御ダイス削減
  const enemyFragile = (G.enemy.statuses?.fragile || 0);
  if (enemyFragile > 0) {
    const expanded = [];
    for (const d of defRolls) expanded.push(d);
    const kept = expanded.slice(enemyFragile);
    defRolls = kept.length > 0 ? kept : [];
    addLog(`💔 脆弱 — 敵防御ダイス-${enemyFragile}！`, 'win');
    G.enemy.statuses.fragile = 0;
  }

  // 敵の凍結: 防御ダイス削減
  const enemyFrozen = (G.enemy.statuses?.frozen || 0);
  if (enemyFrozen > 0) {
    const expanded = [];
    for (const d of defRolls) expanded.push(d);
    const kept = expanded.slice(enemyFrozen);
    defRolls = kept.length > 0 ? kept : [];
    addLog(`❄ 凍結 — 敵防御ダイス-${enemyFrozen}！`, 'win');
    G.enemy.statuses.frozen = 0;
  }

  // 焼却: 防御ダイス面数低下
  const enemyBurning = (G.enemy.statuses?.burning || 0);
  if (enemyBurning > 0) {
    defRolls = defRolls.map(d => ({
      ...d,
      sides: Math.max(4, d.sides - enemyBurning),
      val: Math.min(d.val, Math.max(4, d.sides - enemyBurning))
    }));
  }

  // 敵パッシブ: 防御時
  defRolls = applyEnemyPassive_onDefend(G.enemy, atkRolls, defRolls, skillState);
  if (G.enemy.passive === 'multi_resist') skillState._multiResist = true;
  if (G.enemy.passive === 'high_face_resist') skillState._highFaceResist = true;
  if (shockedEnemy > 0) skillState._shockedTarget = shockedEnemy;

  await sleep(200);
  displayDice(atkRolls, 'atk-dice-display', 'player-die');
  displayDice(defRolls, 'def-dice-display', 'enemy-die');
  await sleep(600);

  const { wins: rawWins, comparisons, totalBonus } = compareDice(atkRolls, defRolls, skillState);
  const wins = rawWins + diceHoardBonus;
  displayComparedDice(atkRolls, defRolls, comparisons, 'atk-dice-display', 'def-dice-display');

  addLog(`ATK [${atkRolls.map(r=>r.val).join(',')}] vs DEF [${defRolls.map(r=>r.val).join(',')}]`, 'system');
  if (totalBonus > 0) addLog(`合計差ボーナス: +${totalBonus}`, 'win');
  if (G.fatigue > 0) addLog(`疲労: ${G.fatigue}/${G.maxFatigue}`, 'system');
  addLog(`→ 成功: ${wins}`, wins > 0 ? 'win' : 'system');
  await sleep(400);

  if (wins > 0) {
    const weapType = G.weapons[G.selectedWeapon]?.type || '';
    let dmg = wins;
    const enemy = G.enemy;

    if ((enemy.immune||[]).includes(weapType)) {
      addLog(`🚫 ${enemy.name} は ${WEAPON_TYPE_LABEL[weapType]||weapType} を無効化！ダメージ0`, 'defend');
      dmg = 0;
    } else if ((enemy.resist||[]).includes(weapType)) {
      const reduced = Math.ceil(dmg / 2);
      addLog(`🛡 ${enemy.name} は ${WEAPON_TYPE_LABEL[weapType]||weapType} に耐性！ ${dmg}→${reduced}`, 'defend');
      dmg = reduced;
    } else if ((enemy.weak||[]).includes(weapType)) {
      const boosted = Math.floor(dmg * 1.5);
      addLog(`⚡ ${enemy.name} は ${WEAPON_TYPE_LABEL[weapType]||weapType} が弱点！ ${dmg}→${boosted}`, 'win');
      dmg = boosted;
    }

    // 熱狂レリック: 疲労中にダメージ増加
    if (G.relics.includes('zeal_relic') && G.fatigue >= 3) {
      const zealCount = G.relics.filter(r => r === 'zeal_relic').length;
      const bonus = Math.floor(G.fatigue / 3) * zealCount;
      dmg += bonus;
      addLog(`熱狂×${zealCount} — 疲労${G.fatigue} ダメージ+${bonus}！`, 'win');
    }

    if (dmg > 0) {
      const poisonImmune = enemy.passive === 'poison_immune';
      if (skillState.pendingPoison > 0 && !poisonImmune) {
        G.enemy.statuses.poison = (G.enemy.statuses.poison||0) + skillState.pendingPoison;
        addLog(`☠ 毒 ${skillState.pendingPoison} 付与！`, 'system');
      } else if (skillState.pendingPoison > 0 && poisonImmune) {
        addLog(`${enemy.name} は毒無効！`, 'defend');
      }
      if (skillState.pendingCurse > 0) {
        G.enemy.statuses.curse = (G.enemy.statuses.curse||0) + skillState.pendingCurse;
        addLog(`💀 呪い ${skillState.pendingCurse} 付与！`, 'system');
      }
      if (skillState.pendingBleed > 0) {
        const bleedWeak = enemy.passive === 'bleed_weak';
        const bleedAmt = bleedWeak ? skillState.pendingBleed * 2 : skillState.pendingBleed;
        G.enemy.statuses.bleed = Math.max(G.enemy.statuses.bleed||0, bleedAmt);
        addLog(`🩸 出血 ${bleedAmt} 付与${bleedWeak ? '（弱点！×2）' : ''}！`, 'system');
      }
      if (skillState.pendingFragile > 0) {
        G.enemy.statuses.fragile = (G.enemy.statuses.fragile||0) + skillState.pendingFragile;
        addLog(`💔 脆弱 付与！（防御ダイス-${skillState.pendingFragile}）`, 'system');
      }
      if (skillState.pendingFrozen > 0) {
        G.enemy.statuses.frozen = (G.enemy.statuses.frozen||0) + skillState.pendingFrozen;
        addLog(`❄ 凍結 付与！（次ターンダイス-${skillState.pendingFrozen}）`, 'system');
      }
      if (skillState.pendingShocked > 0) {
        G.enemy.statuses.shocked = (G.enemy.statuses.shocked||0) + skillState.pendingShocked;
        addLog(`⚡ 感電 ${skillState.pendingShocked} 付与！`, 'system');
      }
      if (skillState.pendingBurning > 0) {
        G.enemy.statuses.burning = (G.enemy.statuses.burning||0) + skillState.pendingBurning;
        addLog(`🔥 焼却 付与！（防御面数低下）`, 'system');
      }
    }

    G.enemy.curHp = Math.max(0, G.enemy.curHp - dmg);
    if (dmg > 0) {
      addLog(`${G.enemy.name} に ${dmg} ダメージ！`, 'win');
      showDmgPopup(window.innerWidth*0.35, window.innerHeight*0.25, dmg, 'enemy-dmg');
    }
    updateEnemyDisplay();

    if (skillState.lifeSteal > 0 && dmg > 0) {
      G.hp = Math.min(G.maxHp, G.hp + skillState.lifeSteal);
      addLog(`魂吸収 — HP+${skillState.lifeSteal}！`, 'heal');
      updateTopBar();
    }
    if (G.relics.includes('bloodlust') && dmg > 0) {
      const blCount = G.relics.filter(r=>r==='bloodlust').length;
      const heal = Math.ceil(dmg * 0.2 * blCount) || blCount;
      G.hp = Math.min(G.maxHp, G.hp + heal);
      addLog(`血渇き×${blCount} — HP+${heal}！`, 'heal');
      updateTopBar();
    }
    // 血宴レリック: 出血敵を攻撃したとき
    if (G.relics.includes('blood_feast') && (G.enemy.statuses?.bleed||0) > 0 && dmg > 0) {
      const bfCount = G.relics.filter(r=>r==='blood_feast').length;
      G.hp = Math.min(G.maxHp, G.hp + bfCount);
      addLog(`血宴×${bfCount} — 出血敵撃 HP+${bfCount}！`, 'heal');
      updateTopBar();
    }
    if (G.relics.includes('vampiric') && wins >= 3 && dmg > 0) {
      const vCount = G.relics.filter(r=>r==='vampiric').length;
      G.hp = Math.min(G.maxHp, G.hp + 2*vCount);
      addLog(`吸血の牙×${vCount} — HP+${2*vCount}！`, 'heal');
      updateTopBar();
    }
    G.consecutiveHits = dmg > 0 ? (G.consecutiveHits||0) + 1 : 0;
  } else {
    addLog(`全て防がれた！`, 'defend');
    G.consecutiveHits = 0;
  }

  await sleep(300);

  // 敵状態異常ターン終了処理 (新システム)
  tickEnemyStatuses();

  if (G.enemy.curHp <= 0) { await enemyDeath(); return; }

  G.combatPhase = 'player_def';
  G.selectedWeapon = null;
  G.selectedSkill = null;
  prepareEnemyIntent();
  updateCombatUI();
  updateFatigueDisplay();
}

async function executePlayerDefend() {
  G.combatPhase = 'anim';
  updateCombatUI();

  const skillState = {
    extraDice: [], extraDefDice: [],
    dmgReduction: 0, counterDmg: false, counterOnDef: false
  };

  if (G.selectedSkill) {
    SKILLS[G.selectedSkill].apply(skillState);
    applySkillCooldown(G.selectedSkill);
  }

  // iron_will relic: -2 per stack dmg if HP low
  if (G.relics.includes('iron_will') && G.hp <= 20) {
    const iwCount = G.relics.filter(r=>r==='iron_will').length;
    skillState.dmgReduction = (skillState.dmgReduction||0) + iwCount*2;
    addLog(`鉄の意志×${iwCount} — 低HP発動 被ダメ-${iwCount*2}！`, 'defend');
  }

  // fatigue_shield: 疲労5以上で防御ダイス+2
  if (G.relics.includes('fatigue_shield') && G.fatigue >= 5) {
    const fsCount = G.relics.filter(r => r === 'fatigue_shield').length;
    skillState.extraDefDice = skillState.extraDefDice || [];
    for (let i = 0; i < fsCount; i++) skillState.extraDefDice.push({ n: 2, sides: 6 });
    addLog(`疲労盾×${fsCount} — 疲労${G.fatigue}! 防御d6×2追加！`, 'defend');
  }

  let atkRolls = rollDice(G.enemy.nextAtkDice);
  let baseDefArr = buildDiceList(G.selectedWeapon, false, skillState);
  let defRolls = rollDice(baseDefArr);
  defRolls = applyRelicsToDice(defRolls, G.relics);

  // 防御時: 敵のカウンターパッシブ（防御成功時反撃は後で処理）
  const defSkillState = { ...skillState };
  if (G.enemy.passive === 'counter_on_def') defSkillState._enemyCounterOnDef = true;

  await sleep(200);
  displayDice(atkRolls, 'atk-dice-display', 'enemy-die');
  displayDice(defRolls, 'def-dice-display', 'player-die');
  await sleep(600);

  const { wins: enemyWins, comparisons, totalBonus: defBonus } = compareDice(atkRolls, defRolls, null);
  displayComparedDice(atkRolls, defRolls, comparisons, 'atk-dice-display', 'def-dice-display');

  addLog(`敵ATK [${atkRolls.map(r=>r.val).join(',')}] vs 自DEF [${defRolls.map(r=>r.val).join(',')}]`, 'system');
  if (defBonus > 0) addLog(`敵合計差ボーナス: +${defBonus}`, 'damage');
  addLog(`→ 被弾: ${enemyWins}`, enemyWins > 0 ? 'damage' : 'defend');
  await sleep(400);

  const playerSuccesses = Math.max(0, defRolls.length - enemyWins);
  if (skillState.counterDmg && playerSuccesses > 0) {
    G.enemy.curHp = Math.max(0, G.enemy.curHp - playerSuccesses);
    addLog(`カウンター! 敵に ${playerSuccesses} ダメージ！`, 'win');
    updateEnemyDisplay();
  }
  if (skillState.counterOnDef && playerSuccesses > 0) {
    G.enemy.curHp = Math.max(0, G.enemy.curHp - playerSuccesses);
    addLog(`迎撃反撃! 敵に ${playerSuccesses} ダメージ！`, 'win');
    updateEnemyDisplay();
  }

  if (enemyWins > 0) {
    let dmg = Math.max(0, enemyWins - (skillState.dmgReduction||0));
    // 敵の「防御成功時反撃」パッシブ: こちらの防御成功時に追加ダメージ
    if (defSkillState._enemyCounterOnDef && playerSuccesses > 0) {
      const counterDmg = Math.floor(playerSuccesses / 2);
      if (counterDmg > 0) {
        dmg += counterDmg;
        addLog(`${G.enemy.name} 防御反撃！ +${counterDmg}ダメージ！`, 'damage');
      }
    }
    G.hp = Math.max(0, G.hp - dmg);
    addLog(`${dmg} ダメージを受けた！`, 'damage');
    showDmgPopup(window.innerWidth*0.15, window.innerHeight*0.7, dmg, 'player-dmg');
    updateTopBar();

    // Thorn relic: deal per-stack dmg back
    if (G.relics.includes('thorn')) {
      const thornCount = G.relics.filter(r=>r==='thorn').length;
      G.enemy.curHp = Math.max(0, G.enemy.curHp - thornCount);
      addLog(`茨の鎧×${thornCount} — ${thornCount}ダメ反撃！`, 'win');
      updateEnemyDisplay();
    }
  } else {
    addLog('完全防御！', 'defend');
    // 完全防御時に疲労回復
    recoverFatigue(1);
    if (G.fatigue < G.maxFatigue) addLog('完全防御 — 疲労-1回復！', 'heal');
  }

  // プレイヤー状態異常ターン終了処理
  tickPlayerStatuses();

  await sleep(300);

  if (G.hp <= 0) { G.hp = 0; updateTopBar(); addLog('力尽きた...', 'damage'); await sleep(800); showGameOver(); return; }
  if (G.enemy.curHp <= 0) { await enemyDeath(); return; }

  G.combatPhase = 'player_atk';
  G.selectedWeapon = null;
  G.selectedSkill = null;
  prepareEnemyIntent();

  // regeneration relic: HP回復
  if (G.relics.includes('regeneration')) {
    const regCount = G.relics.filter(r=>r==='regeneration').length;
    const regHeal = regCount * 2;
    G.hp = Math.min(G.maxHp, G.hp + regHeal);
    addLog(`再生の指輪×${regCount} — HP+${regHeal}回復！`, 'heal');
    updateTopBar();
  }

  // クールダウンをターン毎に減らす
  tickCooldowns();

  updateCombatUI();
  updateFatigueDisplay();
  addLog('— 次のターン —', 'system');
}


async function enemyDeath() {
  addLog(`${G.enemy.name} を撃破！`, 'win');
  G.totalKills++;
  G.usedFirstExtra = false;
  G.consecutiveHits = 0;

  await sleep(600);

  const [minG, maxG] = G.enemy.gold;
  let goldGain = Math.floor(Math.random() * (maxG - minG + 1)) + minG;
  // gold_magnet relic
  if (G.relics.includes('gold_magnet')) {
    const gmCount = G.relics.filter(r=>r==='gold_magnet').length;
    goldGain += gmCount * 3;
  }
  G.gold += goldGain;
  updateTopBar();

  if (G.enemy.isBoss) {
    G.floor++;
    if (G.floor > 10) { showWin(); return; }
    G.phase = 0;
    addLog(`⭐ FLOOR ${G.floor} へ突入！`, 'win');
    await sleep(500);
    showReward(true, goldGain);
    return;
  }

  showReward(false, goldGain);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ============================================================
// 疲労システム (FATIGUE)
// ============================================================

// スキルごとの疲労コストと疲労軽減
const SKILL_FATIGUE = {
  // 重いスキル（強力なもの）
  death_strike:    { cost: 4, cd: 2 },
  divine_cut:      { cost: 5, cd: 3 },
  absolute_pierce: { cost: 4, cd: 2 },
  world_cleave:    { cost: 5, cd: 3 },
  perfect_guard:   { cost: 4, cd: 2 },
  divine_guard:    { cost: 4, cd: 2 },
  cosmos_magic:    { cost: 5, cd: 3 },
  lunar_shot:      { cost: 4, cd: 2 },
  titan_blow:      { cost: 4, cd: 2 },
  dragon_pierce:   { cost: 3, cd: 2 },
  berserk_mode:    { cost: 3, cd: 1 },
  phantom_shot:    { cost: 3, cd: 2 },
  elder_magic:     { cost: 4, cd: 2 },
  fortress:        { cost: 3, cd: 2 },
  // 中程度スキル
  wind_up:         { cost: 2, cd: 1 },
  arcane_surge:    { cost: 2, cd: 1 },
  chaos_magic:     { cost: 3, cd: 1 },
  soul_drain:      { cost: 2, cd: 1 },
  twin_strike:     { cost: 2, cd: 1 },
  whirlwind:       { cost: 2, cd: 1 },
  void_reflect:    { cost: 2, cd: 1 },
  rage_strike:     { cost: 2, cd: 1 },
  empower:         { cost: 2, cd: 1 },
  iron_wall:       { cost: 1, cd: 0 },
  flurry:          { cost: 2, cd: 1 },
  // 軽いスキル（連打できる）
  poison_blade:    { cost: 1, cd: 0 },
  double_poison:   { cost: 1, cd: 0 },
  vital_strike:    { cost: 1, cd: 0 },
  dodge:           { cost: 0, cd: 0 },
  shadow_step:     { cost: 1, cd: 0 },
  pierce:          { cost: 1, cd: 0 },
  intercept:       { cost: 0, cd: 0 },
  stance:          { cost: 1, cd: 0 },
  shatter:         { cost: 1, cd: 0 },
  behead:          { cost: 1, cd: 0 },
  counter:         { cost: 0, cd: 0 },
  guard_stance:    { cost: 0, cd: 0 },
  multishot:       { cost: 1, cd: 0 },
  aimed_shot:      { cost: 1, cd: 0 },
  volley:          { cost: 1, cd: 0 },
  hunting_mark:    { cost: 1, cd: 0 },
  curse_arrow:     { cost: 1, cd: 0 },
  cleave:          { cost: 1, cd: 0 },
  thunder_thrust:  { cost: 2, cd: 1 },
  reroll_spell:    { cost: 2, cd: 1 },
  // 鞭/新武器スキル
  lash:            { cost: 1, cd: 0 },
  bleed_strike:    { cost: 1, cd: 0 },
  frenzy_lash:     { cost: 2, cd: 1 },
  entangle:        { cost: 2, cd: 1 },
  // デフォルト（定義なし）
  _default:        { cost: 1, cd: 0 },
};

function getSkillFatigue(skillId) {
  return SKILL_FATIGUE[skillId] || SKILL_FATIGUE['_default'];
}

function addFatigue(amount) {
  // 熱狂レリック: 疲労軽減
  const zeal = G.relics.filter(r => r === 'zeal_relic').length;
  const reduced = Math.max(0, amount - zeal);
  G.fatigue = Math.min(G.maxFatigue, G.fatigue + reduced);
}

function recoverFatigue(amount) {
  G.fatigue = Math.max(0, G.fatigue - amount);
}

// 疲労によるダイスペナルティを返す
function getFatiguePenalty() {
  if (G.fatigue >= 8) return { diceMinus: 2, noReroll: true, noMaxBonus: true };
  if (G.fatigue >= 5) return { diceMinus: 1, noReroll: false, noMaxBonus: true };
  if (G.fatigue >= 3) return { diceMinus: 0, noReroll: false, noMaxBonus: false };
  return { diceMinus: 0, noReroll: false, noMaxBonus: false };
}

// クールダウン処理
function tickCooldowns() {
  for (let sk in G.skillCooldowns) {
    G.skillCooldowns[sk] = Math.max(0, G.skillCooldowns[sk] - 1);
    if (G.skillCooldowns[sk] === 0) delete G.skillCooldowns[sk];
  }
  // iron_mind: 毎ターン疲労追加回復
  const ironMind = G.relics.filter(r => r === 'iron_mind').length;
  if (ironMind > 0) {
    recoverFatigue(ironMind);
  }
}

function isSkillOnCooldown(skillId) {
  return (G.skillCooldowns[skillId] || 0) > 0;
}

function applySkillCooldown(skillId) {
  const sf = getSkillFatigue(skillId);
  if (sf.cd > 0) G.skillCooldowns[skillId] = sf.cd;
  addFatigue(sf.cost);
}

// ============================================================
// 状態異常システム (STATUS EFFECTS)
// ============================================================

// 状態異常の定義
const STATUS_DEFS = {
  poison:  { icon: '☠', name: '毒',   color: '#4caf50', desc: '毎ターン終了時スタック数ダメージ、1減衰' },
  curse:   { icon: '💀', name: '呪い', color: '#9c27b0', desc: '毎ターン終了時スタック数ダメージ、1減衰' },
  bleed:   { icon: '🩸', name: '出血', color: '#e53935', desc: '毎ターン終了時スタック数ダメージ（減衰なし・上書き）。多段に相性◎' },
  fragile: { icon: '💔', name: '脆弱', color: '#ff7043', desc: '防御ダイス数-2（スタック分）。次の攻撃まで有効' },
  frozen:  { icon: '❄', name: '凍結', color: '#42a5f5', desc: '次のターンのダイス数-2（スタック分）' },
  shocked: { icon: '⚡', name: '感電', color: '#ffee58', desc: 'ダイス目が1になる確率+20%/スタック' },
  burning: { icon: '🔥', name: '焼却', color: '#ff6f00', desc: '毎ターン攻撃ダイス面数-1。スタックで効果増' },
};

function getStatusIcon(key) { return (STATUS_DEFS[key]||{icon:'?'}).icon; }
function getStatusName(key) { return (STATUS_DEFS[key]||{name:key}).name; }

// 状態異常をターン終了時に処理（攻撃フェーズ終了後）
function tickEnemyStatuses() {
  const e = G.enemy;
  if (!e) return;
  const s = e.statuses || {};

  // 毒
  if (s.poison > 0) {
    let dmg = s.poison;
    const pm = G.relics.filter(r=>r==='poison_master').length;
    if (pm > 0) dmg += pm * 2;
    e.curHp = Math.max(0, e.curHp - dmg);
    s.poison = Math.max(0, s.poison - 1);
    addLog(`☠ 毒ダメージ: ${dmg}`, 'damage');
  }
  // 呪い
  if (s.curse > 0) {
    e.curHp = Math.max(0, e.curHp - s.curse);
    addLog(`💀 呪いダメージ: ${s.curse}`, 'damage');
    s.curse = Math.max(0, s.curse - 1);
  }
  // 出血（毎ターン一定量、減衰なし）
  if (s.bleed > 0) {
    let bDmg = s.bleed;
    // bleed_master: 出血ダメージ増加
    const bleedMaster = G.relics.filter(r => r === 'bleed_master').length;
    if (bleedMaster > 0) bDmg += bleedMaster;
    // 血宴レリック: 出血敵攻撃時HP回復
    const bloodFeast = G.relics.filter(r => r === 'blood_feast').length;
    if (bloodFeast > 0) {
      G.hp = Math.min(G.maxHp, G.hp + bloodFeast);
      addLog(`🩸 血宴発動! HP+${bloodFeast}！`, 'heal');
      updateTopBar();
    }
    e.curHp = Math.max(0, e.curHp - bDmg);
    addLog(`🩸 出血ダメージ: ${bDmg}`, 'damage');
    // 出血は減衰しない（武器特性のFWHIPは1ずつ落ちる）
  }
  // 焼却（ターン終了時ダイス面数-1効果）
  if (s.burning > 0) {
    // 焼却はダイス面数低下として管理（combatで参照）
    addLog(`🔥 焼却効果継続 (ダイス-${s.burning}面)`, 'damage');
    s.burning = Math.max(0, s.burning - 1);
  }
  updateEnemyDisplay();
}

function tickPlayerStatuses() {
  const s = G.statuses || {};
  // 毒
  if (s.poison > 0) {
    G.hp = Math.max(0, G.hp - s.poison);
    addLog(`☠ 毒によるダメージ: ${s.poison}`, 'damage');
    s.poison = Math.max(0, s.poison - 1);
    updateTopBar();
  }
  // 呪い
  if (s.curse > 0) {
    G.hp = Math.max(0, G.hp - s.curse);
    addLog(`💀 呪いによるダメージ: ${s.curse}`, 'damage');
    s.curse = Math.max(0, s.curse - 1);
    updateTopBar();
  }
  // 出血
  if (s.bleed > 0) {
    G.hp = Math.max(0, G.hp - s.bleed);
    addLog(`🩸 出血ダメージ: ${s.bleed}`, 'damage');
    updateTopBar();
  }
  // 脆弱は1ターン後消費
  if (s.fragile > 0) s.fragile = 0;
  // 凍結も消費（ice_heartで無効化）
  if (s.frozen > 0) {
    if (G.relics.includes('ice_heart')) {
      addLog('氷心 — 凍結無効！', 'defend');
      s.frozen = 0;
    } else {
      s.frozen = 0; // 効果は攻撃フェーズで使用済み
    }
  }
  // 感電も徐々に消えていく
  if (s.shocked > 0) s.shocked = Math.max(0, s.shocked - 1);
  // 焼却
  if (s.burning > 0) {
    addLog(`🔥 焼却効果継続 (ダイス面-${s.burning})`, 'damage');
    s.burning = Math.max(0, s.burning - 1);
  }
  updatePlayerDisplay();
}

// ============================================================
// 敵パッシブ特性 (ENEMY PASSIVES)
// ============================================================

// enemyPassiveを処理（攻撃フェーズで参照）
function applyEnemyPassive_onDefend(enemy, atkRolls, defRolls, skillState) {
  // reroll: 敵が防御時にリロール
  if (enemy.passive === 'reroll_defense') {
    defRolls = defRolls.map(d => {
      if (d.val <= Math.floor(d.sides / 2)) {
        const newVal = rollDie(d.sides);
        addLog(`${enemy.name} 防御リロール: ${d.val} → ${newVal}`, 'defend');
        return { ...d, val: newVal };
      }
      return d;
    });
  }
  // tie_defense: 同値も防御成功
  if (enemy.passive === 'tie_defense') {
    // compareDiceのロジックを変更するのでフラグを渡す
    skillState._tieDefense = true;
  }
  // excess_null: 余剰成功無効
  if (enemy.passive === 'excess_null') {
    skillState._excessNull = true;
  }
  // max_bonus: 最大値時に追加防御
  if (enemy.passive === 'max_bonus_defense') {
    defRolls = defRolls.map(d => {
      if (d.val === d.sides) return { ...d, val: d.val + 2 };
      return d;
    });
    addLog(`${enemy.name} 最大値防御ボーナス！`, 'defend');
  }
  return defRolls;
}

function applyEnemyPassive_onTurnStart(enemy) {
  // self_buff: 毎ターン自己強化
  if (enemy.passive === 'self_buff') {
    // atkDiceを少し強化
    if (!enemy._buffCount) enemy._buffCount = 0;
    if (enemy._buffCount < 5) {
      enemy._buffCount++;
      // atkDiceの最初のnを+1
      if (enemy.atkDice[0]) enemy.atkDice[0] = { ...enemy.atkDice[0], n: enemy.atkDice[0].n + 1 };
      addLog(`${enemy.name} 自己強化！攻撃ダイス増加！`, 'damage');
      prepareEnemyIntent();
    }
  }
  // multi_resist: 多段耐性（成功数を1減らす）
  // counter_on_def: 防御成功時反撃
}

// 敵パッシブ表示テキスト
const PASSIVE_LABEL = {
  reroll_defense:   { icon:'🔁', label:'防御リロール', desc:'低い防御ダイスを振り直す' },
  tie_defense:      { icon:'🛡', label:'同値防御',    desc:'攻防同値で防御側が勝利' },
  max_bonus_defense:{ icon:'💥', label:'最大値防御',  desc:'最大値の防御ダイスに+2' },
  multi_resist:     { icon:'🧱', label:'多段耐性',    desc:'成功数を1減らす' },
  high_face_resist: { icon:'🎲', label:'高面数耐性',  desc:'d10以上の攻撃ダイス-2' },
  poison_immune:    { icon:'💚', label:'毒無効',      desc:'毒状態を受けない' },
  bleed_weak:       { icon:'🩸', label:'出血弱点',    desc:'出血ダメージ2倍' },
  counter_on_def:   { icon:'↩',  label:'防御反撃',    desc:'防御成功時に反撃' },
  excess_null:      { icon:'⛔', label:'余剰無効',    desc:'余剰成功ダイスが無効' },
  self_buff:        { icon:'📈', label:'毎ターン強化', desc:'毎ターン攻撃が強くなる' },
};

// ============================================================
// REWARD SCREEN
// ============================================================

function showReward(isBoss, goldGain) {
  const title = document.getElementById('reward-title');
  title.textContent = isBoss ? '⚔ BOSS DEFEATED!' : '✓ VICTORY!';

  const container = document.getElementById('reward-items');
  container.innerHTML = '';

  // Generate 3 reward options
  const rewards = generateRewards(isBoss);
  G.pendingRewards = rewards;

  for (let r of rewards) {
    const div = document.createElement('div');
    div.className = `reward-item ${r.cls}`;
    div.innerHTML = `
      <div class="r-icon">${r.icon}</div>
      <div class="r-type">${r.typeLabel}</div>
      <div class="r-name">${r.name}</div>
      <div class="r-desc">${r.desc}</div>
    `;
    div.onclick = () => claimReward(r);
    container.appendChild(div);
  }

  // Gold display
  document.getElementById('reward-title').textContent = `VICTORY! +${goldGain}G`;
  G.rewardGold = goldGain;

  showScreen('reward-screen');
}

// ============================================================
// RARITY DROP TABLE (フロア別出現率)
// ============================================================
const RARITY_TABLE = {
//         common uncommon rare  epic  legendary
  1:  [70,   25,      5,    0,    0],
  2:  [55,   30,     13,    2,    0],
  3:  [35,   35,     22,    7,    1],
  4:  [20,   35,     30,   13,    2],
  5:  [10,   25,     35,   25,    5],
  6:  [ 5,   15,     35,   35,   10],
  7:  [ 0,   10,     30,   40,   20],
  8:  [ 0,    5,     20,   45,   30],
  9:  [ 0,    0,     15,   40,   45],
  10: [ 0,    0,      5,   30,   65],
};
const RARITY_ORDER = ['common','uncommon','rare','epic','legendary'];

// フロアと isBoss から レア度を1つ抽選して返す
function rollRarity(floor, isBoss) {
  // ボス撃破後報酬は +1フロア分のテーブル（上限10）
  const f = Math.min(isBoss ? floor + 1 : floor, 10);
  const weights = RARITY_TABLE[f] || RARITY_TABLE[10];
  const total = weights.reduce((a,b)=>a+b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < RARITY_ORDER.length; i++) {
    r -= weights[i];
    if (r <= 0) return RARITY_ORDER[i];
  }
  return RARITY_ORDER[RARITY_ORDER.length - 1];
}

function generateRewards(isBoss) {
  const allPool = buildRewardPool(isBoss);
  const used = new Set();
  const rewards = [];
  const isElite = G.enemy && G.enemy.isElite && !isBoss;

  for (let i = 0; i < 3; i++) {
    // 精鋭: +2フロア分のテーブル、ボス: +1フロア分
    const floorBoost = isBoss ? 1 : isElite ? 2 : 0;
    const effectiveFloor = Math.min(G.floor + floorBoost, 10);
    const targetRarity = rollRarity(effectiveFloor, false);

    let candidates = allPool.filter(r =>
      !used.has(r.id) &&
      (r.rarity === targetRarity || r.rarity === 'relic')
    );

    if (candidates.filter(r=>r.cls==='weapon').length === 0) {
      candidates = allPool.filter(r => !used.has(r.id));
    }

    const weaponCandidates = candidates.filter(r => r.cls === 'weapon');
    const otherCandidates  = candidates.filter(r => r.cls !== 'weapon');
    let pool;
    if (weaponCandidates.length > 0 && otherCandidates.length > 0) {
      pool = Math.random() < 0.70 ? weaponCandidates : otherCandidates;
    } else {
      pool = candidates;
    }

    if (pool.length === 0) pool = allPool.filter(r => !used.has(r.id));
    if (pool.length === 0) pool = allPool;

    const r = pool[Math.floor(Math.random() * pool.length)];
    used.add(r.id);
    rewards.push(r);
  }
  return rewards;
}

function buildRewardPool(isBoss) {
  const pool = [];

  for (let [k, w] of Object.entries(WEAPONS)) {
    pool.push({
      id: `w_${k}`, cls: 'weapon',
      rarity: w.rarity || 'common',
      icon: w.icon,
      typeLabel: `WEAPON · ${(RARITY_LABEL[w.rarity||'common']||'').toUpperCase()}`,
      name: w.name,
      desc: `${w.desc} | ATK:${w.atkDice.map(d=>`d${d.sides}×${d.n}`).join('+')} DEF:${w.defDice.map(d=>`d${d.sides}×${d.n}`).join('+')}`,
      apply: () => { G.weapons[k] = {...w}; addWeaponToInventory(k); }
    });
  }

  for (let r of RELICS) {
    pool.push({
      id: `relic_${r.id}`, cls: 'relic', rarity: 'relic', icon: r.icon, typeLabel: 'RELIC',
      name: r.name, desc: r.desc,
      apply: () => { G.relics.push(r.id); renderTopRelics(); }
    });
  }

  pool.push({ id:'heal_sm', cls:'heal', rarity:'common', icon:'💚', typeLabel:'HEAL', name:'回復薬', desc:'HP+15回復', apply:()=>{ G.hp=Math.min(G.maxHp,G.hp+15); updateTopBar(); } });
  pool.push({ id:'heal_lg', cls:'heal', rarity:'uncommon', icon:'❤', typeLabel:'HEAL', name:'大回復', desc:'HP+30回復', apply:()=>{ G.hp=Math.min(G.maxHp,G.hp+30); updateTopBar(); } });
  pool.push({ id:'max_hp', cls:'heal', rarity:'rare', icon:'💪', typeLabel:'UPGRADE', name:'HP強化', desc:'最大HP+12', apply:()=>{ G.maxHp+=12; G.hp+=12; updateTopBar(); } });
  pool.push({ id:'gold_bag', cls:'gold', rarity:'common', icon:'💰', typeLabel:'GOLD', name:'金袋', desc:'+15Gold獲得', apply:()=>{ G.gold+=15; updateTopBar(); } });

  return pool;
}

function buildShopItems() {
  const items = [];
  const wKeys = Object.keys(WEAPONS);

  // 武器2枠: フロアに応じたレア度抽選で選ぶ
  const pickedW = new Set();
  for (let i = 0; i < 2; i++) {
    const targetRarity = rollRarity(G.floor, false);
    const candidates = wKeys.filter(k => {
      const w = WEAPONS[k];
      return (w.rarity || 'common') === targetRarity && !pickedW.has(k);
    });
    // fallback: そのレア度がなければ全体からランダム
    const pool = candidates.length > 0
      ? candidates
      : wKeys.filter(k => !pickedW.has(k));
    const k = pool[Math.floor(Math.random() * pool.length)];
    if (!k) continue;
    pickedW.add(k);
    const w = WEAPONS[k];
    const rarity = w.rarity || 'common';
    const price = rarity==='legendary' ? 35 : rarity==='epic' ? 25 : rarity==='rare' ? 18 : rarity==='uncommon' ? 12 : 8;
    items.push({
      icon: w.icon,
      name: `${w.name} [${RARITY_LABEL[rarity]}]`,
      desc: `${w.desc} | ATK:${w.atkDice.map(d=>`d${d.sides}×${d.n}`).join('+')}`,
      price,
      apply: () => { G.weapons[k] = {...w}; addWeaponToInventory(k); }
    });
  }

  // レリック2枠（フロア問わず出現、ただし未所持のもの）
  const pickedR = new Set(G.relics);
  const availRelics = RELICS.filter(r => !pickedR.has(r.id));
  const shuffled = availRelics.sort(() => Math.random() - 0.5);
  for (let i = 0; i < Math.min(2, shuffled.length); i++) {
    const rel = shuffled[i];
    items.push({
      icon: rel.icon, name: rel.name, desc: rel.desc, price: 14,
      apply: () => { if (!G.relics.includes(rel.id)) G.relics.push(rel.id); renderTopRelics(); }
    });
  }

  items.push({ icon:'💚', name:'回復薬', desc:'HP+25', price:6,
    apply:()=>{ G.hp=Math.min(G.maxHp,G.hp+25); updateTopBar(); } });
  items.push({ icon:'❤', name:'HP強化', desc:'最大HP+15', price:12,
    apply:()=>{ G.maxHp+=15; G.hp+=15; updateTopBar(); } });

  return items;
}

G.rewardClaimed = false;

function claimReward(r) {
  if (G.rewardClaimed) return;
  G.rewardClaimed = true;
  r.apply();
  updateTopBar();
  closeReward();
}

function closeReward() {
  G.rewardClaimed = false;
  if (G.phase >= 6) {
    // ボス撃破後は次の階層へ（enemyDeath内でG.floor++済み）
    // phaseリセットはenemyDeathで処理済み
  }
  if (G.floor > 10) {
    showWin();
  } else {
    showMapScreen();
  }
}

function addWeaponToInventory(wId) {
  if (!G.equippedWeapons.includes(wId)) {
    G.equippedWeapons.push(wId);
  }
  renderInventory();
}

// ============================================================
// SHOP
// ============================================================

function openShop() {
  document.getElementById('shop-gold').textContent = G.gold;
  const container = document.getElementById('shop-items');
  container.innerHTML = '';

  const shopPool = buildShopItems();

  for (let item of shopPool) {
    const div = document.createElement('div');
    div.className = 'shop-item';
    div.innerHTML = `
      <div class="s-icon">${item.icon}</div>
      <div class="s-name">${item.name}</div>
      <div class="s-desc">${item.desc}</div>
      <div class="s-price">${item.price}G</div>
      <button class="btn btn-sm" onclick="buyShopItem(${JSON.stringify(item).replace(/"/g,"'")}, this)">BUY</button>
    `;
    container.appendChild(div);
  }

  showScreen('shop-screen');
}

// Simplified buy with direct reference
let currentShopItems = [];

function openShopReal() {
  document.getElementById('shop-gold').textContent = G.gold;
  const container = document.getElementById('shop-items');
  container.innerHTML = '';

  currentShopItems = buildShopItems();

  currentShopItems.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'shop-item';
    div.innerHTML = `
      <div class="s-icon">${item.icon}</div>
      <div class="s-name">${item.name}</div>
      <div class="s-desc">${item.desc}</div>
      <div class="s-price">${item.price}G</div>
    `;
    const btn = document.createElement('button');
    btn.className = 'btn btn-sm';
    btn.textContent = 'BUY';
    btn.onclick = () => {
      if (G.gold >= item.price) {
        G.gold -= item.price;
        item.apply();
        updateTopBar();
        document.getElementById('shop-gold').textContent = G.gold;
        btn.textContent = '✓ 購入済';
        btn.disabled = true;
      } else {
        btn.textContent = 'G不足';
        setTimeout(() => { btn.textContent = 'BUY'; }, 1000);
      }
    };
    div.appendChild(btn);
    container.appendChild(div);
  });

  showScreen('shop-screen');
}

// Override openShop to use real version
const _openShopOrig = openShop;
window.openShop = openShopReal;


function leaveShop() {
  showMapScreen();
}

// ============================================================
// CHEST
// ============================================================

function openChest() {
  // 宝箱: フロアに応じたレア度で1つ抽選（普通戦闘と同じ確率）
  const allPool = buildRewardPool(false);
  const targetRarity = rollRarity(G.floor, false);
  let candidates = allPool.filter(r => r.rarity === targetRarity || r.rarity === 'relic');
  if (candidates.length === 0) candidates = allPool;
  const reward = candidates[Math.floor(Math.random() * candidates.length)];

  G.pendingRewards = [reward];
  G.rewardClaimed = false;

  const container = document.getElementById('reward-items');
  container.innerHTML = '';
  const div = document.createElement('div');
  div.className = `reward-item ${reward.cls}`;
  div.innerHTML = `
    <div class="r-icon">${reward.icon}</div>
    <div class="r-type">${reward.typeLabel}</div>
    <div class="r-name">${reward.name}</div>
    <div class="r-desc">${reward.desc}</div>
  `;
  div.onclick = () => claimReward(reward);
  container.appendChild(div);

  document.getElementById('reward-title').textContent = '📦 TREASURE CHEST';
  showScreen('reward-screen');
}

// ============================================================
// GACHA
// ============================================================

function openGacha() {
  if (G.gold < 5) {
    showMapScreen();
    return;
  }
  G.gold -= 5;
  updateTopBar();

  // ガチャ: 普通戦闘と同レア度テーブル、ただしRARE以上は10%でボーナス
  const isRare = Math.random() < 0.1;
  const allPool = buildRewardPool(false);
  let reward;
  if (isRare) {
    // レア時: RARE以上から選ぶ（+1フロア分のテーブル）
    const boostedRarity = rollRarity(Math.min(G.floor + 1, 10), false);
    let candidates = allPool.filter(r =>
      r.rarity === boostedRarity || r.rarity === 'relic' ||
      ['rare','epic','legendary'].includes(r.rarity)
    );
    if (candidates.length === 0) candidates = allPool;
    const relicPool = candidates.filter(r => r.cls === 'relic');
    reward = relicPool.length > 0
      ? relicPool[Math.floor(Math.random() * relicPool.length)]
      : candidates[Math.floor(Math.random() * candidates.length)];
  } else {
    const targetRarity = rollRarity(G.floor, false);
    let candidates = allPool.filter(r => r.rarity === targetRarity || r.rarity === 'relic');
    if (candidates.length === 0) candidates = allPool;
    reward = candidates[Math.floor(Math.random() * candidates.length)];
  }

  G.pendingRewards = [reward];
  G.rewardClaimed = false;

  const container = document.getElementById('reward-items');
  container.innerHTML = '';
  const div = document.createElement('div');
  div.className = `reward-item ${reward.cls}`;
  div.innerHTML = `
    <div class="r-icon">${isRare ? '✨' : ''}${reward.icon}</div>
    <div class="r-type">${isRare ? '★ RARE ★ ' : ''}${reward.typeLabel}</div>
    <div class="r-name">${reward.name}</div>
    <div class="r-desc">${reward.desc}</div>
  `;
  div.onclick = () => claimReward(reward);
  container.appendChild(div);

  document.getElementById('reward-title').textContent = `🎰 GACHA (-5G) ${isRare ? '★ RARE!' : ''}`;
  showScreen('reward-screen');
}

// ============================================================
// INVENTORY
// ============================================================

function toggleInventory() {
  const panel = document.getElementById('inventory-panel');
  panel.classList.toggle('open');
  renderInventory();
}

function renderInventory() {
  const wEl = document.getElementById('inv-weapons');
  if (!wEl) return;
  wEl.innerHTML = '';

  // Group by type
  const byType = {};
  for (let wId of Object.keys(G.weapons)) {
    const w = G.weapons[wId];
    if (!byType[w.type]) byType[w.type] = [];
    byType[w.type].push(wId);
  }

  for (let [type, wIds] of Object.entries(byType)) {
    // type header
    const hdr = document.createElement('div');
    hdr.style.cssText = 'font-family:"Share Tech Mono",monospace;font-size:10px;color:var(--text3);letter-spacing:0.3em;margin:8px 0 4px;padding:2px 6px;border-left:2px solid var(--border2)';
    const equippedCount = wIds.filter(id => G.equippedWeapons.includes(id)).length;
    hdr.textContent = `[${type.toUpperCase()}] ${wIds.length > 1 ? '⚠ 同type: 戦闘中1本のみ使用' : ''}`;
    wEl.appendChild(hdr);

    for (let wId of wIds) {
      const w = G.weapons[wId];
      const isEq = G.equippedWeapons.includes(wId);
      const rarity = w.rarity || 'common';
      const rarityColor = RARITY_COLOR[rarity] || 'var(--text2)';
      const div = document.createElement('div');
      div.style.cssText = `background:var(--bg3);border:1px solid ${isEq?'var(--blue)':'var(--border)'};padding:8px 10px;cursor:pointer;margin-bottom:3px;transition:border-color 0.15s`;
      div.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center">
        <span style="font-size:13px;font-weight:700;color:${isEq?'var(--blue2)':'var(--text)'}">${w.icon} ${w.name}</span>
        <span style="font-family:'Share Tech Mono',monospace;font-size:10px;color:${rarityColor}">${RARITY_LABEL[rarity]||''} ${isEq?'★':'○'}</span>
      </div>
      <div style="font-family:'Share Tech Mono',monospace;font-size:10px;color:var(--text3);margin-top:2px">ATK:${w.atkDice.map(d=>`d${d.sides}×${d.n}`).join('+')} DEF:${w.defDice.map(d=>`d${d.sides}×${d.n}`).join('+')}</div>
      <div style="font-size:11px;color:var(--text3);margin-top:2px">${w.desc}</div>
      `;
      div.onclick = () => {
        if (isEq && G.equippedWeapons.length > 1) {
          G.equippedWeapons = G.equippedWeapons.filter(x => x !== wId);
        } else if (!isEq) {
          G.equippedWeapons.push(wId);
        }
        renderInventory();
      };
      wEl.appendChild(div);
    }
  }

  const rEl = document.getElementById('inv-relics');
  if (!rEl) return;
  rEl.innerHTML = G.relics.map(rId => {
    const r = RELICS.find(x => x.id === rId);
    return r ? `<span class="relic-badge" data-relic-id="${r.id}" data-name="${r.name}" data-tip="${r.desc}">${r.icon} ${r.name}</span>` : '';
  }).join('');
}

// ============================================================
// GAME OVER / WIN
// ============================================================

function showGameOver() {
  document.getElementById('gameover-stats').textContent =
    `FLOOR ${G.floor} · KILLS ${G.totalKills} · GOLD ${G.gold}`;
  showScreen('gameover-screen');
}

function showWin() {
  showScreen('win-screen');
}

// ============================================================
// HELP MODAL
// ============================================================

function toggleHelp() {
  const modal = document.getElementById('help-modal');
  modal.classList.toggle('open');
}

function showHelpTab(tab) {
  document.querySelectorAll('.help-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.help-pane').forEach(p => p.classList.remove('active'));
  document.getElementById(`help-${tab}`).classList.add('active');
  document.querySelectorAll('.help-tab').forEach(t => {
    if (t.getAttribute('onclick') === `showHelpTab('${tab}')`) t.classList.add('active');
  });
}

// ============================================================
// RELIC TOOLTIP
// ============================================================

(function initTooltip() {
  const tt = document.getElementById('item-tooltip');

  function showTip(el) {
    const relId = el.dataset.relicId;
    let name = '', type = 'RELIC', desc = '';

    if (relId) {
      const rel = RELICS.find(r => r.id === relId);
      if (rel) { name = rel.name; desc = rel.desc; }
    } else {
      desc = el.dataset.tip || el.title || '';
      name = el.dataset.name || '';
    }

    if (!desc && !name) return;
    document.getElementById('tt-name').textContent = name;
    document.getElementById('tt-type').textContent = type;
    document.getElementById('tt-desc').textContent = desc;
    tt.style.display = 'block';
  }

  function moveTip(e) {
    tt.style.left = Math.min(e.clientX + 14, window.innerWidth - 280) + 'px';
    tt.style.top = Math.min(e.clientY + 14, window.innerHeight - 120) + 'px';
  }

  function hideTip() {
    tt.style.display = 'none';
  }

  document.addEventListener('mouseover', e => {
    const badge = e.target.closest('.relic-badge');
    if (badge) showTip(badge);
  });
  document.addEventListener('mousemove', e => {
    if (tt.style.display === 'block') moveTip(e);
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest && e.target.closest('.relic-badge')) hideTip();
  });
})();

// ============================================================
// INIT
// ============================================================

// Auto-initialize title dice animation
document.addEventListener('DOMContentLoaded', () => {
  // Randomize title dice values
  const dice = document.querySelectorAll('.title-die');
  const sides = [4,6,8,10,12];
  setInterval(() => {
    dice.forEach((d, i) => {
      const s = sides[i];
      d.textContent = `d${s}`;
    });
  }, 3000);
});
