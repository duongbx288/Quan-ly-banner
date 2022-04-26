package com.banner_management.backend.repository;

import com.banner_management.backend.dto.BannerDto;
import com.banner_management.backend.dto.BannerStatusDto;
import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.entity.BannerStatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.sql.Timestamp;
import java.util.List;

public interface BannerStatusRepository extends JpaRepository<BannerStatusEntity, Integer> {
    @Query(value = "select * from banner_status left join banners on banner_status.banner_id = banners.id where section_id = ?1 and state != 0 order by rand() limit ?2", nativeQuery = true)
    List<BannerStatusEntity> getRandomBySectionID(Integer sectionID, Integer number);

    @Modifying
    @Query(value = "update banner_status set time_display = ?1, expired = ?2 where state = 1 and section_id = ?3", nativeQuery = true)
    void updateTimeDisplay(Timestamp timeDisplay, Timestamp expired, Integer sectionID);

    @Modifying
    @Query(value = "update banner_status set time_display = ?1, expired = ?2, percentage = ?3 where state = 1 and banner_id = ?4 and section_id = ?5", nativeQuery = true)
    void updatePercentageAndTimeDisplay(Timestamp time_display, Timestamp expired, Integer percentage, Integer bannerID, Integer sectionID);
}
