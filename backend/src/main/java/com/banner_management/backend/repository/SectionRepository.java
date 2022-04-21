package com.banner_management.backend.repository;

import com.banner_management.backend.entity.SectionEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SectionRepository extends JpaRepository<SectionEntity, Integer> {
    List<SectionEntity> findSectionEntitiesByPositionWeb(String position_web);
}
