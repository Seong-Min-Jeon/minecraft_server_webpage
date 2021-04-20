function effect4() {

    var table = document.getElementById("table");        
    
    var str =  '<div style="clear: both;" class="divTable">\
            <table border="1" bordercolor=#009879 class="settingTable">\
                <thead>\
                    <tr>\
                        <p><td colspan="3" align="center">2랭크에서 등장하는 효과</td></p>\
                    </tr>\
                </thead>\
                <tbody class="equip">\
                    <tr>\
                        <th rowspan="3">전투 경험치 증가</th>\
                        <td>전투 경험치 5% 증가</td>\
                        <td>1.626%</td>\
                    </tr>\
                    <tr>\
                        <td>전투 경험치 10% 증가</td>\
                        <td>2.439%</td>\
                    </tr>\
                    <tr>\
                        <td>전투 경험치 15% 증가</td>\
                        <td>0.813%</td>\
                    </tr>\
                    <tr>\
                        <th rowspan="3">회피 확률 증가</th>\
                        <td>회피 확률 5% 증가</td>\
                        <td>4.878%</td>\
                    </tr>\
                    <tr>\
                        <td>회피 확률 10% 증가</td>\
                        <td>3.252%</td>\
                    </tr>\
                    <tr>\
                        <td>회피 확률 15% 증가</td>\
                        <td>1.626%</td>\
                    </tr>    \
                    <tr>\
                        <th rowspan="2">반격 데미지</th>\
                        <td>반격 데미지 2배</td>\
                        <td>2.439%</td>\
                    </tr>   \
                    <tr>\
                        <td>반격 데미지 3배</td>\
                        <td>1.626%</td>\
                    </tr>   \
                    <tr>\
                        <th rowspan="2">흡혈</th>\
                        <td>흡혈 0.5%</td>\
                        <td>2.439%</td>\
                    </tr> \
                    <tr>                       \
                        <td>흡혈 1%</td>\
                        <td>0.813%</td>\
                    </tr>    \
                    <tr>\
                        <th rowspan="3">근접 공격 시 마나 획득</th>\
                        <td>근접 공격 시 10% 확률로 마나 획득</td>\
                        <td>3.252%</td>\
                    </tr>   \
                    <tr>  \
                        <td>근접 공격 시 15% 확률로 마나 획득</td>\
                        <td>2.439%</td>\
                    </tr>   \
                    <tr>  \
                        <td>근접 공격 시 20% 확률로 마나 획득</td>\
                        <td>1.626%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="3">원거리 공격 시 마나 획득</th>\
                        <td>원거리 공격 시 10% 확률로 마나 획득</td>\
                        <td>4.065%</td>\
                    </tr>   \
                    <tr>  \
                        <td>원거리 공격 시 15% 확률로 마나 획득</td>\
                        <td>2.439%</td>\
                    </tr>   \
                    <tr>  \
                        <td>원거리 공격 시 20% 확률로 마나 획득</td>\
                        <td>2.439%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="3">근접 공격 시 독 데미지</th>\
                        <td>근접 공격 시 독 데미지 8</td>\
                        <td>0.813%</td>\
                    </tr>   \
                    <tr>  \
                        <td>근접 공격 시 독 데미지 9</td>\
                        <td>2.439%</td>\
                    </tr>  \
                    <tr>  \
                        <td>근접 공격 시 독 데미지 10</td>\
                        <td>1.626%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="3">원거리 공격 시 독 데미지</th>\
                        <td>원거리 공격 시 독 데미지 8</td>\
                        <td>0.813%</td>\
                    </tr>   \
                    <tr>  \
                        <td>원거리 공격 시 독 데미지 9</td>\
                        <td>2.439%</td>\
                    </tr>  \
                    <tr>  \
                        <td>원거리 공격 시 독 데미지 10</td>\
                        <td>1.626%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="3">근접 공격 시 확률로 10% 회복</th>\
                        <td>근접 공격 시 5% 확률로 10% 회복</td>\
                        <td>3.252%</td>\
                    </tr>   \
                    <tr>  \
                        <td>근접 공격 시 8% 확률로 10% 회복</td>\
                        <td>3.252%</td>\
                    </tr>  \
                    <tr>  \
                        <td>근접 공격 시 10% 확률로 10% 회복</td>\
                        <td>1.626%</td>\
                    </tr>  \
                    <tr>\
                        <th rowspan="3">원거리 공격 시 확률로 10% 회복</th>\
                        <td>원거리 공격 시 5% 확률로 10% 회복</td>\
                        <td>3.252%</td>\
                    </tr>   \
                    <tr>  \
                        <td>원거리 공격 시 8% 확률로 10% 회복</td>\
                        <td>2.439%</td>\
                    </tr> \
                    <tr>  \
                        <td>원거리 공격 시 10% 확률로 10% 회복</td>\
                        <td>1.626%</td>\
                    </tr>  \
                    <tr>\
                        <th rowspan="3">의문의 상자 발견 확률 증가</th>\
                        <td>의문의 상자 발견 확률 5% 증가</td>\
                        <td>5.691%</td>\
                    </tr>   \
                    <tr>  \
                        <td>의문의 상자 발견 확률 10% 증가</td>\
                        <td>4.065%</td>\
                    </tr>  \
                    <tr>  \
                        <td>의문의 상자 발견 확률 15% 증가</td>\
                        <td>2.439%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="2">죽음에 이르는 피해를 입었을 때 확률로 체력 50% 회복</th>\
                        <td>죽음에 이르는 피해를 입었을 때 3% 확률로 체력 50% 회복</td>\
                        <td>1.626%</td>\
                    </tr>   \
                    <tr>  \
                        <td>죽음에 이르는 피해를 입었을 때 5% 확률로 체력 50% 회복</td>\
                        <td>1.626%</td>\
                    </tr> \
                    <tr>\
                        <th>화살 장전 속도 감소</th>\
                        <td>화살 장전 속도 감소 I</td>\
                        <td>1.626%</td>\
                    </tr>   \
                    <tr>  \
                        <th>확산 화살</th>\
                        <td>확산 화살 I</td>\
                        <td>1.626%</td>\
                    </tr> \
                    <tr>\
                        <th>독 데미지 경감</th>\
                        <td>독 데미지 10% 경감</td>\
                        <td>1.626%</td>\
                    </tr>   \
                    <tr>\
                        <th>위더 데미지 경감</th>\
                        <td>위더 데미지 10% 경감</td>\
                        <td>1.626%</td>\
                    </tr>   \
                    <tr>\
                        <th rowspan="2">공격력</th>\
                        <td>공격력: 1000</td>\
                        <td>2.439%</td>\
                    </tr>   \
                    <tr>  \
                        <td>공격력: 2000</td>\
                        <td>0.813%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="2">추가 데미지(인간형)</th>\
                        <td>추가 데미지(인간형): 1000</td>\
                        <td>2.439%</td>\
                    </tr>   \
                    <tr>  \
                        <td>추가 데미지(인간형): 2000</td>\
                        <td>0.813%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="2">추가 데미지(동물형)</th>\
                        <td>추가 데미지(동물형): 1000</td>\
                        <td>2.439%</td>\
                    </tr>   \
                    <tr>  \
                        <td>추가 데미지(동물형): 2000</td>\
                        <td>0.813%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="2">추가 데미지(기타)</th>\
                        <td>추가 데미지(기타): 1000</td>\
                        <td>2.439%</td>\
                    </tr>   \
                    <tr>  \
                        <td>추가 데미지(기타): 2000</td>\
                        <td>0.813%</td>\
                    </tr> \
                    <tr>\
                        <th>스플레시</th>\
                        <td>스플레시: 1000</td>\
                        <td>1.626%</td>\
                    </tr>  \
                </tbody>    \
            </table>\
        </div>'

    table.innerHTML = str;  
} 