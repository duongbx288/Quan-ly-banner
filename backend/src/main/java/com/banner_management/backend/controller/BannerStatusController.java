package com.banner_management.backend.controller;

import com.banner_management.backend.dto.BannerStatusDto;
import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.entity.BannerStatusEntity;
import com.banner_management.backend.service.BannerService;
import com.banner_management.backend.service.BannerStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class BannerStatusController {

    @Autowired
    private BannerStatusService bannerStatusService;

    @Autowired
    private BannerService bannerService;

    //  lấy random banner theo số lượng và khu vực
    @GetMapping("/banner-status/random/{sectionID}/{number}")
    public List<BannerEntity> listRandomBannerStatus(@PathVariable("sectionID") int sectionID, @PathVariable("number") int number) {
        List<BannerStatusEntity> listBannerStatus =  bannerStatusService.listBannerStatusViaRandom(sectionID, number);
        System.out.println("list : "+ listBannerStatus);
        ArrayList<BannerEntity> listBanner = new ArrayList<>();
        for( int i = 0 ; i < listBannerStatus.size() ; i++){
           BannerEntity bannerEntity = bannerService.getById(listBannerStatus.get(i).getBannerID());
           listBanner.add(bannerEntity);
        }
        System.out.println("list get ra :" + listBanner);
        return listBanner;
    }

    //   cập nhật banner status .... chua su dung
    @PutMapping("/banner-status/random")
    public ResponseEntity<BannerStatusEntity> updateRandomBanner(@RequestBody BannerStatusEntity bannerStatusEntity) {
        System.out.println("bannerStatus : " + bannerStatusEntity);
        bannerStatusService.update(bannerStatusEntity.getTimeDisplay(), bannerStatusEntity.getExpired(), bannerStatusEntity.getSectionID());
        return  new ResponseEntity<BannerStatusEntity>(HttpStatus.OK);
    }

    // cap nhat du lieu thoi gian bat dau va ket thuc bang banner status khi chon random
    @PutMapping("/banner-status/random/{id}")
    public void updateBannerStatus (@RequestBody BannerStatusEntity bannerStatusEntity, @PathVariable("id") Integer id){
        BannerStatusEntity existBannerStatusEntity = bannerStatusService.getById(id);
        System.out.println("banner status dau vao o day : "+ bannerStatusEntity);
        if(bannerStatusEntity.getSectionID() >= 0){
            existBannerStatusEntity.setSectionID(bannerStatusEntity.getSectionID());
        }
        if(bannerStatusEntity.getExpired() != null){
            existBannerStatusEntity.setExpired(bannerStatusEntity.getExpired());
        }
        bannerStatusService.save(existBannerStatusEntity);
    }

//     cap nhat du lieu khi chon hien thi theo ti trong
    @PutMapping("/banner-status/percentage")
    public void updateBannerStatusOnPercentage(@RequestBody List<BannerStatusEntity> bannerStatusEntityList){
        // du lieu can co bannerID, sectionID, percentage, timeDisplay, expired
        System.out.println("du lieu dau vao list : "+ bannerStatusEntityList);
        for(int i = 0 ; i < bannerStatusEntityList.size(); i++){
            BannerStatusEntity bannerStatusEntity = bannerStatusEntityList.get(i);
            System.out.println("phần tử "+ i + " "+ bannerStatusEntity);
            bannerStatusService.updatePercentage(bannerStatusEntity.getTimeDisplay(), bannerStatusEntity.getExpired(),
                    bannerStatusEntity.getPercentage(), bannerStatusEntity.getBannerID(), bannerStatusEntity.getSectionID());
        }
    }
}
