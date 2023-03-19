package com.devcamp.shop_laptop.service;

import com.devcamp.shop_laptop.model.Token;

public interface TokenService {

    Token createToken(Token token);

    Token findByToken(String token);
}
