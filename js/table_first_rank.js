function effect1() {

    var table = document.getElementById("table");        
    
    var str = '<div style="clear: both;" class="divTable">\
    <table border="1" bordercolor=#009879 class="settingTable">\
        <thead>\
            <tr>\
                <p><td colspan="3" align="center">의문의 상자 오픈 시 랭크</td></p>\
            </tr>\
        </thead>\
        <tbody class="open">\
            <tr>\
                <th>7랭크</th>\
                <td>0.05%</td>\
            </tr>\
            <tr>\
                <th>6랭크</th>\
                <td>0.15%</td>\
            </tr>\
            <tr>\
                <th>5랭크</th>\
                <td>0.3%</td>\
            </tr>\
            <tr>\
                <th>4랭크</th>\
                <td>0.5%</td>\
            </tr>\
            <tr>\
                <th>3랭크</th>\
                <td>2%</td>\
            </tr>\
            <tr>\
                <th>2랭크</th>\
                <td>7%</td>\
            </tr> \
            <tr>\
                <th>1랭크</th>\
                <td>90%</td>\
            </tr> \
        </tbody>\
    </table> \
</div>'

    if(table.innerHTML == "해머") {
        table.innerHTML = "";
    } else {
        table.innerHTML = str;                                      
    }
} 