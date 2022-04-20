package com.banner_management.backend.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Date;

@Table(name = "banners")
@Entity
public class BannerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "code" , nullable = false, length = 255)
    @NotNull
    private String code;

    @Column(name = "section_id")
    @NotNull
    private int sectionID;

    @Column(name = "name")
    @NotNull
    private String name;

    @Column(name = "img_url")
    @NotNull
    private String imgUrl;

    @Column(name = "state")
    @NotNull
    private short state;

    @Column(name = "expired")
    @NotNull
    private Date expired;

    @Column(name = "create_at")
    @NotNull
    private Date createAt;

    @Column(name = "modified_at")
    private Date modifiedAt;

    public BannerEntity() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public int getSectionID() {
        return sectionID;
    }

    public void setSectionID(int sectionID) {
        this.sectionID = sectionID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public short getState() {
        return state;
    }

    public void setState(short state) {
        this.state = state;
    }

    public Date getExpired() {
        return expired;
    }

    public void setExpired(Date expired) {
        this.expired = expired;
    }

    public Date getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Date createAt) {
        this.createAt = createAt;
    }

    public Date getModifiedAt() {
        return modifiedAt;
    }

    public void setModifiedAt(Date modifiedAt) {
        this.modifiedAt = modifiedAt;
    }

    @Override
    public String toString() {
        return "BannerEntity{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", sectionID=" + sectionID +
                ", name='" + name + '\'' +
                ", imgUrl='" + imgUrl + '\'' +
                ", state=" + state +
                ", expired=" + expired +
                ", createAt=" + createAt +
                ", modifiedAt=" + modifiedAt +
                '}';
    }
}
