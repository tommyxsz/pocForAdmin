$(function(){
	showUser();
	$("#btn_Search").click(function(){
		searchUser();
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
			url:"/pocForAdmin/admin/insertUser",
			type:"POST",
			data:$("#form").serialize(),
			success:function(){
				alert("添加成功");
				showUser();
			},
			error:function(data,XMLHttpRequest, textStatus, errorThrow){
				alert("账户已经存在了,请更换");
	    },
			
		});
	});
	
	$("#btn_Update").click(function(){
		$.ajax({
			url:"/pocForAdmin/admin/updateUser",
			type:"POST",
			data:$("#form").serialize(),
			success:function(){
				alert("修改成功");
				selectUser();
				showUser();
			},
			error:function(data,XMLHttpRequest, textStatus, errorThrow){
				alert("账户已经存在了,请更换");
			}
		});
	});
	
	$("#btn_Delete").click(function(){
		$.ajax({
			url:"/pocForAdmin/admin/delUser",
			type:"POST",
			data:$("#form").serialize(),
			success:function(){
				alert("删除成功");
				$("button[title='close']").click();
				showUser();
			},
	});
	});
	
});

//查看所有保单
var showUser =function(){
	 $.ajax({
		 url:"/pocForAdmin/admin/showUser",
		 type:"POST",
		 dataType:"json",
		 success:function(data){
			 if(data!=""){
				 var tableInfo ="";
				 var i=1;
					$.each(data,function(i,User){
						i++;
						tableInfo +="<tr><td>" +i+"</td>"+
						"<td>"+User['uid'] +"</td>"+
						"<td>"+User['name'] +"</td>"+
						"<td>"+User['mobile'] +"</td>"+
						"<td>"+User['email'] +"</td>"+
						"<td>"+User['postcode'] +"</td>"+
						"<td><a href='#' onclick='selectUser(this)' abc='"+User['uid']+"'>详 情</a></td></tr>";
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

var searchUser = function(){
	var searchCondition = $("#searchCondition").val().trim();
	var searchContent = $("#searchContent").val().trim();
	if(searchContent==""||searchContent==null){
		showUser();
	}else{
		 $.ajax({
			 url:"/pocForAdmin/admin/showUser",
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
						$.each(data,function(i,User){
							i++;
							tableInfo +="<tr><td>" +i+"</td>"+
							"<td>"+User['uid'] +"</td>"+
							"<td>"+User['name'] +"</td>"+
							"<td>"+User['mobile'] +"</td>"+
							"<td>"+User['email'] +"</td>"+
							"<td>"+User['postcode'] +"</td>"+
							"<td><a href='#' onclick='selectUser(this)' abc='"+User['uid']+"'>详 情</a></td></tr>";
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

var selectUser = function(a){
	var uid= $(a).attr("abc");
	if( uid !=null){
		$.ajax({
			url:"/pocForAdmin/admin/showUser",
			type:"POST",
			data:{
				uid:uid
			},
			dataType:"json",
			success:function(data){
				if(data!=null){
					var user = data[0];
					$("#form")[0].reset();
				    $("#uid").val(user.uid);
				    $("#upassword").val(user.upassword); 
				    $("#name").val(user.name);
				    $("#sex").val(user.sex);
				    $("#mobile").val(user.mobile);
				    $("#email").val(user.email);
				    $("#address").val(user.address);
				    $("#postcode").val(user.postcode);
				    $("#account").val(user.account);
				    $("#btn_Update").show();
				    $("#btn_Delete").show();
				    $("#btn_Insert").hide();
					$("#dialog").dialog();
				}
			}
		});
	}
}

