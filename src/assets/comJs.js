/**
 *  导出表格
 */
export function tableToExcel(jsonData) {
    let str = '';
    //循环遍历，每行加入tr标签，每个单元格加td标签
    for (let i = 0; i < jsonData.length; i++) {
        str += '<tr>';
        for (let item in jsonData[i]) {
            //增加\t为了不让表格显示科学计数法或者其他格式
            str += `<td>${jsonData[i][item] + '\t'}</td>`;
        }
        str += '</tr>';
    }
    //Worksheet名
    let worksheet = 'Sheet1'
    let uri = 'data:application/vnd.ms-excel;base64,';

    //下载的表格模板数据
    let template = `<html xmlns:o="urn:schemas-microsoft-com:office:office" 
      xmlns:x="urn:schemas-microsoft-com:office:excel" 
      xmlns="http://www.w3.org/TR/REC-html40">
      <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
        <x:Name>${worksheet}</x:Name>
        <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
        </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
        </head><body><table>${str}</table></body></html>`;
    //下载模板
    window.location.href = uri + base64(template)
}
//输出base64编码
const base64 = (s) => {
    return window.btoa(unescape(encodeURIComponent(s)))
}

/**
 * 格式化日期
 */
export function formatDate(datetime) {
    var t = new Date(datetime);//row 表示一行数据, updateTime 表示要格式化的字段名称
    var year = t.getFullYear(),
        month = t.getMonth() + 1,
        day = t.getDate(),
        hour = t.getHours(),
        min = t.getMinutes(),
        sec = t.getSeconds();
    var newTime = year + '-' +
        (month < 10 ? '0' + month : month) + '-' +
        (day < 10 ? '0' + day : day) + ' ' +
        (hour < 10 ? '0' + hour : hour) + ':' +
        (min < 10 ? '0' + min : min) + ':' +
        (sec < 10 ? '0' + sec : sec);
    return newTime;
}