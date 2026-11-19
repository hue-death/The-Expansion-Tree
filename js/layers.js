'use strict';

var t = t === t;
var sep = {
  "margin-top": "50px"
}
var plBuyable = {
  background: "linear-gradient(#ffffff, #888888, #000000)",
  "border-color": "#888888"
}
var dMUpg = {
  background: "linear-gradient(#000000, #886600, #000000)",
  "border-color": "#886600"
}
function oM(val) {
  return new OmegaNum(val);
}
function r1r() {
  var r = Array.from({
    length: 5
  }, (_, i) => i + 11);
  var k = player['A5$'].upgrades.filter(item => {
    return !r.includes(item);
  });
  if (hU('A5$', 32)) {
    k = player['A5$'].upgrades
  }
  player['A5$'].upgrades = k;
  player.points = new OmegaNum(10);
  player['A5$'].points = new OmegaNum(0);
}
function r2r() {
  player.points = oM(10);
  player['A5$'].points = oM(0);
  player['A5$'][s[2]][11] = oM(0);
  var rw = Array.from({
    length: 5
  }, (_, i) => i + 11);
  var cl1 = Array.from({
    length: 4
  }, (_, i) => 10 * (i + 1) + 1);
  if (hU('A5$', 51)) {
    cl1 = ['11']
  }
  var cl2 = Array.from({
    length: 4
  }, (_, i) => 10 * (i + 1) + 2);
  var r = [rw, cl1].flat();
  if (hM('A5$', 0)) {
    r = [cl1].flat()
  }
  var k = player['A5$'].upgrades.filter(item => {
    return !r.includes(item);
  });
  player['A5$'].upgrades = k;
}
function r2rf() {//thi will never change
  player.points = oM(10);
  player['A5$'].points = oM(0);
  player['A5$'][s[2]][11] = oM(0);
  player['A5$'][s[2]][1001] = oM(0)
  player['A5$'][s[2]][1002] = oM(0)
  player['A5$'].plP = oM(0)
  var rw = Array.from({
    length: 5
  }, (_, i) => i + 11);
  var cl1 = Array.from({
    length: 4
  }, (_, i) => 10 * (i + 1) + 1);
  var r = [rw, cl1].flat();
  var k = player['A5$'].upgrades.filter(item => {
    return !r.includes(item);
  });
  player['A5$'].upgrades = k;
}
function me(l, id, efAmt = undefined) {
  if (efAmt === undefined) {
    return milestoneEffect(l, id)
  } else return milestoneEffect2(l, id)
}
function hM(l, id) {
  return hasMilestone(l, id)
}
function cT(a) {
  var con = ['main-display', 'prestige-button', 'resource-display', 'blank'];
  return con[a];
}
function mT() {
  return "microtabs";
}
function tF() {
  return "tabFormat";
}
function uE(l, d) {
  return upgradeEffect(l, d);
}
function uE2(l, d) {
  return upgradeEffect2(l, d)
}
function hU(l, d) {
  return hasUpgrade(l, d);
}
;
var s = ['upgrades', 'milestones', 'buyables', 'challenges', 'clickables'];
var Du = ['title', 'description', 'cost', 'effect', 'effectDisplay', 'unlocked'];
addLayer('A5$', {
  name: EsN(0),
  symbol: EsN([2]),
  position: 0,
  row: 0,
  color: "#00ddff",
  startData() {
    function sd() {
      var dS = ['p', 't', 's'];
      var s = ['n', 'i'];
      var t = ['o', s];
      var BjMa3s = ['m', 'c', 'l', 'd', 'e']
      return {
        unlocked: true,
        [dS[0] + t[0] + s[1] + s[0] + dS[1] + dS[2]]: new OmegaNum(0),
        [S$e([6])[8][14] + S$e([6])[8][0]]: oM(0),
        [dS[0] + "l" + dS[0].toUpperCase()]: oM(0),
        [BjMa3s[3]+BjMa3s[0].toUpperCase()]: oM(0),
        [BjMa3s[3]+t[1][1]+BjMa3s[0].toUpperCase()]: oM(0)
      };
    }
    ;
    return sd();
  },
  resource: EsN([2]) + EsN([0]) + EsN([5])[6][3] + EsN([5])[6][20] + "s",
  resourceSingular: EsN([2]) + EsN([0]) + EsN([5])[6][3] + EsN([5])[6][20],
  baseResource: modInfo.pointsName,
  baseAmount() {
    var p = ['t', 'p', 'i', 'o'];
    var s1 = ['n', 's'];
    return player[p[1] + p[3] + p[2] + s1[0] + p[0] + s1[1]];
  },
  type: lT(0),
  exponent: 0.25,
  requires: new OmegaNum(10),
  gainMult() {
    var e = new OmegaNum(1);
    if (hU('A5$', 13)) e = e.mul(uE('A5$', 13));
    if (hU('A5$', 15)) e = e.mul(uE('A5$', 15));
    if (hU('A5$', 21)) e = e.mul(5);
    e = e.mul(tmp['A5$'][s[2]][11].effect);
    e = e.mul(tmp['A5$'].plEf2)
    if (hM('A5$', 0)) {
      e = e.mul(tmp['A5$'][s[2]][22].effect.pow(tmp['A5$'].efficiency))
    }
    if (hU('A5$', 1005)) {
      e = e.mul(uE('A5$', 1005))
    }
    return e;
  },
  gainExp() {
    var e = new OmegaNum(1);
    return e;
  },
  dMm() {
    var m = oM(1)
    if (hU('A5$', 1002)) {
      m = m.mul(uE('A5$', 1002))
    }
    if (hU('A5$', 1004)) {
      m = m.mul(uE('A5$', 1004))
    }
    return m
  },
  dME() {
    var e = oM(1)
    return e
  },
  dMB() {
    var b = new OmegaNum(32)
    return b
  },
  dMG() {
    var m=tmp['A5$'].dMm
    var e=tmp['A5$'].dME
    var b=tmp['A5$'].dMB
    var g = OmegaNum.pow(b, player["A5$"].dM).mul(m).pow(e).sub(1)
    return g
  },
  dMEf1() {
    var b=player['A5$'].diM.add(1).pow(0.4)
    return b
  },
  dMEf2() {
    var b=player['A5$'].diM.add(1).pow(0.5)
    if (hU('A5$', 1005)) {
      b=b.pow(8.5)
    }
    return b
  },
  dMEf3() {
    var b=player['A5$'].diM.add(10).log10().pow(0.2)
    return b
  },
  plEf() {
    var b = player['A5$'].plP.add(10).log10().pow(0.1)
    if (b.gte(1.1)) {
      b = b.pow(1 / 3).mul(oM(1.1).pow(2 / 3))
    }
    return b
  },
  plEf2() {
    var b = player['A5$'].plP.add(1).pow(1.5)
    return b
  },
  plEf3() {
    var b = tmp['A5$'].plEf2.pow(0.2)
    return b
  },
  efficiency() {
    var eff = oM(0.1)
    return eff.min(1)
  },
  [tF()]: [cT(0), cT(1), cT(2), cT(3), [mT(), "main"], cT(3), cT(3)],
  [mT()]: {
    main: {
      "Main": {
        content: [['upgrades', [1, 2, 3, 4, 5]]]
      },
      "The Depth tree": {
        [Du[5]]() {
          return hU('A5$', 21) || hU('A5$', 22);
        },
        content: [cT(3), ["buyables", [...Array.from({ length: 2 }, (_, i) => i + 1)]]]
      },
      "Planck": {
        [Du[5]]() {
          return hU('A5$', 51)
        },
        content: [
          ['microtabs', "plTabs"]
        ]
      },
      "Milestones": {
        [Du[5]]() {
          return hU('A5$', 51)
        },
        content: ['milestones']
      }
    },
    plTabs: {
      "Main": {
        buttonStyle() {
          return {
            "border-color": getWhiteColors()
          }
        },
        content: [['raw-html', () => {
          var a = player['A5$'].plP
          var b = tmp['A5$'].plEf
          var d = tmp['A5$'].plEf2
          var e = tmp['A5$'].plEf3
          var c = "You Have " + colorText('h2', getWhiteColors(), format(a)) + " Planck Power. Which Raises points by ^" + colorText('h2', getWhiteColors(), format(b)) + " And Multiplies Instances by " + colorText('h2', getWhiteColors(), format(d)) + "x"+(hU('A5$', 1003)?", And Multiplies Energy Before Softcap by "+colorText("h2",getWhiteColors(),format(e))+"x.":"")+" (Hold shift to see the Effect formula)"
          var d = shiftDown ? "<br>Effect 1: log<sup>2.000</sup>(x)<sup>0.100</sup>, Effect 2: x<sup>1.5</sup>" : ""
          return c + d
        }],
          'blank',
        ['buyables', [100, 101, 102]]
        ]
      },
      "Dark Matter": {
        [Du[5]]() {
          return hM('A5$', 2)
        },
        buttonStyle() {
          return {
            "border-color": '#ffaa00'
          }
        },
        content: [
          ['raw-html', () => {
            var a = player["A5$"].dM
            var b = tmp['A5$'].dMG // not dmg bro
            var e = player['A5$'].diM // not dims bro
            var f = tmp['A5$'].dMEf1
            var g = tmp['A5$'].dMEf2
            var h = tmp['A5$'].dMEf3
            var c = "You have <h2 class='dM'>"+formatWhole(a)+"</h2> Dark Matter. which produces <h2 class='dM'>"+format(b)+"</h2> Dilated Matter."
            var d = "<br><br>You have <h2 class='dM'>"+format(e)+"</h2> Dilated Matter, which Multiplies Energy before Softcap by <h2 class='dM'>"+format(f)+"</h2>x, Multiplies Points After Exponent by <h2 class='dM'>"+format(g)+"</h2>x, And Multiplies Planck Power Gain Base Before Exponent by <h2 class='dM'>"+format(h)+"</h2>x"
            return c+d
          }],
          ['blank', 2],
          ['clickable', 11],
          ['blank', 3],
          ['upgrades', [100]]
        ]
      }
    }
  },
  plM() {
    var m = new OmegaNum(1)
    if (hM('A5$', 0)) {
      m = m.mul(me('A5$', 0))
    }
    if (hU('A5$', 52)) {
      m = m.mul(uE('A5$', 52))
    }
    if (hM('A5$', 2)) {
      m = m.mul(2.5)
    }
    m = m.mul(tmp['A5$'].dMEf3)
    return m
  },
  plMbE() {
    var m = new OmegaNum(1)
    return m
  },
  plE() {
    var e = new OmegaNum(1)
    e = e.add(tmp['A5$'][s[2]][1002].effect)
    if (hM('A5$', 1)) {
      e = e.add(2)
    }
    if (hM('A5$', 2)) {
      e = e.add(1)
    }
    if (hU('A5$', 1002)) {
      e = e.add(uE2('A5$', 1002))
    }
    if (hU('A5$', 1003)) {
      e = e.add(2)
    }
    return e
  },
  plG() {
    var b = tmp['A5$'][s[2]][1001].effect
    var m = tmp['A5$'].plM
    var e = tmp['A5$'].plE
    var _m = tmp['A5$'].plMbE
    var g = b.mul(m).pow(e).mul(_m)
    return g
  },
  update(d) {
    if (hU('A5$', 31)) {
      generatePoints('A5$', d / 10);
    }
    ;
    if (hU('A5$', 41)) {
      if (hU('A5$', 51)) {
        player['A5$'][s[2]][11] = player['A5$'][s[2]][11].add(tmp['A5$'][s[2]][11].pG.mul(d / 10));
      }
      else player['A5$'][s[2]][11] = player['A5$'][s[2]][11].add(tmp['A5$'][s[2]][11].pG.mul(d / 20));
    }
    player['A5$'].plP = player['A5$'].plP.add(tmp['A5$'].plG.mul(d))
    player['A5$'].diM = player['A5$'].diM.add(tmp['A5$'].dMG.mul(d))
  },
  hotkeys: [{
    key: "i",
    description: "I: Reset For Instances.",
    onPress() {
      if (canReset(this.layer)) doReset(this.layer);
    }
  }],
  layerShown() {
    return t;
  },
  [s[0]]: {
    11: {
      [Du[0]]: 'The Intital Start.',
      [Du[1]]: 'Gain 1 Point per second.',
      [Du[2]]: new OmegaNum(1),
      [Du[3]]() {
        return getPointGen();
      },
      [Du[4]]() {
        var e = uE('A5$', 11);
        var d = format(e) + "/s";
        return d;
      }
    },
    12: {
      [Du[0]]: 'Starting boost',
      [Du[1]]: 'Multiply Points based on Instances At a reduced rate.',
      [Du[2]]: new OmegaNum(3),
      [Du[3]]() {
        var b = player['A5$'].points.add(1).pow(0.25);
        if (hU('A5$', 15)) {
          b = player['A5$'].points.add(1).pow(0.3);
        }
        ;
        if (hU('A5$', 42)) {
          b = player['A5$'].points.add(1).pow(0.333);
        }
        ;
        if (uE('A5$', this.id).gte(1e11)) {
          b = b.pow(0.5).mul(oM(1e11).pow(0.5));
        }
        ;
        return b;
      },
      [Du[4]]() {
        var e = uE('A5$', 12);
        var d = format(e) + 'x';
        return d;
      },
      [Du[5]]() {
        return hU('A5$', 11);
      }
    },
    13: {
      [Du[0]]: 'Weakening Requirements',
      [Du[1]]: 'Multiply Instances By itself.',
      [Du[2]]: new OmegaNum(25),
      [Du[3]]() {
        var b = player['A5$'].points.add(1).pow(0.2);
        if (hU('A5$', 42)) {
          b = player['A5$'].points.add(1).pow(0.25);
        }
        ;
        if (uE('A5$', this.id).gte(1e8)) {
          b = b.pow(0.25).mul(oM(1e8).pow(0.75));
        }
        if (hU('A5$', 1001)) {
          b = b.pow(uE('A5$', 1001))
        }
        ;
        return b;
      },
      [Du[4]]() {
        var e = uE('A5$', 13);
        var d = format(e) + "x";
        return d;
      },
      [Du[5]]() {
        return hU('A5$', 12);
      }
    },
    14: {
      [Du[0]]: 'Self Dulipcator',
      [Du[1]]: 'Multiply Points Based On itself, (Stronger based on prev Effs.)',
      [Du[2]]: new OmegaNum(50),
      [Du[3]]() {
        var b = player.points.add(1).pow(0.15).mul(uE('A5$', 12).sub(0.5)).mul(uE('A5$', 13).sub(0.5)).max(1);
        if (hU('A5$', 15)) b = player.points.add(1).pow(0.2).mul(uE('A5$', 13)).mul(uE('A5$', 12));
        if (uE('A5$', 14).gte(1e18)) {
          b = b.pow(0.5).mul(oM(1e18).pow(0.5));
        }
        ;
        return b;
      },
      [Du[4]]() {
        var e = uE('A5$', 14);
        var d = format(e) + "x";
        return d;
      },
      [Du[5]]() {
        return hU('A5$', 13);
      }
    },
    15: {
      [Du[0]]: 'Instances intrusion',
      [Du[1]]: "Multiply Instances based on points. Strengthen the previous upgrade and the second upgrade.",
      [Du[2]]: new OmegaNum(150),
      [Du[3]]() {
        var b = player.points.add(1).pow(0.1);
        return b;
      },
      [Du[4]]() {
        var e = uE('A5$', 15);
        var d = format(e) + "x";
        return d;
      },
      [Du[5]]() {
        return hU('A5$', 14);
      }
    },
    21: {
      [Du[0]]: 'The Depth tree.',
      [Du[1]]: 'Multiply Instances by 5, Unlocks \"The Depth Tree\" tab.',
      [Du[2]]: new OmegaNum(1e3),
      [Du[5]]() {
        return hU('A5$', 15) || hU('A5$', 21);
      }
    },
    22: {
      [Du[0]]: 'Tree Depths',
      [Du[1]]: 'Unlock 3 more layers in "The Depth Tree"',
      [Du[2]]: new OmegaNum(1e24),
      [Du[5]]() {
        return hU('A5$', 21) || hU('A5$', 22);
      }
    },
    31: {
      [Du[0]]: 'Instance Generator',
      [Du[1]]: 'Gain 10% of Instances Per second.',
      [Du[2]]: new OmegaNum(1e12),
      [Du[5]]() {
        return hU('A5$', 21);
      }
    },
    32: {
      [Du[0]]: 'The Absloute QOL',
      [Du[1]]: '<span style="font-size: 7px">Keep All Upgrades On Energy resets, Compressors\' effect base is added by +0.025 for each OoM of Instances you have, also 5x Energy.</span>',
      [Du[2]]: oM(1e55),
      [Du[3]]() {
        var b = player['A5$'].points.add(1).log10().div(40).max(0);
        return b;
      },
      [Du[4]]() {
        var e = uE('A5$', 32);
        var d = "+" + format(e);
        return d;
      },
      [Du[5]]() {
        return hU('A5$', 22);
      }
    },
    23: {
      [Du[0]]: "The Challenging Power",
      [Du[1]]: "<span style='font-size: 8px'>Reduce the scaling For Compressors, Unlock a Challenge after `not defined` amt of smth.</span>",
      [Du[2]]: oM(`1e450`),
      currencyLocation() {
        return player['A5$'][s[2]];
      },
      currencyDisplayName: "Energy",
      currencyInternalName: 11,
      [Du[5]]() {
        return hU('A5$', 22)
      }
    },
    41: {
      [Du[0]]: 'Energy Starter',
      [Du[1]]: 'Gain 5% of Energy per second.',
      [Du[2]]: new OmegaNum(2.5e4),
      currencyDisplayName: "Energy",
      currencyInternalName: 11,
      currencyLocation() {
        return player['A5$'].buyables;
      },
      [Du[5]]() {
        return hU('A5$', 31);
      }
    },
    42: {
      [Du[0]]: 'Empowered Instances',
      [Du[1]]: "Req: 1 Compressors.<br><h4 style='font-size: 8px'>Multiply Energy Based on Instances, Strengthen The Second And the Third Upgrade.</h4>",
      [Du[2]]: oM(5e8),
      currencyDisplayName: "Energy",
      currencyLocation() {
        return player['A5$'].buyables;
      },
      currencyInternalName: 11,
      canAfford() {
        return player['A5$'][s[2]][11].gte(this.cost) && player['A5$'][s[2]][21].gte(1);
      },
      [Du[3]]() {
        var b = player['A5$'].points.add(1).pow(0.0825).div(100).add(1);
        return b;
      },
      [Du[4]]() {
        var e = uE('A5$', 42);
        var d = format(e) + "x";
        return d;
      },
      [Du[5]]() {
        return hU('A5$', 22);
      }
    },
    51: {
      [Du[0]]: "Planck Generators",
      [Du[1]]: "<span style='font-size: 8px;'>Start with the Energy and The Instances Gen on Row 2 Resets. Energy Gen is 2 times faster, Raise Genesis Effect by 1.1, Unlock a Milestone And a New Tab (not Milestones).</span>",
      [Du[2]]: oM(1e100),
      [Du[5]]() { return hU('A5$', 32) },
      tooltip() { return "This Upgrade Never Resets on Row 2 Resets." }
    },
    52: {
      [Du[0]]: "Instanced Planck",
      [Du[1]]: "Multiply Planck Power Base Gain Based On Instances, Unlock Another Milestone.",
      [Du[2]]: oM(1e200),
      [Du[3]]() {
        var b = player['A5$'].points.add(1).pow(0.0075).div(8).add(1)
        if (b.gte(200)) {
          b = b.pow(0.2).mul(oM(200).pow(0.8))
        }
        return b
      },
      [Du[4]]() {
        var e = uE('A5$', 52)
        var d = format(e) + "x"
        return d
      },
      [Du[5]]() {
        return hM('A5$', 0)
      }
    },
    1001: {
      [Du[0]]: "Exponential Dilation",
      [Du[1]]: "Raise \"Weaking Requirements\" based on Dilated Matter",
      [Du[2]]: oM(6.25e3),
      [Du[3]](){
        var b=player['A5$'].diM.add(10).log10().pow(0.09)
        if (b.gte(1.3)){/*nothing until smth.*/}
        return b
      },
      [Du[4]](){
        var e=uE('A5$', 1001)
        var d="^"+format(e)
        return d
      },
      currencyDisplayName: "Dilated Matter",
      currencyInternalName: "diM",
      currencyLayer: "A5$",
      style() {
        if (!hU('A5$', this.id)) { 
        return player['A5$'].diM.gte(this.cost)?{...dMUpg}:""
        } else return ""
      }
    },
    1002: {
      [Du[0]]: "Dilated Energy",
      [Du[1]]: "Multiply Dilated Matter based on Energy, Add to Planck Power Gain Exponent based on Dilated Matter.",
      [Du[2]]: oM(8e3),
      [Du[3]](){
        var d=player['A5$'][s[2]][11].add(10).log10().div(10).add(0.9).max(1).pow(0.75)
        return d
      },
      [Du[3]+"2"](){
        var b=player['A5$'].diM.add(1).log10().pow(0.5).div(4)
        return b
      },
      [Du[4]](){
        var e=uE('A5$', 1002)
        var e2=uE2('A5$', 1002)
        var d=format(e)+"x, +"+format(e2)
        return d
      },
      currencyDisplayName: "Dilated Matter",
      currencyInternalName: "diM",
      currencyLayer: "A5$",
      [Du[5]]() {
        return hU('A5$', 1001)
      },
      style() {
        if (!hU('A5$', this.id)) { 
        return player['A5$'].diM.gte(this.cost)?{...dMUpg}:""
        } else return ""
      }
    },
    1003: {
      [Du[0]]: "Planck Energy",
      [Du[1]]: "Add 2 to the Exponent of base Planck Power Gain, Multiply Energy gain based on the Second Effect of Planck Power<sup>0.2</sup>",
      [Du[2]]: oM(25e3),
      currencyDisplayName: "Dilated Matter",
      currencyInternalName: "diM",
      currencyLayer: "A5$",
      [Du[5]]() {
        return hU('A5$', 1002)
      },
      style() {
        if (!hU('A5$', this.id)) { 
        return player['A5$'].diM.gte(this.cost)?{...dMUpg}:""
        } else return ""
      }
    },
    1004: {
      [Du[0]]: "Compressed Compressors",
      [Du[1]]: "Multiply Compressors' Base by 1.1x, Multiply Dilated Matter Based on Compressors.",
      [Du[2]]: oM(2e6),
      currencyDisplayName: "Dilated Matter",
      currencyInternalName: "diM",
      currencyLayer: "A5$",
      [Du[3]](){
        var eb = oM(1.1)
        var b=OmegaNum.pow(eb,player['A5$'][s[2]][21].pow(0.8))
        return b
      },
      [Du[4]](){
        var e=uE('A5$', 1004)
        var d=format(e)+"x"
        return d
      },
      [Du[5]]() {
        return hU('A5$', 1003)
      },
      style() {
        if (!hU('A5$', this.id)) { 
        return player['A5$'].diM.gte(this.cost)?{...dMUpg}:""
        } else return ""
      }
    },
    1005: {
      [Du[0]]: "Dilated Instances",
      [Du[1]]: "<span style='font-size: 8px'>Multiply Instances Based on Dilated Matter, And Improve Dilated Matter Effect 2, Unlocks the <h4 style='font-weight: bold'>THIRD ROW 1 NODE.</h4></span>",
      [Du[2]]: oM(10e6),
      currencyDisplayName: "Dilated Matter",
      currencyInternalName: "diM",
      currencyLayer: "A5$",
      [Du[3]](){
        var b = player['A5$'].diM.pow(5)
        return b
      },
      [Du[4]](){
        var e=uE('A5$', 1005)
        var d=format(e)+"x"
        return d
      },
      [Du[5]]() {
        return hU('A5$', 1004)
      },
      style() {
        if (!hU('A5$', this.id)) { 
        return player['A5$'].diM.gte(this.cost)?{...dMUpg}:""
        } else return ""
      }
    }
  },
  [s[2]]: {
    11: {
      title() {
        return formatWhole(player['A5$'][s[2]][this.id]) + "<h6> Energy</h6>";
      },
      display() {
        var g = tmp['A5$'][s[2]][this.id].pG;
        var e = tmp['A5$'][s[2]][this.id].effect;
        var n = tmp['A5$'][s[2]][this.id].nG;
        var d = "Which boosts Points and Instances by " + format(e) + "x<br>" + "Reset your previous progress in Instances for <h3>" + formatWhole(g) + "</h3> Energy" + (g.gte(1e170) ? " (softcapped)" : "") + "<br>" + (tmp['A5$'][s[2]][this.id].pG.lte(1e3) ? " Next At " + format(n) + ' Instances.' : "");
        return d;
      },
      [Du[2]]() {
        var bC = tmp[this.layer][s[2]][this.id].nG;
        return bC;
      },
      [Du[3]]() {
        var e = player['A5$'][s[2]][this.id].add(1).pow(0.9);
        if (e.gte(1e30)) {
          e = e.pow(0.5).mul(oM(1e30).pow(0.5))
        }
        return e;
      },
      pE() {
        var e = new OmegaNum(1);
        return e;
      },
      pM() {
        var m = new OmegaNum(1);
        m = m.mul(tmp['A5$'][s[2]][21].effect);
        if (hU('A5$', 32)) { m = m.mul(5) }
        if (hU('A5$', 42)) m = m.mul(uE('A5$', 42));
        m = m.mul(tmp['A5$'].dMEf1)
        if (hU('A5$', 1003)) {
          m = m.mul(tmp['A5$'].plEf3)
        }
        return m;
      },
      pG() {
        let e = tmp['A5$'][s[2]][this.id].pE;
        let m = tmp['A5$'][s[2]][this.id].pM;
        let r = new OmegaNum(2.5e4);
        let g = player['A5$'].points.div(r).pow(1 / 3).mul(m).root(e).floor();
        if (g.gte(1e170)) {
          g = g.pow(1 / 3).mul(oM(1e170).pow(2 / 3))
        }
        return g;
      },
      nG() {
        let m = tmp['A5$'][s[2]][this.id].pM;
        let nx = tmp[this.layer][s[2]][this.id].pG.floor().add(1).div(m).pow(3).mul(2.5e4).max(1);
        return nx;
      },
      canAfford() {
        var r = oM(2.5e4);
        var m = tmp['A5$'][s[2]][this.id].pM;
        return player['A5$'].points.gte(oM(1).div(m).pow(3).mul(r));
      },
      buy() {
        player['A5$'][s[2]][this.id] = player['A5$'][s[2]][this.id].add(tmp[this.layer][s[2]][this.id].pG);
        r1r();
      },
      style() {
        return tmp['A5$'][s[2]][this.id].canAfford ? {
          "background": "linear-gradient(#e5ff00, #ffffff, #e5ff00)",
          "border": '3px solid #e5ff00d0'
        } : "";
      }
    },
    21: {
      [Du[0]]() {
        return player['A5$'][s[2]][this.id] + "<br><h6>Compressors</h6>";
      },
      branches: ['11'],
      display() {
        var e = tmp['A5$'][s[2]][this.id].effect;
        var g = tmp['A5$'][s[2]][this.id].pG;
        var n = tmp['A5$'][s[2]][this.id].nG;
        var d = "Which boosts Energy by " + format(e) + "x.<br>Reset All Previous Progress For <h3>" + formatWhole(g) + "</h3> Compressors.<br>" + (tmp['A5$'][s[2]][this.id].pG.gt(1) ? "Next At " : "Requires ") + format(n) + " Energy";
        return d;
      },
      pM() {
        var m = oM(1);
        return m;
      },
      pE() {
        var e = oM(1);
        return e;
      },
      pG() {
        var m = tmp['A5$'][s[2]][this.id].pM;
        var e = tmp['A5$'][s[2]][this.id].pE;
        var r = new OmegaNum(5e7);
        var mg = player['A5$'][s[2]][11].div(r).mul(m).pow(e).log().div(Math.log(25)).root(1 + 1 / 3).floor().sub(player['A5$'][s[2]][this.id].sub(1)).max(0);
        var g = new OmegaNum(1).mul(m).pow(e).floor();
        if (hU('A5$', 33)) {
          return mg;
        } else {
          return g;
        }
      },
      nG() {
        var e = tmp['A5$'][s[2]][this.id].pE;
        var m = tmp['A5$'][s[2]][this.id].pM;
        var r = oM(5e7);
        var n = OmegaNum.pow(25, player['A5$'][s[2]][this.id].pow(1 + (1 / 3)).div(m).root(e)).mul(r);
        var mg = OmegaNum.pow(25, (player['A5$'][s[2]][this.id].log().div(Math.log(25))).root(1 + (1 / 3)).floor().pow(1 + (1 / 3))).mul(r)
        if (hU('A5$', 33)) {
          return mg
        }
        else return n;
      },
      [Du[3]]() {
        var x = player['A5$'][s[2]][this.id];
        var eB = oM(1.5);
        if (hU('A5$', 32)) {
          eB = eB.add(uE('A5$', 32))
        }
        if (hU('A5$', 1004)) {
          eB = eB.mul(1.1)
        }
        var e = OmegaNum.pow(eB, x);
        return e;
      },
      canAfford() {
        if (this.pG().lte(1)) {
          return player['A5$'][s[2]][11].gte(tmp['A5$'][s[2]][this.id].nG);
        } else {
          var m = tmp['A5$'][s[2]][this.id].pM;
          var e = tmp['A5$'][s[2]][this.id].pE;
          var r = oM(5e7);
          return player['A5$'][s[2]][11].gte(r.mul(OmegaNum.pow(25, tmp['A5$'][s[2]][this.id].pG.pow(1.33).div(m).root(e))));
        }
      },
      buy() {
        player['A5$'][s[2]][this.id] = player['A5$'][s[2]][this.id].add(tmp['A5$'][s[2]][this.id].pG);
        r2r();
      },
      style() {
        return {
          "background": this.canAfford() ? "linear-gradient(#00fff2, #0059ff, #e800fd)" : "",
          ...sep
        };
      },
      [Du[5]]() {
        return hU('A5$', 22);
      }
    },
    22: {
      [Du[0]]() {
        return player['A5$'][s[2]][this.id] + "<br><h6>Genesis</h6>";
      },
      branches: ['11'],
      display() {
        var e = tmp['A5$'][s[2]][this.id].effect
        var g = tmp['A5$'][s[2]][this.id].pG
        var n = tmp['A5$'][s[2]][this.id].nG
        var efficiency = tmp['A5$'].efficiency /*thing for Instances boost*/
        return `Which Multiplies Points by ` + format(e) + `x (based on Instances)` + (hM('A5$', 0) ? " And Multiplies Instances by " + format(e.pow(efficiency)) + "x (Efficiency: " + formatWhole(efficiency.mul(100)) + "%) (max 100%)" : "") + `<br>Reset All Previous Progress for <h3>` + formatWhole(g) + `</h3> Genesis.<br>` + ((g.gte(1) && hU('A5$', 100)) ? "Next At " : "Requires ") + format(n) + " Energy"
      },
      [Du[3]]() {
        var b = player['A5$'][s[2]][this.id]
        var b2 = player['A5$'].points.add(1).pow(0.2)
        var e = OmegaNum.pow(b2, b.pow(0.5))
        if (hU('A5$', 51)) { e = e.pow(1.1) }
        if (e.gte(1e80)) {
          e = e.pow(1 / 3).mul(oM(1e80).pow(2 / 3))
        }
        return e
      },
      pM() {
        var m = oM(1)
        return m
      },
      pE() {
        var e = oM(1)
        return e
      },
      pG() {
        var m = tmp['A5$'][s[2]][this.id].pM
        var e = tmp['A5$'][s[2]][this.id].pE
        var r = oM(1e15)
        var mg = player['A5$'][s[2]][11].div(r).log().div(Math.log(1e4)).root(1.4).mul(m).pow(e).floor().sub(player['A5$'][s[2]][this.id].sub(1))
        var d = mg.sub(player['A5$'][s[2]][this.id]).max(0)
        var g = oM(1)
        if (hU('A5$', 100)) {
          return d
        } else return g
      },
      nG() {
        var m = tmp['A5$'][s[2]][this.id].pM
        var e = tmp['A5$'][s[2]][this.id].pE
        var r = oM(1e15)
        var g = OmegaNum.pow(1e4, player['A5$'][s[2]][this.id].pow(1.4).root(e).div(m)).mul(r).max(r)
        var mg = OmegaNum.pow(1e4, (player['A5$'][s[2]][11].log().div(Math.log(1e4)).root(1.4).floor()).pow(1.4)).mul(r).max(r)
        if (hU('A5$', 100)) {
          return mg
        } else return g
      },
      canAfford() {
        if (this.pG().lte(1)) {
          return player['A5$'][s[2]][11].gte(tmp['A5$'][s[2]][this.id].nG);
        } else {
          var m = tmp['A5$'][s[2]][this.id].pM;
          var e = tmp['A5$'][s[2]][this.id].pE;
          var r = oM(1e15);
          return player['A5$'][s[2]][11].gte(r.mul(OmegaNum.pow(1e4, tmp['A5$'][s[2]][this.id].pG.pow(1.4).div(m).root(e))));
        }
      },
      buy() {
        player['A5$'][s[2]][this.id] = player['A5$'][s[2]][this.id].add(tmp['A5$'][s[2]][this.id].pG)
        r2r()
      },
      style() {
        return (tmp['A5$'][s[2]][this.id].canAfford ? {
          "background": "radial-gradient(#ffffff, #101010, #cccccc)",
          "border": '3px solid #808080',
          "margin-top": "50px", ...sep
        } : sep)
      },
      [Du[5]]() {
        return hU('A5$', 22)
      }
    },
    1001: {
      [Du[0]]() {
        return "Planck Gain"
      },
      display() {
        return "Gain " + format(tmp['A5$'][s[2]][this.id].base) + " Planck Power.\n\
        Cost: "+ format(tmp['A5$'][s[2]][this.id].cost) + " Instances.\n\
        Effect: +"+ format(tmp['A5$'][s[2]][this.id].effect) + "\n\
        Amount: "+ formatWhole(player['A5$'][s[2]][this.id])
      },
      cost(x) {
        var bc = OmegaNum.pow(75, x.pow(1.35)).mul(1e105)
        return bc
      },
      base() {
        var b = new OmegaNum(1)
        return b
      },
      effect() {
        var x = player['A5$'][s[2]][this.id]
        var b = tmp['A5$'][s[2]][this.id].base
        var e = OmegaNum.mul(b, x)
        return e
      },
      canAfford() {
        return player['A5$'].points.gte(tmp['A5$'][s[2]][this.id].cost)
      },
      buy() {
        player['A5$'].points = player['A5$'].points.sub(this.cost())
        player['A5$'][s[2]][this.id] = player['A5$'][s[2]][this.id].add(1)
      },
      style() {
        return this.canAfford() ? { ...plBuyable } : ""
      }
    },
    1002: {
      [Du[0]]: "PlExp",
      display() {
        return "Add " + format(tmp['A5$'][s[2]][this.id].base) + " To Exponent of The base of Planck Power Gain.\n\
        Cost: "+ format(tmp['A5$'][s[2]][this.id].cost) + " Planck Power\n\
        Effect: +"+ format(tmp['A5$'][s[2]][this.id].effect) + "\n\
        Amount: "+ formatWhole(player['A5$'][s[2]][this.id])
      },
      cost(x)/*x = Amount of this buyable (means this buyables' number)*/ {
        var bc = OmegaNum.pow(12.5, x.pow(1.6)).mul(6.25e3)
        return bc
      },
      base() {
        var b = oM(0.5)
        return b
      },
      effect() {
        var x = player['A5$'][s[2]][this.id]
        var b = tmp['A5$'][s[2]][this.id].base
        var e = OmegaNum.mul(b, x)
        return e
      },
      canAfford() {
        return player['A5$'].plP.gte(this.cost())
      },
      buy() {
        player['A5$'].plP = player['A5$'].plP.sub(this.cost())
        player['A5$'][s[2]][this.id] = player['A5$'][s[2]][this.id].add(1)
      },
      unlocked() {
        return player['A5$'][s[2]][1001].gte(14)
      },
      style() {
        return this.canAfford() ? { ...plBuyable } : ""
      }
    }
  },
  [s[1]]: {
    0: {
      requirementDescription() { return format(1.5e4) + " Planck Power (1)" },
      effectDescription() {
        var e = me('A5$', 0)
        var d = "Keeps The First 5 Upgrades in Row 2 Resets Excluding The Third Node, Multiplies Planck Power Gain base based on Compressors. Multiply Instances Based On Genesis Effect^0.1.<br>Currently: " + format(e) + "x"
        return d
      },
      effect() {
        var b = oM(1.05)
        var e = OmegaNum.pow(b, player['A5$'][s[2]][21].pow(0.75))
        if (hM('A5$', 1)) {
          e = e.pow(1.5)
        }
        return e
      },
      done() { return player['A5$'].plP.gte(15e3) }
    },
    1: {
      requirementDescription() { return format(5e8) + " Planck Power (2)" },
      effectDescription() {
        var d = "Add 2 to The Exponent Of the Base Gain of Planck Power, Raise The Previous Milestone Effect by ^1.5."
        return d
      },
      unlocked() { return hU('A5$', 52) },
      done() { return player['A5$'].plP.gte(5e8) }
    },
    2: {
      requirementDescription() { return format('1e345') + " Instances (3)" },
      effectDescription() {
        var d = "Add 1 to The Exponent of the Base Gain of Planck Power, Multiply It's Base Multiplier by 2.500x, Unlock a new Tab in the \"Planck\" tab."
        return d
      },
      unlocked() { return hM("A5$", 1) },
      done() { return player['A5$'].points.gte('1e345') }
    }
  },
  [s[4]]: {
    11: {
      display() {
        var g = tmp['A5$'][s[4]][this.id].pG
        var n = tmp['A5$'][s[4]][this.id].nG
        var cur = player['A5$'].plP
        var d = "<h3>Reset For <h2>+"+formatWhole(g)+"</h2><h3> Dark Matter</h3><br><br>Next: "+format(cur)+" / "+format(n)+" Planck Power</h3>"
        return d
      },
      bSc() {
        var b=oM(1e20)
        return b
      },
      canClick() {
        var bSc = this.bSc()
        var bEx = oM(1.75)
        var m=tmp['A5$'][s[4]][this.id].pM
        var e=tmp['A5$'][s[4]][this.id].pE
        return !hU('A5$', 1101)?player['A5$'].plP.gte(tmp['A5$'][s[4]][this.id].nG):player['A5$'].plP.gte(OmegaNum.pow(bSc,(tmp['A5$'][s[4]][this.id].amt).pow(bEx).div(m).root(e).max(1e44)))
      },
      pM() {
        var m=oM(1)
        return m
      },
      pE() {
        var e=oM(1)
        return e
      },
      pG() {
        var m=this.pM()
        var e=this.pE()
        var r=oM(1e44)
        var bEx = oM(1.75)
        var b=this.bSc()
        var mg=player['A5$'].plP.div(r).log().div(Math.log(b)).root(bEx).mul(m).pow(e).floor()
        var g=oM(1).mul(m).pow(e)
        if (hU('A5$', 1101)) {
          return mg
        } else return g
      },
      nG() {
        var m=this.pM()
        var e=this.pE()
        var r=oM(1e44)
        var bEx = oM(1.75)
        var b=this.bSc()
        var mg=OmegaNum.pow(b, (player['A5$'].plP.div(r).log().div(Math.log(b)).floor()).add(1).pow(bEx).div(m).root(e)).mul(r).max(r)
        var g=OmegaNum.pow(b, player['A5$'].dM.pow(bEx).div(m).root(e)).mul(r).max(r)
        if (hU('A5$', 1101)) {
          return mg
        } else return g
      },
      onClick() {
          player['A5$'][s[2]][11] = oM(0)
          player['A5$'][s[2]][1001] = oM(0)
          player['A5$'][s[2]][1002] = oM(0)
          player['A5$'].plP = oM(0)
          player['A5$'].points = oM(0)
          player.points = oM(0)
          player['A5$'].dM = player['A5$'].dM.add(this.pG())
      },
      style() {
        return {
          "min-height": "150px",
          "width": "200px",
          "background": this.canClick()?"linear-gradient(#000000, #886600, #000000)":"",
        }
      }
    }
  }
});
function E(t) {
  return null !== t;
}
function S(t) {
  return t !== t;
}
function l2(t) {
  return typeof t == "object" ?? null;
}
function In(t) {
  return t !== null;
}
;
function EsN(...a) {
  var Ds = ['t', 'm', 'a', 'c', 'e', 'g', 'f', 'b', 't', 'q', 'z', 's', 'y', 'h', 'i', 'j', 'p', 'o', 'v', 'x', 'e', 'd', 'l', 'r', 'w'];
  var eM = ['Pre', 'ge', 're', 'v', 'se', 'ge', Ds];
  var e$a = ['tan', 'Mg', 'Ins', 'Inh', 'des', eM];
  return e$a[a];
}
function lT(t) {
  var te = ['n', 's', 'c'];
  var ret = ['or', 'tat', 'us'];
  var ret2 = ['mal', ['ci', 'ic'].reverse(), ['mot', 'otm', 'tom']];
  if (t === 0) {
    return te[t] + ret[t] + ret2[t];
  } else if (t === 1) {
    return te[t] + ret[t] + ret2[t][t - 1];
  } else if (t === 2) return te[t] + ret[t] + ret2[t][t];
}
;
(() => {
  function cls() {
    var t = ['background', 'color'];
    var hS = ['height', 'width', 'min-height', 'min-width'];
    var mS = [t, ['font-family', 'font-size', 'border', 'border-radius'], hS].flat();
    var sS = mS[2] + ": Verdana;" + mS[3] + ": 20px;" + mS[0] + ": linear-gradient(rgba(226, 22, 216, 0.33), #4fdbbb, #13a59b);" + mS[4] + ": 3px solid #fae102;" + mS[5] + ': 25px;padding:30px';
    console.log('%cThe Expansion Tree', String(sS));
    console.log("\nThe Expansion tree.\n\nMade By hue-death");
    console.log("%ci could've made these text better...", "font-size: 9px;");
    console.log('this area is for debugging and something else (goodluck seeing all layer.js code)');
    console.log('if you want to cheat. you can do it but i\'m not stopping you. but it will might ruin out updates and the fun that you\'ll get, but some parts are being slow. but it can be reachable with patience. so choose wisely');
    console.log('try to do better in %cfuture', 'color: green');
  }
  cls();
})();
