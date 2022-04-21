package com.banner_management.backend.service;
import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.repository.BannerRepositoty;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.PagingAndSortingRepository;
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

    public BannerEntity getByCode(String code) {
        return repository.findByCode(code);
    }

    @Transactional
    public void delete(Integer id){
        try {
            repository.deleteById(id);
        }catch (NoSuchElementException e){

        }
    }
    public Page<BannerEntity> getBannerPage(int number) {
        PagingAndSortingRepository<BannerEntity, Integer> bannerRepository = repository;
        Page<BannerEntity> banners = bannerRepository.findAll(PageRequest.of(number, 5));
        return banners;
    }


    public Page<BannerEntity> getBannerPage(int number) {
        PagingAndSortingRepository<BannerEntity, Integer> bannerRepository = repository;
        Page<BannerEntity> banners = bannerRepository.findAll(PageRequest.of(number, 5));
        return banners;
    }

}
