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
		return userMapper.showUsers(user);
	}

	@Override
	public List<Assessor> showAssessors(Assessor assessor) {
		return assessorMapper.showAssessors(assessor);
	}

	@Override
	public List<Auditor> showAuditors(Auditor auditor) {
		return auditorMapper.showAuditors(auditor);
	}

	@Override
	public List<Assess> showAssess(Assess assess) {
		return assessMapper.showAssess(assess);
	}

	@Override
	public List<Claim> showClaims(Claim claim) {
		return claimMapper.showClaims(claim);
	}

	@Override
	public List<Policy> showPolicies(Policy policy) {
		return policyMapper.showPolicies(policy);
	}

	@Override
	public String adminLogin(String adminId,String adminPassword,HttpServletResponse response) {
		String md5Password = "";
		try {
			md5Password = EncoderByMd5.EncoderByMd5(adminPassword);
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		if(!JSONUtils.toJSONString(auditorMapper.auditorLogin(adminId,md5Password)).equals("[null]")){	
			CookieUtil.addCookie(response,"loginedId",auditorMapper.auditorLogin(adminId,md5Password).getAuid(),3600);
			return "success";
		}else{
			return "fail";
		}
	}

	@Override
	public void insertUser(User user) {
		String md5Password = "";
		try {
			md5Password = EncoderByMd5.EncoderByMd5(user.getUpassword());
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		user.setUpassword(md5Password);
		userMapper.insertSelective(user);
	}

	@Override
	public void delUser(User user) {
		userMapper.deleteByPrimaryKey(user.getUid());
	}

	@Override
	public void updateUser(User user) {
		String md5Password = "";
		try {
			md5Password = EncoderByMd5.EncoderByMd5(user.getUpassword());
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		user.setUpassword(md5Password);
		userMapper.updateByPrimaryKeySelective(user);
	}

	@Override
	public void insertAssessor(Assessor assessor) {
		String md5Password = "";
		try {
			md5Password = EncoderByMd5.EncoderByMd5(assessor.getAspassword());
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		assessor.setAspassword(md5Password);
		assessorMapper.insertSelective(assessor);
	}

	@Override
	public void delAssessor(Assessor assessor) {
		assessorMapper.deleteByPrimaryKey(assessor.getAsorid());
	}

	@Override
	public void updateAssessor(Assessor assessor) {
		String md5Password = "";
		try {
			md5Password = EncoderByMd5.EncoderByMd5(assessor.getAspassword());
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		assessor.setAspassword(md5Password);
		assessorMapper.updateByPrimaryKeySelective(assessor);
		
	}

	@Override
	public void insertAuditor(Auditor auditor) {
		String md5Password = "";
		try {
			md5Password = EncoderByMd5.EncoderByMd5(auditor.getAupassword());
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		auditor.setAupassword(md5Password);
		auditorMapper.insertSelective(auditor);		
	}

	@Override
	public void delAuditor(Auditor auditor) {
		auditorMapper.deleteByPrimaryKey(auditor.getAuid());
	}

	@Override
	public void updateAuditor(Auditor auditor) {
			String md5Password = "";
			try {
				md5Password = EncoderByMd5.EncoderByMd5(auditor.getAupassword());
			} catch (NoSuchAlgorithmException e) {
				e.printStackTrace();
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
			auditor.setAupassword(md5Password);
		auditorMapper.updateByPrimaryKeySelective(auditor);
	}

	@Override
	public void insertClaim(Claim claim) {
		// TODO Auto-generated method stub
		claimMapper.insertSelective(claim);
	}

	@Override
	public void updateClaim(Claim claim) {
		// TODO Auto-generated method stub
		claimMapper.updateByPrimaryKeySelective(claim);
	}

	@Override
	public void delClaim(Claim claim) {
		// TODO Auto-generated method stub
		claimMapper.deleteByPrimaryKey(claim.getCaseid());
	}


}
