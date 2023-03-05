package com.devcamp.shop_laptop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devcamp.shop_laptop.model.Role;


public interface RoleRepository extends JpaRepository<Role, Integer>{
    Role findByRoleKey(String roleKey);
}
