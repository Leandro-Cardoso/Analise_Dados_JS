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
    }
    frequency_array(){
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
    max_frequency(){
        var frequency_array = this.frequency_array()
        frequency_array.sort()
        return frequency_array[frequency_array.length - 1]
    }
    draw(){
        var position = document.getElementById('diagram')
        var max_frequency = this.max_frequency()
        var frequency_array = this.frequency_array()
        for(var i = 0; i <= this.num_classes - 1; i++){
            var identity = 'div' + (i + 1) //IDENTITY DIVS
            position.innerHTML += `<div id="${identity}"></div>`
            var bar = document.getElementById(identity)
            bar.style.width = `${100 / this.num_classes}%`
            bar.style.height = `${100 - (100 * frequency_array[i] / max_frequency)}%`
            bar.style.backgroundColor = 'rgb(206, 206, 206)'
            bar.style.display = 'block'
            bar.style.position = 'absolute'
            bar.style.left = `${100 / this.num_classes * i}%`
            bar.innerHTML += frequency_array[i]
        }
    }
}
//------------------------------------------------DRAW DIAGRAMS
var histogram_x = new Histogram(data_x.data, 5)
histogram_x.draw()