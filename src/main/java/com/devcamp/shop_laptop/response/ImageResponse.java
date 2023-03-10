package com.devcamp.shop_laptop.response;

import lombok.Data;

@Data
public class ImageResponse {
    private String name;
    private String url;
    private String type;
    private long size;
    public ImageResponse(String name, String url, String type, long size) {
        this.name = name;
        this.url = url;
        this.type = type;
        this.size = size;
    }

}
