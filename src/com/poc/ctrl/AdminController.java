package com.poc.ctrl;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

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
	@RequestMapping(value="/admin/insertUser", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public void insertUser(User user){
		adminService.insertUser(user);
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/updateUser", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public void updateUser(User user){
		adminService.updateUser(user);
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/delUser", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public void delUser(User user){
		adminService.delUser(user);
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/showAuditor", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public String showAuditors(Auditor auditor){
		return JSONUtils.toJSONString(adminService.showAuditors(auditor));
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/insertAuditor", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public void insertAuditor(Auditor auditor){
		adminService.insertAuditor(auditor);
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/updateAuditor", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public void updateAuditor(Auditor auditor){
        adminService.updateAuditor(auditor);
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/delAuditor", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public void delAuditor(Auditor auditor){
		adminService.delAuditor(auditor);
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/showAssessor", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public String showAssessor(Assessor assessor){
		return JSONUtils.toJSONString(adminService.showAssessors(assessor));
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/insertAssessor", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public void insertAssessor(Assessor assessor){
		adminService.insertAssessor(assessor);
	}
	
	@ResponseBody
	@RequestMapping(value="/admin/updateAssessor", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public void updateAssessor(Assessor assessor){
		adminService.updateAssessor(assessor);
	}
	
	@ResponseBody
	@RequestMapping(value="/admin/delAssessor", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public void delAssessor(Assessor assessor){
		adminService.delAssessor(assessor);
	}
	
	@ResponseBody
	@RequestMapping(value="/admin/showClaim", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public String showClaims(Claim claim){
		return JSONUtils.toJSONString(adminService.showClaims(claim));
	}  

	@ResponseBody
	@RequestMapping(value="/admin/insertClaim", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public void insertClaim(Claim claim,HttpServletRequest request){
		adminService.insertClaim(claim,request);
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/delClaim", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public void delClaim(Claim claim){
		adminService.delClaim(claim);
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/updateClaim", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public void updateClaim(Claim claim){
		adminService.updateClaim(claim);
	}  
	
	
	@ResponseBody
	@RequestMapping(value="/admin/showPolicy", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public String showPolicies(Policy policy){
		return JSONUtils.toJSONString(adminService.showPolicies(policy));
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/insertPolicy", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public void insertPolicy(Policy policy){
		adminService.insertPolicy(policy);
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/delPolicy", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public void delPolicy(Policy policy){
		adminService.delPolicy(policy);
	}  
	
	@ResponseBody
	@RequestMapping(value="/admin/updatePolicy", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public void updatePolicy(Policy policy){
		adminService.updatePolicy(policy); 
	}  
	
}
