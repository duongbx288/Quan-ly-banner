package com.banner_management.backend.service;

import com.banner_management.backend.dto.BannerStatusDto;
import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.entity.BannerStatusEntity;
import com.banner_management.backend.repository.BannerStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class BannerStatusService {

    @Autowired
    BannerStatusRepository repository;

    @Transactional
    public void save(BannerStatusEntity bannerStatusEntity){
        repository.save(bannerStatusEntity);
    }

    @Transactional
    public void update(Timestamp timeDisplay, Timestamp expired, Integer sectionID){
        repository.updateTimeDisplay(timeDisplay, expired, sectionID);
    }
    public BannerStatusEntity getById(Integer id){
        return repository.findById(id).get();
    }

    public List<BannerStatusEntity> listBannerStatusViaRandom(Integer sectionID, Integer number){
        return repository.getRandomBySectionID(sectionID, number);
    }

    @Transactional
    public void updatePercentage(Timestamp time_display, Timestamp expired, Integer percentage, Integer bannerID, Integer sectionID){
        repository.updatePercentageAndTimeDisplay(time_display, expired, percentage, bannerID, sectionID);
    }
 }
