//------------------------------------------------ARRAY CONSTRUCTOR
class Array{
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
//------------------------------------------------ARRAYS CORRELATION
class Arrays_correlation{
    constructor(data_x, data_y){
        this.data_x = data_x
        this.data_y = data_y
        this.n = this.smaller_n(data_x.length, data_y.length)
    }
    smaller_n(n_x, n_y){
        if(n_x < n_y){
            return n_x
        }
        else{
            return n_y
        }
    }
    covariance_p(){
        var deviation_xy = 0
        var mean_x = new Array(this.data_x).mean()
        var mean_y = new Array(this.data_y).mean()
        for(var i = 0; i <= this.n - 1; i++){
            deviation_xy += (this.data_x[i] - mean_x) * (this.data_y[i] - mean_y)
        }
        return deviation_xy / this.n
    }
    covariance_a(){
        return this.covariance_p() * this.n / (this.n - 1)
    }
    coefficient_correlation(){
        var standard_deviation_x = new Array(this.data_x).standard_deviation_p()
        var standard_deviation_y = new Array(this.data_y).standard_deviation_p()
        return this.covariance_p() / (standard_deviation_x * standard_deviation_y)
    }
}
//------------------------------------------------TEST RESULTS
var data_x = new Array([10, 20, 30, 40, 50])
var data_y = new Array([50, 40, 30, 20, 10])
var data_xy = new Arrays_correlation([10, 20, 30, 40, 50], [50, 40, 30, 20, 10])