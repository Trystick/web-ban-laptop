package com.devcamp.shop_laptop.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.devcamp.shop_laptop.model.OrderDetail;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Integer>{
    List<OrderDetail> findByOrderId(int orderId);
}
