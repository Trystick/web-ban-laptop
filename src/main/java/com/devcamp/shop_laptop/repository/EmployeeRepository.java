package com.devcamp.shop_laptop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devcamp.shop_laptop.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    Employee findByUsername(String username);
}
