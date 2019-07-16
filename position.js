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
    amplitude(){
        var max = this.data[0]
        var min = this.data[0]
        for(var i = 0; i <= this.n - 1; i++){
            if(this.data[i] != this.data[0]){
                if(this.data[i] > max){
                    max = this.data[i]
                }
                if(this.data[i] < min){
                    min = this.data[i]
                }
            }
        }
        return max - min
    }
    variance_p(){
        var mean = this.mean()
        var deviation_2 = 0
        for(var i = 0; i <= this.n - 1; i++){
            deviation_2 += (this.data[i] - mean) ** 2
        }
        return deviation_2 / this.n
    }
    variance_a(){
        return this.variance_p() * this.n / (this.n - 1)
    }
    standard_deviation_p(){
        return this.variance_p() ** (1 / 2)
    }
    standard_deviation_a(){
        return this.variance_a() ** (1 / 2)
    }
    average_deviation(){
        return this.standard_deviation_a() / this.n ** (1 / 2)
    }
}
//------------------------------------------------TEST
var data_x = new Arrays([10, 20, 30, 40, 50])
var data_y = new Arrays([50, 40, 30, 20, 10])
document.getElementById('analysis_data').innerHTML = `
<h1>DADOS X:</h1>
<p>Dados = ${data_x.data}</p>
<p>N = ${data_x.n}</p>
<p>Somatório = ${data_x.sum()}</p>
<p>Média = ${data_x.mean()}</p>
<br/>
<p>Amplitude = ${data_x.amplitude()}</p>
<p>Variância Populacional = ${data_x.variance_p()}</p>
<p>Variância Amostral = ${data_x.variance_a()}</p>
<p>Desvio Padrão Populacional = ${data_x.standard_deviation_p()}</p>
<p>Desvio Padrão Amostral = ${data_x.standard_deviation_a()}</p>
<p>Desvio da Média / Erro Padrão = ${data_x.average_deviation()}</p>

<h1>DADOS Y:</h1>
<p>Dados = ${data_y.data}</p>
<p>N = ${data_y.n}</p>
<p>Somatório = ${data_y.sum()}</p>
<p>Média = ${data_x.mean()}</p>
<br/>
<p>Amplitude = ${data_y.amplitude()}</p>
<p>Variância Populacional = ${data_y.variance_p()}</p>
<p>Variância Amostral = ${data_y.variance_a()}</p>
<p>Desvio Padrão Populacional = ${data_y.standard_deviation_p()}</p>
<p>Desvio Padrão Amostral = ${data_y.standard_deviation_a()}</p>
<p>Desvio da Média / Erro Padrão = ${data_y.average_deviation()}</p>`