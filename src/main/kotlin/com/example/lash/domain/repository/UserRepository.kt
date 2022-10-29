package com.example.lash.domain.repository

import com.example.lash.domain.entity.User
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.lang.Nullable
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<User, String> {
    fun findAllByUserId(userId: String, pageable: Pageable): Page<User>
    @Nullable
    fun findByIdx(idx: String?): User
    fun deleteByIdx(idx: String)
    @Nullable
    fun findByUserId(userId: String?): User
}