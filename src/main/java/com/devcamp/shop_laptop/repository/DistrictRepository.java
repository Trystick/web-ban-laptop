package com.devcamp.shop_laptop.repository;
import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;

import com.devcamp.shop_laptop.model.District;


public interface DistrictRepository extends JpaRepository<District, Long>{
    List<District> findByProvince(int province);
}
