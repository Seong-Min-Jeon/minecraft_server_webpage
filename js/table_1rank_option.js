function effect3() {

    var table = document.getElementById("table");        
    
    var str =  '<div style="clear: both;" class="divTable">\
            <table border="1" bordercolor=#009879 class="settingTable">\
                <thead>\
                    <tr>\
                        <p><td colspan="3" align="center">1랭크에서 등장하는 효과</td></p>\
                    </tr>\
                </thead>\
                <tbody class="equip">\
                    <tr>\
                        <th rowspan="2">전투 경험치 증가</th>\
                        <td>전투 경험치 5% 증가</td>\
                        <td>3.03%</td>\
                    </tr>\
                    <tr>\
                        <td>전투 경험치 10% 증가</td>\
                        <td>2.02%</td>\
                    </tr>\
                    <tr>\
                        <th rowspan="2">회피 확률 증가</th>\
                        <td>회피 확률 5% 증가</td>\
                        <td>9.09%</td>\
                    </tr>\
                    <tr>\
                        <td>회피 확률 10% 증가</td>\
                        <td>3.03%</td>\
                    </tr>    \
                    <tr>\
                        <th rowspan="2">반격 데미지</th>\
                        <td>반격 데미지 2배</td>\
                        <td>7.07%</td>\
                    </tr>   \
                    <tr>\
                        <td>반격 데미지 3배</td>\
                        <td>1.01%</td>\
                    </tr>   \
                    <tr>\
                        <th>흡혈</th>\
                        <td>흡혈 0.5%</td>\
                        <td>3.03%</td>\
                    </tr>    \
                    <tr>\
                        <th rowspan="2">근접 공격 시 마나 획득</th>\
                        <td>근접 공격 시 10% 확률로 마나 획득</td>\
                        <td>8.08%</td>\
                    </tr>   \
                    <tr>  \
                        <td>근접 공격 시 15% 확률로 마나 획득</td>\
                        <td>2.02%</td>\
                    </tr>   \
                    <tr>\
                        <th rowspan="2">원거리 공격 시 마나 획득</th>\
                        <td>원거리 공격 시 10% 확률로 마나 획득</td>\
                        <td>9.09%</td>\
                    </tr>   \
                    <tr>  \
                        <td>원거리 공격 시 15% 확률로 마나 획득</td>\
                        <td>2.02%</td>\
                    </tr>   \
                    <tr>\
                        <th rowspan="2">근접 공격 시 독 데미지</th>\
                        <td>근접 공격 시 독 데미지 8</td>\
                        <td>5.05%</td>\
                    </tr>   \
                    <tr>  \
                        <td>근접 공격 시 독 데미지 9</td>\
                        <td>2.02%</td>\
                    </tr>  \
                    <tr>\
                        <th rowspan="2">원거리 공격 시 독 데미지</th>\
                        <td>원거리 공격 시 독 데미지 8</td>\
                        <td>5.05%</td>\
                    </tr>   \
                    <tr>  \
                        <td>원거리 공격 시 독 데미지 9</td>\
                        <td>2.02%</td>\
                    </tr>  \
                    <tr>\
                        <th rowspan="2">근접 공격 시 확률로 10% 회복</th>\
                        <td>근접 공격 시 5% 확률로 10% 회복</td>\
                        <td>6.06%</td>\
                    </tr>   \
                    <tr>  \
                        <td>근접 공격 시 8% 확률로 10% 회복</td>\
                        <td>2.02%</td>\
                    </tr>  \
                    <tr>\
                        <th rowspan="2">원거리 공격 시 확률로 10% 회복</th>\
                        <td>원거리 공격 시 5% 확률로 10% 회복</td>\
                        <td>6.06%</td>\
                    </tr>   \
                    <tr>  \
                        <td>원거리 공격 시 8% 확률로 10% 회복</td>\
                        <td>3.03%</td>\
                    </tr>  \
                    <tr>\
                        <th rowspan="2">의문의 상자 발견 확률 증가</th>\
                        <td>의문의 상자 발견 확률 5% 증가</td>\
                        <td>11.11%</td>\
                    </tr>   \
                    <tr>  \
                        <td>의문의 상자 발견 확률 10% 증가</td>\
                        <td>3.03%</td>\
                    </tr>  \
                    <tr>\
                        <th rowspan="2">죽음에 이르는 피해를 입었을 때 확률로 체력 50% 회복</th>\
                        <td>죽음에 이르는 피해를 입었을 때 3% 확률로 체력 50% 회복</td>\
                        <td>4.04%</td>\
                    </tr>   \
                    <tr>  \
                        <td>죽음에 이르는 피해를 입었을 때 5% 확률로 체력 50% 회복</td>\
                        <td>1.01%</td>\
                    </tr> \
                </tbody>        \
            </table>           \
        </div>'

    table.innerHTML = str;  
} 