package com.example.lash.application.request

import org.jetbrains.annotations.NotNull

class UpdateUserRequest (
    @field:NotNull
    val idx: String,
    @field:NotNull
    val userId: String,
    @field:NotNull
    val name: String,
        ){
}