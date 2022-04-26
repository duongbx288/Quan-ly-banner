package com.banner_management.backend.repository;

import com.banner_management.backend.entity.BannerEntity;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BannerRepositoty extends JpaRepository<BannerEntity, Integer> {

    @Query(value = "select * from banner_status left join banners on banner_status.banner_id = banners.id where section_id = ?1 ", nativeQuery = true)
//    Page<BannerEntity> getAllBySectionID(Integer sectionID, Pageable pageable);
    List<BannerEntity> getAllBySectionID(Integer sectionID);
}
