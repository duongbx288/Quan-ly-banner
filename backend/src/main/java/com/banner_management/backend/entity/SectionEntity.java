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

    @Column(name = "position_x")
    @NotNull
    private String position_x;

    @Column(name = "position_y")
    @NotNull
    private String position_y;

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

    public String getPosition_x() {
        return position_x;
    }

    public void setPosition_x(String position_x) {
        this.position_x = position_x;
    }

    public String getPosition_y() {
        return position_y;
    }

    public void setPosition_y(String position_y) {
        this.position_y = position_y;
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
                ", position_x='" + position_x + '\'' +
                ", position_y='" + position_y + '\'' +
                ", positionWeb='" + positionWeb + '\'' +
                ", height=" + height +
                ", width=" + width +
                ", display='" + display + '\'' +
                '}';
    }
}
