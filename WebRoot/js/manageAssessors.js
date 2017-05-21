$(function(){
	showAssessor();
	$("#btn_Search").click(function(){
		searchAssessor();
	});
	
	$("#btn_Add").click(function(){
		$("#form")[0].reset();
		 $("#btn_Update").hide();
		 $("#btn_Delete").hide();
		 $("#btn_Insert").show();
		 $("#dialog").dialog();
	});
	
	
	$("#btn_Insert").click(function(){
		$.ajax({
			url:"/pocForAdmin/admin/insertAssessor",
			type:"POST",
			data:$("#form").serialize(),
			success:function(){
				alert("添加成功");
				showAssessor();
			},
			error:function(data,XMLHttpRequest, textStatus, errorThrow){
				alert("账户已经存在了,请更换");
	    },
			
		});
	});
	
	$("#btn_Update").click(function(){
		$.ajax({
			url:"/pocForAdmin/admin/updateAssessor",
			type:"POST",
			data:$("#form").serialize(),
			success:function(){
				alert("修改成功");
				selectAssessor();
				showAssessor();
			},
			error:function(data,XMLHttpRequest, textStatus, errorThrow){
				alert("账户已经存在了,请更换");
			}
		});
	});
	
	$("#btn_Delete").click(function(){
		$.ajax({
			url:"/pocForAdmin/admin/delAssessor",
			type:"POST",
			data:$("#form").serialize(),
			success:function(){
				alert("删除成功");
				$("button[title='close']").click();
				showAssessor();
			},
	});
	});
});

//查看所有保单
var showAssessor =function(){
	 $.ajax({
		 url:"/pocForAdmin/admin/showAssessor",
		 type:"POST",
		 dataType:"json",
		 success:function(data){
			 if(data!=""){
				 var tableInfo ="";
				 var i=1;
					$.each(data,function(i,Assessor){
						i++;
						tableInfo +="<tr><td>" +i+"</td>"+
						"<td>"+Assessor['asorid'] +"</td>"+
						"<td>"+Assessor['name'] +"</td>"+
						/*"<td>"+Assessor['sex'] +"</td>"+*/
						"<td>"+Assessor['mobile'] +"</td>"+
						"<td><a href='#' onclick='selectAssessor(this)' abc='"+Assessor['asorid']+"'>详 情</a></td></tr>";
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

var searchAssessor = function(){
	var searchCondition = $("#searchCondition").val().trim();
	var searchContent = $("#searchContent").val().trim();
	if(searchContent==""||searchContent==null){
		showAssessor();
	}
	else{
		 $.ajax({
			 url:"/pocForAdmin/admin/showAssessor",
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
						$.each(data,function(i,Assessor){
							i++;
							tableInfo +="<tr><td>" +i+"</td>"+
							"<td>"+Assessor['asorid'] +"</td>"+
							"<td>"+Assessor['name'] +"</td>"+
							/*"<td>"+Assessor['sex'] +"</td>"+*/
							"<td>"+Assessor['mobile'] +"</td>"+
							"<td><a href='#' onclick='selectAssessor(this)' abc='"+Assessor['asorid']+"'>详 情</a></td></tr>";
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

var selectAssessor = function(a){
	var asorid= $(a).attr("abc");
	if( asorid !=null){
		$.ajax({
			url:"/pocForAdmin/admin/showAssessor",
			type:"POST",
			data:{
				asorid:asorid
			},
			dataType:"json",
			success:function(data){
				if(data!=null){
					var assessor = data[0];
					$("#form")[0].reset();
				    $("#asorid").val(assessor.asorid);
				    $("#aspassword").val(assessor.aspassword); 
				    $("#name").val(assessor.name);
				    $("#sex").val(assessor.sex);
				    $("#mobile").val(assessor.mobile);
				    $("#btn_Update").show();
				    $("#btn_Delete").show();
				    $("#btn_Insert").hide();
					$("#dialog").dialog();
				}
			}
		});
	}
}

