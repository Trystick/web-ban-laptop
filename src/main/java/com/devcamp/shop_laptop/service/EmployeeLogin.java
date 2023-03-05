package com.devcamp.shop_laptop.service;

import com.devcamp.shop_laptop.security.UserPrincipal;

public interface EmployeeLogin {
    UserPrincipal findByUsername(String username);
}
