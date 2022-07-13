package com.tenant.Multitenant.dao;

import com.tenant.Multitenant.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {

    public User findByUserIdAndPassword(String userId, String password);

    public User findByUserId(String userId);
}
