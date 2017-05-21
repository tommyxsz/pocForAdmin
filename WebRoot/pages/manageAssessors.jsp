<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>管理员-定 损 员 管 理</title>
<!-- 公共css -->
<%@include file="common/commoncss.jsp"%>
<!-- 自定义css -->
<link href="<%=basePath%>css/manageAssessor.css" rel="stylesheet">
  </head>
  
  <body>
   <div id="wrapper">
<!-- 正文内容开始 -->
		<div id="page-wrapper">
			<div class="container-fluid">
			<div class="tableTool">
			<strong>定 损 员 管 理 </strong>
			<div class="searchTool">
			<select id="searchCondition">
			<option value="asorid">账号</option>
			<option value="name">姓名</option>
			<option value="mobile">手机号</option>
			</select>
			<input id="searchContent" type="text" placeholder="请输入搜索的内容">
			<button id="btn_Search" class="red icon-search btn btn-primary">搜索</button>
			<button id="btn_Add" class="yellow icon-search btn btn-primary">新增</button>
			</div>
			</div>
			<table class="table table-striped table-bordered table-hover">
					<thead>
						<tr>
						    <th>序号</th>
							<th>账号</th>
							<th>姓名</th>
							<th>联系电话</th> 
							<th>更多</th>
						</tr>
					</thead>
					<tbody id="tbody_claimSchedule">
						<tr><td class="noMessage"  colspan="8">没 有 任 何 信 息</td></tr>
					</tbody>
				</table>
				<div id="Pagination" class="pagination"></div>
				<div id="hiddenresult" style="display:none"></div>
				
				<!-- 定损员增删改查dialog界面 -->
				<div id="dialog" role="dialog" title="定损员详情" class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front ui-dialog-buttons ui-draggable ui-resizable" style="width: 200px; min-height: 19px; max-height: none; height: auto; display:none">
						<h4>
							<strong>定损员信息</strong>
						</h4>
						<form id="form">
						<div>
						<div>
							<div class="form-control">
								<label>账户:</label> <input id="asorid" name="asorid">
							</div>
							<div class="form-control">
								<label>密码:</label> <input id="aspassword" name="aspassword">
							</div>
							<div class="form-control">
								<label>姓名:</label> <input id="name" name="name" >
							</div>
							<!-- <div class="form-control">
								<label>性别:</label> <input id="sex" name="sex">
							</div> -->
							<div class="form-control">
								<label>电话:</label><input id="mobile" name="mobile" class="margin-repair">
							</div>
						</div>
						<div class="btn-group">
						<input type="button" value="修改" class="btn" id="btn_Update">
						<input type="button" value="添加" class="btn" id="btn_Insert">
						<input type="button" value="删除" class="btn" id="btn_Delete">
						</div>
						</div>
						</form>
					</div>
				<!--定损员增删改结束  -->
			</div>
			</div>
			<%@include file="common/common.jsp" %>
			</div>
  </body>
   <!-- 公共js -->
    <%@include file="common/commonjs.jsp"%>
 <!--   <!-- Common js -->
  <script src='<%=basePath%>js/common.js'></script>
  <!--  自定义js-->
  <script src='<%=basePath%>js/manageAssessors.js'></script>
</html>