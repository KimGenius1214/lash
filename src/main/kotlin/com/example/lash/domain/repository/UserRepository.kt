package com.example.lash.domain.repository

import com.example.lash.domain.entity.User
import com.example.lash.domain.projection.GetUserProjection
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.Optional

@Repository
interface UserRepository : JpaRepository<User, String> {
    fun findByIdx(idx: String): User
    fun deleteByIdx(idx: String)
    fun findByUserId(userId: String): Optional<User>
    fun existsByUserIdAndUserPw(userId: String, userPw: String): Boolean
    fun findAllBy(): List<GetUserProjection>
    fun findByUserIdAndUserPw(userId: String, userPw: String): Optional<User>
}
