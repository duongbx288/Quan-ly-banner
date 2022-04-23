package com.banner_management.backend.service;

import com.banner_management.backend.entity.SectionEntity;
import com.banner_management.backend.repository.SectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SectionService {

    @Autowired
    private SectionRepository sectionRepository;

    public List<SectionEntity> listSectionsByPositionWeb(String position_web) {
        return sectionRepository.findSectionEntitiesByPositionWeb(position_web);
    }

    public SectionEntity getSectionDetail(int id) {
        return sectionRepository.findById(id).get();
    }

    @Transactional
    public void deleteSection(int id) {
        sectionRepository.deleteById(id);
    }

    @Transactional
    public void save(SectionEntity sectionEntity) {
        sectionRepository.save(sectionEntity);
    }


}
