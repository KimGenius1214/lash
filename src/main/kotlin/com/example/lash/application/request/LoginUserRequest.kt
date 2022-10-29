package com.example.lash.application.request

import org.jetbrains.annotations.NotNull

class LoginUserRequest (
    @field:NotNull
    val userId : String,
    @field:NotNull
    val userPw: String,
        ){
}