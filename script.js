function calcular(){
    let peso = document.querySelector('#peso');
    let altura = document.querySelector('#altura');
    let mostrar = document.querySelector('.res ');
    
    if(peso.value.length == 0 || altura.value.length == 0 || peso.value <=0 || altura.value <=0){
        alert('falta dados');
    }else{
        let valorPeso = Number(peso.value);
        let valorAltura = Number(altura.value);
        let calculo = (valorPeso)/(valorAltura**2)
        if(calculo<18.5){
            mostrar.style.background ='#a0a0a0';
            mostrar.innerHTML = `Seu IMC é <strong>${calculo.toFixed(2)}</strong>, classificado como <strong> Magreza</strong>.`;
        } else if(calculo<=24.9){
            mostrar.style.background ='#3eb677';
            mostrar.innerHTML = `Seu IMC é <strong>${calculo.toFixed(2)}</strong>, classificado como <strong> Normal</strong>.`;
        } else if (calculo<=29.9){
            mostrar.style.background ='#69c08a';
            mostrar.innerHTML = `Seu IMC é <strong>${calculo.toFixed(2)}</strong>, classificado como <strong> Sobrepeso</strong>.`;
        } else if(calculo<=39.9){
            mostrar.style.background ='#e7573b';
            mostrar.innerHTML = `Seu IMC é <strong>${calculo.toFixed(2)}</strong>, classificado como <strong> Obesidade</strong>.`;
        }else{
            mostrar.style.background ='#ff0000';
            mostrar.innerHTML = `Seu IMC é <strong>${calculo.toFixed(2)}</strong>, classificado como <strong> Obesidade grave</strong>.`;
        }
    }

}

