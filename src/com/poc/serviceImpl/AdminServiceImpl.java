package com.poc.serviceImpl;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.poc.db.dao.AdminMapper;
import com.poc.db.dao.AssessMapper;
import com.poc.db.dao.AssessorMapper;
import com.poc.db.dao.AuditorMapper;
import com.poc.db.dao.ClaimMapper;
import com.poc.db.dao.PolicyMapper;
import com.poc.db.dao.UserMapper;
import com.poc.db.model.Assess;
import com.poc.db.model.Assessor;
import com.poc.db.model.Auditor;
import com.poc.db.model.Claim;
import com.poc.db.model.Policy;
import com.poc.db.model.User;
import com.poc.service.AdminService;
import com.poc.util.CookieUtil;
import com.poc.util.EncoderByMd5;
import com.poc.util.JSONUtils;

@Service
public class AdminServiceImpl implements AdminService{
	
	private static final Logger	LOGGER	= LoggerFactory.getLogger(AdminServiceImpl.class);
@Autowired
private UserMapper userMapper;

@Autowired
private AssessorMapper assessorMapper;

@Autowired
private AuditorMapper auditorMapper;

@Autowired
private PolicyMapper policyMapper;

@Autowired
private ClaimMapper claimMapper;

@Autowired
private AssessMapper assessMapper;

@Autowired
private AdminMapper adminMapper;


	@Override
	public List<User> showUsers(User user) {
		// TODO Auto-generated method stub
		return userMapper.showUsers(user);
	}

	@Override
	public List<Assessor> showAssessors(Assessor assessor) {
		// TODO Auto-generated method stub
		return assessorMapper.showAssessors(assessor);
	}

	@Override
	public List<Auditor> showAuditors(Auditor auditor) {
		// TODO Auto-generated method stub
		return auditorMapper.showAuditors(auditor);
	}

	@Override
	public List<Assess> showAssess(Assess assess) {
		// TODO Auto-generated method stub
		return assessMapper.showAssess(assess);
	}

	@Override
	public List<Claim> showClaims(Claim claim) {
		// TODO Auto-generated method stub
		return claimMapper.showClaims(claim);
	}

	@Override
	public List<Policy> showPolicies(Policy policy) {
		// TODO Auto-generated method stub
		return policyMapper.showPolicies(policy);
	}

	@Override
	public String adminLogin(String adminId,String adminPassword,HttpServletResponse response) {
		String md5Password = "";
		try {
			md5Password = EncoderByMd5.EncoderByMd5(adminPassword);
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if(!JSONUtils.toJSONString(auditorMapper.auditorLogin(adminId,md5Password)).equals("[null]")){	
			CookieUtil.addCookie(response,"loginedId",auditorMapper.auditorLogin(adminId,md5Password).getAuid(),3600);
			return "success";
		}else{
			return "fail";
		}
	}

}
