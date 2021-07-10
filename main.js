(function(){
	var actualizarHora = function(){
		var fecha = new Date(),
			horas = fecha.getHours(),
			ampm,
            saludo,
			minutos = fecha.getMinutes(),
			segundos = fecha.getSeconds(),
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			year = fecha.getFullYear();

		var pHoras = document.getElementById('horas'),
			pAMPM = document.getElementById('ampm'),
			pMinutos = document.getElementById('minutos'),
			pSegundos = document.getElementById('segundos'),
			pDiaSemana = document.getElementById('diaSemana'),
			pDia = document.getElementById('dia'),
			pMes = document.getElementById('mes'),
			pYear = document.getElementById('year'),
            pSaludo = document.getElementById('saludo');

		var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
		pDiaSemana.textContent = semana[diaSemana];
		pDia.textContent = dia;
		var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
		pMes.textContent = meses[mes];
		pYear.textContent = year;
		if (horas >= 12) {
			horas = horas - 12;
			ampm = 'PM';
            if(horas>=7){
                saludo = 'Buenas Noches'
            }else if(horas<7){
                saludo = 'Buenas Tardes'
            }
		} else {
			ampm = 'AM';
            saludo = 'Buenos Dias'
		}
		if (horas == 0 ){
			horas = 12;
		}
		pHoras.textContent = horas;
		pAMPM.textContent = ampm;
        pSaludo.textContent = saludo;
		if (minutos < 10){ minutos = "0" + minutos; }
		if (segundos < 10){ segundos = "0" + segundos; }
		pMinutos.textContent = minutos;
		pSegundos.textContent = segundos;
	};
	actualizarHora();
	var intervalo = setInterval(actualizarHora, 1000);
}())
