package com.example.lash.application.request

import com.example.lash.domain.User
import org.jetbrains.annotations.NotNull

class CreateUserRequest (
    @field:NotNull
    val userId: String,
    @field:NotNull
    val name: String,
        ){
    fun toUser(): User{
        return User(
            userId = userId,
            name = name,
        )
    }
}