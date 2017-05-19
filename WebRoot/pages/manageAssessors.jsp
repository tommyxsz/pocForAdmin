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
							<th>性别</th>
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