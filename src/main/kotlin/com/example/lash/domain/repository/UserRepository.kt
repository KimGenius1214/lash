package com.example.lash.domain.repository

import com.example.lash.domain.entity.User
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<User, Long> {
    fun findAllByUserId(userId: String, pageable: Pageable): Page<User>
}