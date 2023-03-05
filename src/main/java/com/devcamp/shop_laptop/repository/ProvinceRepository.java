package com.devcamp.shop_laptop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devcamp.shop_laptop.model.Province;


public interface ProvinceRepository extends JpaRepository<Province, Long>{
    
}
