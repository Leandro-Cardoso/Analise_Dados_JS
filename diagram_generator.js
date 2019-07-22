//------------------------------------------------DIAGRAM GENERATOR
class Histogram{
    constructor(data, num_classes){
        this.data = data.sort()
        this.n = data.length
        this.num_classes = num_classes < this.n ? num_classes : this.n
        this.max = this.data[this.n - 1]
        this.min = this.data[0]
    }
    interval_classes(){
        var interval_classes = (this.max - this.min) / this.num_classes
        var classes_array = []
        for(var i = 1; i <= this.num_classes; i++){
            var temp = this.min + interval_classes * i
            classes_array.push(temp)
        }
        return classes_array
    }
    frequency_array(){
        var frequency = []
        var classes_array = this.interval_classes()
        for(var i = 0; i <= classes_array.length - 1; i++){
            var sum = 0
            for(var j = 0; j <= this.n - 1; j++){
                if(classes_array[i] > this.data[j] && i == 0){
                    sum++
                }
                else if(classes_array[i] >= this.data[j] && classes_array[i - 1] < this.data[j]){
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
            var div_identity = 'div' + (i + 1) //IDENTITY DIVS
            position.innerHTML += `<div id="${div_identity}"></div>`
            var bar = document.getElementById(div_identity)
            bar.style.width = `${100 / this.num_classes}%`
            bar.style.height = `${100 - (100 * frequency_array[i] / max_frequency)}%`
            bar.style.backgroundColor = 'rgb(206, 206, 206)'
            bar.style.display = 'block'
            bar.style.position = 'absolute'
            bar.style.left = `${100 / this.num_classes * i}%`
            var p_identity = 'p' + (i + 1) //IDENTITY P
            bar.innerHTML += `<p id="${p_identity}">${frequency_array[i]}</p>`
        }
        //SUBTITLE CLASSES
        var position = document.getElementById('histogram')
        position.innerHTML += `<p id="histogram_classes">${this.min}</p>`
        var position = document.getElementById('histogram_classes')
        position.style.textAlign = 'left'
        var interval_classes = this.interval_classes()
        for(var i = 0; i <= this.num_classes - 1; i++){
            position.innerHTML += interval_classes[i]
        }
    }
}
//------------------------------------------------DRAW DIAGRAMS
var histogram_x = new Histogram(data_x.data, 3)
histogram_x.draw()
document.getElementById('analysis_data').innerHTML += histogram_x.interval_classes() + '<br/>'
document.getElementById('analysis_data').innerHTML += histogram_x.max_frequency()