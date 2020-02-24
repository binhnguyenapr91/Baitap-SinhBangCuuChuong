let row=0;
let col=0;
let html="";

for (row=1;row<=9;row++){
    html = html + "<tr>";
    for (col=1;col<=9;col++){
        html=html+"<td style='border: 1px solid; border-collapse: collapse'>"+col+"x"+row+"="+row*col+"</td>";
    }
    html= html +"</tr>";
}
document.getElementById("mainTable").innerHTML = html;