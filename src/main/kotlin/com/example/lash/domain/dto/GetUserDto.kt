package com.example.lash.domain.dto

import com.example.lash.domain.User

class GetUserDto(user: User) {
    val userId = user.userId
    val name = user.name
    val email = user.userEmail
    val phoneNo = user.userPhoneNo
}

