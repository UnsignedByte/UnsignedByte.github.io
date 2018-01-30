var x1, y1, x2, y2;

update();
function update(){
  x1 = document.getElementById('x1').value;
  x2 = document.getElementById('x2').value;
  y1 = document.getElementById('y1').value;
  y2 = document.getElementById('y2').value;
  if(!isNaN(x1) && !isNaN(x2) && !isNaN(y1) && !isNaN(y2)){
    if(x1 && y1 && x2 && y2){
      genTable('table1', x1, y1)
      genTable('table2', x2, y2)
      genTable('table3', x1, y2)
    }
  }
}

function MatrixUpdate (id){
  var cellId = id.split("-");
  if ( cellId [ 0 ] == 3 ){
    var tbl = document.getElementById( 'table' + cellId [ 0 ] );
  }else{
    console.log(cellId);
    fixTable();
  }
}

function fixTable(){
  console.log(x1,y2);
  for ( var i = 0; i < x1; i++ ){
    for ( var j = 0; j < y2; j++ ){
      document.getElementById('3-'+j+'-'+i).setAttribute('value', sumRow(j)*sumColumn(i));
      console.log(sumRow(j), sumColumn(i));
    }
  }
}

function sumRow(j){
  var sum = 0;
  for ( var i = 0; i < x2; i++ ){
    sum+=parseInt(document.getElementById('2-'+j+"-"+i).value);
  }
  return sum;
}
function sumColumn(j){
  var sum = 0;
  for ( var i = 0; i < x2; i++ ){
    sum+=parseInt(document.getElementById('1-'+i+"-"+j).value);
  }
  return sum;
}

function genTable(tableId, x, y){
  var tbl = document.getElementById(tableId);
  clearTable(tableId)
  for ( var i = 0; i < y; i++ ) {
    var row = tbl.insertRow(tbl.rows.length);
    for ( var j = 0; j < x; j++ ){
      var input = document.createElement('input');
      input.setAttribute("class", "square");
      input.setAttribute("type", "text");
      input.setAttribute("value", "1");
      var id = tableId[tableId.length-1]+"-"+i+"-"+j;
      input.setAttribute("id", id);
      input.setAttribute("onkeyup", "MatrixUpdate(\""+id+"\")");
      row.insertCell(j).appendChild(input);
    }
  }
}

function clearTable(tableId){
  for(var i = document.getElementById(tableId).rows.length; i > 0; i--){
    document.getElementById(tableId).deleteRow(i - 1);
  }
}
