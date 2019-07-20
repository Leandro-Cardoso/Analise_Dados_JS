//------------------------------------------------TABLE GENERATOR
function table_generator(position_id, tab_title, tab_id, tab_lines, tab_coluns){
    var position = document.getElementById(position_id)
    position.innerHTML += `
    <table id="${tab_id}">
        <caption>${tab_title}</caption>
    </table>`
    var tab_position = document.getElementById(tab_id)
    for(var line = 1; line <= tab_lines; line++){
        var line_id = tab_id + '_line_' + line //LINE ID NAME
        tab_position.innerHTML += `
        <tr id="${line_id}"></tr>`
        var line_position = document.getElementById(line_id)
        for(var colun = 1; colun <= tab_coluns; colun++){
            var cell_id = tab_id + '_line_' + line + '_colun_' + colun //CELL ID NAME
            var colun_class = 'class_' + colun //COLUN CLASS NAME
            line_position.innerHTML += `
            <td class="${colun_class}" id="${cell_id}"></td>`
        }
    }
}
//------------------------------------------------DRAW TABLE
table_generator('analysis_data', 'Dados X', 'data_x', 10, 2)
table_generator('analysis_data', 'Dados Y', 'data_y', 10, 2)
table_generator('analysis_data', 'Correlação X e Y', 'data_xy', 6, 2)
table_generator('analysis_data', 'Ajuste Linear X e Y', 'liner_xy', 8, 2)