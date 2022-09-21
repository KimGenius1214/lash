package com.example.lash.domain.service

import com.example.lash.application.request.CreateUserRequest
import com.example.lash.application.request.UpdateUserRequest
import com.example.lash.domain.User
import com.example.lash.domain.dto.GetUserDto
import com.example.lash.domain.repository.UserRepository
import org.springframework.data.domain.AbstractPageRequest
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import javax.persistence.EntityManager

@Service
class UserService(
    private val userRepository: UserRepository,
    private val entityManager: EntityManager,
) : BaseService<User, Long>(User::class, entityManager) {

    fun createUser(createUserRequest: CreateUserRequest) {
        val user = createUserRequest.toUser()
        userRepository.save(user)
    }

    @Transactional(readOnly = true)
    fun getUser(id: Long): GetUserDto {
        return userRepository.findById(id).map {
            GetUserDto(it)
        }.orElseThrow()
    }

    fun updateUser(id: Long, updateUserRequest: UpdateUserRequest){
        userRepository.findById(id).map{
            it.userId = updateUserRequest.userId
            it.name = updateUserRequest.name
        }
    }

    fun deleteUser(id: Long){
        userRepository.findById(id).map{
            userRepository.delete(it)
        }.orElseThrow()
    }

//    fun getUsers(userId: String, pageRequest: Pageable): Page<GetUserDto>{
//        return userRepository.findByUserId(userId).map{
//            GetUserDto(it)
//        }
//    }

}