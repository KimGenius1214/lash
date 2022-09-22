package com.example.lash.domain.dto

import com.example.lash.domain.entity.User

data class GetUserDto(val user: User) {
    val userId = user.userId
    val name = user.name
    val email = user.email
    val hp = user.hp
}

