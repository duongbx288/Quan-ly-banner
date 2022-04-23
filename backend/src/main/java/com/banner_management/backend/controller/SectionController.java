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
    public List<SectionEntity> listSectionsByPositionWeb(@PathVariable String position_web) {
        return sectionService.listSectionsByPositionWeb(position_web);
    }

    @GetMapping("/{position_web}/sections/{id}")
    public SectionEntity getSectionDetails(@PathVariable String position_web, @PathVariable Integer id) {
        return sectionService.getSectionDetail(id);
    }

    @DeleteMapping("/{position_web}/sections/{id}")
    public void deleteSection(@PathVariable String position_web, @PathVariable Integer id) {
        sectionService.deleteSection(id);
    }

    @PostMapping("/{position_web}/sections")
    public void addSection(@RequestBody SectionEntity sectionEntity, @PathVariable String position_web) {
        sectionService.save(sectionEntity);
    }
}