package com.tenant.Multitenant.entity;

import javax.persistence.*;

@Entity
@Table(name="user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id ;

    @Column(name="user_id")
    private String userId ;

    @Column(name="user_name")
    private String userName ;

    @Column(name="password")
    private String password ;

    @Column(name="fiid")
    private String fiid ;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFiid() {
        return fiid;
    }

    public void setFiid(String fiid) {
        this.fiid = fiid;
    }
}
