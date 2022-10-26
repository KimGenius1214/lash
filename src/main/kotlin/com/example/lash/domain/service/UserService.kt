package com.example.lash.domain.service

import com.example.lash.application.request.CreateUserRequest
import com.example.lash.application.request.UpdateUserRequest
import com.example.lash.domain.dto.GetUserDto
import com.example.lash.domain.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
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

    @Transactional(readOnly = true)
    fun getUser(idx: String): GetUserDto {
        return userRepository.findById(idx).map {
            GetUserDto(it)
        }.orElseThrow()
    }

    fun updateUser(idx: String, updateUserRequest: UpdateUserRequest) {
        userRepository.findById(idx).map {
            it.userId = updateUserRequest.userId
            it.name = updateUserRequest.name
        }
    }

    fun deleteUser(idx: String) {
        userRepository.findById(idx).map {
            userRepository.delete(it)
        }.orElseThrow()
    }

    fun getUsers(): List<GetUserDto> {
        return userRepository.findAll().map { GetUserDto(it) }
    }

}