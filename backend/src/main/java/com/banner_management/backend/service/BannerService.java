package com.banner_management.backend.service;
import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.repository.BannerRepositoty;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BannerService  {

    @Autowired
    private BannerRepositoty repository;

    public List<BannerEntity> listAllBanner(){
        return repository.findAll();
    }

    @Transactional
    public void save(BannerEntity bannerEntity){
        repository.save(bannerEntity);
    }

    public BannerEntity getById(Integer id){
        return repository.findById(id).get();
    }

    @Transactional
    public void delete(Integer id){
        try {
            repository.deleteById(id);
        }catch (NoSuchElementException e){

        }
    }

}
