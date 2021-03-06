var App = new Vue({
  el: "#app",
  data: {
    sexTags: [
      { txt: '男', select: false, num: 0 },
      { txt: '女', select: false, num: 0 }
    ],
    occupationTags: [
      { txt: '特种', select: false, num: 0 },
      { txt: '狙击', select: false, num: 0 },
      { txt: '术师', select: false, num: 0 },
      { txt: '先锋', select: false, num: 0 },
      { txt: '近卫', select: false, num: 0 },
      { txt: '重装', select: false, num: 0 },
      { txt: '医疗', select: false, num: 0 },
      { txt: '辅助', select: false, num: 0 }
    ],
    stanceTags: [
      { txt: '远程位', select: false, num: 0 },
      { txt: '近战位', select: false, num: 0 }
    ],
    spTags: [
      { txt: '新手', select: false, num: 0 },
      { txt: '资深干员', select: false, num: 0 },
      { txt: '高级资深干员', select: false, num: 0 }
    ],
    tags: [
      { txt: '召唤', select: false, num: 0 },
      { txt: '控场', select: false, num: 0 },
      { txt: '爆发', select: false, num: 0 },
      { txt: '位移', select: false, num: 0 },
      { txt: '支援', select: false, num: 0 },
      { txt: '输出', select: false, num: 0 },
      { txt: '削弱', select: false, num: 0 },
      { txt: '快速复活', select: false, num: 0 },
      { txt: '群攻', select: false, num: 0 },
      { txt: '生存', select: false, num: 0 },
      { txt: '减速', select: false, num: 0 },
      { txt: '新手', select: false, num: 0 },
      { txt: '费用回复', select: false, num: 0 },
      { txt: '治疗', select: false, num: 0 },
      { txt: '防护', select: false, num: 0 }
    ],
    persons: [
      { sex: '女', occupation: '狙击', stance: '远程位', level: 6, name: '能天使', img: '', tags: ['输出'] },
      { sex: '女', occupation: '术师', stance: '远程位', level: 6, name: '伊芙利特', img: '', tags: ['群攻', '削弱'] },
      { sex: '女', occupation: '先锋', stance: '近战位', level: 6, name: '推进之王', img: '', tags: ['输出', '费用回复'] },
      { sex: '男', occupation: '近卫', stance: '近战位', level: 6, name: '银灰', img: '', tags: ['输出', '支援'] },
      { sex: '女', occupation: '重装', stance: '近战位', level: 6, name: '星熊', img: '', tags: ['输出', '防护'] },
      { sex: '女', occupation: '医疗', stance: '远程位', level: 6, name: '闪灵', img: '', tags: ['治疗', '支援'] },
      { sex: '女', occupation: '重装', stance: '近战位', level: 6, name: '塞雷娅', img: '', tags: ['防护', '支援', '治疗'] },
      { sex: '女', occupation: '医疗', stance: '远程位', level: 6, name: '夜莺', img: '', tags: ['治疗', '支援'] },
      { sex: '女', occupation: '狙击', stance: '远程位', level: 5, name: '蓝毒', img: '', tags: ['输出'] },
      { sex: '女', occupation: '狙击', stance: '远程位', level: 5, name: '陨星', img: '', tags: ['群攻', '削弱'] },
      { sex: '女', occupation: '狙击', stance: '远程位', level: 5, name: '普罗旺斯', img: '', tags: ['输出'] },
      { sex: '女', occupation: '狙击', stance: '远程位', level: 5, name: '白金', img: '', tags: ['输出'] },
      { sex: '女', occupation: '狙击', stance: '远程位', level: 5, name: '守林人', img: '', tags: ['输出', '爆发'] },
      { sex: '女', occupation: '先锋', stance: '近战位', level: 5, name: '凛冬', img: '', tags: ['支援', '费用回复'] },
      { sex: '女', occupation: '先锋', stance: '近战位', level: 5, name: '德克萨斯', img: '', tags: ['控场', '费用回复'] },
      { sex: '女', occupation: '近卫', stance: '近战位', level: 5, name: '因陀罗', img: '', tags: ['输出', '生存'] },
      { sex: '女', occupation: '近卫', stance: '近战位', level: 5, name: '幽灵鲨', img: '', tags: ['群攻', '生存'] },
      { sex: '女', occupation: '重装', stance: '近战位', level: 5, name: '雷蛇', img: '', tags: ['输出', '防护'] },
      { sex: '女', occupation: '重装', stance: '近战位', level: 5, name: '临光', img: '', tags: ['治疗', '防护'] },
      { sex: '女', occupation: '重装', stance: '近战位', level: 5, name: '火神', img: '', tags: ['生存', '防护', '输出'] },
      { sex: '女', occupation: '重装', stance: '近战位', level: 5, name: '可颂', img: '', tags: ['防护', '位移'] },
      { sex: '女', occupation: '医疗', stance: '远程位', level: 5, name: '华法琳', img: '', tags: ['治疗', '支援'] },
      { sex: '女', occupation: '医疗', stance: '远程位', level: 5, name: '赫默', img: '', tags: ['治疗'] },
      { sex: '女', occupation: '医疗', stance: '远程位', level: 5, name: '白面鸮', img: '', tags: ['治疗', '支援'] },
      { sex: '女', occupation: '辅助', stance: '远程位', level: 5, name: '梅尔', img: '', tags: ['召唤', '控场'] },
      { sex: '女', occupation: '辅助', stance: '远程位', level: 5, name: '真理', img: '', tags: ['减速', '输出'] },
      { sex: '女', occupation: '辅助', stance: '远程位', level: 5, name: '初雪', img: '', tags: ['削弱'] },
      { sex: '女', occupation: '特种', stance: '近战位', level: 5, name: '食铁兽', img: '', tags: ['位移', '减速'] },
      { sex: '女', occupation: '特种', stance: '近战位', level: 5, name: '崖心', img: '', tags: ['位移', '输出'] },
      { sex: '女', occupation: '特种', stance: '近战位', level: 5, name: '狮蝎', img: '', tags: ['输出', '生存'] },
      { sex: '女', occupation: '特种', stance: '近战位', level: 5, name: '红', img: '', tags: ['快速复活', '控场'] },
      { sex: '女', occupation: '特种', stance: '近战位', level: 4, name: '阿消', img: '', tags: ['位移'] },
      { sex: '女', occupation: '狙击', stance: '远程位', level: 4, name: '流星', img: '', tags: ['输出', '削弱'] },
      { sex: '女', occupation: '狙击', stance: '远程位', level: 4, name: '杰西卡', img: '', tags: ['输出', '生存'] },
      { sex: '女', occupation: '狙击', stance: '远程位', level: 4, name: '白雪', img: '', tags: ['群攻', '减速'] },
      { sex: '女', occupation: '术师', stance: '远程位', level: 4, name: '远山', img: '', tags: ['群攻'] },
      { sex: '女', occupation: '术师', stance: '远程位', level: 4, name: '夜烟', img: '', tags: ['输出', '削弱'] },
      { sex: '女', occupation: '先锋', stance: '近战位', level: 4, name: '清道夫', img: '', tags: ['输出', '费用回复'] },
      { sex: '女', occupation: '先锋', stance: '近战位', level: 4, name: '红豆', img: '', tags: ['输出', '费用回复'] },
      { sex: '女', occupation: '近卫', stance: '近战位', level: 4, name: '慕斯', img: '', tags: ['输出'] },
      { sex: '女', occupation: '近卫', stance: '近战位', level: 4, name: '霜叶', img: '', tags: ['输出', '减速'] },
      { sex: '女', occupation: '近卫', stance: '近战位', level: 4, name: '缠丸', img: '', tags: ['输出', '生存'] },
      { sex: '女', occupation: '近卫', stance: '近战位', level: 4, name: '杜宾', img: '', tags: ['输出', '支援'] },
      { sex: '女', occupation: '近卫', stance: '近战位', level: 4, name: '艾丝黛尔', img: '', tags: ['群攻', '生存'] },
      { sex: '女', occupation: '重装', stance: '近战位', level: 4, name: '古米', img: '', tags: ['防护', '治疗'] },
      { sex: '男', occupation: '重装', stance: '近战位', level: 4, name: '角峰', img: '', tags: ['防护'] },
      { sex: '女', occupation: '重装', stance: '近战位', level: 4, name: '蛇屠箱', img: '', tags: ['防护'] },
      { sex: '女', occupation: '医疗', stance: '远程位', level: 4, name: '调香师', img: '', tags: ['治疗'] },
      { sex: '女', occupation: '医疗', stance: '远程位', level: 4, name: '末药', img: '', tags: ['治疗'] },
      { sex: '女', occupation: '辅助', stance: '远程位', level: 4, name: '地灵', img: '', tags: ['减速'] },
      { sex: '女', occupation: '特种', stance: '近战位', level: 4, name: '暗索', img: '', tags: ['位移'] },
      { sex: '女', occupation: '特种', stance: '近战位', level: 4, name: '砾', img: '', tags: ['防护', '快速复活'] },
      { sex: '男', occupation: '术师', stance: '远程位', level: 3, name: '史都华德', img: '', tags: ['输出'] },
      { sex: '女', occupation: '术师', stance: '远程位', level: 3, name: '炎熔', img: '', tags: ['群攻'] },
      { sex: '男', occupation: '狙击', stance: '远程位', level: 3, name: '安德切尔', img: '', tags: ['输出'] },
      { sex: '女', occupation: '先锋', stance: '近战位', level: 3, name: '翎羽', img: '', tags: ['输出', '费用回复'] },
      { sex: '女', occupation: '先锋', stance: '近战位', level: 3, name: '香草', img: '', tags: ['费用回复'] },
      { sex: '女', occupation: '先锋', stance: '近战位', level: 3, name: '芬', img: '', tags: ['费用回复'] },
      { sex: '女', occupation: '近卫', stance: '近战位', level: 3, name: '玫兰莎', img: '', tags: ['输出', '生存'] },
      { sex: '女', occupation: '狙击', stance: '远程位', level: 3, name: '克洛丝', img: '', tags: ['输出'] },
      { sex: '女', occupation: '重装', stance: '近战位', level: 3, name: '米格鲁', img: '', tags: ['防护'] },
      { sex: '女', occupation: '医疗', stance: '远程位', level: 3, name: '芙蓉', img: '', tags: ['治疗'] },
      { sex: '男', occupation: '医疗', stance: '远程位', level: 3, name: '安赛尔', img: '', tags: ['治疗'] },
      { sex: '女', occupation: '辅助', stance: '远程位', level: 3, name: '梓兰', img: '', tags: ['减速'] },
      { sex: '男', occupation: '狙击', stance: '远程位', level: 2, name: '巡林者', img: '', tags: [] },
      { sex: '男', occupation: '重装', stance: '近战位', level: 2, name: '黑角', img: '', tags: [] },
      { sex: '男', occupation: '术师', stance: '远程位', level: 2, name: '12F', img: '', tags: [] },
      { sex: '女', occupation: '术师', stance: '远程位', level: 2, name: '杜林', img: '', tags: [] },
      { sex: '女', occupation: '先锋', stance: '近战位', level: 2, name: '夜刀', img: '', tags: [] },
      { sex: '男', occupation: '近卫', stance: '近战位', level: 1, name: 'Castle-3', img: '', tags: ['支援'] },
      { sex: '女', occupation: '医疗', stance: '远程位', level: 1, name: 'Lancet-2', img: '', tags: ['治疗'] },
    ],
    sex: null,
    occupation: null,
    stance: null,
    sp: null,
  },
  methods: {
    selectSex(i) {
      if(this.sex && this.sex != i) this.sex.select = false;
      this.sex = i;
      i.select = !i.select;
    },
    selectOccupation(i) {
      if (this.occupation && this.occupation != i) this.occupation.select = false;
      this.occupation = i;
      i.select = !i.select;
    },
    selectSp(i) {
      if (this.sp && this.sp != i) this.sp.select = false;
      this.sp = i;
      i.select = !i.select;
    },
    selectStance(i) {
      if (this.stance && this.stance != i) this.stance.select = false;
      this.stance = i;
      i.select = !i.select;
    }
  },
  computed: {
    Persons() {
      var lv = 0, lvMap = { '新手': 2, '资深干员': 5, '高级资深干员': 6};
      this.spTags.forEach(i => {
        if(i.select) lv = lvMap[i.txt];
      });
      return this.persons.filter(i => {
        if(lv && i.level != lv) return false;
        if(!lv && i.level === 6) return false;
        if (this.stance && this.stance.select && i.stance != this.stance.txt) return false;
        if (this.sex && this.sex.select && i.sex != this.sex.txt) return false;
        return this.tags.every(t => (!t.select || i.tags.some(it => it == t.txt))) && this.occupationTags.every(o => (!o.select || i.occupation == o.txt));
      });
    }
  }
});