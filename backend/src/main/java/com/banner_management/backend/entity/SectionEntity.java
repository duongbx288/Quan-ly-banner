package com.banner_management.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "sections")
public class SectionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "position")
    @NotNull
    private String position;

    @Column(name = "position_web")
    @NotNull
    private String positionWeb;

    @Column(name = "height")
    @NotNull
    private int height;

    @Column(name = "width")
    @NotNull
    private int width;

    @Column(name = "display")
    @NotNull
    private String display;

    public SectionEntity() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getPositionWeb() {
        return positionWeb;
    }

    public void setPositionWeb(String positionWeb) {
        this.positionWeb = positionWeb;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public String getDisplay() {
        return display;
    }

    public void setDisplay(String display) {
        this.display = display;
    }

    @Override
    public String toString() {
        return "SectionEntity{" +
                "id=" + id +
                ", position='" + position + '\'' +
                ", positionWeb='" + positionWeb + '\'' +
                ", height=" + height +
                ", width=" + width +
                ", display='" + display + '\'' +
                '}';
    }
}
