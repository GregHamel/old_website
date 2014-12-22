



function checkwin()
{
	var end= false
	if (weight > 50)
	{
		document.getElementById('announce').innerHTML = "Your cat got too fat and died! GAME OVER!";
		end = true;
		return end;
	}
	if (weight <= 0)
	{
		document.getElementById('announce').innerHTML = "Your cat starved to death! GAME OVER!";
		end = true;
		return end;
	}
	if (happiness <= 0)
	{
		document.getElementById('announce').innerHTML = "Your cat got depressed and died! GAME OVER!";
		end = true;
		return end;
	}
	if (strength <= 0)
	{
		document.getElementById('announce').innerHTML = "Your cat is too weak to live! GAME OVER!";
		end = true;
		return end;
	}
	if (flufiness <= 0)
	{
		document.getElementById('announce').innerHTML = "Your cat became a sphinx! GAME OVER!";
		end = true;
		return end;
	}
	if (happiness >= 50 && strength >= 50 && flufiness >= 50)
	{
		document.getElementById('announce').innerHTML = "Your cat is happy, strong and VERY fluffy! YOU WIN!";
		end = true;
		return end;
	}
	return end;
}

function update()
{
	if (checkwin() == true)
	{
		document.getElementById('training').innerHTML = " " ;
		document.getElementById('w').innerHTML = "Weight: " ;
		document.getElementById('h').innerHTML = "Happiness: " ;
		document.getElementById('s').innerHTML = "Strength: " ;
		document.getElementById('f').innerHTML = "Flufiness: " ;
	}
	else
	{
		document.getElementById('w').innerHTML = "Weight: " + weight;
		document.getElementById('h').innerHTML = "Happiness: " + happiness;
		document.getElementById('s').innerHTML = "Strength: " + strength;
		document.getElementById('f').innerHTML = "Flufiness: " + flufiness;
	}
}

function update2()
{

}


function train1()
{
	document.getElementById('training').innerHTML = "<img src='cat1.jpg'/>";
	document.getElementById('status').innerHTML = "Training Harry";
	document.getElementById('meow').innerHTML = "<source src='harry.mp3' />";
	cat = "Harry";
	weight= 2;
	happiness= 6;
	strength= 2;
	flufiness= 6;
	update()
}

function train2()
{
	document.getElementById('training').innerHTML = "<img src='cat2.jpg'/>";
	document.getElementById('status').innerHTML = "Training Spot";
	document.getElementById('meow').innerHTML = "<source src='spot.mp3' />";
	cat = "Spot";
	weight= 3;
	happiness= 5;
	strength= 3;
	flufiness= 8;
	update()
}

function train3()
{
	document.getElementById('training').innerHTML = "<img src='cat3.jpg'/>";
	document.getElementById('status').innerHTML = "Training Billiam";
	document.getElementById('meow').innerHTML = "<source src='bill.mp3' />";
	cat = "Billiam";
	weight= 14;
	happiness= 3;
	strength= 10;
	flufiness= 5;
	update()
}

function train4()
{
	document.getElementById('training').innerHTML = "<img src='cat4.jpg'/>";
	document.getElementById('status').innerHTML = "Training George";
	document.getElementById('meow').innerHTML = "<source src='george.mp3' />";
	cat = "George";
	weight= 10;
	happiness= 5;
	strength= 7;
	flufiness= 3;
	update()
}



function feed()
{
	if (cat == 'Harry')
	{
		if (weight < 10)
		{
			weight++;
			happiness+=3;
			strength++;
			update();
		}
		else if (weight >= 10 && weight < 30)
		{
			weight+=2;
			happiness+=1;
			update();
		}
		else if (weight >= 30)
		{
			weight+=3;
			happiness--;
			strength--;
			update();
		}
	}
	if (cat == 'Spot')
	{
		if (weight < 15)
		{
			weight+=3;
			happiness+=5;
			strength++;
			update();
		}
		else if (weight >= 15 && weight < 30)
		{
			weight+=4;
			happiness+=3;
			update();
		}
		else if (weight >= 30)
		{
			weight+=5;
			strength-=5;
			update();
		}
	}
	if (cat == 'Billiam')
	{
		if (weight < 15)
		{
			weight+=3;
			happiness++;
			strength++;
			update();
		}
		else if (weight >= 15 && weight < 30)
		{
			weight+=2;
			update();
		}
		else if (weight >= 30)
		{
			weight++;
			strength--;
			update();
		}
	}
	if (cat == 'George')
	{
		if (weight < 10)
		{
			weight++;
			happiness--;
			strength--;
			flufiness++;
			update();
		}
		else if (weight >= 10 && weight < 30)
		{
			weight++;
			happiness-=2;
			strength-=2;
			flufiness+=3;
			update();
		}
		else if (weight >= 30)
		{
			weight++;
			happiness-=5;
			strength-=5
			flufiness*=2;
			update();
		}
	}
}


function pet()
{
	if (cat == 'Harry')
	{
		if (happiness < 10)
		{
			happiness+=3;
			flufiness--;
			update();
		}
		else if (happiness >= 10 && happiness < 30)
		{
			happiness+=2;
			flufiness--;
			update();
		}
		else if (happiness >= 30)
		{
			happiness++;
			flufiness--;
			update();
		}
	}
	if (cat == 'Spot')
	{
		if (happiness < 15)
		{
			happiness+=4;
			flufiness++;
			update();
		}
		else if (happiness >= 15 && happiness < 30)
		{
			happiness+=3;
			strength--;
			update();
		}
		else if (happiness >= 30)
		{
			happiness+=2;
			strength-=2;
			update();
		}
	}
	if (cat == 'Billiam')
	{
		if (happiness < 10)
		{
			happiness--;
			flufiness++;
			update();
		}
		else if (happiness >= 10 && happiness < 30)
		{
			happiness-=3;
			strength+=2;
			flufiness+=2;
			update();
		}
		else if (happiness >= 30)
		{
			happiness-=5;
			strength+=5;
			flufiness+=5;
			update();
		}
	}
	if (cat == 'George')
	{
		if (happiness < 10)
		{
			happiness*=2;
			update();
		}
		else if (happiness >= 10 && happiness < 30)
		{
			happiness = Math.floor(happiness*1.5);
			flufiness-=5;
			update();
		}
		else if (happiness >= 30)
		{
			happiness++;
			flufiness = Math.floor(flufiness/2);
			update();
		}
	}
}

function play()
{
	if (cat == 'Harry')
	{
		if (weight < 10)
		{
			strength+=3;
			happiness++;
			update();
		}
		else if (weight >= 10 && weight < 30)
		{
			strength+=2;
			weight--;
			flufiness--;
			update();
		}
		else if (weight >= 30)
		{
			weight-=3;
			strength++;
			flufiness--;
			update();
		}
	}
	if (cat == 'Spot')
	{
		if (weight < 15)
		{
			strength+=5
			flufiness-=2;
			update();
		}
		else if (weight >= 15 && weight < 30)
		{
			weight--;
			strength+=4;
			flufiness-=4;
			update();
		}
		else if (weight >= 30)
		{
			strength+=3;
			flufiness-=6;
			update();
		}
	}
	if (cat == 'Billiam')
	{
		if (weight < 15)
		{
			happiness+=5
			weight-=2
			flufiness--;
			update();
		}
		else if (weight >= 15 && weight < 30)
		{
			weight-=3;
			happiness+=4;
			flufiness-=2;
			update();
		}
		else if (weight >= 30)
		{
			weight-=5;
			happiness+=3;
			flufiness-=3;
			update();
		}
	}
	if (cat == 'George')
	{
		if (happiness < 10)
		{
			happiness+=5
			weight = Math.floor(weight/1.2)
			update();
		}
		else if (happiness >= 10 && happiness < 30)
		{
			happiness+=4
			weight = Math.floor(weight/1.5)
			update();
		}
		else if (happiness >= 30)
		{
			happiness+=3
			weight = Math.floor(weight/2)
			update();
		}
	}
}

function groom()
{
	if (cat == 'Harry')
	{
		if (flufiness < 10)
		{
			happiness--;
			flufiness+=6;
			update();
		}
		else if (flufiness >= 10 && flufiness < 30)
		{
			happiness-=2;
			flufiness+=5;
			update();
		}
		else if (flufiness >= 30)
		{
			happiness-=3;
			flufiness+=4;
			update();
		}
	}
	if (cat == 'Spot')
	{
		if (flufiness < 15)
		{
			happiness++;
			flufiness*=2;
			update();
		}
		else if (flufiness >= 15 && flufiness < 30)
		{
			happiness++;
			flufiness+=5;
			update();
		}
		else if (flufiness >= 30)
		{
			flufiness+=3;
			update();
		}
	}
	if (cat == 'Billiam')
	{
		if (flufiness < 15)
		{
			happiness = Math.floor(happiness/1.4);
			flufiness*=2;
			update();
		}
		else if (flufiness >= 15 && flufiness < 30)
		{
			happiness = Math.floor(happiness/1.6);
			flufiness = Math.floor(flufiness*1.5);
			update();
		}
		else if (flufiness >= 30)
		{
			happiness = Math.floor(happiness/2);
			flufiness = Math.floor(flufiness*1.3);
			update();
		}
	}
	if (cat == 'George')
	{
		if (flufiness < 5)
		{
			strength*=2
			flufiness+=5;
			update();
		}
		else if (flufiness >= 5 && flufiness < 30)
		{
			strength += 10;
			flufiness++;
			update();
		}
		else if (flufiness >= 30)
		{
			strength++;
			flufiness--;
			update();
		}
	}
}

function catnip()
{
	weight = Math.floor(weight/(strength*0.1));
	happiness = Math.floor(Math.random()*25+5);
	strength = Math.floor(strength/2) + Math.floor(weight/2);
	flufiness = Math.floor(flufiness/(strength*0.1));
	update();
}









