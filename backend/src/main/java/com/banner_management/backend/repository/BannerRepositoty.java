package com.banner_management.backend.repository;

import com.banner_management.backend.entity.BannerEntity;

import org.springframework.boot.Banner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BannerRepositoty extends JpaRepository<BannerEntity, Integer> {
    BannerEntity findByCode(String code);
}
