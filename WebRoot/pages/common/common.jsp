<%@ page language="java" import="com.poc.util.*" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%
String path_common = request.getContextPath();
String basePath_common = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path_common+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<%-- <%@include file="commoncss.jsp"%> --%>
<!-- Custom CSS -->
    <link href="<%=basePath_common%>css/common/sb-admin.css" rel="stylesheet">
</head>
<body>
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="adminIndex.jsp">网上理赔系统</a>
            </div>
            <!-- Top Menu Items -->
            <ul class="nav navbar-right top-nav">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i><span id="loginedId"> 未  命  名 </span><b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="<%=basePath_common%>pages/login.jsp "><i class="fa fa-fw fa-power-off"></i> Log Out</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
             <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav side-nav">
                            <li>
                                <a href="<%=basePath_common%>pages/manageUsers.jsp"><i class="fa fa-fw fa-coffee"></i>用 户 管 理</a>
                            </li>
                            <li>
                                <a href="<%=basePath_common%>pages/manageAssessors.jsp"><i class="fa fa-fw fa-bar-chart-o"></i>定 损 员 管 理</a>
                            </li>
                            <li>
                                <a href="<%=basePath_common%>pages/manageAuditors.jsp"><i class="fa fa-fw fa-table"></i>审 批 员 管 理</a>
                            </li>
                            <li>
                                <a href="<%=basePath_common%>pages/managePolicy.jsp"><i class="fa fa-fw fa-table"></i>保 单 管 理</a>
                            </li>
                            <li>
                                <a href="<%=basePath_common%>pages/manageAssess.jsp"><i class="fa fa-fw fa-table"></i>定 损 单 管 理</a>
                            </li>
                            <li>
                                <a href="<%=basePath_common%>pages/manageClaim.jsp"><i class="fa fa-fw fa-table"></i>理 赔 单 管 理</a>
                            </li>
                            <li>
                                <a href="<%=basePath_common%>pages/dataStatistics.jsp"><i class="fa fa-fw fa-table"></i>数 据 统 计</a>
                            </li>
                        </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>
<%--  <%@include file="commonjs.jsp"%> --%>
</body>
<%--  <script src='<%=basePath%>js/common.js'></script>  --%>
</html>