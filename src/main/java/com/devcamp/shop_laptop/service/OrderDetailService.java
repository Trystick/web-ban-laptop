package com.devcamp.shop_laptop.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devcamp.shop_laptop.model.Order;
import com.devcamp.shop_laptop.model.OrderDetail;
import com.devcamp.shop_laptop.model.Product;
import com.devcamp.shop_laptop.repository.OrderDetailRepository;
import com.devcamp.shop_laptop.repository.OrderRepository;
import com.devcamp.shop_laptop.repository.ProductRepository;

@Service
public class OrderDetailService {
    @Autowired
    private OrderDetailRepository gDetailRepository;
    @Autowired
    private OrderRepository gOrderRepository;

    @Autowired
    private ProductRepository gProductRepository;

    public List<OrderDetail> findAllOrderDetails(){
        List<OrderDetail> lstOrderDetail = new ArrayList<>();
        gDetailRepository.findAll().forEach(lstOrderDetail::add);
        return lstOrderDetail;
    }
    
    public OrderDetail findOrderDetailById(int id){
        Optional<OrderDetail> orderDetail = gDetailRepository.findById(id);
        if(orderDetail.isPresent()) return orderDetail.get();
        return null;
    }

    public List<OrderDetail> findOrderDetailByOrderId(int orderId){
        List<OrderDetail> lstOrderDetail = gDetailRepository.findByOrderId(orderId);
        return lstOrderDetail;
    }

    public OrderDetail createOrderDetail(OrderDetail orderDetail){
        OrderDetail newOrderDetail = new OrderDetail();
        Optional<Order> order = gOrderRepository.findById(orderDetail.getOrder().getId());
        Product product = gProductRepository.findProductById(orderDetail.getProductId());
        product.setSoluong(product.getSoluong() - orderDetail.getQuantity());
        newOrderDetail.setOrder(order.get());
        newOrderDetail.setProductId(orderDetail.getProductId());
        newOrderDetail.setQuantity(orderDetail.getQuantity());
        newOrderDetail.setTotalPrice(orderDetail.getTotalPrice());
        gProductRepository.save(product);
        OrderDetail save = gDetailRepository.save(newOrderDetail);
        return save;
    }
}
