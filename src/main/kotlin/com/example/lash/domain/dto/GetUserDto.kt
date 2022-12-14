package com.example.lash.domain.dto

import com.example.lash.domain.entity.User

class GetUserDto(user: User) {
    val idx = user.idx
    val userId = user.userId
    val name = user.name
    val email = user.email
    val hp = user.hp
}
