package com.example.lash.domain.service

import com.example.lash.application.request.CreateUserRequest
import com.example.lash.application.request.UpdateUserRequest
import com.example.lash.domain.dto.GetUserDto
import com.example.lash.domain.entity.User
import com.example.lash.domain.projection.GetUserProjection
import com.example.lash.domain.repository.UserRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class UserService(
    private val userRepository: UserRepository
) {
    fun createUser(createUserRequest: CreateUserRequest): User {
        val user = createUserRequest.toUser()
        return userRepository.save(user)
    }

    fun getUser(idx: String) = GetUserDto(userRepository.findByIdx(idx))

    fun getUserLogin(userId: String, userPw: String): GetUserDto {
        val user =
            userRepository.findByUserIdAndUserPw(userId, userPw).orElseThrow { throw RuntimeException("로그인 정보 없음") }

        return GetUserDto(user)
    }

    @Transactional
    fun updateUser(updateUserRequest: UpdateUserRequest) {
        val user = userRepository.findByIdx(updateUserRequest.idx)
        user.updateUser(updateUserRequest)
    }

    @Transactional
    fun deleteUser(idx: String) {
        return userRepository.deleteByIdx(idx)
    }

    @Transactional
    fun deleteAllUsers() =
        userRepository.deleteAll(userRepository.findAll())

    fun getUsers(): List<GetUserProjection> {
        return userRepository.findAllBy()
    }
}
