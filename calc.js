Math.radians = function(degrees) {
	return degrees * Math.PI / 180;
}

Math.degrees = function(radians) {
	return radians * 180 / Math.PI;
}


function ChangeType(data){
	let div1 = document.querySelector('.input1');
	let div2 = document.querySelector('.input2');
	if(data.CalcSide.checked) {
		document.getElementById("input1").style.display = "block";
		document.getElementById("input2").style.display = "none";
	}
	
	if(data.CalcYgol.checked) {
		document.getElementById("input1").style.display = "none";
		document.getElementById("input2").style.display = "block";
	}
	return true;
}

function Clear(data){
	let outputHTML = document.getElementById('output');
	outputHTML.innerText = '';	
}


function Calculate1(data){
	let a = +data.input11.value;
	let b = +data.input12.value;
	let d = +data.input13.value;
	
//	if (isNaN(a) || isNaN(b) || isNaN(d) || a <= 0 || b <= 0 || d <= 0) {
//	let outputHTML = document.getElementById('output');
//	let Elem = document.createElement('p');
//	Elem.innerHTML = "Input Error";
//	outputHTML.appendChild(Elem);
//	return false;
//	}
	
	let flag = true;
	if (isNaN(a) || a <= 0) {
		const elem = document.getElementById("input11");
		elem.style.borderColor = "red";
		flag = false;
	} else {
		const elem = document.getElementById("input11");
		elem.style.borderColor = "black";
	}
	if(isNaN(b) || b <= 0){
		const elem = document.getElementById("input12");
		elem.style.borderColor = "red";
		flag = false;
	} else {
		const elem = document.getElementById("input12");
		elem.style.borderColor = "black";
	}
	if(isNaN(d) || d <= 0){
		const elem = document.getElementById("input13");
		elem.style.borderColor = "red";
		flag = false;
	} else {
		const elem = document.getElementById("input13");
		elem.style.borderColor = "black";
	}
	
	if (!(data.task11.checked || data.task12.checked || data.task13.checked || data.task14.checked)){
		const elem = document.getElementById("found1");
		elem.style.color = "red";
		flag = false;
	} else {
		const elem = document.getElementById("found1");
		elem.style.color = "black";
	}
	
	if (flag) {
	
	let outputHTML = document.getElementById('output');
	let output = document.createElement('p');
	output.innerHTML = "Result:";
	
	let S = Math.sqrt(d*d - (a-b)*(a-b)) * (a+b)/2;
	let Y = Math.degrees(Math.atan(Math.sqrt(d*d - (a-b)*(a-b))/(a-b)));
	let H = Math.sqrt(d*d - (a-b)*(a-b));
	let P = a+b+d+H;
	
	S = Math.round(S*1000)/1000;
	Y = Math.round(Y*1000)/1000;
	H = Math.round(H*1000)/1000;
	P = Math.round(P*1000)/1000;
	if (Y < 0) {Y = 180 + Y;};
	
	if (data.task11.checked) {
		let newElement1 = document.createElement('p');
		newElement1.innerHTML = "S = " + S;
		output.appendChild(newElement1);
	}
	if (data.task12.checked) {
		let newElement2 = document.createElement('p');
		newElement2.innerHTML = "Ugol = " + Y;
		output.appendChild(newElement2);
	}
	if (data.task13.checked) {
		let newElement3 = document.createElement('p');
		newElement3.innerHTML = "h = " + H;
		output.appendChild(newElement3);
	}
	if (data.task14.checked) {
		let newElement4 = document.createElement('p');
		newElement4.innerHTML = "P = " + P;
		output.appendChild(newElement4);
	}
	outputHTML.appendChild(output);
	return true;
} else {return false;}	

}

function Calculate2(data){
	let a = +data.input21.value;
	let b = +data.input22.value;
	let ygol = +data.input23.value;
	
	let flag = true;
	if (isNaN(a) || a <= 0) {
		const elem = document.getElementById("input21");
		elem.style.borderColor = "red";
		flag = false;
	} else {
		const elem = document.getElementById("input21");
		elem.style.borderColor = "black";
	}
	if(isNaN(b) || b <= 0){
		const elem = document.getElementById("input22");
		elem.style.borderColor = "red";
		flag = false;
	} else {
		const elem = document.getElementById("input22");
		elem.style.borderColor = "black";
	}
	if(isNaN(ygol) || ygol <= 0){
		const elem = document.getElementById("input23");
		elem.style.borderColor = "red";
		flag = false;
	} else {
		const elem = document.getElementById("input23");
		elem.style.borderColor = "black";
	}
	
	if (!(data.task21.checked || data.task22.checked || data.task23.checked || data.task24.checked)){
		const elem = document.getElementById("found2");
		elem.style.color = "red";
		flag = false;
	} else {
		const elem = document.getElementById("found2");
		elem.style.color = "black";
	}
	
	if (flag) {
	
	let Y = ygol;
	let H = (a-b)* Math.tan(Math.radians(ygol));
	H = Math.sqrt(H*H);
	let P = a+b+H+Math.sqrt((a-b)*(a-b)+(H*H));
	let S = (a+b)/2 * H;
	
	S = Math.round(S*1000)/1000;
	Y = Math.round(Y*1000)/1000;
	H = Math.round(H*1000)/1000;
	P = Math.round(P*1000)/1000;
	if (Y < 0) {Y = 180 + Y;};
	
		
	S = Math.sqrt(S*S);

	
	let outputHTML = document.getElementById('output');
	let output = document.createElement('p');
	output.innerHTML = "Result:";
	if ((a-b) == 0 || Y == 90) {
		let newElement1 = document.createElement('p');
		newElement1.innerHTML = "Error. Wrong input.";
		output.appendChild(newElement1);
	} else {
	if (data.task21.checked) {
		let newElement1 = document.createElement('p');
		newElement1.innerHTML = "S = " + S;
		output.appendChild(newElement1);
	}
	if (data.task22.checked) {
		let newElement2 = document.createElement('p');
		newElement2.innerHTML = "Ugol = " + Y;
		output.appendChild(newElement2);
	}
	if (data.task23.checked) {
		let newElement3 = document.createElement('p');
		newElement3.innerHTML = "h = " + H;
		output.appendChild(newElement3);
	}
	if (data.task24.checked) {
		let newElement4 = document.createElement('p');
		newElement4.innerHTML = "P = " + P;
		output.appendChild(newElement4);
	}
	}
	outputHTML.appendChild(output);
	return true;
	}

}