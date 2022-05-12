//criando função para mudar cor do fundo
function changeColor()
{
    var numeroHex = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
    
    var hexcode = '';
    //aqui é o codigo por trás na hora de gerar o hex aleatório
    for(var i = 0; i<6; i++)
    {
        var randomIndex = Math.floor(Math.random() * numeroHex.length);

        hexcode += numeroHex[randomIndex];
    }
    document.getElementById("hex-code").innerHTML = hexcode;
    document.body.style.backgroundColor = '#' + hexcode;
} 