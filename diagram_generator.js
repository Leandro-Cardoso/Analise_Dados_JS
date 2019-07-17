//------------------------------------------------DIAGRAM GENERATOR
class Histogram{
    constructor(data, num_classes){
        this.data = data.sort()
        this.n = data.length
        this.num_classes = num_classes < this.n ? num_classes : this.n
        this.max = this.data[this.n - 1]
        this.min = this.data[0]
        this.amplitude = this.max - this.min
        this.interval_classes = this.amplitude / this.num_classes
        this.frequency_classes = this.frequency_classes()
    }
    frequency_classes(){
        var frequency = []
        for(var i = 0; i <= this.n - 1; i++){
            var sum = 0
            for(var j = 0; j <= this.n - 1; j++){
                if(this.data[i] == this.data[j]){
                    sum++
                }
            }
            frequency.push(sum)
        }
        return frequency
    }
}
//TERMINAR HITOGRAMA
//------------------------------------------------DRAW DIAGRAMS
var histogram_x = new Histogram(data_x.data, 5)
document.getElementById('diagram').innerHTML = histogram_x.frequency_classes