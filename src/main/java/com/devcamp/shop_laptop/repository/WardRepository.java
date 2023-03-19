package com.devcamp.shop_laptop.repository;
import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;

import com.devcamp.shop_laptop.model.Ward;
public interface WardRepository extends JpaRepository<Ward, Long>{
    List<Ward> findByDistrict(int district);
}
