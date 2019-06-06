'use strict';

var App = new Vue({
  el: "#app",
  data: {
    tags: [{ txt: '男', select: false }, { txt: '女', select: false }, { txt: '狙击', select: false }, { txt: '术师', select: false }, { txt: '先锋', select: false }, { txt: '近卫', select: false }, { txt: '重装', select: false }, { txt: '医疗', select: false }, { txt: '辅助', select: false }, { txt: '特种', select: false }, { txt: '远程位', select: false }, { txt: '近战位', select: false }, { txt: '输出', select: false }, { txt: '群攻', select: false }, { txt: '削弱', select: false }, { txt: '爆发', select: false }, { txt: '生存', select: false }, { txt: '减速', select: false }, { txt: '新手', select: false }, { txt: '费用回复', select: false }, { txt: '支援', select: false }, { txt: '控场', select: false }, { txt: '快速复活', select: false }, { txt: '位移', select: false }, { txt: '治疗', select: false }, { txt: '防护', select: false }, { txt: '召唤', select: false }],
    persons: [{ name: '能天使', img: '', level: '6', tags: ['女', '狙击', '远程位', '输出'] }, { name: '蓝毒', img: '', level: '5', tags: ['女', '狙击', '远程位', '输出'] }, { name: '陨星', img: '', level: '5', tags: ['女', '狙击', '远程位', '群攻', '削弱'] }, { name: '普罗旺斯', img: '', level: '5', tags: ['女', '狙击', '远程位', '输出'] }, { name: '白金', img: '', level: '5', tags: ['女', '狙击', '远程位', '输出'] }, { name: '守林人', img: '', level: '5', tags: ['女', '狙击', '远程位', '输出', '爆发'] }, { name: '流星', img: '', level: '4', tags: ['女', '狙击', '远程位', '输出', '削弱'] }, { name: '杰西卡', img: '', level: '4', tags: ['女', '狙击', '远程位', '输出', '生存'] }, { name: '白雪', img: '', level: '4', tags: ['女', '狙击', '远程位', '群攻', '减速'] }, { name: '克洛丝', img: '', level: '3', tags: ['女', '狙击', '远程位', '输出'] }, { name: '安德切尔', img: '', level: '3', tags: ['男', '狙击', '远程位', '输出'] }, { name: '巡林者', img: '', level: '2', tags: ['男', '狙击', '远程位', '新手'] }, { name: '伊芙利特', img: '', level: '6', tags: ['女', '术师', '远程位', '群攻', '削弱'] }, { name: '远山', img: '', level: '4', tags: ['女', '术师', '远程位', '群攻'] }, { name: '夜烟', img: '', level: '4', tags: ['女', '术师', '远程位', '输出', '削弱'] }, { name: '史都华德', img: '', level: '3', tags: ['男', '术师', '远程位', '输出'] }, { name: '炎熔', img: '', level: '3', tags: ['女', '术师', '远程位', '群攻'] }, { name: '12F', img: '', level: '2', tags: ['男', '术师', '远程位', '新手'] }, { name: '杜林', img: '', level: '2', tags: ['女', '术师', '远程位', '新手'] }, { name: '推进之王', img: '', level: '6', tags: ['女', '先锋', '近战位', '输出', '费用回复'] }, { name: '凛冬', img: '', level: '5', tags: ['女', '先锋', '近战位', '支援', '费用回复'] }, { name: '德克萨斯', img: '', level: '5', tags: ['女', '先锋', '近战位', '控场', '费用回复'] }, { name: '清道夫', img: '', level: '4', tags: ['女', '先锋', '近战位', '输出', '费用回复'] }, { name: '红豆', img: '', level: '4', tags: ['女', '先锋', '近战位', '输出', '费用回复'] }, { name: '香草', img: '', level: '3', tags: ['女', '先锋', '近战位', '费用回复'] }, { name: '翎羽', img: '', level: '3', tags: ['女', '先锋', '近战位', '输出', '费用回复'] }, { name: '芬', img: '', level: '3', tags: ['男女', '先锋', '近战位', '费用回复'] }, { name: '夜刀', img: '', level: '3', tags: ['男女', '先锋', '近战位', '新手'] }, { name: '银灰', img: '', level: '6', tags: ['男', '近卫', '近战位', '输出', '支援'] }, { name: '因陀罗', img: '', level: '5', tags: ['女', '近卫', '近战位', '输出', '生存'] }, { name: '幽灵鲨', img: '', level: '5', tags: ['女', '近卫', '近战位', '群攻', '生存'] }, { name: '慕斯', img: '', level: '4', tags: ['女', '近卫', '近战位', '输出'] }, { name: '霜叶', img: '', level: '4', tags: ['女', '近卫', '近战位', '输出', '减速'] }, { name: '缠丸', img: '', level: '4', tags: ['女', '近卫', '近战位', '输出', '生存'] }, { name: '杜宾', img: '', level: '4', tags: ['女', '近卫', '近战位', '输出', '支援'] }, { name: '艾丝黛尔', img: '', level: '4', tags: ['女', '近卫', '近战位', '群攻', '生存'] }, { name: '玫兰莎', img: '', level: '3', tags: ['女', '近卫', '近战位', '输出', '生存'] }, { name: 'Castle-3', img: '', level: '1', tags: ['男', '近卫', '近战位', '支援'] }, { name: '星熊', img: '', level: '6', tags: ['女', '重装', '近战位', '输出', '防护'] }, { name: '塞雷娅', img: '', level: '6', tags: ['女', '重装', '近战位', '防护', '支援', '治疗'] }, { name: '雷蛇', img: '', level: '5', tags: ['女', '重装', '近战位', '输出', '防护'] }, { name: '临光', img: '', level: '5', tags: ['女', '重装', '近战位', '治疗', '防护'] }, { name: '火神', img: '', level: '5', tags: ['女', '重装', '近战位', '生存', '防护', '输出'] }, { name: '可颂', img: '', level: '5', tags: ['女', '重装', '近战位', '防护', '位移'] }, { name: '古米', img: '', level: '4', tags: ['女', '重装', '近战位', '防护', '治疗'] }, { name: '角峰', img: '', level: '4', tags: ['男', '重装', '近战位', '防护'] }, { name: '蛇屠箱', img: '', level: '4', tags: ['女', '重装', '近战位', '防护'] }, { name: '米格鲁', img: '', level: '3', tags: ['女', '重装', '近战位', '防护'] }, { name: '黑角', img: '', level: '2', tags: ['男', '重装', '近战位', '新手'] }, { name: '闪灵', img: '', level: '6', tags: ['女', '医疗', '远程位', '治疗', '支援'] }, { name: '夜莺', img: '', level: '6', tags: ['女', '医疗', '远程位', '治疗', '支援'] }, { name: '华法琳', img: '', level: '5', tags: ['女', '医疗', '远程位', '治疗', '支援'] }, { name: '赫默', img: '', level: '5', tags: ['女', '医疗', '远程位', '治疗'] }, { name: '白面鸮', img: '', level: '5', tags: ['女', '医疗', '远程位', '治疗', '支援'] }, { name: '调香师', img: '', level: '4', tags: ['女', '医疗', '远程位', '治疗'] }, { name: '末药', img: '', level: '4', tags: ['女', '医疗', '远程位', '治疗'] }, { name: '芙蓉', img: '', level: '3', tags: ['女', '医疗', '远程位', '治疗'] }, { name: '安赛尔', img: '', level: '3', tags: ['男', '医疗', '远程位', '治疗'] }, { name: 'Lancet-2', img: '', level: '1', tags: ['女', '医疗', '远程位', '治疗'] }, { name: '梅尔', img: '', level: '5', tags: ['女', '辅助', '远程位', '召唤', '控场'] }, { name: '真理', img: '', level: '5', tags: ['女', '辅助', '远程位', '减速', '输出'] }, { name: '初雪', img: '', level: '5', tags: ['女', '辅助', '远程位', '削弱'] }, { name: '地灵', img: '', level: '4', tags: ['女', '辅助', '远程位', '减速'] }, { name: '梓兰', img: '', level: '3', tags: ['女', '辅助', '远程位', '减速'] }, { name: '食铁兽', img: '', level: '5', tags: ['女', '特种', '近战', '位移', '减速'] }, { name: '崖心', img: '', level: '5', tags: ['女', '特种', '近战', '位移', '输出'] }, { name: '狮蝎', img: '', level: '5', tags: ['女', '特种', '近战', '输出', '生存'] }, { name: '红', img: '', level: '5', tags: ['女', '特种', '近战', '快速复活', '控场'] }, { name: '暗索', img: '', level: '4', tags: ['女', '特种', '近战', '位移'] }, { name: '阿消', img: '', level: '5', tags: ['4', '特种', '近战', '位移'] }, { name: '砾', img: '', level: '4', tags: ['4', '特种', '近战', '防护', '快速复活'] }]
  },
  computed: {
    Persons: function Persons() {
      var _this = this;

      return this.persons.filter(function (i) {
        return _this.tags.every(function (t) {
          return !t.select || i.tags.some(function (it) {
            return it == t.txt;
          });
        });
      });
    }
  }
});