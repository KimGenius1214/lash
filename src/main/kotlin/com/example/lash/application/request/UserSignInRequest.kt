package com.example.lash.application.request

import lombok.Data

@Data
class UserSignInRequest {
    val userId: String? = null
    val userPw: String? = null
}