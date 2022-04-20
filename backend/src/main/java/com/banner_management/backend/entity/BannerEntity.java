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

    @Column(name = "section_id", nullable = false)
    @NotNull
    private int sectionID;

    @Column(name = "name", nullable = false)
    @NotNull
    private String name;

    @Column(name = "img_url", nullable = false)
    @NotNull
    private String imgUrl;

    @Column(name = "state")
    private short state;

    @Column(name = "expired", nullable = false)
    @NotNull
    private Date expired;

    @Column(name = "user_add", nullable = false)
    @NotNull
    private String userAdd;

    @Column(name = "user_fix")
    private String userFix;

    @Column(name = "create_at", nullable = false)
    @NotNull
    private Date createAt;

    @Column(name = "modified_at")
    private Date modifiedAt;

    public BannerEntity() {
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
                ", userAdd='" + userAdd + '\'' +
                ", userFix='" + userFix + '\'' +
                ", createAt=" + createAt +
                ", modifiedAt=" + modifiedAt +
                '}';
    }

    public String getUserAdd() {
        return userAdd;
    }

    public void setUserAdd(String userAdd) {
        this.userAdd = userAdd;
    }

    public String getUserFix() {
        return userFix;
    }

    public void setUserFix(String userFix) {
        this.userFix = userFix;
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

}
