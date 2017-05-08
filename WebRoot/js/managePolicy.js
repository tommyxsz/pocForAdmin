$(function(){
	showPolicy();
});

//查看所有保单
var showPolicy =function(){
	 $.ajax({
		 url:"/pocForAdmin/showPolicy",
		 type:"POST",
		 dataType:"json",
		 success:function(data){
			 if(data!=""){
				 var tableInfo ="";
				 var i=1;
					$.each(data,function(i,Policy){
						i++;
						tableInfo +="<tr><td>" +i+"</td>"+
						"<td>"+Policy['caseid'] +"</td>"+
						"<td>"+Policy['asid'] +"</td>"+
						"<td>"+Policy['plateNumber'] +"</td>"+
						"<td>"+"¥"+Policy['sum'] +"</td>"+
						"<td>"+Policy['PolicyTime'] +"</td>"+
						"<td><a href='#'>详 情</a></td></tr>";
					});
					$("#hiddenresult").html(tableInfo);
					$("#Pagination").pagination(data.length, {
						prev_text: "« 上一页",
		                next_text: "下一页 »",
						num_edge_entries: 1, //边缘页数
						num_display_entries: 4, //主体页数
						callback: pageselectCallback,
						items_per_page:10,//每页显示10项
					});
			 }
		 } 
	 })
}

var pageselectCallback =function(page_index, jq){
	var new_content = "";
	for(var i=(page_index*10);i>=(page_index*10)&&i<(page_index+1)*10;i++){
		new_content+="<tr>"+$("#hiddenresult tr:eq("+i+")").html()+"</tr>";
	}
	$("#tbody_claimSchedule").empty().html(new_content); //装载对应分页的内容
	return false;
};