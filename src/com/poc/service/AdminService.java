package com.poc.service;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.poc.db.model.Admin;
import com.poc.db.model.Assess;
import com.poc.db.model.Assessor;
import com.poc.db.model.Auditor;
import com.poc.db.model.Claim;
import com.poc.db.model.Policy;
import com.poc.db.model.User;

public interface AdminService {

	
	List<User> showUsers(User user);
	
	List<Assessor> showAssessors(Assessor assessor);
	
	List<Auditor> showAuditors(Auditor auditor);
	
	List<Assess> showAssess(Assess assess);
	
	List<Claim> showClaims(Claim claim);
	
	List<Policy> showPolicies(Policy policy);
	
	String adminLogin(String adminId,String adminPassword,HttpServletResponse response);
	
}
