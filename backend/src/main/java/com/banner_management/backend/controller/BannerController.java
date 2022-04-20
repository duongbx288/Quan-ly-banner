package com.banner_management.backend.controller;

import java.util.List;
import java.util.NoSuchElementException;

import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.service.BannerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class BannerController {

    @Autowired
    private BannerService bannerService;

    // lấy danh sách các banner
    @GetMapping("/banners")
    public List<BannerEntity> listBanner() {
        return bannerService.listAllBanner();
    }

    // lấy một banner theo id
    @GetMapping("/banners/{id}")
    public ResponseEntity<BannerEntity> getBannerById(@PathVariable Integer id){
        try{
            BannerEntity bannerEntity = bannerService.getById(id);
            return new ResponseEntity<BannerEntity>(bannerEntity, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // tạo mới một banner
    @PostMapping("/banners")
    public ResponseEntity<BannerEntity> addBanner(@RequestBody BannerEntity bannerEntity){
        try {
            bannerService.save(bannerEntity);
            return new ResponseEntity<BannerEntity>(bannerEntity, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // cập nhật một banner theo id
    @PutMapping("/banners/{id}")
    public ResponseEntity<BannerEntity> updateBannerById (@RequestBody BannerEntity bannerEntity, @PathVariable Integer id){
        try{
            BannerEntity existBannerEntity = bannerService.getById(id);
            bannerService.save(bannerEntity);
            return new ResponseEntity<BannerEntity>(bannerEntity, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Xoá một banner theo id
    @DeleteMapping("/banners/{id}")
    public ResponseEntity<BannerEntity> deleteBannerById(@PathVariable Integer id){
        try{
            bannerService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
