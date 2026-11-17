
var newsEntries=[
    [true,"this news ticker is broken. close it entirely before something bad happens"],
    [true,() => {return options.paused?"<h3 style='color: red'>HEY!</h3> YOU MUST RESUME THE GAME RIGHT NOW! THE TIME IS GOING TO-":""}],
    [true,()=> !options.paused?"Try to pause the game, just try to do it. <h3 style='font-size: 8px'display: inline>heh</h3> and wait a single minute. <h3 style='font-size: 6px'>heheh</h3>":""],
    [true,`<h2>THE MICRO CHALLENGE:</h2> get me a small piece of layers.js code (F12)`],
    [true,`introducing: <h3 style="font-size: 16px">The Duplication button<sup style="font-size: 13px">idk</sup>:</h3> Press it to see something duplicated <button class="DupBtn news seriousability" onclick="duplicate()">Click To see</button> (goodluck after filling news with "buttons")`],
    [true,`can someone fill out this with a bit of words thanks.<input type="text" placeholder="this is it"></input>`],
    [true,`there is a <img src="svg/thing.svg" style="height: 20px;width: 20px" onclick="increment()"></img> thing somewhere, but you'll never find this thing <i>AT ALL</i>`],
    [true,`what is Instances existence?`],
    [true,`Click The button to display a thing <button onclick="dSm()" id="dis-smth">display something</button>`],
    [true,'demo news']
];
    function duplicate(){
        var d/*duplicates button fr*/=document.createElement('button')
        d.textContent="Click To see"
        d.classList.add('DupBtn')
        d.classList.add('news')
        d.classList.add('seriousability')
        d.onclick = ()=>{duplicate()}
        if (newsStats.current.includes(`introducing: <h3 style="font-size: 16px">The Duplication button<sup style="font-size: 13px">idk</sup>:</h3> Press it to see something duplicated <button class="DupBtn news seriousability" onclick="duplicate()">Click To see</button>`))document.getElementById('newsmessage').append(d)
        else document.getElementById('newsmessage').removeChild('button')
    }
    function dSm(){
        var d=document.createElement('h3')
        var clicks = new OmegaNum(0)
        clicks = clicks.add(1)
        var ents = ["<button onclick='hide()' id='hide-btn'>A new button!</button>", " "+format(player.points)+" "+modInfo.pointsName, " The Next Button Statement after 5 picoseconds."," Divide Something by 5 to win something hidden."]
        d.innerHTML = ents[Math.floor(Math.random() * ents.length)]
        if (clicks.gte(1)){document.getElementById('dis-smth').disabled=true}
        else document.getElementById('dis-smth').disabled = false;
        document.getElementById('newsmessage').append(d)
    }
    function hide(t='hide-btn'){
        var b=document.getElementById(t);
        var click = new OmegaNum(0);
        click=click.add(1)
        b.style.background = '#000000'
        if (click.gte(1)){b.disabled = true}else b.disabled = false
    }
var newsStats = {
    current: [],
    pos: 0,
    new: true
};
function updateNews(diff, force) {
    newsStats.new = false;
    if (force || !newsStats.current[1] || newsStats.pos + 50 < -(document.getElementById("newsmessage")?.offsetWidth || 0)) {
        newsStats.current = newsEntries[force || Math.floor(Math.random() * newsEntries.length)];
        if (!force)
            while (!run(newsStats.current[0]))
                newsStats.current = newsEntries[Math.floor(Math.random() * newsEntries.length)];
        newsStats.current = run(newsStats.current[1]);
        newsStats.pos = window.innerWidth + 50;
        newsStats.new = true;
    }
    newsStats.pos -= diff * 150;
}