package com.devcamp.shop_laptop.controller;

import javax.servlet.http.HttpServletRequest;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
@Controller
public class HelloController {

@RequestMapping("/")
public String home(HttpServletRequest request) {
String baseUrl = ServletUriComponentsBuilder.fromRequestUri(request)
.replacePath(null)
.build()
.toUriString();

System.out.println( baseUrl);

return "home";
}
}