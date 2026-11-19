var l = "#^a"; /*to prevent suffocation of writin thi-*/
function S$e(...args){
    const C$ONT = ["D", "IN", "IST", 'CSA', "RDS", "CMT", "ITS", "ADT", "CITS", "ITNS", "CUTBST", "INTERS", "INFITO", "INSTA", "COTNS", "DENT"].reverse()
    const N$T = ["C", "CM", "NES", "CMD", "INS", "CONT", "INH", "INST", C$ONT]
    const NS = ["S", "D", "RE","IMS", "INT","SMD",N$T]
        if (args) {
            return NS[args]
        } else throw NS
}
function increment() {
    return player['A5$'][S$e([6])[8][14]+S$e([6])[8][0]] = player['A5$'][S$e([6])[8][14]+S$e([6])[8][0]].add(1).min(1)
}

var Sec = hS(S$e([6])[8][14]+S$e([6])[8][0])
function hS(args = args.toUpperCase()){
    var len = args.length
        len = len * 1e6
        var norLn = args.length
        var index = {
            1: "A",
            [-1]: ["B", "E"],
            4: ["C", "F", "J"],
            [-15]: ["D", "H", "L"],
            235: ["I", "K", "M", "O", "R"],
            [-5351]: ["G", "N", "P", "T", "V"],
            634521: ["Q", "S", "U", "X", "Z"],
            [-527626525]: ["W", "Y"]
        }
        var hSd = Math.floor(len * (
            (args.includes(index['1'])?index["1"].length*norLn:1) -
            (args.includes(index['-1'][0||1])?index['-1'].length * norLn:1) -
            (args.includes(index['4'][0||1||2])?index['4'].length - 1 * norLn:1)+
            (args.includes(index['-15'][0||1||2])?(-index['-15'].length * --norLn):1) / 
            (args.includes(index['235'][0||1|2||3||4])?(index['235'].length / (norLn / 4) * Math.PI):1) +
            (args.includes(index['-5351'][0||1||2||3||4])?(-index['-5351'].length * -5351 / norLn):1)
        ) * 0.34537563)
        return hSd
}

addLayer('#^a', {
    name: 'achivements.',
    symbol: EsN([5])[6][2].toUpperCase(),
    row: 'side',
    position: 0,
    color: '#ffee00',
    startData() {return {
        unlocked: true,
        points: oM(0)
    }},
    nodeStyle(){
        var thing = Date.now() / 1e3 % 3 * 120
        return {'background':`linear-gradient(${thing}deg, #bbcc00, #ffcc00, #ddee00, #ccff00)`,"border-color": "#bbcc00"}
    },
    tooltip() {
        return `${player['#^a'].achievements.length} Achievements<br><span style="font-size: 10px">${player['#^a'].points} Achievement Power</span>`
    },
    [tF()]: {
        'Achievements': {
            content: [
                ['raw-html', ()=>{
                    var a = "You Have "+layerText('h2','#^a',formatWhole(player['#^a'].points))+" Achievement Power,"+(!hasAchievement(l,21)?" Which Does Nothing Untill something.":" Which Boosts Points by "+format(tmp[l].effect)+"x")
                    return a
                }],
                ['achievements', Array.from({length: 98}, (_, i)=>[(i+1)])]
            ]
        },
        'Secret Achievements': {
            content: [
                ['raw-html', ()=>{
                    var a = "You Have "+layerText('h2','#^a',formatWhole(player['#^a'].points))+" Achievement Power,"+(!hasAchievement(l,21)?" Which Does Nothing Untill something.":" Which Boosts Points by "+format(tmp[l].effect)+"x")
                    return a
                }],
                ['achievements', [100,101,102]]
            ],
            buttonStyle() {
                return {"border-color": '#c3c3c3'}
            }
        }
    },
    layerShown() {return t},
    achievements: {
        11: {
            name: "<span id='ach-name'>The Start of everything.</span>",
            done() {return hU('A5$', 11) || hasAchievement('#^a', 11)},
            tooltip: "Buy the first upgrade.<br>Reward: 1 AP",
            onComplete() {return player[l].points = player[l].points.add(1)}
        },
        12: {
            name: "<span id='ach-name'>Points Increment</span>",
            done() {return player.points.gte(1e3) || hasAchievement('#^a', 12)},
            tooltip: "Reach "+format(1e3)+" points.<br>Reward: 1 AP",
            onComplete() {return player[l].points = player[l].points.add(1)}
        },
        13: {
            name: "<span id='ach-name'>Start of Inflation</span>",
            done(){return hU('A5$', 31) || hasAchievement(l, 13)},
            tooltip: "Generate Instances.<br>Reward: 2 AP",
            onComplete() {return player[l].points = player[l].points.add(2)}
        },
        14: {
            name: "<span id='ach-name'>Compressed Energy</span>",
            done(){return player['A5$'][s[2]][21].gte(1) || hasAchievement(l, 14)},
            tooltip: "Do a Compress.<br>Reward: 3 AP",
            onComplete() {return player[l].points = player[l].points.add(3)}
        },
        15: {
            name: "<span id='ach-name'>Energetic Power</span>",
            done(){return player['A5$'][s[2]][11].gte(1e10) || hasAchievement(l, 15)},
            tooltip: "Reach "+format(1e10)+" Energy.<br>Reward: 5 AP",
            onComplete() {return player[l].points = player[l].points.add(5)}
        },
        21: {
            name: "<span id='ach-name'>Points\' galaxy</span>",
            done(){return player.points.gte(1e100)||hasAchievement(l, 21)},
            tooltip: "Get "+format(1e100)+" points.<br>Reward: AP Boosts points, 10 AP",
            onComplete() {return player[l].points = player[l].points.add(10)}
        },
        22: {
            name: "<span id='ach-name'>To the Infinitesimal Scales</span>",
            done(){return player['A5$'][s[2]][1001].gte(1)||hasAchievement(l, 22)},
            tooltip: "Get 1 \"Planck Gain\".<br>Reward: 3 AP",
            onComplete() {return player[l].points = player[l].points.add(3)}
        },
        23: {
            name: "<span id='ach-name'>Infinite Universe</span>",
            done() {return player.points.gte("1.79762e308")},
            tooltip: "Reach "+format("1.79762e308")+" points.<br>Reward: 3 AP",
            onComplete() {return player[l].points = player[l].points.add(3)}
        },
        24: {
            name: "<span id='ach-name'>Dark Atom</span>",
            done() {return player['A5$'].dM.gte(1)},
            tooltip: "Get "+formatWhole(1)+" Dark Matter.<br>Reward: 4 AP",
            onComplete() {return player[l].points = player[l].points.add(4)}
        },
        1001: {
            name: "<span id='ach-name' onclick='complete(1001)'>This one is always free.</span>",
            done() {return hasAchievement(l, 1001)},
            tooltip(){return hasAchievement(l, 1001)?"Click this achievement.":"????? ???? ????????????"}
        },
        1021:{
            name: "<span id='ach-name'>This Thing Was Here That you didn't See it at all.</span>",
            done(){return player['A5$'][S$e([6])[8][14]+S$e([6])[8][0]].gte(1) || hasAchievement(l, 1021)},
            tooltip() {return hasAchievement(l, 1021)?"Click The Image in news.":"???????? ??? ? ????"},
        },
    },
    effect() {
        if (hasAchievement(l, 21)) {
            var b = player[l].points.add(1).pow(1/3)
            return b
        } else return;
    }
})
function complete(num){
    if (num!==undefined && typeof num === "number") {
        !hasAchievement(l, 1001)?doPopup("achievement","This one is always free", "Achievement Gotten!", 3, tmp[l].color):""
    return player[l].achievements.push(String(num))
    }else throw new Error("Number Expected, Current one is "+typeof num)
}