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
        this.n = data_x.length < data_y.length ? data_x.length : data_y.length
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
//------------------------------------------------ARRAYS LINEAR REGRESSION
class Arrays_linear_regression{
    constructor(data_x, data_y){
        this.data_x = data_x
        this.data_y = data_y
    }
    a(){
        var r = new Arrays_correlation(this.data_x, this.data_y).coefficient_correlation()
        var x_average_deviation = new Array(this.data_x).average_deviation()
        var y_average_deviation = new Array(this.data_y).average_deviation()
        return r * y_average_deviation / x_average_deviation
    }
    b(){
        var y_mean = new Array(this.data_y).mean()
        var x_mean = new Array(this.data_x).mean()
        return y_mean - this.a() * x_mean
    }
    y_error(){
        var y_average_deviation = new Array(this.data_y).average_deviation()
        var r = new Arrays_correlation(this.data_x, this.data_y).coefficient_correlation()
        var n = new Arrays_correlation(this.data_x, this.data_y).n
        return (n / (n - 2) * (1 - r ** 2)) ** (1 / 2) * y_average_deviation
    }
    a_error(){
        var x_average_deviation = new Array(this.data_x).average_deviation()
        var n = new Arrays_correlation(this.data_x, this.data_y).n
        return 1 / x_average_deviation * (this.y_error() / (n ** (1 / 2)))
    }
    b_error(){
        var x_2_mean = 0
        var n = this.data_x.length
        for(var i = 0; i <= n - 1; i++){
            x_2_mean += this.data_x[i] ** 2
        }
        x_2_mean /= n
        return this.a_error() * x_2_mean ** (1 / 2)
    }
    y_function(){
        return this.a() + 'x' + ' + ' + this.b()
    }
}
//------------------------------------------------TEST RESULTS
var data_x = new Array([10, 30, 30, 40, 50])
var data_y = new Array([50, 40, 30, 20, 10])
var data_xy = new Arrays_correlation(data_x.data, data_y.data)
var linear_xy = new Arrays_linear_regression(data_x.data, data_y.data)