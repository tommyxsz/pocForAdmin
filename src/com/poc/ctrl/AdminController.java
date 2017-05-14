package com.poc.ctrl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.poc.db.model.Assess;
import com.poc.db.model.Assessor;
import com.poc.db.model.Auditor;
import com.poc.db.model.Claim;
import com.poc.db.model.Policy;
import com.poc.db.model.User;
import com.poc.service.AdminService;
import com.poc.util.JSONUtils;

@Controller
public class AdminController {
	
	private static final Logger	LOGGER	= LoggerFactory.getLogger(AdminController.class);
	
	@Autowired
	private AdminService adminService;
	
	@ResponseBody
	@RequestMapping(value="/admin/showAssess", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public String showAssess(Assess assess){
		return JSONUtils.toJSONString(adminService.showAssess(assess));
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/showUser", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public String showUsers(User user){
		return JSONUtils.toJSONString(adminService.showUsers(user));
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/showAssessor", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public String showAssessors(Assessor assessor){
		return JSONUtils.toJSONString(adminService.showAssessors(assessor));
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/showAuditor", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public String showAuditors(Auditor auditor){
		return JSONUtils.toJSONString(adminService.showAuditors(auditor));
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/showClaim", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public String showClaims(Claim claim){
		return JSONUtils.toJSONString(adminService.showClaims(claim));
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/showPolicy", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public String showPolicies(Policy policy){
		return JSONUtils.toJSONString(adminService.showPolicies(policy));
	}  
		
	
}
