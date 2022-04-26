//package com.banner_management.backend.dto;
//
//import org.springframework.stereotype.Service;
//
//import java.sql.Timestamp;
//
//@Service
//public class BannerStatusDto {
//    private int sectionID;
//    private int quantity;
//    private Timestamp startTimeShow;
//    private int timeDisplay;
//
//    public BannerStatusDto() {
//    }
//    public int getSectionID() {
//        return sectionID;
//    }
//
//    public void setSectionID(int sectionID) {
//        this.sectionID = sectionID;
//    }
//
//    public int getQuantity() {
//        return quantity;
//    }
//
//    public void setQuantity(int quantity) {
//        this.quantity = quantity;
//    }
//
//    public Timestamp getStartTimeShow() {
//        return startTimeShow;
//    }
//
//    public void setStartTimeShow(Timestamp startTimeShow) {
//        this.startTimeShow = startTimeShow;
//    }
//
//    public int getTimeDisplay() {
//        return timeDisplay;
//    }
//
//    public void setTimeDisplay(int timeDisplay) {
//        this.timeDisplay = timeDisplay;
//    }
//}
package com.banner_management.backend.dto;

import org.springframework.stereotype.Service;

import java.sql.Timestamp;


public class BannerStatusDto {
    private Integer bannerID;
    private Integer sectionID;
    private String name;
    private String imgUrl;
    private Timestamp timeDisplay;
    private Timestamp expired;

    public BannerStatusDto(Integer bannerID, Integer sectionID, String name, String imgUrl, Timestamp timeDisplay, Timestamp expired) {
        this.bannerID = bannerID;
        this.sectionID = sectionID;
        this.name = name;
        this.imgUrl = imgUrl;
        this.timeDisplay = timeDisplay;
        this.expired = expired;
    }

    public Integer getBannerID() {
        return bannerID;
    }

    public void setBannerID(Integer bannerID) {
        this.bannerID = bannerID;
    }

    public Integer getSectionID() {
        return sectionID;
    }

    public void setSectionID(Integer sectionID) {
        this.sectionID = sectionID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public Timestamp getTimeDisplay() {
        return timeDisplay;
    }

    public void setTimeDisplay(Timestamp timeDisplay) {
        this.timeDisplay = timeDisplay;
    }

    public Timestamp getExpired() {
        return expired;
    }

    public void setExpired(Timestamp expired) {
        this.expired = expired;
    }
}

