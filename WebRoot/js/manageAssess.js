$(function(){
	showAssess();
	$("#btn_Search").click(function(){
		searchAssess();
	});
	$("#btn_Add").click(function(){
		window.open("/pocForAdmin/pages/changeAssess.jsp"); 
	});
});

//查看所有保单
var showAssess =function(){
	 $.ajax({
		 url:"/pocForAdmin/admin/showAssess",
		 type:"POST",
		 dataType:"json",
		 success:function(data){
			 if(data!=""){
				 var tableInfo ="";
				 var i=1;
					$.each(data,function(i,assess){
						i++;
						tableInfo +="<tr><td>" +i+"</td>"+
						"<td>"+assess['caseid'] +"</td>"+
						"<td>"+assess['asid'] +"</td>"+
						"<td>"+assess['plateNumber'] +"</td>"+
						"<td>"+"¥"+assess['sum'] +"</td>"+
						"<td>"+assess['assessTime'] +"</td>"+
						"<td><a href='#' onclick='updateAssess(this)' abc='"+assess['asid']+"'>详 情</a></td></tr>";
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

var searchAssess = function(){
	var searchCondition = $("#searchCondition").val().trim();
	var searchContent = $("#searchContent").val().trim();
	if(searchContent==""||searchContent==null){
		showAssess();
	}
	else{
		$.ajax({
		 url:"/pocForAdmin/admin/showAssess",
		 type:"POST",
		 data:searchCondition+"="+searchContent,
		 dataType:"json",
		 success:function(data){
			 if(data==""){
				 $("#tbody_claimSchedule").empty()
			 }
			 if(data!=""){
				 var tableInfo ="";
				 var i=1;
					$.each(data,function(i,assess){
						i++;
						tableInfo +="<tr><td>" +i+"</td>"+
						"<td>"+assess['caseid'] +"</td>"+
						"<td>"+assess['asid'] +"</td>"+
						"<td>"+assess['plateNumber'] +"</td>"+
						"<td>"+"¥"+assess['sum'] +"</td>"+
						"<td>"+assess['assessTime'] +"</td>"+
						"<td><a href='#' onclick='updateAssess(this)' abc='"+assess['asid']+"'>详 情</a></td></tr>";
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
}

var updateAssess = function(a){
	var asid = $(a).attr("abc");
	window.open("/pocForAdmin/pages/changeAssess.jsp?asid="+asid); 
}