function effect1() {

    var table = document.getElementById("table");        
    
    var str =  '<div style="clear: both;" class="divTable2">\
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
</div>\
        \
        <br><br>\
        \
        <div style="clear: both;" class="divTable2">\
            <table border="1" bordercolor=#009879 class="settingTable">\
                <thead>\
                    <tr>\
                        <p><td colspan="3" align="center">의문의 상자 오픈 시 효과 개수</td></p>\
                    </tr>\
                </thead>\
                <tbody class="open">\
                    <tr>\
                        <th>5줄</th>\
                        <td>0.01%</td>\
                    </tr>\
                    <tr>\
                        <th>4줄</th>\
                        <td>0.04%</td>\
                    </tr>\
                    <tr>    \
                        <th>3줄</th>\
                        <td>0.45%</td>\
                    </tr>\
                    <tr>\
                        <th>2줄</th>\
                        <td>1.5%</td>\
                    </tr>    \
                    <tr>\
                        <th>1줄</th>\
                        <td>98%</td>\
                    </tr>                         \
                </tbody>        \
            </table>           \
        </div>'

    table.innerHTML = str;  
} 