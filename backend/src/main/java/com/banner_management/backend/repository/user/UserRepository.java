package com.banner_management.backend.repository.user;

import java.util.List;
import java.util.Optional;

import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.entity.user.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByUsername(String username);
	Boolean existsByUsername(String username);
	Boolean existsByEmail(String email);

	@Query(value = "select * from banners where section_id = ?1 and state != 0 order by rand() limit ?2", nativeQuery = true)
	List<User> getRandomBySectionID(Integer sectionID, Integer id);
}