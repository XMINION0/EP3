document.getElementById('nombres').innerText = localStorage.getItem('nombres');
    document.getElementById('apellidos').innerText = localStorage.getItem('apellidos');
    document.getElementById('correo').innerText = localStorage.getItem('correo');
    document.getElementById('nombreCurso').innerText = localStorage.getItem('nombreCurso');
    document.getElementById('nota1').innerText = localStorage.getItem('nota1');
    document.getElementById('nota2').innerText = localStorage.getItem('nota2');
    document.getElementById('nota3').innerText = localStorage.getItem('nota3');
    var promedio = Math.round(localStorage.getItem('promedio'));
    document.getElementById('promedio').innerText = promedio;