package com.banner_management.backend.repository;

import com.banner_management.backend.entity.BannerEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BannerRepositoty extends JpaRepository<BannerEntity, Integer> {

    @Query(value = "select * from banners where section_id = ?1 and state != 0 order by rand() limit ?2", nativeQuery = true)
    List<BannerEntity> getRandomBySectionID(Integer sectionID, Integer id);
}
