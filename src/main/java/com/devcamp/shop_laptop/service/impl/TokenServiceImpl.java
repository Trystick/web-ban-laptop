package com.devcamp.shop_laptop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devcamp.shop_laptop.model.Token;
import com.devcamp.shop_laptop.repository.TokenRepository;
import com.devcamp.shop_laptop.service.TokenService;

@Service
public class TokenServiceImpl implements TokenService {

    @Autowired
    private TokenRepository tokenRepository;

    public Token createToken(Token token) {
        return tokenRepository.saveAndFlush(token);
    }

    @Override
    public Token findByToken(String token) {
        return tokenRepository.findByToken(token);
    }
}
