


// Load a random dragon upon loading the page
$(function(){
	drag = Math.floor(Math.random()*5);
	if (drag == 0)
	{
		$('#dragon').html('<img src="greendragon.jpg" id="dragimage"/>');
		$('#announce').html('A Green Dragon Appeared!');
		draghp = 1000;
	}
	else if (drag == 1)
	{
		$('#dragon').html('<img src="icedragon.jpg" id="dragimage"/>');
		$('#announce').html('An Ice Dragon Appeared!');
		draghp = 2000;
	}
	else if (drag == 2)
	{
	 	$('#dragon').html('<img src="blackdragon.jpg" id="dragimage"/>');
		$('#announce').html('A Black Dragon Appeared!');
		draghp = 3000;
	}
	else if (drag == 3)
	{
		$('#dragon').html('<img src="golddragon.jpg" id="dragimage"/>');
		$('#announce').html('A Gold Dragon Appeared!');
		draghp = 2500;
	}
	else
	{
		$('#dragon').html('<img src="reddragon.jpg" id="dragimage"/>');
		$('#announce').html('A Red Dragon Appeared!');
		draghp = 1500;
	}
	}); 

//Sets Hero to player selection and initializes starting HP.
function char(n)
{
	war = n;
	if (n == 1)
	{
		$('#warrior').html('<img src="warrior.jpg" id="warimg"/>');
		var buttons = '<button type="button" onclick="fight()">Fight</button><br>\
		<button type="button" onclick="javelin()">Javelin</button><br>\
		<button type="button" onclick="deathblow()">Deathblow</button><br>\
		<button type="button" onclick="aid()">First Aid</button><br>';
		$('#actions').html(buttons);
		hp = 600;
	}
	if (n == 2)
	{
		$('#warrior').html('<img src="archer.jpg" id="warimg"/>');
		var buttons = '<button type="button" onclick="snare()">Snare</button><br>\
		<button type="button" onclick="aim()">Aimed Shot</button><br>\
		<button type="button" onclick="farrow()">Fire Arrow</button><br>\
		<button type="button" onclick="parrow()">Poison Arrow</button><br>';
		$('#actions').html(buttons);
		hp = 500;
	}
	if (n == 3)
	{
		$('#warrior').html('<img src="mage.jpg" id="warimg"/>');
		var buttons = '<button type="button" onclick="fball()">Fireball</button><br>\
		<button type="button" onclick="abolt()">Arcane Bolt</button><br>\
		<button type="button" onclick="blizzard()">Blizzard</button><br>\
		<button type="button" onclick="drain()">Drain</button><br>';
		$('#actions').html(buttons);
		hp = 400;
	}
	herohpstatus()
	dhpstatus()
}

//Updates dragon HP status div
function dhpstatus()
{
	$('#dstatus').html('Dragon HP: ' + draghp);
}

//Updates hero HP status div
function herohpstatus()
{
	$('#status').html('Hero HP: ' + hp);
}


function fight()
{
	damage = Math.floor(Math.random()*51+25);
	flavortext = "slash"
	fightcanvas()
	setTimeout("fighthelper()", 200)
	attackresult()
}

function javelin()
{
	var crit = Math.floor(Math.random()*4);
	if (crit == 3)
	{
		damage = Math.floor(Math.random()*51+50)+Math.floor(draghp/10);
		flavortext = "skewer";
	}
	else
	{
		damage = Math.floor(Math.random()*16+15);
		flavortext = "stick";
	}
	javelincanvas()
	setTimeout("javelinhelper()", 200)
	attackresult()
}

function deathblow()
{
	damage = Math.floor(Math.random()*200+1);
	var reck = Math.floor(Math.random()*16+6);
	hp -= Math.floor(Math.random()*6+5);
	draghp -= damage;
	dhpstatus()
	dblowcanvas()
	GreyButtons()
	setTimeout("EnableButtons()", 2000)
	setTimeout("dblowhelper()", 200)
	$('#announce').html('You charge the dragon and deal ' + damage +
	                ' damage! You take ' + reck + ' damage in the process!');
	setTimeout("dattack()", 1600)
	setTimeout('clearCanvas()', 2600)
	checkwin()
}

function aid()
{
	heal = Math.floor(Math.random()*10+10)+(Math.floor(3000/hp));
	if (heal >= 300)
		heal = 300;
	hp += heal;
	if (hp > 600)
		hp = 600;
	$('#announce').html('You bind your wounds and heal yourself for ' + heal + ' health!');
	herohpstatus()
	for (var i = 0; i < 12; i++)
	{
		setTimeout("aidcanvas()", (i*65))
	}
	GreyButtons()
	setTimeout("EnableButtons()", 2000)
	setTimeout("dattack()", 1000)
	setTimeout('clearCanvas()', 2000)
	checkwin()
}

function snare()
{
	damage = Math.floor(Math.random()*51+55);
	heal = Math.floor(Math.random()*25+20);
	hp += heal;
	draghp -= damage;
	if (hp > 500)
		hp = 500;
	$('#announce').html('You snare the dragon for ' + damage +
	                ' damage! And use the opporunity to heal yourself  for ' + heal + ' health!');
	herohpstatus()
	GreyButtons()
	setTimeout("EnableButtons()", 2000)
	dhpstatus()
	snarecanvas()
	for (var i = 0; i < 12; i++)
	{
		setTimeout("aidcanvas()", (i*65))
	}
	setTimeout("dattack()", 1700)
	setTimeout('clearCanvas()', 2700)
}

function aim()
{
	var crit = Math.floor(Math.random()*4);
	if (crit == 3)
	{
		damage = Math.floor(Math.random()*300+100);
		flavortext = "score a bullseye and crit";
	}
	else
	{
		damage = Math.floor(Math.random()*25+20);
		flavortext = "miss your mark and glance";
	}
	aimed()
	attackresult()
}

function farrow()
{
	damage = Math.floor(Math.random()*230+1);
	if (damage <= 0)
		damage = 5;
	flavortext = "fire a flaming arrow and burn"
	farrowcanvas()
	attackresult()
}

function parrow()
{
	damage = Math.floor(draghp/(Math.floor(Math.random()*8+8)));
	flavortext = "poison";
	parrowcanvas()
	attackresult()
}

//suboptimal hardcoding, couldn't get iteration to work with settimeout
function fball() 
{
	damage = Math.floor(Math.random()*230+1);
	if (damage <= 0)
		damage = 5;
	flavortext = "scorch";
	fballcanvas('fire.png')
	setTimeout('fballcanvas("fire2.png")', 25)
	setTimeout('fballcanvas("fire3.png")', 50)
	setTimeout('fballcanvas("fire4.png")', 75)
	setTimeout('fballcanvas("fire5.png")', 100)
	attackresult()
}

function abolt()
{
 	damage = Math.floor(Math.random()*31+75);
	flavortext = "fire an arance bolt and pierce";
	arcanecanvas()
	attackresult()
}

function blizzard()
{
 	damage = Math.floor(draghp/(Math.floor(Math.random()*8+8)));
	flavortext = "freeze";
	for (var i = 0; i < 18; i++)
	{
		setTimeout("blizzardcanvas()", (i*35))
	}
	attackresult()
}

function drain()
{
	damage = Math.floor(Math.random()*51+20);
	hp += damage;
	draghp -= damage;
	if (hp > 400)
		hp = 400;
	flavortext = "drain";
	draincanvas()
	for (var i = 0; i < 12; i++)
	{
		setTimeout("aidcanvas()", (i*65))
	}
	attackresult()
}

//Announce hero actions
function announced()
{
	$('#announce').html('You ' + flavortext + ' the dragon for '  + damage + ' damage!');
}

//Function to make the dragon attack
function dattack()
{
	dragatk = Math.floor(Math.random()*4);
	if (drag == 0)
	{
		if (dragatk == 0)
		{
			dragdamage = Math.floor(Math.random()*11+25);
			dflavortext = "claws";
			dragattackresult()
			stdhit()
		}
		else if (dragatk == 1)
		{
			dragdamage = Math.floor(Math.random()*11+35);
			dflavortext = "tail swipes";
			dragattackresult()
			pow()
		}
		else if (dragatk == 2)
		{
			dragdamage = Math.floor(Math.random()*25+50);
			dflavortext = "bites";
			dragattackresult()
			claw2()
		}
		else
		{
			dragdamage = Math.floor(Math.random()*35+75);
			dflavortext = "bum rushes";
			dragattackresult()
			bumrush()
		}
	}
	else if (drag == 1)
	{
		if (dragatk == 0)
		{
			dragdamage = Math.floor(Math.random()*21+15);
			dflavortext = "rakes";
			dragattackresult()
			stdhit()
		}
		else if (dragatk == 1)
		{
			dragdamage = Math.floor(hp/4);
			dflavortext = "freezes";
			dragattackresult()
				for (var i = 0; i < 18; i++)
				{
					setTimeout("dblizzardcanvas()", (i*35))
				}
		}
		else if (dragatk == 2)
		{
			dragdamage = Math.floor(Math.random()*150);
			dflavortext = "headbutts";
			dragattackresult()
			pow()
		}
		else
		{
			dragdamage = Math.floor(Math.random()*30+30);
			dflavortext = "bites";
			dragattackresult()
			claw2()
		}
	}
	else if (drag == 2)
	{
		if (dragatk == 0)
		{
			dragdamage = Math.floor(Math.random()*21+15);
			dflavortext = "claws";
			dragattackresult()
			stdhit()
		}
		else if (dragatk == 1)
		{
			dragdamage = Math.floor(hp/3);
			dflavortext = "fires dark energy that burns";
			dragattackresult()
			dargbeam()
		}
		else if (dragatk == 2)
		{
			dragdamage = Math.floor(Math.random()*50+55);
			dflavortext = "smacks";
			dragattackresult()
			pow()
		}
		else
		{
			dragdamage = Math.floor(Math.random()*16+45);
			dflavortext = "bites";
			dragattackresult()
			claw2()
		}
	}
	else if (drag == 3)
	{
		if (dragatk == 0)
		{
			dragdamage = Math.floor(Math.random()*15+25);
			dflavortext = "pokes";
			dragattackresult()
			stdhit()
		}
		else if (dragatk == 1)
		{
			dragdamage = Math.floor(Math.random()*40+25);
			dflavortext = "bludgeons";
			dragattackresult()
			pow()
		}
		else if (dragatk == 2)
		{
			dragdamage = Math.floor(Math.random()*45+45);
			dflavortext = "tail lashes";
			dragattackresult()
			claw2()
		}
		else
		{
			dragdamage = Math.floor(Math.random()*100+75);
			dflavortext = "sprays golden quills that pierce";
			dragattackresult()
			for (var i = 0; i < 7; i++)
				setTimeout('gneedle()', i*35)
		}
	}
	else
	{
		if (dragatk == 0)
		{
			dragdamage = Math.floor(Math.random()*21+10);
			dflavortext = "rips";
			dragattackresult()
			stdhit()
		}
		else if (dragatk == 1)
		{
			dragdamage = Math.floor(Math.random()*50+100);
			dflavortext = "belches flame and burns";
			dragattackresult()
			flamebelch()
		}
		else if (dragatk == 2)
		{
			dragdamage = Math.floor(Math.random()*25+15);
			dflavortext = "bites";
			dragattackresult()
			claw2()
		}
		else
		{
			dragdamage = Math.floor(Math.random()*60+40);
			dflavortext = "summons a meteor that crushes";
			dragattackresult()
			bumrush()
		}
	}
}

//Announce dragon actions
function announcedrag()
{
	$('#announce').html('The dragon ' + dflavortext + ' you for '  + dragdamage + ' damage!');
}

//Normal attack result
function attackresult()
{
	draghp -= damage;
	announced()
	dhpstatus()
	GreyButtons()
	setTimeout("EnableButtons()", 2000)
	setTimeout("dattack()", 1000)
	setTimeout('clearCanvas()', 2000)
}

//Dragon attack result
function dragattackresult()
{
	hp -= dragdamage;
	clearCanvas()
	announcedrag()
	herohpstatus()
	checkwin()
}

//Checks to see if the hero won or died
function checkwin()
{
	if (hp <= 0)
	{
		if(draghp <= 0){
			setTimeout("GreyButtons()",1000)
			setTimeout("$('#announce').html('You slayed the dragon but died from your wounds!');", 1000)
			setTimeout("$('#status').html('DEAD!');", 1000)
			setTimeout("$('#dstatus').html('DEAD!');", 1000)
		}
		else{
			setTimeout("GreyButtons()",1000)
			setTimeout("$('#announce').html('You have been slain by the dragon!');", 1000)
			setTimeout("$('#status').html('DEAD!');", 1000)
		}
	}
	else if (draghp <= 0){
		setTimeout("GreyButtons()",1000)
		setTimeout("$('#announce').html('You slayed the dragon and lived to tell the tale!');", 1000)
		setTimeout("$('#dstatus').html('DEAD!');", 1000)
	}
}

// initialize canvas

function clearCanvas(){
    canvas = document.getElementById("can");
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//functions for animating the canvas below!

//Archer skills
function aimed()
{
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.beginPath();
	var x = 0;
	var y = 125;
	ctx.moveTo(x, y);
	for (var i = 1; i < 8; i++)
	{
		x+=50;
		y+=Math.floor(Math.random()*15+1)-Math.floor(Math.random()*15+1)
		ctx.lineTo(x, y);
	}
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x-10, y-5);
	ctx.lineTo(x-10, y+5);
	ctx.fill();  
}

function farrowcanvas()
{
	ctx.strokeStyle = "rgb(200,0,0)"; 
	ctx.fillStyle = "rgb(200,0,0)"; 
	arrow()
}

function parrowcanvas()
{
	ctx.strokeStyle = "green"; 
	ctx.fillStyle = "green"; 
	arrow()
}

function arrow()
{
	ctx.beginPath();
	var x = 0;
	var y = 125;
	ctx.moveTo(x, y);
	var displace = Math.floor(Math.random()*15+1)-Math.floor(Math.random()*15+1)
	for (var i = 1; i < 8; i++)
	{
		x+=50;
		y+=displace
		ctx.lineTo(x, y);
	}
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x-10, y-5);
	ctx.lineTo(x-10, y+5);
	ctx.fill();  
}

function snarecanvas()
{
	var img = new Image();  
	img.src = 'snare.jpg';
    img.onload = function(){  
      ctx.drawImage(img,170,150);  
    };  
}

//Warrior Skills
function fightcanvas()
{
	var img = new Image();
    img.src = 'fight1.jpg';
	img.onload = function(){  
		ctx.drawImage(img,170,10); 
    };
}

function fighthelper()
{
	var img2 = new Image();
	img2.src = 'fight2.jpg'; 
	img2.onload = function(){  
		ctx.drawImage(img2,170,10); 
    };
}

function javelincanvas()
{
	ctx.drawImage(jav,50,0);
}

function javelinhelper()
{
	ctx.drawImage(jav2,0,0);
}

function dblowcanvas()
{
	ctx.drawImage(dblow,50,0);
}

function dblowhelper()
{
	ctx.drawImage(dblow2,0,-15);
}

function aidcanvas()
{
	ctx.strokeStyle = "rgb(200,0,0)"; 
	ctx.fillStyle = "rgb(200,0,0)";
	ctx.lineWidth=[3];	
	ctx.beginPath();
	var x = Math.floor(Math.random()*100+10)
	var y = Math.floor(Math.random()*100+10)
	ctx.moveTo(x, y);
	var cross = Math.floor(Math.random()*10+10);
	ctx.lineTo(x, y+cross);
	var halfcross = (Math.floor(cross/2));
	ctx.moveTo(x-halfcross, y+halfcross);
	ctx.lineTo(x+(cross/2), y+(cross/2));
	ctx.stroke()
}



//Wizard attacks

function fballcanvas(n)
{
	var img = new Image();
	img.src = n; 
	img.onload = function(){  
		ctx.drawImage(img, 0, 75);  
    };
}
function arcanecanvas()
{
	ctx.strokeStyle = "purple"; 
	ctx.fillStyle = "purple"; 
	arrow()
}
function blizzardcanvas()
{
	ctx.strokeStyle = "blue"; 
	ctx.lineWidth=[2];	
	ctx.beginPath();
	var x = Math.floor(Math.random()*150+200)
	var y = Math.floor(Math.random()*180+10)
	ctx.moveTo(x, y);
	var cross = Math.floor(Math.random()*10+10);
	ctx.lineTo(x, y+cross);
	var halfcross = (Math.floor(cross/2));
	var halfcrossx = x+halfcross;
	ctx.moveTo(x-halfcross, y+halfcross);
	ctx.lineTo(x+halfcross, y+halfcross);
	ctx.moveTo(x-halfcross, y);
	ctx.lineTo(halfcrossx, y+cross);
	ctx.moveTo(halfcrossx, y);
	ctx.lineTo(x- halfcross, y+cross);
	ctx.stroke()
}
function draincanvas()
{
	ctx.beginPath();
	ctx.strokeStyle = "rgb(200,0,0)";
	ctx.lineWidth=[2];	
	var x = 0;
	var y = 125;
	ctx.moveTo(x, y);
	var displace = 10;
	var up = true;
	for (var i = 1; i < 22; i++)
	{
		x+=Math.floor(50/3);
		if (up == true)
		{
			y+=displace;
			up = false;
		}
		else
		{
			y-=displace;
			up = true;
		}
		ctx.lineTo(x, y);
	}
	ctx.stroke();
}

//Load certain images and stores as variables

var claw = new Image();
claw.src = 'claw.jpg'; 
var dblow2 = new Image();
dblow2.src = 'axe2.jpg'; 
var dblow = new Image();
dblow.src = 'axe.jpg';
var jav = new Image();
jav.src = 'spear1.jpg'; 
var jav2 = new Image();
jav2.src = 'spear2.jpg'; 


//Dragon attack functions

function stdhit()
{
	ctx.drawImage(claw, 15, 15);
}

function claw2()
{
	var claw2 = new Image();
	claw2.src = 'claw2.jpg';
	claw2.onload = function(){  
		ctx.drawImage(claw2, 15, 15);  
    };
}

function pow()
{
	var pow = new Image();
	pow.src = 'pow.jpg';
	pow.onload = function(){  
		ctx.drawImage(pow, 15, 15);  
    };
}

function bumrush()
{
	var img = new Image();
	img.src = 'explode.jpg';
	img.onload = function(){  
		ctx.drawImage(img, 15, 15);  
    };
}

function dblizzardcanvas()
{
	ctx.strokeStyle = "blue"; 
	ctx.lineWidth=[2];	
	ctx.beginPath();
	var x = Math.floor(Math.random()*150+10)
	var y = Math.floor(Math.random()*180+10)
	ctx.moveTo(x, y);
	var cross = Math.floor(Math.random()*10+10);
	ctx.lineTo(x, y+cross);
	var halfcross = (Math.floor(cross/2));
	var halfcrossx = x+halfcross;
	ctx.moveTo(x-halfcross, y+halfcross);
	ctx.lineTo(x+halfcross, y+halfcross);
	ctx.moveTo(x-halfcross, y);
	ctx.lineTo(halfcrossx, y+cross);
	ctx.moveTo(halfcrossx, y);
	ctx.lineTo(x- halfcross, y+cross);
	ctx.stroke()
}

function dargbeam()
{
	var img = new Image();
	img.src = 'dargbeam.jpg';
	img.onload = function(){  
		ctx.drawImage(img, 15, 15);
    };
}

function gneedle()
{
	ctx.beginPath();
	ctx.strokeStyle = "yellow"; 
	ctx.fillStyle = "yellow"; 
	var x = 350;
	var y = 125;
	ctx.moveTo(x, y);
	var displace = Math.floor(Math.random()*15+1)-Math.floor(Math.random()*15+1)
	for (var i = 1; i < 8; i++)
	{
		x-=50;
		y+=displace
		ctx.lineTo(x, y);
	}
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x+10, y-5);
	ctx.lineTo(x+10, y+5);
	ctx.fill();  
}

function flamebelch()
{
	var img = new Image();
	img.src = 'flamebelch.jpg';
	img.onload = function(){  
		ctx.drawImage(img, 15, 15);
    };
}


function GreyButtons()
{
	$('button').attr('disabled', 'disabled');
}

function EnableButtons()
{
	$('button').removeAttr('disabled');
}