//------------------------------------------------ARRAY CONSTRUCTOR
class Arrays{
    constructor(data){
        this.data = data
        this.n = data.length
    }
    sum(){
        var sum = 0
        for(var i = 0; i <= this.n - 1; i++){
            sum += this.data[i]
        }
        return sum
    }
    mean(){
        return this.sum() / this.n
    }
}
//------------------------------------------------TEST
var data_x = new Arrays([10, 20, 30, 40, 50])
var data_y = new Arrays([50, 40, 30, 20, 10])
document.getElementById('analise_dados').innerHTML = `
<h1>DADOS X:</h1>
<p>Dados = ${data_x.data}</p>
<p>N = ${data_x.n}</p>
<p>Somatório = ${data_x.sum()}</p>
<p>Média = ${data_x.mean()}</p>

<h1>DADOS Y:</h1>
<p>Dados = ${data_y.data}</p>
<p>N = ${data_y.n}</p>
<p>Somatório = ${data_y.sum()}</p>
<p>Média = ${data_x.mean()}</p>`