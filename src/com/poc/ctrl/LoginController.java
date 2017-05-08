package com.poc.ctrl;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.poc.service.AdminService;


@Controller
public class LoginController {
	
	@Autowired
	private AdminService adminService;
	
	@ResponseBody
	@RequestMapping(value="/login", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public String stuffLogin(String id,String password,HttpServletResponse response){
		return adminService.adminLogin(id,password,response);
	}  
}
