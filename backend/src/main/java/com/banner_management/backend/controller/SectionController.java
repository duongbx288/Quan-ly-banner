package com.banner_management.backend.controller;

import com.banner_management.backend.entity.SectionEntity;
import com.banner_management.backend.service.SectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class SectionController {

    @Autowired
    private SectionService sectionService;

    @GetMapping("/{position_web}/sections")
    public List<SectionEntity> listSection(@PathVariable("position_web") String position_web) {
        return sectionService.listSectionByPosition_web(position_web);
    }

    @GetMapping("/{position_web}/sections/{id}")
    public SectionEntity getSectionById( @PathVariable("id") int id,@PathVariable("position_web") String position_web) {
        return sectionService.getSectionById(id);
    }

    @PostMapping("/{position_web}/sections")
    public void addSection(@RequestBody SectionEntity sectionEntity, @PathVariable("position_web") String position_web) {
        sectionService.save(sectionEntity);
    }

    @PutMapping("/{position_web}/sections/{id}")
    public void updateSectionById(@RequestBody SectionEntity sectionEntity,@PathVariable("position_web") String position_web, @PathVariable("id") int id) {
        sectionEntity.setId(id);
        sectionService.save(sectionEntity);
    }

    @DeleteMapping("/{position_web}/sections/{id}")
    public void deleteSectionById(@PathVariable("position_web") String position_web, @PathVariable("id") int id) {
        sectionService.deleteSection(id);
    }
}
