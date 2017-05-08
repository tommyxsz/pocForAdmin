$(function(){	
		$("button[type='submit']").click(function(){
			formSubmit();
		});
});

function formSubmit(){
//对login进行填写校验
	$("#loginForm").validate({
		rules:{
			uid:{
				required:true,
				maxlength:20
			},
			upassword:{
				required:true,
			},
		},
	messages:{
		uid:{
			required:'请 输 入 用 户 名',
			maxlength:'用 户 过 长'
		},
		upassword:{
			required:"请 输 入 密 码"
		}
	},
	submitHandler:function(){
		var id= $("#id").val().trim();
		var password= $("#password").val().trim();
		$.ajax({
			url:"/pocForAdmin/login",
			type:"POST",
			/*dataType:"json",*/
			data:{
				id:id,
				password:password,
			},
			success:function(data){
				if(data=="success"){
					$("#message").hide();
					location.href = "../../pocForAdmin/pages/adminIndex.jsp";
				}
				if(data=="fail"){
					$("#message").show();
				}
			},
			error:function(data,XMLHttpRequest, textStatus, errorThrown){
				alert("服务器未响应,请重新操作");
		    },
		});
	}
	});

}

