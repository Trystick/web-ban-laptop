package com.devcamp.shop_laptop.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.devcamp.shop_laptop.model.JsonRequest;
import com.devcamp.shop_laptop.model.hinhAnh;
import com.devcamp.shop_laptop.repository.HinhAnhRepository;
import com.devcamp.shop_laptop.repository.ProductRepository;
import com.devcamp.shop_laptop.security.FileUploadUtil;

@RestController
@CrossOrigin
public class JsonRequestController {
    @Autowired
    private HinhAnhRepository gAnhRepository;
    @Autowired
    private ProductRepository gProductRepository;
    @PostMapping("/uploadFile")
    public ResponseEntity<String> handleFileUpload(String hinhAnh, int productid){
        hinhAnh anh = new hinhAnh();
        anh.setHinhanh(hinhAnh);
        anh.setProduct(gProductRepository.findProductById(productid));
        hinhAnh save = gAnhRepository.save(anh);
        return ResponseEntity.ok().body("file received successfully");
    }
    @PostMapping("/uploadJson")
    public ResponseEntity<String> handleJsonInput(@RequestBody JsonRequest json){
        return ResponseEntity.ok().body(json.getId()+json.getName());
    }
}
