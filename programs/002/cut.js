var cut, gene, genelist, genelengths, genes;
update();

function update(){
  cut = document.getElementById('enzyme').value;
  genes = document.getElementsByClassName('gene');
  genTable();
}

function addrow(){
  var input = document.createElement('input');
  input.setAttribute('class', 'gene');
  input.setAttribute('onkeyup', 'update()');
  input.setAttribute('type', 'text');
  document.getElementById('inputs').appendChild(input);
  update();
}

function removerow(){
  var ins = document.getElementById('inputs');
  ins.removeChild(ins.lastChild);
  update();
}

function getGenes(a){
  gene = genes[a].value;
  genelist = gene.split(cut.replace(/\//g, ""));
  genelengths = new Array(genelist.length);
  for (var i = 0; i < genelist.length; i++){
    genelengths[i] = genelist[i].length;
    if ( i < genelist.length - 1 ) {
      genelist[i]+="<span style=\"background-color: #009ACD\">"+cut.split("/")[0]+"</span>";
      genelengths[i]+=cut.split("/")[0].length;
    }
    if ( i > 0 ) {
      genelist[i]= "<span style=\"background-color: #009ACD\">"+cut.split("/")[1]+"</span>"+genelist[i];
      genelengths[i]+=cut.split("/")[1].length;
    }
  }
}

function genTable(){
  clearTable()
  for ( var a = 0; a < genes.length;  a++){
    getGenes(a);
    var tbl = document.createElement('table');
    tbl.setAttribute("cellspacing", "0");
    for ( var i = 0; i < 2; i++ ) {
      var row = tbl.insertRow(tbl.rows.length);
      for ( var j = 0; j < genelist.length; j++ ){
        console.log(i);
        if ( i == 0 ){
          row.insertCell(j).innerHTML = genelist[j];
        }else{
          row.insertCell(j).innerHTML = genelengths[j];
        }
      }
    }
    document.getElementById("output").appendChild(tbl);
  }
}

function clearTable(){
  var myNode = document.getElementById("output");
  while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
  }
}
