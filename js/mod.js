
let modInfo = {
	name: "such of a thing.",
	author: "Hue-death",
	id: '11',
	pointsName: "points",
	pointsNameSingular: "point",
	modFiles: ['achievements.js'],
	discordName: "",
	discordLink: "",
	initialStartPoints: new OmegaNum (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.2",
	name: "To The Planck Size!",
}

function test(input) {
    
}
let changelog = `<h1>Changelog:</h1><br>
<div class="x24axas 783ysad 472dusa" data-bind="true" id="changelog-container">
    <versionnum-major>v0.2</versionnum-major><br>
	- Added ${spoil('Planck Power', "String")}<br>
	- Added 1 more mini-layer.<br>
	- Added some upgrades in ${spoil('Instances', "String")}<br>
	- Added 2 Buyables.<br>
	- Added 3 Milestones.<br>
	- ${spoil('<span style="font-size: 11px">some help in there can\'t format nums less than 1.7976e-308 in both standard and sci notation</span>', "String")}<br>
	- ${spoil('<span style="font-size: 10px">i\'ve added an damn icon thing thats looks infinitesimal but seeable (i can only make svg ones...)</span>', "String")}<br>
    <versionnum-major>v0.1</versionnum-major><br>
	- Added `+spoil('Instances', "String")+`<br>
	- Added 2 mini-layers.<br>
	- Added 11 Upgrades.<br>
	- Added some settings.<br>
	- Notations are temporily disabled.
</div>
`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...<br> I Don't have anything...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]
// Spoil a text.
function spoil(text,type, target) {
	if (type === "String"|"string") {
	return `<spoiler onclick="reveal()">${text}</spoiler>`
	}
	else if (type == "DOM"|"Create Element".toLowerCase() && type !== undefined){
		var spoiler = document.createElement('spoiler')
		if (text.includes('\n')){
			spoiler.innerText = text
		}
		else spoiler.textContent = text;
		spoiler.onclick = () => {reveal()}
		document.getElementById(target).append(spoiler)
	}
}
function reveal(){
	const tar = event.currentTarget
	tar.style.background = '#dfdfdf40';
	tar.style.color = 'var(--color)'	
}

function getWhiteColors(period = Math.sqrt(100)) {
    let t = new Date().getTime()
    let a = Math.sin(t / 1e3 / period * 2 * Math.PI + 0)
    a = convertToB16(Math.floor(a * 64 + 192))
    if (String(a) === undefined | NaN) {
        throw new Error('Value is Not A Number')
    }
    return "#" + String(a) + String(a) + String(a)
}

function convertToB16(n) {
    let codes = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F",
    }
    let x = n % 16
    return codes[(n - x) / 16] + codes[x]
}

function getStartPoints(){
    return new OmegaNum(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	let can=false
	if (hU('A5$', 11))can=true
	return can
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new OmegaNum(0)

	let gain = new OmegaNum(1)
	if(hU('A5$',12)) gain=gain.mul(uE('A5$',12))
	if(hU('A5$',14)) gain=gain.mul(uE('A5$',14))
	gain=gain.mul(tmp['A5$'][s[2]][11].effect)
    gain=gain.mul(tmp['A5$'][s[2]][22].effect)
	if (hasAchievement('#^a', 21)) {
		gain=gain.mul(tmp[l].effect)
	}
	if (tmp['A5$'].plEf.gt(1))gain=gain.pow(tmp['A5$'].plEf)

	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	notation:"Scientific",
	pauseText:"Pause The Game."
}}

// Display extra things at the top of the page
var displayThings = [
	() => {
		return options.paused?`<h4 style="color: #00d9ff"; text-shadow: 0 0 10px #00d9ff !important>The Game Is Paused.</h4>`:""
	}
]
// Determines when the game "ends"
function isEndgame() {
		return player.points.gte('1ee10');
}


// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(1) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
