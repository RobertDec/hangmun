function wyborPytania() {
             $(document).ready(function() {
               $.ajax({
        type: "GET",
        url: "pytania.xml",
        dataType: "xml",
        success: function(xml) {
			pobierzhasla();

			
				$wyliczba=losowaLiczba(1,10);//losowa liczba
           			//deklaracja tablicy
					   
                    		//sprawdzenie wybranej kategori
							
   
						function pobierzhasla() {
							$typ=$("input[name=kat]:checked").val();
							 hasla = []; liczba_hasel = $(xml).find($typ).children().length;
							while(liczba_hasel != 0) { 
								hasla.push($(xml).find($typ).children().eq(liczba_hasel-1).text());
						   liczba_hasel--;
						  
						return hasla[0]; //zwracanie wylosowanego hasla
						}}
						
						wyrazNieszyfr=pobierzhasla();
						$dl=wyrazNieszyfr.length;
						$wyraz="";

						for (let i=0;i<=$dl-1;i++){
							if(wyrazNieszyfr[i]==" "){
								$wyraz+=" ";
							}
						else{
							$wyraz+="_";
						}//generowanie hasla
						$wyraz=$wyraz.split(" ");
						document.getElementById('has').innerHTML=$wyraz;
						
					}
				}
			 })
			})

$zycia=5;
document.getElementById("wieszak").src="1ru.png";
}// koniec wybraniePytania()

function odpowiedz(){
	
	if($wyraz==wyrazNieszyfr){
		alert("WYGRANA");
		
	}
	var pom=false;

	
	for (let i=0;i<=30;i++){
		
		if(document.getElementById("odp").value==wyrazNieszyfr[i]){
			$zmien=wyrazNieszyfr[i];
			$wyraz[i]=$zmien;
			console.log($wyraz[i]);
			console.log($zmien);
			
			
			document.getElementById('has').innerHTML=$wyraz;
			
			pom=true;
		}else if(pom==false&&i>=30){
			$zycia--;
	}//sprawdzanie odpowiedzi

	switch ($zycia){//zmianna obrazu
		
		case 4:
			document.getElementById("wieszak").src="2ru.png";
		break;
		case 3:
			document.getElementById("wieszak").src="3ru.png";
		break;
		case 2:
			document.getElementById("wieszak").src="4ru.png";
		break;
		case 1:
			document.getElementById("wieszak").src="5ru.png";
		break;
		case 0:
			document.getElementById("wieszak").src="6ru.png";
			$(".odp").prop('disabled',true)//wyłączenie przycisku
		break;
	}
	
}
}

function losowaLiczba(min,max){
	
		min=Math.ceil(min);
		max=Math.floor(max);
		wyn=Math.floor(Math.random()*(max-min-1))+min;
	
    return wyn;
    
		}//Definicja funkcji odpowiadajacej za losowanie pytania
	