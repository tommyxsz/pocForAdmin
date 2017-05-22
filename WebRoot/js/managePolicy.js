$(function(){
	showPolicy();
	$("#btn_Search").click(function(){
		searchPolicy();
	});
	
	$("#btn_Add").click(function(){
		$("#form")[0].reset();
		$("#policyid").removeAttr("readonly");
		 $("#btn_Update").hide();
		 $("#btn_Delete").hide();
		 $("#btn_Insert").show();
		 $("#dialog").dialog();
	});
	
	
	$("#btn_Insert").click(function(){
		$.ajax({
			url:"/pocForAdmin/admin/insertPolicy",
			type:"POST",
			data:$("#form").serialize(),
			success:function(){
				alert("添加成功");
				showPolicy();
			},
			error:function(data,XMLHttpRequest, textStatus, errorThrow){
				alert("账户已经存在了,请更换");
	    },
			
		});
	});
	
	$("#btn_Update").click(function(){
		$.ajax({
			url:"/pocForAdmin/admin/updatePolicy",
			type:"POST",
			data:$("#form").serialize(),
			success:function(){
				alert("修改成功");
				selectPolicy();
				showPolicy();
			},
			error:function(data,XMLHttpRequest, textStatus, errorThrow){
				alert("账户已经存在了,请更换");
			}
		});
	});
	
	$("#btn_Delete").click(function(){
		$.ajax({
			url:"/pocForAdmin/admin/delPolicy",
			type:"POST",
			data:$("#form").serialize(),
			success:function(){
				alert("删除成功");
				$("button[title='close']").click();
				showPolicy();
			},
	});
	});
});

//查看所有保单
var showPolicy =function(){
	 $.ajax({
		 url:"/pocForAdmin/admin/showPolicy",
		 type:"POST",
		 dataType:"json",
		 success:function(data){
			 if(data!=""){
				 var tableInfo ="";
				 var i=1;
					$.each(data,function(i,Policy){
						i++;
						tableInfo +="<tr><td>" +i+"</td>"+
						"<td>"+Policy['policyid'] +"</td>"+
						"<td>"+Policy['policyType'] +"</td>"+
						"<td>"+Policy['plateNumber'] +"</td>"+
						"<td>"+"¥"+Policy['sum'] +"</td>"+
						"<td>"+Policy['recognizee'] +"</td>"+
						"<td><a href='#' onclick='selectPolicy(this)' abc='"+Policy['policyid']+"'>详 情</a></td></tr>";
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

var searchPolicy = function(){
	var searchCondition = $("#searchCondition").val().trim();
	var searchContent = $("#searchContent").val().trim();
	if(searchContent==""||searchContent==null){
		showPolicy();
	}else{
	$.ajax({
		 url:"/pocForAdmin/admin/showPolicy",
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
					$.each(data,function(i,Policy){
						i++;
						tableInfo +="<tr><td>" +i+"</td>"+
						"<td>"+Policy['policyid'] +"</td>"+
						"<td>"+Policy['policyType'] +"</td>"+
						"<td>"+Policy['plateNumber'] +"</td>"+
						"<td>"+"¥"+Policy['sum'] +"</td>"+
						"<td>"+Policy['recognizee'] +"</td>"+
						"<td><a href='#' onclick='selectPolicy(this)' abc='"+Policy['policyid']+"'>详 情</a></td></tr>";
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

var selectPolicy = function(a){
	var policyid = $(a).attr("abc");
	if(policyid!=null){	
	$.ajax({
		url:"/pocForAdmin/admin/showPolicy",
		type:"POST",
		data:{
			policyid:policyid
		},
		dataType:"json",
		success:function(data){
			if(data!=null){
				var policy = data[0];
				$("#form")[0].reset();
				$("#policyid").attr("readonly","readonly").val(policy.policyid);
				$("#policyType").val(policy.policyType);
				$("#recognizee").val(policy.recognizee);
				$("#plateNumber").val(policy.plateNumber);
				$("#sum").val(policy.sum);
				$("#startTime").val(policy.startTime);
				$("#endTime").val(policy.endTime);
				$("#btn_Update").show();
				$("#btn_Delete").show();
				$("#btn_Insert").hide();
			    $("#dialog").dialog();
			}
		}
	});
	}
}