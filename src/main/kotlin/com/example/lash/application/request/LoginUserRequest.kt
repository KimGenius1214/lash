package com.example.lash.application.request

import lombok.Data
import org.jetbrains.annotations.NotNull

@Data
class LoginUserRequest (
    @field:NotNull
    val userId : String
        ){
}