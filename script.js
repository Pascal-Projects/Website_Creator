'use strict'

// Timer
function Sleep(milliseconds) {
	return new Promise(resolve => setTimeout(resolve, milliseconds));
}


//Loading Check
async function loaded() {
	console.log("Loading: Check");
	await Sleep(3000);
	console.log('Sleep 1: Check');
}


//Aktiviert den Loading Check
window.onload = loaded();


//Element hinzufügen
function add() {
	console.log('Button: Check');
	var tag = document.getElementById("select");
	console.log(tag.value);
	if(tag.value != "hr") {
		var input = document.getElementById("input");
		if(input.value != "" || null) {
			var element = document.createElement(tag.value);
			var Color = document.getElementById("Color")
			var b_Color = document.getElementById("b_color");
			element.innerHTML = input.value;
			element.style.color = Color.value;
			element.style.backgroundColor = b_Color.value;
			var vorschau = document.getElementById("Vorschau")
			vorschau.appendChild(element)
			var code = element.innerHTML
			var code_tag = tag.value
			code_add(code, code_tag)
			input.value = ""
		} else {
			alert("Bitte Text angeben")
		}
	} else {
		var line = document.createElement(tag.value)
		var vorschau = document.getElementById("Vorschau")
		vorschau.appendChild(line)
	}
}


//Element für die Datei vorbereiten
function code_add(text, tag) {
	var code = document.getElementById("Code")
	console.log("<" + tag + ">" + text + "</" + tag + ">")
	var innerHTML = document.createElement(tag)
	innerHTML.innerHTML = text
	code.appendChild(innerHTML)
}

//Reseten
function Reset() {
	location.reload();
	console.log('Japp')
}


//Download


var oLastUrl = null;
 
function OnDownloadFile()
{
    var oBlob, elLink;
     
    // Letzte Objekt-URL löschen (falls vorhanden)
    if (oLastUrl == null)
    {
        window.URL.revokeObjectURL(oLastUrl);
        oLastUrl = null;
    }
     
    // Textdatei mit dem Code erzeugen
    var text = document.getElementById("Code").innerHTML;
     
    // Blob-Objekt erzeugen
    oBlob = new Blob([ text ], { type: "text/html" });
     
    // Prüfen, ob die Funktion zum direkten Sichern eines Blob-Objekts existiert (nur IE)
    if (window.navigator.msSaveBlob)
    {
        // Blob-Objekt abspeichern
        window.navigator.msSaveBlob(oBlob, "Index.html");
    }
    else
    {
        // Download-Element laden
        elLink = document.getElementById("downloadLink");
         
        // URL erzeugen und merken
        oLastUrl = window.URL.createObjectURL(oBlob);
         
        // URL dem HTML-Element zuweisen
        elLink.href = oLastUrl;
         
        // Klick auslösen
        elLink.click();
    }
}