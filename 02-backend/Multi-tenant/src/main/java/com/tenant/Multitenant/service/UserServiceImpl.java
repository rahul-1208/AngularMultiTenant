package com.tenant.Multitenant.service;
import com.tenant.Multitenant.dao.UserRepository;
import com.tenant.Multitenant.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl  {

    @Autowired
    private UserRepository userRepo ;

    public User fetchByUserIdAndPassword(String userId, String password){
        return userRepo.findByUserIdAndPassword(userId,password);
    }

    public User saveUser(User user){
        return userRepo.save(user);
    }

    public User  fetchUserByUserId(String userId){
        return userRepo.findByUserId(userId);
    }
}
