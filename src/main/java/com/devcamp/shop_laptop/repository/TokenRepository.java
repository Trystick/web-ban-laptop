package com.devcamp.shop_laptop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devcamp.shop_laptop.model.Token;


public interface TokenRepository extends JpaRepository<Token, Long> {

    Token findByToken(String token);
}
