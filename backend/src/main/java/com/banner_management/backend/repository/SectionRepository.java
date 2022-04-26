package com.banner_management.backend.repository;

import com.banner_management.backend.entity.SectionEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SectionRepository extends JpaRepository<SectionEntity, Integer> {
}
