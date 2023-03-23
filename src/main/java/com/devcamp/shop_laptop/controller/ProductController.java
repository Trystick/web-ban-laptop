package com.devcamp.shop_laptop.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.devcamp.shop_laptop.model.Product;
import com.devcamp.shop_laptop.service.ProductService;

@RestController
@CrossOrigin
public class ProductController {
    @Autowired
    private ProductService gProductService;

    @GetMapping("/product")
    public ResponseEntity<List<Product>> getAllProduct(){
        List<Product> lstProduct = new ArrayList<Product>();
        lstProduct = gProductService.findAllProduct();
        if(lstProduct!=null) return new ResponseEntity<>(lstProduct, HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") int id){
        Product product = gProductService.findProductById(id);
        if(product != null) return new ResponseEntity<>(product, HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

    @GetMapping("/product/url/{url}")
    public ResponseEntity<Product> getProductByUrl(@PathVariable("url") String url){
        Product product = gProductService.findProductByUrl(url);
        if(product != null) return new ResponseEntity<>(product, HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
    @PostMapping("/product")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public ResponseEntity<Object> createProduct(@Valid @RequestBody Product product){
        try {
            Product saveProduct = gProductService.taoSanPham(product);
            if(saveProduct  != null) {
                return new ResponseEntity<>("Bạn Đã Tạo Thành Công, Mã Sản Phẩm là: " + saveProduct.getId(), HttpStatus.CREATED);
            }else{
                return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            return ResponseEntity.unprocessableEntity()
                    .body("Failed to Create specified Product: " + e.getCause().getCause().getMessage());
        }
    }

    @PutMapping("/product/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public ResponseEntity<Object> updateProductByUrl(@Valid @RequestBody Product product, @PathVariable("id") int id){
        try {
            Product saveProduct = gProductService.updateProduct(product, id);
            return new ResponseEntity<>(saveProduct, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.unprocessableEntity()
                    .body("Failed to Update specified Product: " + e.getCause().getCause().getMessage());
        }
    }
    @PutMapping("/product/{id}/delete")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public ResponseEntity<Object> deleteProductByUrl(@PathVariable("id") int id){
        try {
            Product saveProduct = gProductService.deleteProduct(id);
            return new ResponseEntity<>(saveProduct, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.unprocessableEntity()
                    .body("Failed to Update specified Product: " + e.getCause().getCause().getMessage());
        }
    }
}
