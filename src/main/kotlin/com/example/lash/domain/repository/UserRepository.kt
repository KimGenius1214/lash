package com.example.lash.domain.repository

import com.example.lash.domain.entity.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<User, String> {
    fun findByIdx(idx: String): User
    fun deleteByIdx(idx: String)
    fun findByUserId(userId: String): User
    fun existsByUserIdAndUserPw(userId: String, userPw: String): Boolean
}
