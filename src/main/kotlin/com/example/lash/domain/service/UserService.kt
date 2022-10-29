package com.example.lash.domain.service

import com.example.lash.application.request.CreateUserRequest
import com.example.lash.application.request.UpdateUserRequest
import com.example.lash.domain.dto.GetUserDto
import com.example.lash.domain.repository.UserRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class UserService(
    private val userRepository: UserRepository
) {

    fun createUser(createUserRequest: CreateUserRequest) {
        val user = createUserRequest.toUser()
        userRepository.save(user)
    }

    fun getUser(idx: String?): GetUserDto {
        return GetUserDto(userRepository.findByIdx(idx))
    }

    fun getUserLogin(userId: String?): GetUserDto {
        return GetUserDto(userRepository.findByUserId(userId))
    }

    @Transactional
    fun updateUser(updateUserRequest: UpdateUserRequest) {
        val user = userRepository.findByIdx(updateUserRequest.idx)
        user.updateUser(updateUserRequest)
    }

    @Transactional
    fun deleteUser(idx: String) {
//        userRepository.findAll().map {
//            userRepository.delete(it)
//        }
    return userRepository.deleteByIdx(idx)
    }

    @Transactional
    fun deleteAllUser() {
        userRepository.findAll().map {
            userRepository.delete(it)
        }
    }

    fun getUsers(): List<GetUserDto> {
        return userRepository.findAll().map { GetUserDto(it) }
    }

}