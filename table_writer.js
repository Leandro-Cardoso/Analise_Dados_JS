//------------------------------------------------TABLE WRITER
function table_writer(tab_id, data){
    document.getElementById(tab_id + '_line_1_colun_1').innerHTML = 'Dados:'
    document.getElementById(tab_id + '_line_1_colun_2').innerHTML = data.data
    document.getElementById(tab_id + '_line_2_colun_1').innerHTML = 'N:'
    document.getElementById(tab_id + '_line_2_colun_2').innerHTML = data.n
    document.getElementById(tab_id + '_line_3_colun_1').innerHTML = 'Somatório:'
    document.getElementById(tab_id + '_line_3_colun_2').innerHTML = data.sum()
    document.getElementById(tab_id + '_line_4_colun_1').innerHTML = 'Média:'
    document.getElementById(tab_id + '_line_4_colun_2').innerHTML = data.mean()
    document.getElementById(tab_id + '_line_5_colun_1').innerHTML = 'Amplitude:'
    document.getElementById(tab_id + '_line_5_colun_2').innerHTML = data.amplitude()
    document.getElementById(tab_id + '_line_6_colun_1').innerHTML = 'Variância Populacional:'
    document.getElementById(tab_id + '_line_6_colun_2').innerHTML = data.variance_p()
    document.getElementById(tab_id + '_line_7_colun_1').innerHTML = 'Variância Amostral:'
    document.getElementById(tab_id + '_line_7_colun_2').innerHTML = data.variance_a()
    document.getElementById(tab_id + '_line_8_colun_1').innerHTML = 'Desvio-Padrão Populacional:'
    document.getElementById(tab_id + '_line_8_colun_2').innerHTML = data.standard_deviation_p()
    document.getElementById(tab_id + '_line_9_colun_1').innerHTML = 'Desvio-Padrão Amostral:'
    document.getElementById(tab_id + '_line_9_colun_2').innerHTML = data.standard_deviation_a()
    document.getElementById(tab_id + '_line_10_colun_1').innerHTML = 'Desvio da Média:'
    document.getElementById(tab_id + '_line_10_colun_2').innerHTML = data.average_deviation()
}
//------------------------------------------------TABLE COVARIANCE WRITER

//------------------------------------------------WRITE TABLE
table_writer('data_x', data_x)
table_writer('data_y', data_y)
//CRIATE TABLE CORRELATION WRITER <----------