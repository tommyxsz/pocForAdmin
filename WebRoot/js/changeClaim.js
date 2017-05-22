function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

$(function(){
	selectClaim();
	
	$("#btn_Delete").click(function(){
		$.ajax({
			 url:"/pocForAdmin/admin/delClaim",
			 type:"POST",
			 data:$("#claimApplicationForm").serialize(),
		     success:function(){
		    	 alert("删除成功");
		    	 window.location.href="../../pocForAdmin/pages/manageClaim.jsp";
		     }
		})
	});
	
	$("#btn_Update").click(function(){
		$.ajax({
			 url:"/pocForAdmin/admin/updateClaim",
			 type:"POST",
			 data:$("#claimApplicationForm").serialize(),
		     success:function(){
		    	 alert("修改成功");
		     }
		})
	});
	
	$("#btn_Insert").click(function(){
		$.ajax({
			 url:"/pocForAdmin/admin/insertClaim",
			 type:"POST",
			 data:$("#claimApplicationForm").serialize(),
		     success:function(){
		    	 alert("添加成功");
		     }
		})
	})
	
});

var selectClaim = function(){
	var caseid = GetQueryString("caseid");
	if(caseid !=null && caseid.toString().length>=1){
		$.ajax({
			url:"/pocForAdmin/admin/showClaim",
			type:"POST",
			data:{
				caseid:caseid
			},
			dataType:"json",
			success:function(data){
				if(data!=""){
					var claim = data[0];
					$("#caseid").attr("readonly","readonly").val(claim.caseid);
					$("#a1id").val(claim.a1id);
					$("#a2id").val(claim.a2id);
					$("#recognizee").val(claim.recognizee);
					$("#plateNumber").val(claim.plateNumber);
					$("#caseTime").val(claim.caseTime);
					$("#casePlace").val(claim.casePlace);
					$("#reportPerson").val(claim.reportPerson);
					$("#reportTime").val(claim.reportTime);
					$("#reportPersonMobile").val(claim.reportPersonMobile);
					$("#driver").val(claim.driver);
					$("#driverMobile").val(claim.driverMobile);
					$("#caseDescribe").val(claim.caseDescribe);
					$("#reason").val(claim.reason);
					$("#btn_Insert").hide();
				}
				else{
					$("#btn_Delete").hide();
					$("#btn_Update").hide();
				}
			}
		});
	}
}


