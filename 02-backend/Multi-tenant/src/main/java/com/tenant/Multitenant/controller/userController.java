package com.tenant.Multitenant.controller;

import com.tenant.Multitenant.entity.User;
import com.tenant.Multitenant.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:4200")
public class userController {

    @Autowired
    private UserServiceImpl userService ;

    @PostMapping("login")
    public User loginUser(@RequestBody User user) throws Exception {
        String tempUserId = user.getUserId();
        String tempPassword = user.getPassword();
        User userObj = null;
        if(tempUserId!=null && tempPassword!=null){
            userObj = userService.fetchByUserIdAndPassword(tempUserId,tempPassword);
        }
        if(userObj==null){
            throw new Exception("Bad Credentials");
        }
        return userObj ;
    }


    @PostMapping("register")
    public User registerUser(@RequestBody User user) throws Exception{
        String tempUserId = user.getUserId();
        if(tempUserId !=null ){
            User temp = userService.fetchUserByUserId(tempUserId);
            if(temp!=null){
                throw new Exception("user with "+tempUserId+"already exists");
            }
        }
        User userObj = null ;
        userObj = userService.saveUser(user);
        return userObj ;
    }
}
