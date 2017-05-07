package com.poc.ctrl;


import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.poc.service.AssessorService;
import com.poc.util.JSONUtils;

@Controller
public class AssessorController{
	private static final Logger	LOGGER	= LoggerFactory.getLogger(AssessorController.class);
	@Autowired
	private AssessorService assessorService;
	
	 @ResponseBody
	 @RequestMapping(value="/assessor/showAssessed", produces = "text/html;charset=UTF-8",method = RequestMethod.POST)
	public String showAssessedByAssess(HttpServletRequest request){
		 return JSONUtils.toJSONString(assessorService.showAssessedByAssess(request));
	 }
}
