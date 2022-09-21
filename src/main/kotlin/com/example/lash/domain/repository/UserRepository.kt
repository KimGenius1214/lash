package com.example.lash.domain.repository

import com.example.lash.domain.User
import com.example.lash.domain.dto.GetUserDto
import org.springframework.data.domain.Page
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<User, Long> {
    fun findByUserId(userId: String): Page<GetUserDto>
}