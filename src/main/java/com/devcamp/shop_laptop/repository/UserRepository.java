package com.devcamp.shop_laptop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devcamp.shop_laptop.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
