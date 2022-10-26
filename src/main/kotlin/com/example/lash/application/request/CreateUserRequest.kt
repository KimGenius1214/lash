package com.example.lash.application.request

import com.example.lash.domain.entity.User
import org.jetbrains.annotations.NotNull

class CreateUserRequest (
    @field:NotNull
    val idx : String,
    @field:NotNull
    val userId : String,
    @field:NotNull
    val name: String,
        ){
    fun toUser(): User {
        return User(
            idx = idx,
            userId = userId,
            name = name,
        )
    }
}