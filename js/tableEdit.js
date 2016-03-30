function deleteRow(deleteBtn){
	var tmpRow = deleteBtn.parent();
	tmpRow.remove();
}
function addRow(tableObj,data){
	var rowData = data || [];
	var tmp = '';
	for(var i=0;i<rowData.length;i++){
		tmp+='<td>'+rowData[i]+'</td>';		
	}
	tmp = '<tr>'+tmp+'<td class="btnWra"><span class="glyphicon glyphicon-remove"></span></td></tr>';
	tableObj.append(tmp);
	$('td.btnWra').bind('click', function(){
		deleteRow($(this));
	});
}
function getForm(formObj){
	// 后台部分
	// var formData = formObj.serialize();
	// formData = formData.split('&');
	var formData = [];
	$('input').each(function() {
		formData.push($(this).val());
	});
	formData.shift();
	return formData;
}

$('td.btnWra').bind('click', function(){
	deleteRow($(this));
});

$('#modalConfirm').click(function() {
	var formData = getForm($('form'));
	addRow($('table'), formData);
	$('#myModal').modal('hide');
});