package com.banner_management.backend.service;


import com.banner_management.backend.entity.user.User;

import com.banner_management.backend.repository.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class UserService  {

    @Autowired
    private UserRepository repository;


    public List<User> listAllUser(){
        return repository.findAll();
    }

    @Transactional
    public void save(User userEntity){
        repository.save(userEntity);
    }

    public User getById(Integer id){
        return repository.findById(id).get();
    }

    public Page<User> getUserPage(int number) {
        PagingAndSortingRepository<User, Integer> userRepository = repository;
        Page<User> users = userRepository.findAll(PageRequest.of(number, 3));
        return users;
    }

    @Transactional
    public void delete(Integer id){
        try {
            repository.deleteById(id);
        }catch (NoSuchElementException e){

        }
    }
}