package com.devcamp.shop_laptop.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.devcamp.shop_laptop.model.Office;
public interface OfficeRepository extends JpaRepository<Office, Integer>{
    
}
