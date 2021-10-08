let imageIds = ["test2", "test4"];

let loadButton = document.createElement('button');
loadButton.innerText = 'چاپ فیش';
loadButton.addEventListener('click', handleLoadRequest);

document.querySelector('#tabMainOther').append(loadButton);
var html = '<!DOCTYPE html><html  dir="rtl" lang="en"><head>  <title>داروخانه سلامی</title>  <meta charset="utf-8">  <meta name="viewport" content="width=device-width, initial-scale=1">  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script></head><body><div>  <h2>داروخانه سلامی</h2> <table class="table"><thead>  <tr>    <th></th>    <th></th>    <th></th>  </tr></thead><tbody>  <tr>    <td>';
function handleLoadRequest() {
 var date = document.getElementById('ctl00_ContentPlaceHolder1_lblRegDate').value;
 var guid = document.getElementById('ctl00_ContentPlaceHolder1_lblReqNum').value;
 var drcode = document.getElementById('ctl00_ContentPlaceHolder1_lblDocID').value;
 var nostype = document.getElementById('ctl00_ContentPlaceHolder1_lblCustType').value;
 var patientname = document.getElementById('ctl00_ContentPlaceHolder1_lblName').innerHTML;
 var noscode = document.getElementById('ctl00_ContentPlaceHolder1_lblNosSerial').innerHTML;

 html = html + guid + '</td> <td>' + date + '</td> </tr>' +'<tr> <td>' + patientname +'</td> <td>'+ nostype +'</td> </tr> <tr>   <td>'+noscode+ '</td> </tr></tbody></table>';
 html = html +'<table class="table"> <thead>   <tr>     <th>نام دارو</th>     <th>تعداد</th> </tr> </thead> <tbody>';
 
 var table = document.getElementById("ctl00_ContentPlaceHolder1_grdItems_DXMainTable");
 var totalRowCount = table.rows.length - 3;
 for (let i = 0; i < totalRowCount; i++) {
  var trs =document.getElementById('ctl00_ContentPlaceHolder1_grdItems_DXDataRow'+[i]);
  var name=trs.cells[1].innerHTML;
  var count=trs.cells[2].innerHTML;
html = html + '<tr><td>' + name + '</td><td>' +count + '</td></tr>';
}
html = html +'</tbody><tfoot>  <tr>    <td>سمنان - سرخه - خیابان ولیعصر روبه روی بانک ملت 02333612666</td> </tr></tfoot></table>  </div></body></html>';
html = html +'<script>  window.print();</script>'
var opened = window.open("");
 opened.document.write(html);

}
