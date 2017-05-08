package com.poc.db.dao;

import java.util.List;

import com.poc.db.model.Claim;

public interface ClaimMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table claim
     *
     * @mbggenerated Fri Feb 24 01:58:56 CST 2017
     */
    int deleteByPrimaryKey(String caseid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table claim
     *
     * @mbggenerated Fri Feb 24 01:58:56 CST 2017
     */
    int insert(Claim record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table claim
     *
     * @mbggenerated Fri Feb 24 01:58:56 CST 2017
     */
    int insertSelective(Claim record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table claim
     *
     * @mbggenerated Fri Feb 24 01:58:56 CST 2017
     */
    Claim selectByPrimaryKey(String caseid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table claim
     *
     * @mbggenerated Fri Feb 24 01:58:56 CST 2017
     */
    int updateByPrimaryKeySelective(Claim record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table claim
     *
     * @mbggenerated Fri Feb 24 01:58:56 CST 2017
     */
    int updateByPrimaryKey(Claim record);
     
    List<Claim> showClaims(Claim record);
    
}