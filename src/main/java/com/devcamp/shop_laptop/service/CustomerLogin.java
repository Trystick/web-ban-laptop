package com.devcamp.shop_laptop.service;
import com.devcamp.shop_laptop.security.UserPrincipal;
public interface CustomerLogin {
    UserPrincipal findByUsername(String username);
    
}
